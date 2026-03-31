import { ArrowLeft, BookOpen } from "lucide-react";
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
      "Livres sur la mort et le deuil – Sélection SCF";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Découvrez notre sélection de livres pour mieux vivre son deuil et réfléchir à la mort. Des ouvrages choisis par le Service Catholique des Funérailles."
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
              Livres sur la mort et le deuil : une sélection pour cheminer
            </h1>
            <p className="text-primary-foreground/70 mt-3 max-w-3xl leading-relaxed">
              Le Service Catholique des Funérailles a sélectionné des ouvrages de référence pour accompagner ceux qui traversent un deuil, souhaitent réfléchir à leur propre finitude ou cherchent des mots pour consoler un proche. Ces livres, écrits par des auteurs engagés — philosophes, soignants, témoins — offrent des éclairages profonds et accessibles sur notre rapport à la mort.
            </p>
          </div>
        </section>

        {/* Grille de livres */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {livres.map((livre, i) => (
                <article
                  key={i}
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="aspect-[3/4] max-h-48 overflow-hidden bg-muted">
                    <img
                      src={livre.image}
                      alt={`Couverture du livre ${livre.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              Questions fréquentes sur ces livres
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quels livres lire pour traverser un deuil ?</h3>
                <p className="text-muted-foreground leading-relaxed">Le SCF recommande plusieurs ouvrages pour accompagner le deuil : "Parcours d'adieux, chemins de vie" offre un guide concret pour les proches désemparés, tandis que "Conversations sur la mort, et donc sur la vie" rassemble les témoignages de 24 personnalités sur leur rapport personnel à la mort.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Existe-t-il des livres catholiques sur la mort et le deuil ?</h3>
                <p className="text-muted-foreground leading-relaxed">Oui. Le Service Catholique des Funérailles propose une sélection d'ouvrages ancrés dans une perspective chrétienne, dont "Vivre en mortel" de Christian de Cacqueray, directeur du SCF, paru aux éditions Salvator.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Qu'est-ce que "La mort confisquée" ?</h3>
                <p className="text-muted-foreground leading-relaxed">"La mort confisquée" est un livre-cri d'alarme né de dix ans d'expérience dans le secteur funéraire. Il interroge la façon dont notre société contemporaine écarte la mort du champ de la vie ordinaire.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Qui est Christian de Cacqueray ?</h3>
                <p className="text-muted-foreground leading-relaxed">Christian de Cacqueray est le directeur du Service Catholique des Funérailles. Auteur et animateur de l'émission hebdomadaire "Dialogue sur la mort" sur Radio Notre Dame, il consacre son travail à réconcilier les personnes avec leur condition de mortel.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Comment se procurer ces livres ?</h3>
                <p className="text-muted-foreground leading-relaxed">Chaque livre référencé sur cette page dispose d'une fiche détaillée accessible en cliquant sur "Découvrir". Vous y trouverez le résumé complet et les informations pour vous le procurer.</p>
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
