import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Cross, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import carnetHeroBg from "@/assets/carnet-hero-bg.jpg";

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
    "@type": "CollectionPage",
    name: "Le Carnet du SCF — Avis de décès",
    description:
      "Avis de décès publiés par le Service Catholique des Funérailles. Hommages, condoléances et prières.",
    url: "https://s-c-f.org/carnet-deuil/",
    publisher: {
      "@type": "Organization",
      name: "Service Catholique des Funérailles",
    },
  };

  return (
    <>
      <Helmet>
        <title>Le Carnet du SCF — Avis de décès et hommages</title>
        <meta
          name="description"
          content="Retrouvez les avis de décès publiés par le Service Catholique des Funérailles. Rendez hommage à vos proches, laissez un message de condoléances et unissez-vous dans la prière."
        />
        <link rel="canonical" href="https://s-c-f.org/carnet-deuil/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      {/* Hero with background image */}
      <section className="relative overflow-hidden" style={{ minHeight: 340 }}>
        <img
          src={carnetHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: 340, paddingTop: 48, paddingBottom: 48 }}>
          <nav className="text-white/70 mb-6" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">Le Carnet du SCF</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/80" style={{ fontSize: 22 }}>✝</span>
            <div className="h-px w-12 bg-white/30" />
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
            Le Carnet du SCF
          </h1>
          <p
            className="text-white/80 max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.7 }}
          >
            Chaque nom inscrit dans ce carnet est une vie qui mérite d'être
            honorée. Retrouvez ici les avis de décès et unissez-vous dans la
            prière.
          </p>
        </div>
      </section>

      {/* Search – floating card overlapping hero */}
      <section className="relative z-20 bg-background" style={{ paddingBottom: 8 }}>
        <div className="container mx-auto px-6 max-w-3xl" style={{ marginTop: -36 }}>
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
                  <Link
                    key={n.id}
                    to={n.slug ? `/avis/${n.slug}` : "#"}
                    className="group block bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
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
                      <p
                        className="text-foreground font-display group-hover:text-primary transition-colors"
                        style={{
                          fontSize: 19,
                          fontWeight: 600,
                          marginBottom: 6,
                          lineHeight: 1.3,
                        }}
                      >
                        {n.name}
                      </p>
                      {n.date_of_death && (
                        <p
                          className="text-muted-foreground"
                          style={{ fontSize: 13, marginBottom: 2 }}
                        >
                          {n.date_of_death}
                        </p>
                      )}
                      <p
                        className="text-muted-foreground"
                        style={{ fontSize: 13 }}
                      >
                        Paris
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                        <span
                          className="text-primary/70"
                          style={{ fontSize: 12, fontWeight: 500 }}
                        >
                          SCF {n.agency_name}
                        </span>
                        {n.slug && (
                          <span
                            className="text-primary text-xs font-medium group-hover:translate-x-1 transition-transform duration-200"
                          >
                            Voir l'hommage →
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
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
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
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
              variant="outline"
              asChild
              className="border-white/40 text-white hover:bg-white/10"
            >
              <Link to="/contacter-une-agence">Contacter une agence</Link>
            </Button>
          </div>
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
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
              Ressources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarnetDeuil;
