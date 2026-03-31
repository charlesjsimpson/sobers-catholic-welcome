import { ArrowLeft, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const livres = [
  {
    title: "Vivre en mortel",
    image: "https://s-c-f.org/wp-content/uploads/2023/01/pub.png",
    excerpt:
      "Dans ce nouveau livre paru chez Salvator en octobre 2021, Christian de Cacqueray propose une réflexion profonde sur notre rapport à la finitude.",
    href: "/ressources/livres/vivre-en-mortel-2",
  },
  {
    title: "Conversations sur la mort, et donc sur la vie",
    image:
      "https://s-c-f.org/wp-content/uploads/2023/03/conv-Conversations-sur-la-mort.jpg",
    excerpt:
      "24 personnes, dont Tanguy Chatel, Marie de Hennezel, Anne-Dauphine Julliand, Martin Steffens,… témoignent de leur rapport à la mort.",
    href: "/ressources/livres/conversations-sur-la-mort-et-donc-sur-la-vie",
  },
  {
    title: "Parcours d'adieux, chemins de vie",
    image:
      "https://s-c-f.org/wp-content/uploads/2023/03/183-Capture-decran-2017-06-01-a-16.29.15.png",
    excerpt:
      "Qui ne se sent pas profondément désemparé lors de la mort d'un proche ? Avant tout, un livre d'espérance.",
    href: "/ressources/livres/parcours-dadieux-chemins-de-vie",
  },
  {
    title: "La mort confisquée",
    image:
      "https://s-c-f.org/wp-content/uploads/2023/03/173-couv.png",
    excerpt:
      "Fruit de dix ans d'expérience dans le secteur funéraire, ce livre est un cri d'alarme.",
    href: "/ressources/livres/la-mort-confisquee",
  },
];

const Livres = () => {
  useEffect(() => {
    document.title =
      "Livres de Christian de Cacqueray – Service Catholique des Funérailles";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Découvrez les livres de Christian de Cacqueray, fondateur du Service Catholique des Funérailles, sur la mort, le deuil et notre rapport à la finitude."
    );
    if (!document.querySelector('meta[name="description"]'))
      document.head.appendChild(meta);
    return () => {
      document.title = "Service Catholique des Funérailles";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-display leading-tight">
              Les livres de Christian de Cacqueray sur la mort et le deuil
            </h1>
            <p className="text-primary-foreground/70 mt-3 max-w-3xl leading-relaxed">
              Christian de Cacqueray, fondateur du Service Catholique des Funérailles, est l'une des voix françaises les plus engagées sur la question du rapport à la mort. À travers ses ouvrages, il invite chacun à apprivoiser sa finitude, à traverser le deuil avec lucidité et à redécouvrir en quoi la mort peut être une source de sagesse pour les vivants.
            </p>
          </div>
        </section>

        {/* Grille de livres */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {livres.map((livre, i) => (
                <article
                  key={i}
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={livre.image}
                      alt={`Couverture du livre ${livre.title}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Livre
                    </span>
                    <h2 className="text-lg font-bold text-foreground mt-1 leading-snug">
                      {livre.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {livre.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Qui est Christian de Cacqueray ?</h3>
                <p className="text-muted-foreground leading-relaxed">Christian de Cacqueray est le fondateur et directeur du Service Catholique des Funérailles, réseau de pompes funèbres catholiques présent dans 11 villes en France. Auteur de plusieurs livres sur la mort et le deuil, il anime également l'émission hebdomadaire "Dialogue sur la mort" sur Radio Notre Dame.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quels livres a écrit Christian de Cacqueray ?</h3>
                <p className="text-muted-foreground leading-relaxed">Christian de Cacqueray a publié plusieurs ouvrages sur la mort et le deuil : "Vivre en mortel" (Salvator, 2021), "Conversations sur la mort, et donc sur la vie", "Parcours d'adieux, chemins de vie" et "La mort confisquée", fruit de dix ans d'expérience dans le secteur funéraire.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sur quels sujets écrit Christian de Cacqueray ?</h3>
                <p className="text-muted-foreground leading-relaxed">Ses livres abordent la mort sous plusieurs angles : l'accompagnement des proches en deuil, notre difficulté collective à regarder la mort en face, et la façon dont accepter sa finitude peut transformer positivement notre rapport à la vie.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Où acheter les livres de Christian de Cacqueray ?</h3>
                <p className="text-muted-foreground leading-relaxed">Chaque ouvrage dispose d'une fiche détaillée sur cette page. Cliquez sur "Découvrir" pour accéder au résumé complet et aux informations d'achat.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Livres;
