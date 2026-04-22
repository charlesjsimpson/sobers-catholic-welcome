import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BandeauUrgence } from "@/components/avis/BandeauUrgence";
import heroImage from "@/assets/cercueils-hero.jpg";
import inhumationImg from "@/assets/cercueil-inhumation.jpg";
import cremationImg from "@/assets/cercueil-cremation.jpg";

/**
 * Page "Nos cercueils" — équivalent de https://s-c-f.org/cercueils/
 * URL conservée à l'identique pour le SEO : /cercueils
 */
const Cercueils = () => {
  const cercueils = [
    {
      tag: "Produits",
      title: "Cercueils inhumation",
      description:
        "Découvrez notre gamme de cercueils en bois massif adaptés à l'inhumation, dans le respect de la liturgie catholique.",
      href: "/cercueils/cercueils-inhumation",
      image: inhumationImg,
    },
    {
      tag: "Produits",
      title: "Cercueils crémation",
      description:
        "Notre sélection de cercueils conçus spécifiquement pour la crémation, dans le respect des normes en vigueur.",
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
    <>
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
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ minHeight: 460 }}>
          {/* Image de fond */}
          <img
            src={heroImage}
            alt="Cercueil orné de fleurs dans une église"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={800}
          />
          {/* Overlay sombre pour lisibilité */}
          <div
            className="absolute inset-0 bg-[hsl(var(--scf-blue))]/55"
            aria-hidden="true"
          />

          <div
            className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center"
            style={{ minHeight: 460, paddingTop: 96, paddingBottom: 64 }}
          >
            <nav aria-label="Fil d'Ariane" className="text-white/80 mb-7 font-sans" style={{ fontSize: 13 }}>
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-white/95">Nos cercueils</span>
            </nav>

            <h1
              className="font-display text-white"
              style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.01em" }}
            >
              Nos cercueils
            </h1>
          </div>
        </section>

        {/* ── Liste des cercueils ── */}
        <section className="bg-background" style={{ paddingTop: 72, paddingBottom: 80 }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14">
              <h2
                className="font-display text-foreground"
                style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}
              >
                Nos différents{" "}
                <span className="text-[hsl(var(--scf-blue))]">cercueils</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cercueils.map((c) => (
                <Link
                  key={c.title}
                  to={c.href}
                  className="group block bg-card border border-border/60 overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-12px_hsl(var(--scf-blue)/0.25)] transition-all duration-300"
                  style={{ borderRadius: 12 }}
                >
                  <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4 / 3" }}>
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div style={{ padding: "28px 28px 32px" }}>
                    <p
                      className="text-[hsl(var(--scf-blue))] font-sans uppercase tracking-wider"
                      style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", marginBottom: 10 }}
                    >
                      {c.tag}
                    </p>
                    <h3
                      className="font-display text-foreground"
                      style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.25, marginBottom: 12 }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="font-sans text-muted-foreground"
                      style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 18 }}
                    >
                      {c.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-[hsl(var(--scf-blue))] font-medium group-hover:gap-2.5 transition-all"
                      style={{ fontSize: 14.5 }}
                    >
                      En savoir plus
                      <ChevronRight style={{ width: 16, height: 16 }} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BandeauUrgence />

      <Footer />
    </>
  );
};

export default Cercueils;
