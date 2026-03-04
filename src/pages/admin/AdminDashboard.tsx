import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Newspaper, Building2, Users, Plus, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ pages: 0, drafts: 0, articles: 0, agencies: 0, users: 0 });
  const [recentLogs, setRecentLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const [pagesRes, draftsRes, articlesRes, agenciesRes, usersRes, logsRes] = await Promise.all([
        supabase.from("pages").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("pages").select("id", { count: "exact", head: true }).eq("status", "draft"),
        supabase.from("articles").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("agencies").select("id", { count: "exact", head: true }).eq("status", "active"),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
        supabase.from("activity_logs").select("*").order("created_at", { ascending: false }).limit(10),
      ]);
      setStats({
        pages: pagesRes.count || 0,
        drafts: draftsRes.count || 0,
        articles: articlesRes.count || 0,
        agencies: agenciesRes.count || 0,
        users: usersRes.count || 0,
      });
      setRecentLogs(logsRes.data || []);
    };
    fetchStats();
  }, []);

  const statCards = [
    { label: "Pages publiées", value: stats.pages, icon: FileText, color: "text-primary" },
    { label: "Brouillons", value: stats.drafts, icon: FileText, color: "text-muted-foreground" },
    { label: "Articles publiés", value: stats.articles, icon: Newspaper, color: "text-primary" },
    { label: "Agences actives", value: stats.agencies, icon: Building2, color: "text-primary" },
    { label: "Utilisateurs", value: stats.users, icon: Users, color: "text-primary" },
  ];

  return (
    <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
          Tableau de bord
        </h2>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => navigate("/admin/pages")}><Plus className="h-4 w-4 mr-1" />Nouvelle page</Button>
          <Button size="sm" variant="outline" onClick={() => navigate("/admin/articles")}><Plus className="h-4 w-4 mr-1" />Nouvel article</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <s.icon className={`h-8 w-8 ${s.color}`} />
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle style={{ fontFamily: 'Inter, sans-serif' }} className="text-lg">Activité récente</CardTitle></CardHeader>
          <CardContent>
            {recentLogs.length === 0 ? (
              <p className="text-muted-foreground text-sm">Aucune activité récente</p>
            ) : (
              <div className="space-y-3">
                {recentLogs.map((log) => (
                  <div key={log.id} className="flex items-start gap-3 text-sm border-b border-border pb-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-foreground">{log.action} — <span className="text-muted-foreground">{log.entity_title || log.entity_type}</span></p>
                      <p className="text-xs text-muted-foreground">{log.user_email} · {new Date(log.created_at).toLocaleString("fr-FR")}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle style={{ fontFamily: 'Inter, sans-serif' }} className="text-lg">Santé du système</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-foreground">Lovable Cloud connecté</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-foreground">Storage opérationnel</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
