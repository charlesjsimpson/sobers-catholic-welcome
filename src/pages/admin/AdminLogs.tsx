import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Search } from "lucide-react";

export default function AdminLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filterAction, setFilterAction] = useState("all");

  const fetch = async () => {
    let q = supabase.from("activity_logs").select("*").order("created_at", { ascending: false }).limit(200);
    if (search) q = q.or(`user_email.ilike.%${search}%,entity_title.ilike.%${search}%`);
    if (filterAction !== "all") q = q.ilike("action", `%${filterAction}%`);
    const { data } = await q;
    setLogs(data || []);
  };

  useEffect(() => { fetch(); }, [search, filterAction]);

  const exportCsv = () => {
    const header = "Date,Utilisateur,Action,Élément\n";
    const rows = logs.map(l => `${l.created_at},${l.user_email},${l.action},${l.entity_title || ""}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "logs.csv"; a.click();
  };

  return (
    <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Logs d'activité</h2>
        <Button variant="outline" size="sm" onClick={exportCsv}><Download className="h-4 w-4 mr-1" />Export CSV</Button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="border rounded-md px-3 text-sm bg-background text-foreground" value={filterAction} onChange={e => setFilterAction(e.target.value)}>
          <option value="all">Toutes les actions</option>
          <option value="Création">Création</option><option value="Modification">Modification</option><option value="Suppression">Suppression</option>
          <option value="Connexion">Connexion</option>
        </select>
      </div>

      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Date</TableHead><TableHead>Utilisateur</TableHead><TableHead>Action</TableHead>
            <TableHead>Élément</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {logs.map(l => (
              <TableRow key={l.id}>
                <TableCell className="text-xs text-muted-foreground whitespace-nowrap">{new Date(l.created_at).toLocaleString("fr-FR")}</TableCell>
                <TableCell className="text-sm">{l.user_email || "—"}</TableCell>
                <TableCell className="text-sm">{l.action}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{l.entity_title || l.entity_type || "—"}</TableCell>
              </TableRow>
            ))}
            {logs.length === 0 && <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">Aucun log</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
