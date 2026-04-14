import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Church, Flame, Facebook, Mail, Copy, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

// Parse ceremony info from content
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

  // Look for religious ceremony
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

  // Look for cremation/recueillement
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
  const [condolName, setCondolName] = useState("");
  const [condolMessage, setCondolMessage] = useState("");

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
      { "@type": "ListItem", position: 2, name: "Le Carnet du SCF", item: "https://s-c-f.org/carnet-deuil/" },
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
        <title>Avis de décès — {notice.name} — SCF {notice.agency_name || ""}</title>
        <meta
          name="description"
          content={`Avis de décès de ${notice.name}, ${notice.date_of_death || ""}. Service Catholique des Funérailles ${notice.agency_name || ""}.`}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      {/* Hero breadcrumb */}
      <section className="bg-[hsl(var(--scf-cream))]" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="text-muted-foreground" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">›</span>
            <Link to="/carnet-deuil" className="hover:text-primary">Le Carnet du SCF</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">{notice.name}</span>
          </nav>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="flex-1 lg:w-[65%] space-y-6">
              {/* Bloc 1 — Faire-part */}
              <div
                className="bg-[hsl(var(--scf-cream))] border border-border/30 text-center"
                style={{ borderRadius: 12, padding: "32px 40px" }}
              >
                <span className="text-primary" style={{ fontSize: 24 }}>✝</span>

                {familyText && (
                  <p
                    className="text-muted-foreground italic mx-auto mt-4"
                    style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 420, whiteSpace: "pre-line" }}
                  >
                    {familyText}
                  </p>
                )}

                <p
                  className="font-display text-primary font-semibold my-4"
                  style={{ fontSize: 28 }}
                >
                  {notice.name}
                </p>

                {dateShort && (
                  <p className="text-muted-foreground" style={{ fontSize: 16 }}>
                    {dateShort}
                  </p>
                )}

                <div className="border-t border-border/40 mt-6 pt-1" />
              </div>

              {/* Bloc 2 — Cérémonies */}
              {ceremonies.length > 0 && (
                <div>
                  <h2
                    className="font-display text-foreground"
                    style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}
                  >
                    Cérémonie et obsèques
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ceremonies.map((c, i) => (
                      <div
                        key={i}
                        className="bg-card border border-border/50 shadow-sm"
                        style={{ borderRadius: 10, padding: "20px 24px" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {c.icon === "church" ? (
                            <Church className="w-5 h-5 text-primary" />
                          ) : (
                            <Flame className="w-5 h-5 text-primary" />
                          )}
                          <span className="font-semibold text-foreground" style={{ fontSize: 16 }}>
                            {c.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1" style={{ fontSize: 14 }}>
                          <Clock className="w-4 h-4" />
                          <span>{c.detail}</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground" style={{ fontSize: 14 }}>
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{c.lieu}</span>
                        </div>
                        {c.lienMaps && (
                          <a
                            href={c.lienMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline mt-2 inline-block"
                            style={{ fontSize: 13 }}
                          >
                            Voir sur Google Maps →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  {fairepartNote && (
                    <p className="text-muted-foreground italic mt-3" style={{ fontSize: 14 }}>
                      {fairepartNote}
                    </p>
                  )}
                </div>
              )}

              {/* If no ceremonies parsed but has content, show raw */}
              {ceremonies.length === 0 && notice.content && (
                <div
                  className="bg-card border border-border/50 shadow-sm"
                  style={{ borderRadius: 10, padding: "24px 28px" }}
                >
                  <div className="whitespace-pre-line text-foreground leading-relaxed" style={{ fontSize: 16 }}>
                    {notice.content}
                  </div>
                </div>
              )}

              {/* Bloc 3 — Agence */}
              <div className="text-muted-foreground" style={{ fontSize: 15 }}>
                Obsèques organisées par le Service Catholique des Funérailles —{" "}
                <Link to={agenceUrl} className="text-primary hover:underline font-medium">
                  Agence SCF {notice.agency_name || ""}
                </Link>
              </div>

              {/* Bloc 4 — Partage */}
              <div>
                <h2
                  className="font-display text-foreground"
                  style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}
                >
                  Partager cet avis
                </h2>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    style={{ fontSize: 13 }}
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Avis de décès de ${notice.name} — ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    style={{ fontSize: 13 }}
                  >
                    <Share2 className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(`Avis de décès de ${notice.name}`)}&body=${encodeURIComponent(shareUrl)}`}
                    className="inline-flex items-center gap-1.5 border border-border rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    style={{ fontSize: 13 }}
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 border border-border rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    style={{ fontSize: 13 }}
                  >
                    <Copy className="w-4 h-4" /> Copier le lien
                  </button>
                </div>
              </div>
            </div>

            {/* Right column — sticky */}
            <div className="lg:w-[35%]">
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Condolences form */}
                <div
                  className="bg-card border border-border/50 shadow-sm"
                  style={{ borderRadius: 10, padding: 20 }}
                >
                  <h3 className="font-display text-foreground" style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>
                    Laisser un message de condoléances
                  </h3>
                  <form onSubmit={handleCondolSubmit} className="space-y-3">
                    <Input
                      placeholder="Votre prénom et nom"
                      value={condolName}
                      onChange={(e) => setCondolName(e.target.value)}
                      required
                    />
                    <Textarea
                      placeholder="Exprimez vos condoléances à la famille…"
                      rows={4}
                      value={condolMessage}
                      onChange={(e) => setCondolMessage(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full">
                      Envoyer mon hommage
                    </Button>
                  </form>
                  <p className="text-muted-foreground mt-2" style={{ fontSize: 12 }}>
                    Votre message sera transmis à la famille par l'agence SCF.
                  </p>
                </div>

                {/* Hommage actions */}
                <div
                  className="bg-card border border-border/50 shadow-sm"
                  style={{ borderRadius: 10, padding: 20 }}
                >
                  <h3 className="font-display text-foreground" style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>
                    Rendre hommage
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-start">
                      🕯 Allumer une bougie
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/ressources/prieres">🙏 S'unir dans la prière</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      💐 Envoyer des fleurs
                    </Button>
                  </div>
                </div>

                {/* Agency compact */}
                <div
                  className="bg-card border border-border/50 shadow-sm"
                  style={{ borderRadius: 10, padding: 20 }}
                >
                  <p className="text-muted-foreground" style={{ fontSize: 13, marginBottom: 4 }}>
                    Obsèques organisées par
                  </p>
                  <p className="text-foreground font-semibold" style={{ fontSize: 15 }}>
                    SCF {notice.agency_name} — {agencePhone}
                  </p>
                  <Link
                    to={agenceUrl}
                    className="text-primary hover:underline mt-1 inline-block"
                    style={{ fontSize: 14 }}
                  >
                    Contacter l'agence →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AvisDeDecesDetail;
