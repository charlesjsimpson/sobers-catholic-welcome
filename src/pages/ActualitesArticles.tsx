import { ArrowLeft, ArrowRight, Newspaper, Calendar, MapPin, Radio, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gaelImg from "@/assets/gael-leiblang-portrait.jpeg";

interface ContentItem {
  title: string;
  excerpt: string;
  category: string;
  location?: string;
  date?: string;
  image?: string;
  url?: string;
  internal?: boolean;
}

const actualites: ContentItem[] = [
  {
    title: "Vendredi Saint : les assistants funéraires au Chemin de Croix",
    excerpt: "Vendredi Saint : les assistants funéraires au Chemin de Croix de Bordeaux.",
    category: "Actualité",
    location: "Bordeaux",
    image: "https://s-c-f.org/wp-content/uploads/2025/04/chemin-de-croix-bordeaux.jpg",
  },
  {
    title: "Messes chaque lundi soir pendant six mois pour les défunts",
    excerpt: "À la suite de la messe des familles du 9 mars, des messes seront célébrées chaque lundi soir pendant six mois pour les défunts.",
    category: "Actualité",
    location: "Bordeaux",
  },
  {
    title: "Messe annuelle en mémoire des défunts",
    excerpt: "Le SCF d'Aix-en-Provence célèbre sa Messe annuelle des défunts le 19 mars 2026.",
    category: "Actualité",
    location: "Aix-en-Provence",
  },
  {
    title: "Messe annuelle en mémoire des défunts – Lundi 9 mars 2026",
    excerpt: "Messe des familles en hommage aux défunts récents, le lundi 9 mars 2026 à 18h30.",
    category: "Actualité",
    location: "Bordeaux",
  },
  {
    title: "Une session pour avancer vers un rapport à la mort pacifié",
    excerpt: "Prochaines sessions prévues le 21 mars 2026 à La-Seyne-sur-Mer (83), le 24 novembre 2026.",
    category: "Ressource",
    url: "/ressources/sessions/se-reconcilier-avec-la-mort",
    internal: true,
  },
  {
    title: "Dialogue sur la mort, avec Gaël Leiblang, réalisateur d'un seul-en-scène sur le deuil périnatal",
    excerpt: "Christian de Cacqueray reçoit Gaël Leiblang, auteur du seul-en-scène autobiographique \"Tu seras un homme Papa\".",
    category: "Émission",
    date: "23/09/2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal",
    internal: true,
    image: gaelImg,
  },
];

const articles: ContentItem[] = [
  {
    title: "\"Vivre en mortel\" de Christian de Cacqueray, présélectionné pour le Prix de la liberté intérieure 2022",
    excerpt: "Le livre de Christian de Cacqueray a été présélectionné pour le Prix de la liberté intérieure 2022.",
    category: "Article",
    url: "/ressources/livres",
    internal: true,
  },
  {
    title: "Un spectacle-conférence sur la mort dans la vie",
    excerpt: "Un spectacle-conférence qui aborde avec sensibilité et profondeur le sujet de la mort dans la vie.",
    category: "Article",
  },
  {
    title: "Vivre en mortel",
    excerpt: "Avec la pandémie de la Covid 19, notre société a fait brusquement l'expérience de la mort à grande échelle.",
    category: "Article",
    url: "/ressources/livres",
    internal: true,
  },
  {
    title: "Le parcours des funérailles",
    excerpt: "Du lieu du décès au lieu de sépulture, le défunt suit un parcours dont la connaissance aide les familles.",
    category: "Ressource",
    url: "/organiser-des-obseques",
    internal: true,
  },
  {
    title: "Se réconcilier avec notre condition de mortel",
    excerpt: "Peut-on vivre en se détournant de sa propre mort ? Peut-on se construire en tant qu'être humain sans l'accepter ?",
    category: "Article",
    url: "/ressources/sessions/se-reconcilier-avec-la-mort",
    internal: true,
  },
  {
    title: "Le SCF partenaire du Congrès Mission 2022 à Paris",
    excerpt: "Les 30 septembre, 1er et 2 octobre 2022 à Paris, le SCF était partenaire du Congrès Mission.",
    category: "Actualité",
  },
];

const allItems = [...actualites, ...articles];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Émission": return <Radio className="w-3 h-3" />;
    case "Article": return <BookOpen className="w-3 h-3" />;
    default: return <Newspaper className="w-3 h-3" />;
  }
};

const ActualitesArticles = () => {
  useEffect(() => {
    document.title = "Actualités & Articles | Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Retrouvez toutes les actualités et articles du Service Catholique des Funérailles : événements, messes, émissions et ressources.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Actualités & Articles
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Retrouvez toutes les actualités du Service Catholique des Funérailles : événements dans nos agences, articles de fond et ressources spirituelles.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allItems.map((item, index) => {
                const cardClass =
                  "group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col";
                
                const cardContent = (
                  <>
                    {item.image ? (
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="bg-primary/10 flex items-center justify-center py-10">
                        {getCategoryIcon(item.category)}
                        <Newspaper className="w-12 h-12 text-primary opacity-40 group-hover:opacity-70 transition-opacity" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 flex-wrap text-xs mb-3">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold inline-flex items-center gap-1">
                          {getCategoryIcon(item.category)}
                          {item.category}
                        </span>
                        {item.location && (
                          <span className="text-muted-foreground inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        )}
                        {item.date && (
                          <span className="text-muted-foreground inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                        Découvrir
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </>
                );

                if (item.internal && item.url) {
                  return (
                    <Link key={index} to={item.url} className={cardClass}>
                      {cardContent}
                    </Link>
                  );
                }

                if (item.url) {
                  return (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div key={index} className={cardClass}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ActualitesArticles;
