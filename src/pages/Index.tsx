import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Actualites from "@/components/Actualites";
import ParcoursObseques from "@/components/ParcoursObseques";
import Demarches from "@/components/Demarches";
import CtaEspritChretien from "@/components/CtaEspritChretien";
import VousEtes from "@/components/VousEtes";
import Temoignages from "@/components/Temoignages";
import Ressources from "@/components/Ressources";
import LivresChristian from "@/components/LivresChristian";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Actualites />
        <ParcoursObseques />
        <Demarches />
        <CtaEspritChretien />
        <VousEtes />
        <Temoignages />
        <Ressources />
        <LivresChristian />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
