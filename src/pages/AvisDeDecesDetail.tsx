import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Facebook, Mail, Copy, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DeathNotice {
  id: string;
  name: string;
  date_of_death: string | null;
  content: string | null;
  agency_slug: string;
  agency_name: string | null;
}

interface Ceremony {
  type: string;
  icon: "church" | "flame";
  title: string;
  detail: string;
  lieu: string;
  lienMaps?: string;
}

function parseCeremonies(content: string | null): Ceremony[] {
  if (!content) return [];
  const ceremonies: Ceremony[] = [];

  const religiousMatch = content.match(
    /cérémonie religieuse.*?(?:le\s+)?(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)?\s*(\d{1,2}\s+\w+)(?:\s+à\s+(\d{1,2}h\d{0,2}))?.*?(?:en\s+l['']|à\s+l[''])?(?:église\s+)?([\w\s\-']+?)(?:\s*\(([^)]+)\))?(?:\.|$)/i
  );
  if (religiousMatch) {
    ceremonies.push({
      type: "religious",
      icon: "church",
      title: "Messe de funérailles",
      detail: `${religiousMatch[1] ? religiousMatch[1].charAt(0).toUpperCase() + religiousMatch[1].slice(1) + " " : ""}${religiousMatch[2]} 2026${religiousMatch[3] ? " à " + religiousMatch[3] : ""}`,
      lieu: `Église ${religiousMatch[4]?.trim() || ""}${religiousMatch[5] ? ", " + religiousMatch[5] : ""}`,
      lienMaps: religiousMatch[4] ? `https://www.google.com/maps/search/${encodeURIComponent("Église " + religiousMatch[4].trim() + " " + (religiousMatch[5] || "Paris"))}` : undefined,
    });
  }

  const cremMatch = content.match(
    /recueillement.*?(?:à\s+)?(\d{1,2}h\d{0,2}).*?(?:au\s+)?(crématorium[^.\n]*)/i
  );
  if (cremMatch) {
    ceremonies.push({
      type: "cremation",
      icon: "flame",
      title: "Recueillement",
      detail: cremMatch[1] ? `À ${cremMatch[1]}` : "",
      lieu: cremMatch[2]?.trim() || "",
      lienMaps: cremMatch[2] ? `https://www.google.com/maps/search/${encodeURIComponent(cremMatch[2].trim())}` : undefined,
    });
  }

  return ceremonies;
}

function parseFairePart(content: string | null, name: string): { familyText: string; note: string | null } {
  if (!content) return { familyText: "", note: null };

  const lines = content.split("\n");
  const nameIndex = lines.findIndex((l) => l.trim() === name);
  const familyLines = nameIndex > 0 ? lines.slice(0, nameIndex).join("\n").trim() : "";
  const note = content.toLowerCase().includes("cet avis tient lieu")
    ? "Cet avis tient lieu de faire-part."
    : null;

  return { familyText: familyLines, note };
}

const AvisDeDecesDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [notice, setNotice] = useState<DeathNotice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("death_notices")
      .select("id, name, date_of_death, content, agency_slug, agency_name")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        setNotice(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Chargement…</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!notice) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-display text-2xl text-foreground">Avis introuvable</h1>
            <Link to="/carnet-deuil" className="text-primary hover:underline">
              Retour au Carnet du SCF
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const agenceUrl = notice.agency_slug ? `/agences/${notice.agency_slug}` : "/contacter-une-agence";
  const agenceLabel = notice.agency_name || "";
  const agencePhone = notice.agency_slug === "paris-15" ? "01 44 38 80 80" : "01 46 22 42 42";
  const ceremonies = parseCeremonies(notice.content);
  const { familyText, note: fairepartNote } = parseFairePart(notice.content, notice.name);

  const dateShort = notice.date_of_death?.replace(/^Survenu\s+(le\s+)?/i, "") || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Obituary",
    name: `Avis de décès — ${notice.name}`,
    description: `${notice.name} — ${notice.date_of_death || ""}. Service Catholique des Funérailles.`,
    datePublished: "2026-04-10",
    publisher: { "@type": "Organization", name: "Service Catholique des Funérailles" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://s-c-f.org/" },
      { "@type": "ListItem", position: 2, name: agenceLabel, item: `https://s-c-f.org/agences/${notice.agency_slug}/` },
      { "@type": "ListItem", position: 3, name: notice.name },
    ],
  };

  const shareUrl = `https://s-c-f.org/avis/${slug}/`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({ title: "Lien copié", description: "Le lien a été copié dans le presse-papier." });
  };

  const handleCondolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Votre message de condoléances sera transmis à la famille.",
    });
    setCondolName("");
    setCondolMessage("");
  };

  return (
    <>
      <Helmet>
        <title>Avis de décès — {notice.name} — SCF {agenceLabel}</title>
        <meta
          name="description"
          content={`Avis de décès de ${notice.name}, ${notice.date_of_death || ""}. Service Catholique des Funérailles ${agenceLabel}.`}
        />
        <link rel="canonical" href={`https://s-c-f.org/avis/${slug}/`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      {/* ── Blue Hero ── */}
      <section className="relative overflow-hidden bg-[hsl(var(--scf-blue))]" style={{ minHeight: 320 }}>
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: 320, paddingTop: 96, paddingBottom: 48 }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="text-white/70 mb-8" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link to={agenceUrl} className="hover:text-white transition-colors">{agenceLabel}</Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">{notice.name}</span>
          </nav>

          <h1
            className="font-display text-white"
            style={{ fontSize: 36, fontWeight: 600, lineHeight: 1.25, marginBottom: 0 }}
          >
            Avis de décès de
            <br />
            {notice.name}
          </h1>
        </div>
      </section>

      {/* ── Main content (centré, une seule colonne) ── */}
      <section className="bg-[hsl(var(--scf-cream)/0.3)]" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="container mx-auto px-6 max-w-3xl space-y-8">

          {/* Faire-part — contenu intégral, centré */}
          <article
            className="bg-card border-2 border-[hsl(var(--scf-blue)/0.25)]"
            style={{ borderRadius: 12, padding: "48px 56px" }}
          >
            {notice.content ? (
              <div
                className="whitespace-pre-line text-foreground text-center"
                style={{ fontSize: 16, lineHeight: 2 }}
              >
                {notice.content}
              </div>
            ) : (
              <p className="font-display text-primary font-semibold text-center" style={{ fontSize: 28 }}>
                {notice.name}
              </p>
            )}

            <div className="mt-8 pt-6 border-t border-border/40">
              <p className="text-center text-foreground" style={{ fontSize: 15 }}>
                Service Catholique des Funérailles –{" "}
                <Link to={agenceUrl} className="text-primary hover:underline font-medium">
                  Agence {agenceLabel}
                </Link>
              </p>
            </div>
          </article>

          {/* CTA buttons — ligne horizontale, sobre */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              to="/ressources/prieres"
              className="flex flex-col items-center gap-2 bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all text-center py-5 px-3"
              style={{ borderRadius: 10, fontSize: 13 }}
            >
              <span style={{ fontSize: 28 }}>🙏</span>
              <span className="text-foreground font-medium">Unissez-vous par la prière</span>
            </Link>
            <a
              href="https://www.agitateur-floral.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all text-center py-5 px-3"
              style={{ borderRadius: 10, fontSize: 13 }}
            >
              <span style={{ fontSize: 28 }}>🌸</span>
              <span className="text-foreground font-medium">Offrir des fleurs</span>
            </a>
            <Link
              to="/associations-dons"
              className="flex flex-col items-center gap-2 bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all text-center py-5 px-3"
              style={{ borderRadius: 10, fontSize: 13 }}
            >
              <span style={{ fontSize: 28 }}>💝</span>
              <span className="text-foreground font-medium">Faire un don</span>
            </Link>
            <a
              href="https://tally.so/r/vGx6Xg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all text-center py-5 px-3"
              style={{ borderRadius: 10, fontSize: 13 }}
            >
              <span style={{ fontSize: 28 }}>✍️</span>
              <span className="text-foreground font-medium">Présenter ses condoléances</span>
            </a>
          </div>

          {/* Partager — bloc centré */}
          <div className="text-center pt-4">
            <h2
              className="font-display text-foreground"
              style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}
            >
              Partager sur :
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: Facebook, label: "Facebook" },
                { href: `https://wa.me/?text=${encodeURIComponent(`Avis de décès de ${notice.name} — ${shareUrl}`)}`, icon: Share2, label: "WhatsApp" },
                { href: `mailto:?subject=${encodeURIComponent(`Avis de décès de ${notice.name}`)}&body=${encodeURIComponent(shareUrl)}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={`Partager sur ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Copier le lien"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — Contact urgent ── */}
      <section className="bg-[hsl(var(--scf-cream))]" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-muted-foreground" style={{ fontSize: 14, marginBottom: 8 }}>
            ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
          </p>
          <Button asChild>
            <Link to="/contacter-une-agence">Contacter une agence</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AvisDeDecesDetail;
