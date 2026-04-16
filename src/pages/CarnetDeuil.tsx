import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface DeathNotice {
  id: string;
  name: string;
  slug: string | null;
  date_of_death: string | null;
  agency_slug: string;
  agency_name: string | null;
}

const NOTICES_PER_PAGE = 9;

const CarnetDeuil = () => {
  const [notices, setNotices] = useState<DeathNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchPeriod, setSearchPeriod] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    supabase
      .from("death_notices")
      .select("id, name, slug, date_of_death, agency_slug, agency_name")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setNotices(data || []);
        setLoading(false);
      });
  }, []);

  const filtered = notices.filter((n) => {
    const nameMatch = n.name.toLowerCase().includes(searchName.toLowerCase());
    const cityMatch =
      !searchCity ||
      (n.agency_name || "").toLowerCase().includes(searchCity.toLowerCase()) ||
      "paris".includes(searchCity.toLowerCase());
    return nameMatch && cityMatch;
  });

  const totalPages = Math.ceil(filtered.length / NOTICES_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * NOTICES_PER_PAGE,
    page * NOTICES_PER_PAGE
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Avis de décès — Le Carnet du Service Catholique des Funérailles",
    description:
      "Retrouvez les avis de décès publiés par le Service Catholique des Funérailles. Unissez-vous dans la prière pour les défunts et leurs familles.",
    url: "https://s-c-f.org/carnet",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment publier un avis de décès avec le SCF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nos équipes se chargent de rédiger et publier l'avis de décès en accord avec la famille. Cette prestation fait partie de notre accompagnement global lors de l'organisation des obsèques.",
          },
        },
        {
          "@type": "Question",
          name: "Les avis de décès du SCF sont-ils gratuits ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La publication de l'avis de décès dans notre Carnet est incluse dans nos prestations funéraires. Nous nous occupons également des démarches pour la presse locale si souhaité.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on laisser un message de condoléances ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, chaque avis de décès permet aux proches et connaissances de laisser un message de soutien et de partager leurs condoléances avec la famille.",
          },
        },
        {
          "@type": "Question",
          name: "Comment retrouver un avis de décès ancien ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilisez notre moteur de recherche en saisissant le nom du défunt ou sélectionnez une période spécifique. Nos archives remontent à la création du Carnet.",
          },
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://s-c-f.org/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Le Carnet du SCF",
          item: "https://s-c-f.org/carnet",
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>Avis de décès — Le Carnet du Service Catholique des Funérailles | SCF</title>
        <meta
          name="description"
          content="Consultez les avis de décès publiés par le Service Catholique des Funérailles. Rendez hommage aux défunts, laissez vos condoléances et unissez-vous dans la prière. Recherchez un avis par nom, ville ou date."
        />
        <meta
          name="keywords"
          content="avis de décès, carnet de deuil, obsèques catholiques, hommage défunt, condoléances, SCF, Service Catholique des Funérailles, pompes funèbres Paris"
        />
        <link rel="canonical" href="https://s-c-f.org/carnet" />
        <meta property="og:title" content="Avis de décès — Le Carnet du Service Catholique des Funérailles" />
        <meta property="og:description" content="Retrouvez les avis de décès publiés par le SCF. Hommages, condoléances et prières pour les défunts et leurs familles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://s-c-f.org/carnet" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      {/* Hero with blue background */}
      <section className="relative overflow-hidden bg-[hsl(var(--scf-blue))]" style={{ minHeight: 340 }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: 340, paddingTop: 96, paddingBottom: 48 }}>
          <nav aria-label="Fil d'Ariane" className="text-white/70 mb-6" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">Le Carnet du SCF</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/40" />
            <span className="text-white" style={{ fontSize: 32 }}>✝</span>
            <div className="h-px w-16 bg-white/40" />
          </div>

          <h1
            className="font-display text-white"
            style={{
              fontSize: 38,
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 16,
              letterSpacing: "0.01em",
            }}
          >
            Avis de décès
            <br />
            <span style={{ fontSize: 28, fontWeight: 400, opacity: 0.85 }}>
              Le Carnet du Service Catholique des Funérailles
            </span>
          </h1>
          <p
            className="text-white/80 max-w-xl mx-auto"
            style={{ fontSize: 15, lineHeight: 1.7 }}
          >
            Le Carnet du Service Catholique des Funérailles rassemble les hommages aux défunts accompagnés par nos agences à travers la France. Chaque nom inscrit dans ce carnet est une vie qui mérite d'être honorée. Recherchez un proche disparu et unissez-vous dans la prière pour les familles.
          </p>
        </div>
      </section>


      {/* Search – floating card overlapping hero */}
      <section className="relative z-20 bg-background" style={{ paddingBottom: 8, paddingTop: 24 }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="bg-card border border-border/40 shadow-lg backdrop-blur-sm"
            style={{ borderRadius: 14, padding: "28px 32px" }}
          >
            <h2
              className="text-foreground font-display text-center"
              style={{ fontSize: 19, fontWeight: 600, marginBottom: 18 }}
            >
              Rechercher un avis de décès
            </h2>
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-3 items-end"
            >
              <Input
                placeholder="Nom ou prénom du défunt"
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                  setPage(1);
                }}
              />
              <Input
                placeholder="Ville ou agence…"
                value={searchCity}
                onChange={(e) => {
                  setSearchCity(e.target.value);
                  setPage(1);
                }}
              />
              <select
                value={searchPeriod}
                onChange={(e) => {
                  setSearchPeriod(e.target.value);
                  setPage(1);
                }}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">Toutes les dates</option>
                <option value="month">Ce mois-ci</option>
                <option value="year">Cette année</option>
              </select>
              <Button type="submit" className="gap-2">
                <Search className="w-4 h-4" />
                Rechercher
              </Button>
            </form>
            <p
              className="text-muted-foreground text-center mt-3"
              style={{ fontSize: 12 }}
            >
              La recherche porte sur tous les avis publiés par les agences SCF
              en France.
            </p>
          </div>
        </div>
      </section>

      {/* Notices list */}
      <section
        className="bg-background"
        style={{ paddingTop: 36, paddingBottom: 56 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <h2
              className="text-foreground font-display whitespace-nowrap"
              style={{ fontSize: 20, fontWeight: 600 }}
            >
              Derniers avis publiés
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-pulse flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <p className="text-muted-foreground" style={{ fontSize: 14 }}>
                  Chargement des avis…
                </p>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="text-muted-foreground/40" style={{ fontSize: 48 }}>
                ✝
              </span>
              <p
                className="text-muted-foreground mt-3"
                style={{ fontSize: 15 }}
              >
                Aucun résultat pour votre recherche.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginated.map((n) => (
                  <article
                    key={n.id}
                    className="group bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    style={{ borderRadius: 12, overflow: "hidden" }}
                  >
                    {/* Gold accent top bar */}
                    <div
                      className="bg-gradient-to-r from-[hsl(var(--scf-gold))] to-[hsl(var(--scf-gold)/0.6)]"
                      style={{ height: 3 }}
                    />
                    <div style={{ padding: "20px 24px 22px" }}>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-primary"
                          style={{ fontSize: 16, lineHeight: 1 }}
                        >
                          ✝
                        </span>
                        <span
                          className="text-muted-foreground uppercase tracking-wider"
                          style={{ fontSize: 10, fontWeight: 600 }}
                        >
                          Avis de décès
                        </span>
                      </div>
                      <h3
                        className="text-foreground font-display group-hover:text-primary transition-colors"
                        style={{
                          fontSize: 19,
                          fontWeight: 600,
                          marginBottom: 6,
                          lineHeight: 1.3,
                        }}
                      >
                        <Link to={n.slug ? `/avis/${n.slug}` : "#"}>
                          {n.name}
                        </Link>
                      </h3>
                      {n.date_of_death && (
                        <p
                          className="text-muted-foreground"
                          style={{ fontSize: 13, marginBottom: 2 }}
                        >
                          <time dateTime={n.date_of_death}>Survenu le {n.date_of_death}</time>
                        </p>
                      )}
                      <p
                        className="text-muted-foreground"
                        style={{ fontSize: 13 }}
                      >
                        Paris
                      </p>
                      <footer className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                        <span
                          className="text-primary/70"
                          style={{ fontSize: 12, fontWeight: 500 }}
                        >
                          SCF {n.agency_name}
                        </span>
                        {n.slug && (
                          <Link
                            to={`/avis/${n.slug}`}
                            className="text-primary text-xs font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block"
                          >
                            Voir l'hommage →
                          </Link>
                        )}
                      </footer>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Pagination des avis de décès" className="flex items-center justify-center gap-2 mt-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                    aria-label="Page précédente"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        aria-current={p === page ? "page" : undefined}
                        className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                          p === page
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                    aria-label="Page suivante"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      {/* Prayer CTA */}
      <section className="relative overflow-hidden" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--scf-blue-dark))] to-[hsl(var(--scf-blue))]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          <span className="text-white/60" style={{ fontSize: 28 }}>✝</span>
          <h2
            className="font-display text-white mt-3"
            style={{ fontSize: 24, fontWeight: 600, marginBottom: 14 }}
          >
            Unissez-vous dans la prière
          </h2>
          <p
            className="text-white/80 mb-8"
            style={{ fontSize: 15, lineHeight: 1.8 }}
          >
            Pour accompagner vos proches dans cette épreuve, le Service
            Catholique des Funérailles met à votre disposition des prières pour
            le deuil et l'adieu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-white text-[hsl(var(--scf-blue-dark))] hover:bg-white/90"
            >
              <Link to="/ressources/prieres">Découvrir nos prières</Link>
            </Button>
            <Button
              asChild
              className="bg-[#DCF4FF] text-[hsl(var(--scf-blue-dark))] hover:bg-[#c8ecff] border-0"
            >
              <Link to="/ressources/prieres#defunts">Prière pour les défunts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <h2
            className="font-display text-foreground text-center"
            style={{ fontSize: 22, fontWeight: 600, marginBottom: 28 }}
          >
            Questions fréquentes sur nos avis de décès
          </h2>

          <dl className="space-y-4">
            <div className="bg-card border border-border/40 p-5" style={{ borderRadius: 10 }}>
              <dt className="font-display text-foreground" style={{ fontSize: 16, fontWeight: 600 }}>
                Comment publier un avis de décès avec le SCF ?
              </dt>
              <dd className="sr-only">Nos équipes se chargent de rédiger et publier l'avis de décès en accord avec la famille. Cette prestation fait partie de notre accompagnement global lors de l'organisation des obsèques.</dd>
            </div>

            <div className="bg-card border border-border/40 p-5" style={{ borderRadius: 10 }}>
              <dt className="font-display text-foreground" style={{ fontSize: 16, fontWeight: 600 }}>
                Les avis de décès du SCF sont-ils gratuits ?
              </dt>
              <dd className="sr-only">La publication de l'avis de décès dans notre Carnet est incluse dans nos prestations funéraires. Nous nous occupons également des démarches pour la presse locale si souhaité.</dd>
            </div>

            <div className="bg-card border border-border/40 p-5" style={{ borderRadius: 10 }}>
              <dt className="font-display text-foreground" style={{ fontSize: 16, fontWeight: 600 }}>
                Peut-on laisser un message de condoléances ?
              </dt>
              <dd className="sr-only">Oui, chaque avis de décès permet aux proches et connaissances de laisser un message de soutien et de partager leurs condoléances avec la famille.</dd>
            </div>

            <div className="bg-card border border-border/40 p-5" style={{ borderRadius: 10 }}>
              <dt className="font-display text-foreground" style={{ fontSize: 16, fontWeight: 600 }}>
                Comment retrouver un avis de décès ancien ?
              </dt>
              <dd className="sr-only">Utilisez notre moteur de recherche en saisissant le nom du défunt ou sélectionnez une période spécifique. Nos archives remontent à la création du Carnet.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Internal links */}
      <section
        className="bg-[hsl(var(--scf-cream))]"
        style={{ paddingTop: 32, paddingBottom: 36 }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h3
            className="font-display text-foreground"
            style={{ fontSize: 17, fontWeight: 600, marginBottom: 14 }}
          >
            Voir aussi
          </h3>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/organiser-des-obseques"
              className="text-primary hover:underline"
              style={{ fontSize: 14 }}
            >
              Organiser des obsèques
            </Link>
            <Link
              to="/ressources/actualites"
              className="text-primary hover:underline"
              style={{ fontSize: 14 }}
            >
              Démarches après un décès
            </Link>
            <Link
              to="/contacter-une-agence"
              className="text-primary hover:underline"
              style={{ fontSize: 14 }}
            >
              Nos agences
            </Link>
            <Link
              to="/ressources/prieres"
              className="text-primary hover:underline"
              style={{ fontSize: 14 }}
            >
              Nos prières
            </Link>
            <Link
              to="/ressources"
              className="text-primary hover:underline"
              style={{ fontSize: 14 }}
            >
              Ressources
            </Link>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarnetDeuil;
