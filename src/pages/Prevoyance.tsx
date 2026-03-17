import { useEffect } from "react";
import { Phone, MapPin, ChevronRight, ShieldCheck, ScrollText, FileSignature, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    tag: "Prévoyance",
    title: "Pourquoi prévoir ses obsèques ?",
    description:
      "Que va-t-il se passer à mon décès ? Je n'ai pas de famille, comment faire ? Comment organiser mes funérailles dans ma paroisse ? Je n'ai pas de sépulture dans un cimetière, comment faire ? J'hésite entre l'inhumation et la crémation, comment me déterminer ? Qui va payer les frais de mes obsèques ? Puis-je payer en plusieurs fois ? Autant de questions, et bien d'autres, que vous vous posez.",
    cta: { label: "Consulter nos contrats", href: "/services/contrats" },
    icon: ShieldCheck,
  },
  {
    tag: "Le SCF est là pour vous",
    title: "Prévoyez votre propre parcours des funérailles",
    description:
      "Le Service Catholique des Funérailles vous accompagne pour préparer les obsèques que vous souhaitez, qui soient conformes à votre vie et à vos convictions. Nous recueillons vos volontés et nous mettons notre expertise des funérailles chrétiennes à votre disposition pour vous aider à faire des choix éclairés et adaptés à votre propre situation.",
    cta: { label: "Voir nos dépôts de volontés", href: "/services/deposer-ses-volontes" },
    icon: ScrollText,
  },
  {
    tag: "Prévoyance",
    title: "Anticipez vos obsèques dès maintenant",
    description:
      "Si vous souhaitez anticiper vos obsèques, nous vous accompagnons dans les démarches de souscription d'un contrat de prévoyance.",
    cta: { label: "Voir nos contrats", href: "/services/contrats" },
    secondaryCta: { label: "Faire un dépôt de volontés", href: "/services/deposer-ses-volontes" },
    icon: FileSignature,
  },
  {
    tag: "Nos contrats",
    title: "Soulagez vos proches le moment venu",
    description:
      "En confiant par avance au Service Catholique des Funérailles le financement et l'organisation de vos obsèques, vous soulagerez vos familles et vos proches d'une charge lourde et difficile à supporter dans un moment marqué par l'émotion, la peine et de nombreux questionnements.",
    quote:
      "Le moment venu, nous mettrons en œuvre les dispositions que vous avez prises pour le compte de ceux que vous aurez désignés, qui pourront alors vivre ce moment plus librement.",
    cta: { label: "Consulter nos contrats", href: "/services/contrats" },
    icon: HeartHandshake,
  },
];

const Prevoyance = () => {
  useEffect(() => {
    document.title = "Prévoyance obsèques | Anticiper ses funérailles | SCF";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Anticipez vos obsèques avec le Service Catholique des Funérailles. Contrats de prévoyance, dépôt de volontés et accompagnement personnalisé pour préparer vos funérailles en toute sérénité."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-secondary pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center pt-16 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-64 h-64 text-primary/[0.07]" fill="currentColor">
              <circle cx="100" cy="100" r="30" />
              {[...Array(12)].map((_, i) => (
                <rect
                  key={i}
                  x="96"
                  y="20"
                  width="8"
                  height="40"
                  rx="4"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
                </li>
                <li><ChevronRight className="w-3 h-3 inline" /></li>
                <li className="text-foreground font-medium">Prévoyance</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight mb-8">
              <span className="text-foreground">Anticiper ses obsèques </span>
              <span className="text-primary">en toute sérénité</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic">
              Préparez vos funérailles à votre image, soulagez vos proches et faites des choix éclairés grâce à l'accompagnement du Service Catholique des Funérailles.
            </p>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl space-y-24">
            {sections.map((section, i) => (
              <article
                key={i}
                className={`flex flex-col md:flex-row items-start gap-10 ${
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
                  <h2 className="text-xl md:text-3xl font-display text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {section.description}
                  </p>
                  {section.quote && (
                    <blockquote className="border-l-4 border-primary/30 pl-5 italic text-muted-foreground mb-5">
                      {section.quote}
                    </blockquote>
                  )}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={section.cta.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {section.cta.label}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    {section.secondaryCta && (
                      <a
                        href={section.secondaryCta.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {section.secondaryCta.label}
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA urgence */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary-foreground font-display text-xl md:text-2xl mb-2">
              Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
            </p>
            <p className="text-primary-foreground/80 mb-6">Disponible 24h/24 et 7j/7</p>
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Prévoyance obsèques catholiques",
              provider: {
                "@type": "Organization",
                name: "Service Catholique des Funérailles",
                url: "https://s-c-f.org",
                telephone: "+33144388080",
              },
              description:
                "Contrats de prévoyance obsèques, dépôt de volontés et accompagnement personnalisé pour anticiper ses funérailles catholiques.",
              areaServed: { "@type": "Country", name: "France" },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Prevoyance;
