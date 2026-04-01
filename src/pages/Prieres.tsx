import { ArrowLeft, Flame } from "lucide-react";
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
import priereInhumationImg from "@/assets/priere-inhumation.jpg";
import priereMortBrutaleImg from "@/assets/priere-mort-brutale.jpg";


const prieres = [
  {
    title: "Prière pour un enfant mort‑né",
    excerpt: "Une prière pour confier à Dieu un bébé né sans vie et accompagner ses parents dans ce deuil silencieux.",
    image: "https://s-c-f.org/wp-content/uploads/2024/02/hands-1926414_1280.jpg",
    href: "/ressources/prieres/priere-pour-un-enfant-mort-ne",
  },
  {
    title: "Prière pour l'adieu au visage",
    excerpt: "Une prière pour accompagner le dernier adieu au visage du défunt, avant la fermeture du cercueil.",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/priere_adieu_au_visage-1.jpg",
    href: "/ressources/prieres/priere-pour-ladieu-au-visage",
  },
  {
    title: "Prière au moment de l'inhumation",
    excerpt: "Une prière pour accompagner la mise en terre du défunt, au cimetière, entouré de ses proches.",
    image: priereInhumationImg,
    href: "/ressources/prieres/prieres",
  },
  {
    title: "Prière pour une mort brutale",
    excerpt: "Une prière pour traverser le choc d'une mort soudaine et trouver des mots quand ils manquent.",
    image: priereMortBrutaleImg,
    href: "/ressources/prieres/priere-pour-une-mort-brutale",
  },
  {
    title: "Prière pour la mort d'un enfant",
    excerpt: "Une prière pour les parents et proches face à la perte insurmontable d'un enfant.",
    image: priereMortEnfantImg,
    href: "/ressources/prieres/priere-pour-la-mort-dun-enfant",
  },
  {
    title: "Prière à la Sainte Vierge",
    excerpt: "Une prière à Marie pour confier un défunt et trouver un appui dans l'épreuve du deuil.",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/priere_a_la_sainte_vierge.jpg",
    href: "/ressources/prieres/priere-a-la-sainte-vierge",
  },
];

const faq = [
  {
    question: "Quelle prière dire pour un défunt ?",
    answer: "Plusieurs prières catholiques peuvent accompagner un défunt selon le moment : avant la fermeture du cercueil, lors de l'inhumation au cimetière, ou dans les jours qui suivent le décès. Le Service Catholique des Funérailles propose des textes adaptés à chaque étape du deuil.",
  },
  {
    question: "Quelle prière pour une mort brutale ou accidentelle ?",
    answer: "La mort brutale laisse souvent les proches dans un état de choc intense. Une prière spécifique pour une mort brutale peut aider à mettre des mots sur la douleur et à confier le défunt à Dieu malgré l'incompréhension.",
  },
  {
    question: "Quelle prière pour la mort d'un enfant ou d'un bébé ?",
    answer: "La perte d'un enfant ou d'un bébé mort-né est l'une des épreuves les plus douloureuses qui soit. Le SCF propose des prières spécialement écrites pour accompagner ces deuils particuliers, dans le respect de la foi catholique.",
  },
  {
    question: "Quelle prière au moment de l'inhumation ?",
    answer: "L'inhumation est un moment solennel où le corps du défunt est confié à la terre. Une prière au moment de l'inhumation permet aux proches de marquer ce passage et de s'unir spirituellement autour du défunt.",
  },
  {
    question: "Peut-on prier la Vierge Marie pour un défunt ?",
    answer: "Oui. La prière à la Sainte Vierge est une tradition catholique profonde pour accompagner les défunts. Marie, qui a elle-même vécu la perte de son fils, est considérée comme une intercessrice particulièrement proche dans l'épreuve du deuil.",
  },
];

const Prieres = () => {
  useEffect(() => {
    document.title = "Prières pour un défunt et pour le deuil – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Trouvez une prière catholique pour accompagner un défunt : inhumation, mort brutale, mort d'un enfant, enfant mort-né. Des textes proposés par le SCF.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="w-6 h-6 text-primary-foreground/70" />
                  <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Ressources</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight">
                  Prières catholiques pour accompagner un défunt<br /> et traverser le deuil
                </h1>
                <p className="text-primary-foreground/80 mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-justify">
                  Face à la mort d'un proche, les mots manquent souvent. La prière peut alors devenir un chemin pour exprimer la douleur, confier le défunt à Dieu et trouver un appui dans l'épreuve du deuil. Le Service Catholique des Funérailles propose ici une sélection de prières catholiques adaptées aux différentes situations de deuil&nbsp;: mort subite, perte d'un enfant, moment de l'inhumation, adieu au corps.
                </p>
              </div>
              <svg className="hidden md:block w-24 h-24 lg:w-32 lg:h-32 text-primary-foreground/20 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="5" y1="7" x2="19" y2="7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Prayer cards */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {prieres.map((priere) => (
                <Link
                  key={priere.href}
                  to={priere.href}
                  className="group card-subtle overflow-hidden rounded-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={priere.image}
                      alt={priere.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Prière</span>
                    <h3 className="font-display text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      {priere.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{priere.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — static text visible for SEO */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="section-title text-2xl md:text-3xl mb-10">
              Questions fréquentes sur les prières pour les défunts
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl px-6 shadow-sm border border-border">
                  <AccordionTrigger className="text-left font-display text-lg text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* SEO: contenu FAQ visible par les moteurs de recherche */}
            <div className="sr-only" aria-hidden="true">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prieres;
