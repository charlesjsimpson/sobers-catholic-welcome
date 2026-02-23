import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import EmissionEtienneDeVarax from "./pages/EmissionEtienneDeVarax";
import EmissionGaelLeiblang from "./pages/EmissionGaelLeiblang";
import EmissionMathiasMlekuz from "./pages/EmissionMathiasMlekuz";
import ToutesLesEmissions from "./pages/ToutesLesEmissions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-etienne-de-varax-assistant-funeraire" element={<EmissionEtienneDeVarax />} />
          <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal" element={<EmissionGaelLeiblang />} />
          <Route path="/ressources/emissions/dialogue-sur-la-mort-avec-mathias-mlekuz-acteur-et-realisateur-du-film-a-bicyclette" element={<EmissionMathiasMlekuz />} />
          <Route path="/ressources/emissions" element={<ToutesLesEmissions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
