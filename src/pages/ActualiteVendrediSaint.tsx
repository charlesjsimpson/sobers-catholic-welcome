import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cheminDeCroixImg from "@/assets/chemin-de-croix-bordeaux-v2.webp";

const ActualiteVendrediSaint = () => {
  useEffect(() => {
    document.title = "Vendredi Saint à Bordeaux : nos assistants funéraires au Chemin de Croix";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Le Service Catholique des Funérailles de Bordeaux s'est joint au Chemin de Croix ce Vendredi Saint. Découvrez comment nos assistants funéraires vivent leur foi au quotidien.");
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
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-6 h-6 text-primary-foreground/70" />
                  <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Actualité — Bordeaux</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight">
                  Vendredi Saint à Bordeaux : nos assistants funéraires au Chemin de Croix
                </h1>
                <p className="text-primary-foreground/80 mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-justify">
                  Ce Vendredi Saint 2026, Marie, Éric et Benoît, assistants funéraires du Service Catholique des Funérailles de Bordeaux, ont participé au Chemin de Croix organisé dans le centre-ville. Une démarche de foi qui résonne profondément avec leur mission d'accompagnement des familles en deuil.
                </p>
              </div>
              <img
                src={cheminDeCroixImg}
                alt="Chemin de Croix dans le centre-ville de Bordeaux — Vendredi Saint 2026"
                className="hidden md:block w-40 h-40 lg:w-52 lg:h-52 rounded-2xl object-cover object-bottom shadow-lg border-2 border-primary-foreground/20 shrink-0"
              />
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="pb-16">
          <div className="container mx-auto px-6 max-w-3xl">

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-10">Une tradition ancrée dans la vocation du SCF</h2>
              <p className="text-justify">
                Comme les années précédentes, les assistants funéraires du SCF Bordeaux ont rejoint la pérégrination populaire du Chemin de Croix à travers le centre-ville. Pour ces professionnels du soin aux défunts, le Vendredi Saint n'est pas un jour ordinaire&nbsp;: il touche au cœur même de leur engagement quotidien auprès des familles.
              </p>

              <h2 className="font-display text-xl md:text-2xl text-foreground mt-10">Une intention de prière pour ceux qui prennent soin des morts</h2>
              <p className="text-justify">
                À la dernière station, devant le portail occidental de la cathédrale Saint-André de Bordeaux, une intention de prière a particulièrement retenu leur attention&nbsp;:
              </p>
              <blockquote className="border-l-4 border-primary/40 pl-6 italic text-muted-foreground my-6">
                «&nbsp;Seigneur, toi qui as été l'objet de la miséricorde de Joseph d'Arimathie et des saintes femmes, nous te prions de bénir ceux qui prennent soin des morts et de nous donner de ne jamais oublier de prier pour nos chers défunts.&nbsp;»
              </blockquote>
              <p className="text-justify">
                Ces mots font écho à la mission du Service Catholique des Funérailles&nbsp;: accompagner chaque famille avec dignité, humanité et foi, à chaque étape des obsèques.
              </p>

              <h2 className="font-display text-xl md:text-2xl text-foreground mt-10">Le SCF Bordeaux, un accompagnement funéraire enraciné dans la foi</h2>
              <p className="text-justify">
                Le Service Catholique des Funérailles de Bordeaux propose un accompagnement funéraire respectueux, porté par des hommes et des femmes engagés. Que ce soit pour l'organisation des obsèques, la prévoyance funéraire ou le soutien au deuil, nos équipes sont disponibles 7&nbsp;jours sur&nbsp;7.
              </p>
              <ul className="space-y-2 text-base list-disc pl-6">
                <li>
                  <Link to="/contacter-une-agence" className="text-primary hover:underline">
                    Contacter le SCF Bordeaux
                  </Link>
                </li>
                <li>
                  <Link to="/ressources/le-parcours-des-funerailles" className="text-primary hover:underline">
                    Découvrir le parcours des funérailles
                  </Link>
                </li>
              </ul>
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
