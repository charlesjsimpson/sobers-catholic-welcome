import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Actualites from "@/components/Actualites";
import Difference from "@/components/Difference";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Actualites />
        <Difference />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
