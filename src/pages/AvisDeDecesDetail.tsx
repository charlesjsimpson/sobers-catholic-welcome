import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, Copy, Twitter, MessageCircle, Sparkles, Flower, Gift, Feather } from "lucide-react";

const FacebookBrand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.683 4.533-4.683 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.886v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const LinkedinBrand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PrayingHands = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Main gauche */}
    <path d="M11 3.2c-.8 0-1.5.7-1.5 1.5v7.5c0 .3-.1.5-.3.7l-3.4 3.4c-.5.5-.6 1.3-.2 1.9l1.8 2.7c.3.4.7.6 1.2.6H11V3.2z" fill="currentColor" fillOpacity="0.85" />
    {/* Main droite (miroir) */}
    <path d="M13 3.2c.8 0 1.5.7 1.5 1.5v7.5c0 .3.1.5.3.7l3.4 3.4c.5.5.6 1.3.2 1.9l-1.8 2.7c-.3.4-.7.6-1.2.6H13V3.2z" fill="currentColor" fillOpacity="0.85" />
    {/* Ligne centrale */}
    <line x1="12" y1="3.5" x2="12" y2="21.5" stroke="white" strokeWidth="0.8" />
  </svg>
);
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
              <article
                className="relative bg-card border-2"
                style={{ borderRadius: 12, padding: "36px 40px", borderColor: "#4B8EB3" }}
              >


                {notice.content ? (
                  <div
                    className="font-display whitespace-pre-line text-center"
                    style={{
                      fontSize: 18,
                      lineHeight: 1.7,
                      color: "#000000",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {notice.content.split("\n").map((line, idx) => {
                      const trimmed = line.trim();
                      const isName = trimmed === notice.name.trim();
                      const isNee = /^née?\s+/i.test(trimmed);
                      if (isName || isNee) {
                        return (
                          <div
                            key={idx}
                            style={{
                              fontFamily: '"Playfair Display", serif',
                              fontSize: 24,
                              fontWeight: 900,
                              lineHeight: 1.3,
                              margin: isName ? "12px 0 4px" : "0 0 12px",
                            }}
                          >
                            {line}
                          </div>
                        );
                      }
                      return <div key={idx}>{line || "\u00A0"}</div>;
                    })}
                  </div>
                ) : (
                  <p className="font-display text-primary font-semibold text-center" style={{ fontSize: 28 }}>
                    {notice.name}
                  </p>
                )}

              </article>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link
                  to="/ressources/prieres"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <PrayingHands className="w-12 h-12" style={{ color: "#1E6FB8" }} />
                  <span className="text-foreground font-medium">Unissez-vous par la prière</span>
                </Link>
                <a
                  href="https://www.agitateur-floral.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <Flower className="w-12 h-12" style={{ color: "#D63384" }} fill="#FF6FA8" strokeWidth={1.5} />
                  <span className="text-foreground font-medium">Offrir des fleurs</span>
                </a>
                <a
                  href="#condoleances"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <Gift className="w-12 h-12" style={{ color: "#B8123F" }} fill="#E63956" strokeWidth={1.5} />
                  <span className="text-foreground font-medium">Faire un don</span>
                </a>
                <a
                  href="#condoleances"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <Feather className="w-12 h-12" style={{ color: "#7A4F1B" }} fill="#D4A574" strokeWidth={1.5} />
                  <span className="text-foreground font-medium">Présenter ses condoléances</span>
                </a>
              </div>
            </div>

            {/* Right column — sticky */}
            <div className="lg:w-[35%]">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Partager sur — navy icons */}
                <div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "#1F3D5C" }}
                  >
                    Partager sur :
                  </h3>
                  <div className="flex items-center gap-4">
                    {[
                      {
                        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                        icon: FacebookBrand,
                        label: "Facebook",
                      },
                      {
                        href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Avis de décès de ${notice.name}`)}`,
                        icon: Twitter,
                        label: "Twitter",
                      },
                      {
                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                        icon: LinkedinBrand,
                        label: "LinkedIn",
                      },
                      {
                        href: `https://wa.me/?text=${encodeURIComponent(`Avis de décès de ${notice.name} — ${shareUrl}`)}`,
                        icon: MessageCircle,
                        label: "WhatsApp",
                      },
                      {
                        href: `mailto:?subject=${encodeURIComponent(`Avis de décès de ${notice.name}`)}&body=${encodeURIComponent(shareUrl)}`,
                        icon: Mail,
                        label: "Email",
                      },
                    ].map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                        style={{ color: "#1F3D5C" }}
                        aria-label={`Partager sur ${label}`}
                      >
                        <Icon className="w-7 h-7" fill="currentColor" strokeWidth={0} />
                      </a>
                    ))}
                    <button
                      onClick={handleCopyLink}
                      className="hover:opacity-70 transition-opacity"
                      style={{ color: "#1F3D5C" }}
                      aria-label="Copier le lien"
                    >
                      <Copy className="w-7 h-7" strokeWidth={2.2} />
                    </button>
                  </div>
                </div>

                {/* Livre de condoléances */}
                <div
                  id="condoleances"
                  className="bg-card border-2 shadow-sm"
                  style={{ borderRadius: 10, padding: 20, borderColor: "#DCF4FF" }}
                >
                  <h3 className="font-display text-foreground" style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>
                    Livre de condoléances
                  </h3>
                  <form onSubmit={handleCondolSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="condol-name" className="text-muted-foreground block mb-1" style={{ fontSize: 13 }}>
                        Votre nom
                      </label>
                      <Input
                        id="condol-name"
                        placeholder="Prénom et nom"
                        value={condolName}
                        onChange={(e) => setCondolName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="condol-msg" className="text-muted-foreground block mb-1" style={{ fontSize: 13 }}>
                        Votre message
                      </label>
                      <Textarea
                        id="condol-msg"
                        placeholder="Exprimez vos condoléances à la famille…"
                        rows={5}
                        value={condolMessage}
                        onChange={(e) => setCondolMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer mes condoléances
                    </Button>
                  </form>
                  <p className="text-muted-foreground mt-2" style={{ fontSize: 12 }}>
                    Votre message sera transmis à la famille par l'agence SCF.
                  </p>
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
