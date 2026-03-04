import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Trash2, Copy, Grid, List, Search } from "lucide-react";
import { toast } from "sonner";

type MediaFile = {
  name: string;
  id: string;
  created_at: string;
  metadata: { mimetype?: string; size?: number } | null;
};

export default function AdminMedias() {
  const { role } = useAuth();
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);

  const canDelete = role && ["super_admin", "admin"].includes(role);

  const fetchFiles = async () => {
    const { data } = await supabase.storage.from("media").list("", { limit: 200, sortBy: { column: "created_at", order: "desc" } });
    setFiles((data || []).filter(f => f.name !== ".emptyFolderPlaceholder") as MediaFile[]);
  };

  useEffect(() => { fetchFiles(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList?.length) return;
    setUploading(true);
    for (const file of Array.from(fileList)) {
      const fileName = `${Date.now()}-${file.name}`;
      await supabase.storage.from("media").upload(fileName, file);
    }
    setUploading(false);
    fetchFiles();
    toast.success("Fichier(s) uploadé(s)");
  };

  const getPublicUrl = (name: string) => {
    const { data } = supabase.storage.from("media").getPublicUrl(name);
    return data.publicUrl;
  };

  const copyUrl = (name: string) => {
    navigator.clipboard.writeText(getPublicUrl(name));
    toast.success("URL copiée");
  };

  const deleteFile = async (name: string) => {
    if (!confirm("Supprimer ce fichier ?")) return;
    await supabase.storage.from("media").remove([name]);
    fetchFiles();
    toast.success("Fichier supprimé");
  };

  const isImage = (name: string) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(name);

  const filtered = files.filter(f => !search || f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Médiathèque</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
            {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          <label>
            <Button size="sm" asChild disabled={uploading}>
              <span><Upload className="h-4 w-4 mr-1" />{uploading ? "Upload..." : "Uploader"}</span>
            </Button>
            <input type="file" multiple className="hidden" onChange={handleUpload} accept="image/*,.pdf,.svg" />
          </label>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Rechercher un fichier..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map(f => (
            <Card key={f.id} className="overflow-hidden group relative">
              <div className="aspect-square bg-muted flex items-center justify-center">
                {isImage(f.name) ? (
                  <img src={getPublicUrl(f.name)} alt={f.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-muted-foreground uppercase">{f.name.split(".").pop()}</span>
                )}
              </div>
              <CardContent className="p-2">
                <p className="text-xs text-foreground truncate">{f.name}</p>
                <div className="flex gap-1 mt-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyUrl(f.name)}><Copy className="h-3 w-3" /></Button>
                  {canDelete && <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => deleteFile(f.name)}><Trash2 className="h-3 w-3 text-destructive" /></Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card><CardContent className="p-0">
          <div className="divide-y">
            {filtered.map(f => (
              <div key={f.id} className="flex items-center justify-between p-3 hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  {isImage(f.name) && <img src={getPublicUrl(f.name)} alt="" className="h-10 w-10 rounded object-cover" />}
                  <span className="text-sm text-foreground">{f.name}</span>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => copyUrl(f.name)}><Copy className="h-4 w-4" /></Button>
                  {canDelete && <Button variant="ghost" size="icon" onClick={() => deleteFile(f.name)}><Trash2 className="h-4 w-4 text-destructive" /></Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent></Card>
      )}

      {filtered.length === 0 && <p className="text-center text-muted-foreground py-8">Aucun fichier</p>}
    </div>
  );
}
