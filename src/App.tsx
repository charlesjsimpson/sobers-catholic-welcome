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
import EmissionPhilippeBaudasse from "./pages/EmissionPhilippeBaudasse";
import EmissionEmmaJoux from "./pages/EmissionEmmaJoux";
import EmissionCatherineBossaert from "./pages/EmissionCatherineBossaert";
import EmissionMarieToutCourt from "./pages/EmissionMarieToutCourt";
import EmissionThomasHugDeLarauze from "./pages/EmissionThomasHugDeLarauze";
import EmissionHeleneRisser from "./pages/EmissionHeleneRisser";
import EmissionElisabethSchmitt from "./pages/EmissionElisabethSchmitt";
import EmissionLaurentFremont from "./pages/EmissionLaurentFremont";
import EmissionYvonneSand from "./pages/EmissionYvonneSand";
import EmissionGregoireLecalot from "./pages/EmissionGregoireLecalot";
import EmissionSandraMeunier from "./pages/EmissionSandraMeunier";
import EmissionSuzanneTartiere from "./pages/EmissionSuzanneTartiere";
import EmissionTanguyChatel from "./pages/EmissionTanguyChatel";
import EmissionMarionWaller from "./pages/EmissionMarionWaller";
import EmissionJulietteCazes from "./pages/EmissionJulietteCazes";
import EmissionAlixDeBonnieres from "./pages/EmissionAlixDeBonnieres";
import EmissionElenVuidard from "./pages/EmissionElenVuidard";
import EmissionPascalDupont from "./pages/EmissionPascalDupont";
import EmissionVeroniqueSeite from "./pages/EmissionVeroniqueSeite";
import EmissionPatriciaBlanc from "./pages/EmissionPatriciaBlanc";
import EmissionAnnaNoziere from "./pages/EmissionAnnaNoziere";
import ToutesLesEmissions from "./pages/ToutesLesEmissions";
import ContacterUneAgence from "./pages/ContacterUneAgence";
import OrganiserDesObseques from "./pages/OrganiserDesObseques";
import Prevoyance from "./pages/Prevoyance";
import AgenceNice from "./pages/AgenceNice";
import AgenceParis15 from "./pages/AgenceParis15";
import SessionsSeReconcilierAvecLaMort from "./pages/SessionsSeReconcilierAvecLaMort";
import Livres from "./pages/Livres";
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
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-philippe-baudasse-coach-et-formateur" element={<EmissionPhilippeBaudasse />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-emma-joux-psychologue-clinicienne-a-lap-hp" element={<EmissionEmmaJoux />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-catherine-bossaert-coach-certifiee-accompagnante-au-deuil" element={<EmissionCatherineBossaert />} />
            <Route path="/ressources/emissions/marie-tout-court" element={<EmissionMarieToutCourt />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-thomas-hug-de-larauze-realisateur-du-film-promesse" element={<EmissionThomasHugDeLarauze />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-helene-risser-journaliste-autrice-de-apres-arthaud" element={<EmissionHeleneRisser />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-elisabeth-schmitt-mere-danne-lorraine-schmitt" element={<EmissionElisabethSchmitt />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-laurent-fremont-cofondateur-du-collectif-tenir-ta-main" element={<EmissionLaurentFremont />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-yvonne-sand-responsable-de-chambre-mortuaire" element={<EmissionYvonneSand />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-gregoire-lecalot-journaliste" element={<EmissionGregoireLecalot />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-sandra-meunier-art-therapeute" element={<EmissionSandraMeunier />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-suzanne-tartiere-medecin-anesthesiste-reanimateur" element={<EmissionSuzanneTartiere />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-tanguy-chatel-sociologue" element={<EmissionTanguyChatel />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-marion-waller" element={<EmissionMarionWaller />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-juliette-cazes" element={<EmissionJulietteCazes />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-alix-de-bonnieres" element={<EmissionAlixDeBonnieres />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-elen-vuidard-officier-de-liaison-gendarmerie" element={<EmissionElenVuidard />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-pascal-dupont-aumonier-de-prison" element={<EmissionPascalDupont />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-veronique-seite-comedienne-clown-en-ehpad" element={<EmissionVeroniqueSeite />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-patricia-blanc-presidente-de-lassociation-imagine-for-margo" element={<EmissionPatriciaBlanc />} />
            <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-anna-noziere-fondatrice-dune-troupe-de-theatre-et-scenariste" element={<EmissionAnnaNoziere />} />
            <Route path="/ressources/emissions" element={<ToutesLesEmissions />} />
            <Route path="/contacter-une-agence" element={<ContacterUneAgence />} />
            <Route path="/organiser-des-obseques" element={<OrganiserDesObseques />} />
            <Route path="/services/prevoyance" element={<Prevoyance />} />
            <Route path="/agences/nice" element={<AgenceNice />} />
            <Route path="/agences/paris-15" element={<AgenceParis15 />} />
            <Route path="/ressources/sessions/se-reconcilier-avec-la-mort" element={<SessionsSeReconcilierAvecLaMort />} />
            <Route path="/ressources/livres" element={<Livres />} />

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
