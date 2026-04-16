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

      {/* ── Main content ── */}
      <section className="bg-background" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left column */}
            <div className="flex-1 lg:w-[65%] space-y-6">

              {/* Faire-part — contenu intégral */}
              <div
                className="bg-card border-2 border-[hsl(var(--scf-blue)/0.2)]"
                style={{ borderRadius: 12, padding: "36px 40px" }}
              >
                {notice.content ? (
                  <div className="whitespace-pre-line text-foreground" style={{ fontSize: 16, lineHeight: 1.8 }}>
                    {notice.content}
                  </div>
                ) : (
                  <p className="font-display text-primary font-semibold text-center" style={{ fontSize: 28 }}>
                    {notice.name}
                  </p>
                )}
              </div>

              {/* Agency credit */}
              <div className="text-muted-foreground" style={{ fontSize: 15 }}>
                Service Catholique des Funérailles —{" "}
                <Link to={agenceUrl} className="text-primary hover:underline font-medium">
                  Agence {agenceLabel}
                </Link>
              </div>

              {/* Partager */}
              <div>
                <h2
                  className="font-display text-foreground"
                  style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}
                >
                  Partager sur :
                </h2>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="Partager sur Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Avis de décès de ${notice.name} — ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="Partager sur WhatsApp"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(`Avis de décès de ${notice.name}`)}&body=${encodeURIComponent(shareUrl)}`}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="Partager par email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
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
                    SCF {agenceLabel} — {agencePhone}
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
