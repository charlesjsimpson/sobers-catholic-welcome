import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type Article = {
  id: string; title: string; slug: string; status: string; category: string;
  tags: string[] | null; reading_time: number | null; updated_at: string;
  content: string | null; excerpt: string | null; featured_image: string | null;
  meta_title: string | null; meta_description: string | null; author_id: string | null;
};

function slugify(t: string) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function estimateReadingTime(text: string) {
  return Math.max(1, Math.ceil((text || "").split(/\s+/).length / 200));
}

const categories = [
  { value: "actualite", label: "Actualité" }, { value: "emission", label: "Émission" },
  { value: "video", label: "Vidéo" }, { value: "livre", label: "Livre" },
  { value: "priere", label: "Prière" }, { value: "ressource", label: "Ressource" },
];

export default function AdminArticles() {
  const { user, role } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [edit, setEdit] = useState<Partial<Article> | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const canEdit = role && ["super_admin", "admin", "editor"].includes(role);
  const canDelete = role && ["super_admin", "admin"].includes(role);

  const fetch = async () => {
    let q = supabase.from("articles").select("*").is("deleted_at", null).order("updated_at", { ascending: false });
    if (filterStatus !== "all") q = q.eq("status", filterStatus);
    if (search) q = q.ilike("title", `%${search}%`);
    const { data } = await q;
    setArticles(data || []);
  };

  useEffect(() => { fetch(); }, [search, filterStatus]);

  const save = async () => {
    if (!edit?.title) return;
    const slug = edit.slug || slugify(edit.title);
    const reading_time = estimateReadingTime(edit.content || "");
    const payload = {
      title: edit.title, slug, content: edit.content || "", excerpt: edit.excerpt,
      category: edit.category || "actualite", tags: edit.tags || [],
      reading_time, status: edit.status || "draft", featured_image: edit.featured_image,
      meta_title: edit.meta_title, meta_description: edit.meta_description,
    };
    if (edit.id) {
      await supabase.from("articles").update(payload).eq("id", edit.id);
    } else {
      await supabase.from("articles").insert({ ...payload, author_id: user?.id });
    }
    await supabase.from("activity_logs").insert({
      user_id: user?.id, user_email: user?.email,
      action: edit.id ? "Modification article" : "Création article",
      entity_type: "article", entity_title: edit.title,
    });
    setDialogOpen(false); setEdit(null); fetch();
  };

  const remove = async (a: Article) => {
    if (!confirm(`Supprimer "${a.title}" ?`)) return;
    await supabase.from("articles").update({ deleted_at: new Date().toISOString() }).eq("id", a.id);
    fetch();
  };

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Articles</h2>
        {canEdit && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => setEdit({})}><Plus className="h-4 w-4 mr-1" />Nouvel article</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader><DialogTitle style={{ fontFamily: 'Inter, sans-serif' }}>{edit?.id ? "Modifier" : "Nouvel"} article</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div><label className="text-sm font-medium">Titre</label>
                  <Input value={edit?.title || ""} onChange={e => setEdit(p => ({ ...p, title: e.target.value }))} /></div>
                <div><label className="text-sm font-medium">Slug</label>
                  <Input value={edit?.slug || slugify(edit?.title || "")} onChange={e => setEdit(p => ({ ...p, slug: e.target.value }))} /></div>
                <div><label className="text-sm font-medium">Catégorie</label>
                  <select className="w-full border rounded-md p-2 text-sm bg-background text-foreground"
                    value={edit?.category || "actualite"} onChange={e => setEdit(p => ({ ...p, category: e.target.value }))}>
                    {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select></div>
                <div><label className="text-sm font-medium">Extrait</label>
                  <Textarea rows={3} value={edit?.excerpt || ""} onChange={e => setEdit(p => ({ ...p, excerpt: e.target.value }))} /></div>
                <div><label className="text-sm font-medium">Contenu</label>
                  <Textarea rows={10} value={edit?.content || ""} onChange={e => setEdit(p => ({ ...p, content: e.target.value }))} /></div>
                <div><label className="text-sm font-medium">Tags (séparés par des virgules)</label>
                  <Input value={(edit?.tags || []).join(", ")} onChange={e => setEdit(p => ({ ...p, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean) }))} /></div>
                <div><label className="text-sm font-medium">Image à la une (URL)</label>
                  <Input value={edit?.featured_image || ""} onChange={e => setEdit(p => ({ ...p, featured_image: e.target.value }))} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium">Meta Title</label>
                    <Input value={edit?.meta_title || ""} onChange={e => setEdit(p => ({ ...p, meta_title: e.target.value }))} /></div>
                  <div><label className="text-sm font-medium">Meta Description</label>
                    <Input value={edit?.meta_description || ""} onChange={e => setEdit(p => ({ ...p, meta_description: e.target.value }))} /></div>
                </div>
                <div><label className="text-sm font-medium">Statut</label>
                  <select className="w-full border rounded-md p-2 text-sm bg-background text-foreground"
                    value={edit?.status || "draft"} onChange={e => setEdit(p => ({ ...p, status: e.target.value }))}>
                    <option value="draft">Brouillon</option><option value="published">Publié</option><option value="archived">Archivé</option>
                  </select></div>
                <Button onClick={save} className="w-full">Enregistrer</Button>
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
        <select className="border rounded-md px-3 text-sm bg-background text-foreground" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">Tous</option><option value="published">Publié</option><option value="draft">Brouillon</option>
        </select>
      </div>

      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Titre</TableHead><TableHead>Catégorie</TableHead><TableHead>Statut</TableHead>
            <TableHead>Lecture</TableHead><TableHead>Modifié</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {articles.map(a => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.title}</TableCell>
                <TableCell><span className="text-xs bg-secondary px-2 py-0.5 rounded">{categories.find(c => c.value === a.category)?.label}</span></TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs ${a.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                  {a.status === "published" ? "Publié" : "Brouillon"}</span></TableCell>
                <TableCell className="text-xs text-muted-foreground">{a.reading_time || "—"} min</TableCell>
                <TableCell className="text-xs text-muted-foreground">{new Date(a.updated_at).toLocaleDateString("fr-FR")}</TableCell>
                <TableCell className="text-right space-x-1">
                  {canEdit && <Button variant="ghost" size="icon" onClick={() => { setEdit(a); setDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>}
                  {canDelete && <Button variant="ghost" size="icon" onClick={() => remove(a)}><Trash2 className="h-4 w-4 text-destructive" /></Button>}
                </TableCell>
              </TableRow>
            ))}
            {articles.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Aucun article</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
