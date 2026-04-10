import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cheminDeCroixImg from "@/assets/chemin-de-croix-bordeaux.webp";

const ActualiteVendrediSaint = () => {
  useEffect(() => {
    document.title = "Vendredi Saint : les assistants funéraires au Chemin de Croix – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Les assistants funéraires du SCF de Bordeaux ont participé au Chemin de Croix du centre-ville pour le Vendredi Saint 2026.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/ressources/actualites"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-6 h-6 text-primary-foreground/70" />
              <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Actualité — Bordeaux</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight">
              Vendredi Saint : les assistants funéraires<br />au Chemin de Croix
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-justify">
              Les assistants funéraires du Service Catholique des Funérailles de Bordeaux ont participé au Chemin de Croix du centre-ville à l'occasion du Vendredi Saint 2026.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="py-10">
          <div className="container mx-auto px-6 max-w-3xl">
            <img
              src={cheminDeCroixImg}
              alt="Chemin de Croix dans le centre-ville de Bordeaux — Vendredi Saint 2026"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Contenu */}
        <section className="pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-muted-foreground text-sm mb-6">09 avril 2026</div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <p className="text-justify">
                Comme les années précédentes pour le Vendredi Saint, les trois assistants funéraires du Service Catholique des Funérailles de Bordeaux, Marie, Éric et Benoît ont participé au Chemin de Croix du centre-ville.
              </p>
              <p className="text-justify">
                Nous avons été particulièrement sensibles à une intention de prières lue devant le portail occidental de la cathédrale Saint-André lors de la dernière station de cette pérégrination populaire&nbsp;:
              </p>
              <blockquote className="border-l-4 border-primary/40 pl-6 italic text-muted-foreground my-6">
                «&nbsp;Seigneur, toi qui as été l'objet de la miséricorde de Joseph d'Arimathie et des saintes femmes, nous te prions de bénir ceux qui prennent soin des morts et de nous donner de ne jamais oublier de prier pour nos chers défunts.&nbsp;»
              </blockquote>
            </div>

            <hr className="my-10 border-border" />

            {/* Voir aussi */}
            <div>
              <h2 className="font-display text-xl mb-4 text-foreground">Voir aussi</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/ressources/actualites" className="text-primary hover:underline">
                    Toutes les actualités & articles
                  </Link>
                </li>
                <li>
                  <Link to="/ressources/prieres" className="text-primary hover:underline">
                    Prières pour un défunt
                  </Link>
                </li>
                <li>
                  <Link to="/ressources/emissions" className="text-primary hover:underline">
                    Émissions « Dialogue sur la mort »
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ActualiteVendrediSaint;
