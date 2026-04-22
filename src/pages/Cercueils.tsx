import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import inhumationImg from "@/assets/cercueil-inhumation.jpg";
import cremationImg from "@/assets/cercueil-cremation.jpg";

/**
 * Page "Nos cercueils" — équivalent de https://s-c-f.org/cercueils/
 * URL conservée à l'identique pour le SEO : /cercueils
 * Style harmonisé avec les autres pages du site (cf. Prevoyance, OrganiserDesObseques).
 */
const Cercueils = () => {
  const cercueils = [
    {
      tag: "Produits",
      title: "Cercueils inhumation",
      description:
        "Découvrez notre gamme de cercueils en bois massif adaptés à l'inhumation, dans le respect de la liturgie catholique et de la dignité du défunt.",
      href: "/cercueils/cercueils-inhumation",
      image: inhumationImg,
    },
    {
      tag: "Produits",
      title: "Cercueils crémation",
      description:
        "Notre sélection de cercueils conçus spécifiquement pour la crémation, dans le respect des normes en vigueur et de la sobriété chrétienne.",
      href: "/cercueils/cercueils-cremation",
      image: cremationImg,
    },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://s-c-f.org/" },
      { "@type": "ListItem", position: 2, name: "Nos cercueils", item: "https://s-c-f.org/cercueils/" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nos cercueils — Service Catholique des Funérailles</title>
        <meta
          name="description"
          content="Découvrez la gamme de cercueils du Service Catholique des Funérailles : cercueils pour inhumation et crémation, dans le respect de la liturgie catholique."
        />
        <meta name="keywords" content="cercueils, cercueils inhumation, cercueils crémation, pompes funèbres catholiques, SCF" />
        <link rel="canonical" href="https://s-c-f.org/cercueils/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos cercueils — Service Catholique des Funérailles" />
        <meta property="og:description" content="Découvrez la gamme de cercueils du SCF : inhumation et crémation." />
        <meta property="og:url" content="https://s-c-f.org/cercueils/" />
        <meta property="og:locale" content="fr_FR" />

        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero — même structure que Prevoyance */}
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
                <li className="text-foreground font-medium">Nos cercueils</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight mb-8">
              <span className="text-foreground">Nos </span>
              <span className="text-primary">cercueils</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic">
              Une sélection sobre et digne, pensée dans le respect de la liturgie catholique et de la mémoire du défunt.
            </p>
          </div>
        </section>

        {/* Liste des cercueils */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Nos produits
              </span>
              <h2 className="text-2xl md:text-4xl font-display text-foreground">
                Nos différents <span className="text-primary">cercueils</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cercueils.map((c) => (
                <Link
                  key={c.title}
                  to={c.href}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                      {c.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      En savoir plus
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA urgence — identique à Prevoyance */}
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
      </main>

      <Footer />
    </div>
  );
};

export default Cercueils;
