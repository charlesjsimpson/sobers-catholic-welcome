import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type Page = {
  id: string;
  title: string;
  slug: string;
  status: string;
  updated_at: string;
  author_id: string | null;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
};

function slugify(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function AdminPages() {
  const { user, role } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [editPage, setEditPage] = useState<Partial<Page> | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const canEdit = role && ["super_admin", "admin", "editor"].includes(role);
  const canDelete = role && ["super_admin", "admin"].includes(role);

  const fetchPages = async () => {
    let query = supabase.from("pages").select("*").is("deleted_at", null).order("updated_at", { ascending: false });
    if (filterStatus !== "all") query = query.eq("status", filterStatus);
    if (search) query = query.ilike("title", `%${search}%`);
    const { data } = await query;
    setPages(data || []);
  };

  useEffect(() => { fetchPages(); }, [search, filterStatus]);

  const savePage = async () => {
    if (!editPage?.title) return;
    const slug = editPage.slug || slugify(editPage.title);
    if (editPage.id) {
      await supabase.from("pages").update({
        title: editPage.title, slug, content: editPage.content || "",
        status: editPage.status || "draft", meta_title: editPage.meta_title, meta_description: editPage.meta_description,
      }).eq("id", editPage.id);
    } else {
      await supabase.from("pages").insert({
        title: editPage.title, slug, content: editPage.content || "",
        status: editPage.status || "draft", author_id: user?.id,
        meta_title: editPage.meta_title, meta_description: editPage.meta_description,
      });
    }
    await supabase.from("activity_logs").insert({
      user_id: user?.id, user_email: user?.email,
      action: editPage.id ? "Modification page" : "Création page",
      entity_type: "page", entity_title: editPage.title,
    });
    setDialogOpen(false);
    setEditPage(null);
    fetchPages();
  };

  const deletePage = async (page: Page) => {
    if (!confirm(`Supprimer "${page.title}" ?`)) return;
    await supabase.from("pages").update({ deleted_at: new Date().toISOString() }).eq("id", page.id);
    await supabase.from("activity_logs").insert({
      user_id: user?.id, user_email: user?.email,
      action: "Suppression page", entity_type: "page", entity_title: page.title,
    });
    fetchPages();
  };

  const statusBadge = (s: string) => {
    const colors: Record<string, string> = { published: "bg-green-100 text-green-800", draft: "bg-yellow-100 text-yellow-800", archived: "bg-gray-100 text-gray-600" };
    const labels: Record<string, string> = { published: "Publié", draft: "Brouillon", archived: "Archivé" };
    return <span className={`px-2 py-0.5 rounded-full text-xs ${colors[s] || ""}`}>{labels[s] || s}</span>;
  };

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Pages</h2>
        {canEdit && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => setEditPage({})}><Plus className="h-4 w-4 mr-1" />Nouvelle page</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader><DialogTitle style={{ fontFamily: 'Inter, sans-serif' }}>{editPage?.id ? "Modifier" : "Nouvelle"} page</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Titre</label>
                  <Input value={editPage?.title || ""} onChange={e => setEditPage(p => ({ ...p, title: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium">Slug</label>
                  <Input value={editPage?.slug || slugify(editPage?.title || "")} onChange={e => setEditPage(p => ({ ...p, slug: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium">Contenu</label>
                  <Textarea rows={10} value={editPage?.content || ""} onChange={e => setEditPage(p => ({ ...p, content: e.target.value }))} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Meta Title</label>
                    <Input value={editPage?.meta_title || ""} onChange={e => setEditPage(p => ({ ...p, meta_title: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Meta Description</label>
                    <Input value={editPage?.meta_description || ""} onChange={e => setEditPage(p => ({ ...p, meta_description: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Statut</label>
                  <select className="w-full border rounded-md p-2 text-sm bg-background text-foreground"
                    value={editPage?.status || "draft"}
                    onChange={e => setEditPage(p => ({ ...p, status: e.target.value }))}>
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                    <option value="archived">Archivé</option>
                  </select>
                </div>
                <Button onClick={savePage} className="w-full">Enregistrer</Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="border rounded-md px-3 text-sm bg-background text-foreground"
          value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">Tous les statuts</option>
          <option value="published">Publié</option>
          <option value="draft">Brouillon</option>
          <option value="archived">Archivé</option>
        </select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Modifié</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map(page => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell className="text-muted-foreground text-xs">/{page.slug}</TableCell>
                  <TableCell>{statusBadge(page.status)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{new Date(page.updated_at).toLocaleDateString("fr-FR")}</TableCell>
                  <TableCell className="text-right space-x-1">
                    {canEdit && (
                      <Button variant="ghost" size="icon" onClick={() => { setEditPage(page); setDialogOpen(true); }}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                    {canDelete && (
                      <Button variant="ghost" size="icon" onClick={() => deletePage(page)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {pages.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Aucune page</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
