import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, UserX, UserCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import type { Database } from "@/integrations/supabase/types";

type AppRole = Database["public"]["Enums"]["app_role"];
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default function AdminUsers() {
  const { role } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState<AppRole>("viewer");
  const [newPassword, setNewPassword] = useState("");

  const fetchProfiles = async () => {
    const { data } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
    setProfiles(data || []);
  };

  useEffect(() => { fetchProfiles(); }, []);

  if (role !== "super_admin") {
    return <p className="text-muted-foreground py-8 text-center">Accès réservé aux Super Admins.</p>;
  }

  const createUser = async () => {
    if (!newEmail || !newPassword) return;
    const { data, error } = await supabase.auth.signUp({
      email: newEmail, password: newPassword,
      options: { data: { full_name: newName } }
    });
    if (error) { toast.error(error.message); return; }
    if (data.user) {
      await supabase.from("user_roles").insert({ user_id: data.user.id, role: newRole });
      await supabase.from("profiles").update({ role: newRole, full_name: newName }).eq("id", data.user.id);
    }
    toast.success("Utilisateur créé");
    setDialogOpen(false); setNewEmail(""); setNewName(""); setNewPassword(""); setNewRole("viewer");
    fetchProfiles();
  };

  const toggleActive = async (profile: Profile) => {
    await supabase.from("profiles").update({ is_active: !profile.is_active }).eq("id", profile.id);
    fetchProfiles();
  };

  const changeRole = async (profileId: string, r: AppRole) => {
    await supabase.from("user_roles").update({ role: r }).eq("user_id", profileId);
    await supabase.from("profiles").update({ role: r }).eq("id", profileId);
    fetchProfiles();
  };

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Utilisateurs</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" />Nouvel utilisateur</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle style={{ fontFamily: 'Inter, sans-serif' }}>Créer un utilisateur</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div><label className="text-sm font-medium">Email</label><Input value={newEmail} onChange={e => setNewEmail(e.target.value)} /></div>
              <div><label className="text-sm font-medium">Nom</label><Input value={newName} onChange={e => setNewName(e.target.value)} /></div>
              <div><label className="text-sm font-medium">Mot de passe</label><Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} /></div>
              <div><label className="text-sm font-medium">Rôle</label>
                <select className="w-full border rounded-md p-2 text-sm bg-background text-foreground" value={newRole} onChange={e => setNewRole(e.target.value as AppRole)}>
                  <option value="viewer">Lecteur</option><option value="editor">Éditeur</option><option value="admin">Admin</option><option value="super_admin">Super Admin</option>
                </select></div>
              <Button onClick={createUser} className="w-full">Créer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Email</TableHead><TableHead>Nom</TableHead><TableHead>Rôle</TableHead>
            <TableHead>Statut</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {profiles.map(p => (
              <TableRow key={p.id}>
                <TableCell className="text-sm">{p.email}</TableCell>
                <TableCell>{p.full_name || "—"}</TableCell>
                <TableCell>
                  <select className="text-xs border rounded px-2 py-1 bg-background text-foreground"
                    value={p.role} onChange={e => changeRole(p.id, e.target.value as AppRole)}>
                    <option value="viewer">Lecteur</option><option value="editor">Éditeur</option>
                    <option value="admin">Admin</option><option value="super_admin">Super Admin</option>
                  </select>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${p.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {p.is_active ? "Actif" : "Inactif"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => toggleActive(p)}>
                    {p.is_active ? <UserX className="h-4 w-4 text-destructive" /> : <UserCheck className="h-4 w-4" />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
