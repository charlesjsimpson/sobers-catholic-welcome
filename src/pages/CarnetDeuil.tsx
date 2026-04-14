import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
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
  const paginated = filtered.slice((page - 1) * NOTICES_PER_PAGE, page * NOTICES_PER_PAGE);

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
    publisher: { "@type": "Organization", name: "Service Catholique des Funérailles" },
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

      {/* Hero */}
      <section
        className="bg-[hsl(var(--scf-cream))]"
        style={{ paddingTop: 48, paddingBottom: 48 }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <nav className="text-muted-foreground mb-6" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Le Carnet du SCF</span>
          </nav>

          <h1
            className="font-display text-foreground"
            style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2, marginBottom: 12 }}
          >
            Le Carnet du SCF
          </h1>
          <p className="text-muted-foreground" style={{ fontSize: 18, marginBottom: 16 }}>
            Avis de décès publiés par le Service Catholique des Funérailles — Paris et toute la France
          </p>
          <p
            className="text-foreground mx-auto"
            style={{ fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}
          >
            Chaque nom inscrit dans ce carnet est une vie qui mérite d'être honorée.
            Retrouvez ici les avis de décès des familles accompagnées par le SCF, rendez
            hommage à vos proches et unissez-vous dans la prière.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-background" style={{ paddingTop: 32, paddingBottom: 16 }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="bg-card border border-border/50 shadow-sm"
            style={{ borderRadius: 12, padding: 24 }}
          >
            <h2
              className="text-foreground font-display"
              style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, textAlign: "center" }}
            >
              Rechercher un avis de décès
            </h2>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-3">
              <Input
                placeholder="Nom ou prénom du défunt"
                value={searchName}
                onChange={(e) => { setSearchName(e.target.value); setPage(1); }}
              />
              <Input
                placeholder="Paris, Lyon, Bordeaux…"
                value={searchCity}
                onChange={(e) => { setSearchCity(e.target.value); setPage(1); }}
              />
              <select
                value={searchPeriod}
                onChange={(e) => { setSearchPeriod(e.target.value); setPage(1); }}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">Toutes les dates</option>
                <option value="month">Ce mois-ci</option>
                <option value="year">Cette année</option>
              </select>
              <Button type="submit" style={{ padding: "12px 32px" }}>
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
            </form>
            <p className="text-muted-foreground text-center mt-3" style={{ fontSize: 13 }}>
              La recherche porte sur tous les avis publiés par les agences SCF en France.
            </p>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="bg-background" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h2
            className="text-foreground font-display"
            style={{ fontSize: 22, fontWeight: 600, marginBottom: 20 }}
          >
            Derniers avis publiés
          </h2>

          {loading ? (
            <p className="text-muted-foreground text-center py-8">Chargement…</p>
          ) : filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Aucun résultat pour votre recherche.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginated.map((n) => (
                  <Link
                    key={n.id}
                    to={n.slug ? `/avis/${n.slug}` : "#"}
                    className="group block bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                    style={{ borderRadius: 10, padding: "20px 24px" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary" style={{ fontSize: 14 }}>✝</span>
                      <span className="text-muted-foreground" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
                        Avis de décès
                      </span>
                    </div>
                    <p className="text-foreground font-semibold" style={{ fontSize: 18, marginBottom: 4 }}>
                      {n.name}
                    </p>
                    {n.date_of_death && (
                      <p className="text-muted-foreground" style={{ fontSize: 14 }}>
                        {n.date_of_death}
                      </p>
                    )}
                    <p className="text-muted-foreground" style={{ fontSize: 14 }}>Paris</p>
                    <p className="text-primary" style={{ fontSize: 12, marginTop: 4 }}>
                      SCF {n.agency_name}
                    </p>
                    {n.slug && (
                      <span
                        className="inline-block mt-3 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        style={{ fontSize: 13, padding: "4px 14px", borderRadius: 6 }}
                      >
                        Voir l'hommage →
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Précédent
                  </Button>
                  <span className="text-muted-foreground" style={{ fontSize: 14 }}>
                    Page {page} / {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Suivant
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Hommage CTA */}
      <section
        className="bg-[hsl(var(--scf-cream))]"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2
            className="font-display text-foreground"
            style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}
          >
            Unissez-vous dans la prière
          </h2>
          <p className="text-muted-foreground mb-6" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Pour accompagner vos proches dans cette épreuve, le Service Catholique des
            Funérailles met à votre disposition des prières pour le deuil et l'adieu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/ressources/prieres">Découvrir nos prières</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contacter-une-agence">Contacter une agence</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="bg-background" style={{ paddingTop: 32, paddingBottom: 40 }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="font-display text-foreground" style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
            Voir aussi
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/organiser-des-obseques" className="text-primary hover:underline" style={{ fontSize: 15 }}>
              Organiser des obsèques
            </Link>
            <Link to="/ressources/actualites" className="text-primary hover:underline" style={{ fontSize: 15 }}>
              Démarches après un décès
            </Link>
            <Link to="/contacter-une-agence" className="text-primary hover:underline" style={{ fontSize: 15 }}>
              Nos agences
            </Link>
            <Link to="/ressources/prieres" className="text-primary hover:underline" style={{ fontSize: 15 }}>
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
