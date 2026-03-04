import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Agency = {
  id: string; name: string; city: string; address: string | null; region: string | null;
  phone: string | null; email: string | null; hours: string | null; status: string;
  latitude: number | null; longitude: number | null; display_order: number;
};

export default function AdminAgences() {
  const { user, role } = useAuth();
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [edit, setEdit] = useState<Partial<Agency> | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const canManage = role && ["super_admin", "admin"].includes(role);

  const fetch = async () => {
    const { data } = await supabase.from("agencies").select("*").order("display_order");
    setAgencies(data || []);
  };

  useEffect(() => { fetch(); }, []);

  const save = async () => {
    if (!edit?.name || !edit?.city) return;
    const payload = {
      name: edit.name, city: edit.city, address: edit.address, region: edit.region,
      phone: edit.phone, email: edit.email, hours: edit.hours, status: edit.status || "active",
      latitude: edit.latitude, longitude: edit.longitude, display_order: edit.display_order || 0,
    };
    if (edit.id) {
      await supabase.from("agencies").update(payload).eq("id", edit.id);
    } else {
      await supabase.from("agencies").insert(payload);
    }
    await supabase.from("activity_logs").insert({
      user_id: user?.id, user_email: user?.email,
      action: edit.id ? "Modification agence" : "Création agence",
      entity_type: "agency", entity_title: edit.name,
    });
    setDialogOpen(false); setEdit(null); fetch();
  };

  const remove = async (a: Agency) => {
    if (!confirm(`Supprimer "${a.name}" ?`)) return;
    await supabase.from("agencies").delete().eq("id", a.id);
    fetch();
  };

  const statusLabels: Record<string, string> = { active: "Active", temporarily_closed: "Fermée temporairement", under_renovation: "En travaux" };

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Agences</h2>
        {canManage && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => setEdit({})}><Plus className="h-4 w-4 mr-1" />Nouvelle agence</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader><DialogTitle style={{ fontFamily: 'Inter, sans-serif' }}>{edit?.id ? "Modifier" : "Nouvelle"} agence</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium">Nom</label><Input value={edit?.name || ""} onChange={e => setEdit(p => ({ ...p, name: e.target.value }))} /></div>
                  <div><label className="text-sm font-medium">Ville</label><Input value={edit?.city || ""} onChange={e => setEdit(p => ({ ...p, city: e.target.value }))} /></div>
                </div>
                <div><label className="text-sm font-medium">Adresse</label><Input value={edit?.address || ""} onChange={e => setEdit(p => ({ ...p, address: e.target.value }))} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium">Région</label><Input value={edit?.region || ""} onChange={e => setEdit(p => ({ ...p, region: e.target.value }))} /></div>
                  <div><label className="text-sm font-medium">Téléphone</label><Input value={edit?.phone || ""} onChange={e => setEdit(p => ({ ...p, phone: e.target.value }))} /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium">Email</label><Input value={edit?.email || ""} onChange={e => setEdit(p => ({ ...p, email: e.target.value }))} /></div>
                  <div><label className="text-sm font-medium">Horaires</label><Input value={edit?.hours || ""} onChange={e => setEdit(p => ({ ...p, hours: e.target.value }))} /></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div><label className="text-sm font-medium">Latitude</label><Input type="number" step="any" value={edit?.latitude || ""} onChange={e => setEdit(p => ({ ...p, latitude: parseFloat(e.target.value) }))} /></div>
                  <div><label className="text-sm font-medium">Longitude</label><Input type="number" step="any" value={edit?.longitude || ""} onChange={e => setEdit(p => ({ ...p, longitude: parseFloat(e.target.value) }))} /></div>
                  <div><label className="text-sm font-medium">Ordre</label><Input type="number" value={edit?.display_order || 0} onChange={e => setEdit(p => ({ ...p, display_order: parseInt(e.target.value) }))} /></div>
                </div>
                <div><label className="text-sm font-medium">Statut</label>
                  <select className="w-full border rounded-md p-2 text-sm bg-background text-foreground" value={edit?.status || "active"} onChange={e => setEdit(p => ({ ...p, status: e.target.value }))}>
                    <option value="active">Active</option><option value="temporarily_closed">Fermée temporairement</option><option value="under_renovation">En travaux</option>
                  </select></div>
                <Button onClick={save} className="w-full">Enregistrer</Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Nom</TableHead><TableHead>Ville</TableHead><TableHead>Téléphone</TableHead>
            <TableHead>Statut</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {agencies.map(a => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.name}</TableCell>
                <TableCell>{a.city}</TableCell>
                <TableCell className="text-sm">{a.phone || "—"}</TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs ${a.status === "active" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>
                  {statusLabels[a.status]}</span></TableCell>
                <TableCell className="text-right space-x-1">
                  {canManage && <Button variant="ghost" size="icon" onClick={() => { setEdit(a); setDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>}
                  {canManage && <Button variant="ghost" size="icon" onClick={() => remove(a)}><Trash2 className="h-4 w-4 text-destructive" /></Button>}
                </TableCell>
              </TableRow>
            ))}
            {agencies.length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Aucune agence</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
