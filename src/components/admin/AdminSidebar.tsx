import {
  LayoutDashboard, FileText, Newspaper, Building2, Image, Users, ScrollText, Settings, LogOut
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import logoScf from "@/assets/logo-scf-blanc.png";

const navItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard, minRole: "viewer" as const },
  { title: "Pages", url: "/admin/pages", icon: FileText, minRole: "viewer" as const },
  { title: "Articles", url: "/admin/articles", icon: Newspaper, minRole: "viewer" as const },
  { title: "Agences", url: "/admin/agences", icon: Building2, minRole: "viewer" as const },
  { title: "Médias", url: "/admin/medias", icon: Image, minRole: "viewer" as const },
  { title: "Utilisateurs", url: "/admin/utilisateurs", icon: Users, minRole: "super_admin" as const },
  { title: "Logs", url: "/admin/logs", icon: ScrollText, minRole: "admin" as const },
];

const roleHierarchy = { super_admin: 4, admin: 3, editor: 2, viewer: 1 };

export function AdminSidebar() {
  const { role, profile, signOut } = useAuth();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const canAccess = (minRole: string) => {
    if (!role) return false;
    return (roleHierarchy[role] || 0) >= (roleHierarchy[minRole as keyof typeof roleHierarchy] || 0);
  };

  const roleLabels: Record<string, string> = {
    super_admin: "Super Admin",
    admin: "Admin",
    editor: "Éditeur",
    viewer: "Lecteur",
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-[hsl(var(--scf-blue-dark))]">
      <SidebarContent className="bg-[hsl(201,50%,25%)]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 px-4 py-6">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <img src={logoScf} alt="SCF" className="h-8" />
                <span className="text-sm font-medium text-white">Administration</span>
              </div>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.filter(item => canAccess(item.minRole)).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="text-white/80 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md flex items-center gap-3"
                      activeClassName="bg-white/20 text-white"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[hsl(201,50%,20%)] border-t border-white/10 p-4">
        {!collapsed && (
          <div className="mb-3">
            <p className="text-white/60 text-xs truncate">{profile?.email}</p>
            <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full mt-1 inline-block">
              {roleLabels[role || "viewer"]}
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="w-full text-white/70 hover:text-white hover:bg-white/10 justify-start gap-2"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && "Déconnexion"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
