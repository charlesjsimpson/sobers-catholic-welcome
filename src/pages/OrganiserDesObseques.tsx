import { useEffect } from "react";
import { Phone, MapPin, ChevronRight, Clock, Heart, Cross, BookOpen, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "L'adieu au visage",
    description:
      "Que ce soit à la maison, à l'hôpital ou au funérarium, la première étape est la présentation du corps. Qu'elle prenne la forme d'une veille ou d'une simple levée de corps, elle est l'occasion d'une rencontre entre les vivants et le mort.",
    icon: Heart,
  },
  {
    number: "02",
    title: "La célébration",
    description:
      "Si le chemin de la paroisse, pour assister à la messe dominicale, s'est largement perdu chez beaucoup de Français, ils sont nombreux à le retrouver pour une cérémonie d'obsèques.",
    icon: Cross,
  },
  {
    number: "03",
    title: "L'inhumation ou la crémation",
    description:
      "Troisième étape du parcours rituel, l'étape de l'inhumation marque le détachement définitif des proches du corps de leur parent défunt.",
    icon: Clock,
  },
];

const sections = [
  {
    tag: "Démarches",
    title: "Nous organisons les obsèques",
    description:
      "Les démarches à remplir lors de l'organisation d'obsèques peuvent représenter une source de confusion et de frustration, d'autant plus lorsque le décès de l'être cher est arrivé de manière inattendue.",
    cta: { label: "Je découvre les démarches", href: "/demarches" },
    icon: BookOpen,
  },
  {
    tag: "Nos services",
    title: "Découvrez nos services",
    description:
      "Les démarches à remplir lors de l'organisation d'obsèques peuvent représenter une source de confusion et de frustration, d'autant plus lorsque le décès de l'être cher est arrivé de manière inattendue.",
    cta: { label: "En savoir plus", href: "#services" },
    icon: Heart,
  },
  {
    tag: "Tarifs",
    title: "Des tarifs calculés au plus juste",
    description:
      "Quand on perd un proche, a-t-on le cœur à faire réaliser des devis chez plusieurs organismes de pompes funèbres pour les comparer poste à poste ? Conscient de cette difficulté, le SCF s'engage à pratiquer les tarifs les plus justes et à fuir toute surenchère commerciale.",
    cta: { label: "Découvrez nos tarifs", href: "/services/tarifs" },
    icon: CreditCard,
  },
];

const OrganiserDesObseques = () => {
  useEffect(() => {
    document.title =
      "Organiser des obsèques catholiques | Service Catholique des Funérailles";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Confiez l'organisation des obsèques au Service Catholique des Funérailles. Accompagnement 24h/24, démarches administratives, cérémonies catholiques et tarifs justes."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-scf-blue-dark opacity-90" />
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
                <li>
                  <Link to="/" className="hover:text-primary-foreground transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3 h-3 inline" />
                </li>
                <li className="text-primary-foreground font-medium">
                  Organiser des obsèques
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-display text-primary-foreground mb-6 leading-tight">
              Organiser des obsèques
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              De l'organisation concrète à l'accompagnement pendant les
              obsèques, nous sommes à vos côtés pour vous conseiller, vous
              apporter le soutien nécessaire et mettre en place un parcours
              d'obsèques correspondant à vos attentes.
            </p>
          </div>
        </section>

        {/* Parcours des funérailles */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 text-center">
              Un esprit chrétien
            </p>
            <h2 className="text-2xl md:text-4xl font-display text-foreground text-center mb-4">
              Un accompagnement qui a du sens
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-base leading-relaxed">
              Vous venez de perdre un proche ? Vous ignorez tout du
              déroulement des obsèques ? Le Service Catholique des Funérailles
              vous accompagne à chaque étape de ce parcours dans un esprit
              chrétien.
            </p>

            <h3 className="text-xl md:text-2xl font-display text-foreground text-center mb-12">
              Le parcours des funérailles type
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-display text-lg font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.number}
                    </span>
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-display text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sections Démarches / Services / Tarifs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl space-y-16">
            {sections.map((section, i) => (
              <article
                key={section.tag}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
                  <section.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    {section.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-display text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {section.description}
                  </p>
                  <a
                    href={section.cta.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {section.cta.label}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA urgence */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary-foreground font-display text-xl md:text-2xl mb-2">
              Si le décès a déjà eu lieu, il est impératif de nous contacter
              par téléphone
            </p>
            <p className="text-primary-foreground/80 mb-6">
              Disponible 24h/24 et 7j/7
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0144388080"
                className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:bg-primary-foreground/90 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <Link
                to="/contacter-une-agence"
                className="inline-flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
              >
                <MapPin className="w-5 h-5" />
                Contacter une agence
              </Link>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Organisation d'obsèques catholiques",
              provider: {
                "@type": "Organization",
                name: "Service Catholique des Funérailles",
                url: "https://s-c-f.org",
                telephone: "+33144388080",
              },
              description:
                "Accompagnement complet pour l'organisation d'obsèques catholiques : démarches administratives, cérémonies, inhumation ou crémation.",
              areaServed: { "@type": "Country", name: "France" },
              availableChannel: {
                "@type": "ServiceChannel",
                availableLanguage: "French",
                servicePhone: {
                  "@type": "ContactPoint",
                  telephone: "+33144388080",
                  contactType: "customer service",
                  availableLanguage: "French",
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday", "Tuesday", "Wednesday", "Thursday",
                      "Friday", "Saturday", "Sunday",
                    ],
                    opens: "00:00",
                    closes: "23:59",
                  },
                },
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default OrganiserDesObseques;
