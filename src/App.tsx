import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import EmissionEtienneDeVarax from "./pages/EmissionEtienneDeVarax";
import EmissionGaelLeiblang from "./pages/EmissionGaelLeiblang";
import EmissionMathiasMlekuz from "./pages/EmissionMathiasMlekuz";
import ToutesLesEmissions from "./pages/ToutesLesEmissions";
import ContacterUneAgence from "./pages/ContacterUneAgence";
import OrganiserDesObseques from "./pages/OrganiserDesObseques";
import Prevoyance from "./pages/Prevoyance";
import AgenceNice from "./pages/AgenceNice";
import AgenceParis15 from "./pages/AgenceParis15";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPages from "./pages/admin/AdminPages";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminAgences from "./pages/admin/AdminAgences";
import AdminMedias from "./pages/admin/AdminMedias";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminLogs from "./pages/admin/AdminLogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-etienne-de-varax-assistant-funeraire" element={<EmissionEtienneDeVarax />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal" element={<EmissionGaelLeiblang />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-mathias-mlekuz-acteur-et-realisateur-du-film-a-bicyclette" element={<EmissionMathiasMlekuz />} />
            <Route path="/ressources/emissions" element={<ToutesLesEmissions />} />
            <Route path="/contacter-une-agence" element={<ContacterUneAgence />} />
            <Route path="/organiser-des-obseques" element={<OrganiserDesObseques />} />
            <Route path="/agences/nice" element={<AgenceNice />} />
            <Route path="/agences/paris-15" element={<AgenceParis15 />} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="pages" element={<AdminPages />} />
              <Route path="articles" element={<AdminArticles />} />
              <Route path="agences" element={<AdminAgences />} />
              <Route path="medias" element={<AdminMedias />} />
              <Route path="utilisateurs" element={<AdminUsers />} />
              <Route path="logs" element={<AdminLogs />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
