import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Facebook, Mail, Copy, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AvisJeanneBrisou = () => {
  const { toast } = useToast();
  const [condolName, setCondolName] = useState("");
  const [condolMessage, setCondolMessage] = useState("");

  const shareUrl = "https://s-c-f.org/avis/jeanne-brisou/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({ title: "Lien copié", description: "Le lien a été copié dans le presse-papier." });
  };

  const handleCondolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé", description: "Votre message de condoléances sera transmis à la famille." });
    setCondolName("");
    setCondolMessage("");
  };

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jeanne BRISOU",
    alternateName: "Jeanne Meyneng",
    deathDate: "2026-03-18",
    deathPlace: { "@type": "Place", name: "Paris, France" },
    familyName: "BRISOU",
    givenName: "Jeanne",
    birthName: "Jeanne Meyneng",
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jeanne BRISOU née Meyneng - Avis de décès",
    articleSection: "Obituary",
    datePublished: "2026-03-18",
    author: { "@type": "Organization", name: "Service Catholique des Funérailles" },
    publisher: {
      "@type": "Organization",
      name: "Service Catholique des Funérailles",
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://s-c-f.org/" },
      { "@type": "ListItem", position: 2, name: "Paris 17ème", item: "https://s-c-f.org/agences/paris-17/" },
      { "@type": "ListItem", position: 3, name: "Jeanne BRISOU" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Avis de décès de Jeanne BRISOU née Meyneng — SCF Paris 17</title>
        <meta
          name="description"
          content="Avis de décès de Jeanne BRISOU née Jeanne Meyneng, survenu le 18 mars 2026 dans sa 95ème année. Messe d'obsèques le 27 mars à 14h30 en l'église Notre Dame de la Nativité, Paris 12ème. Service Catholique des Funérailles – Agence Paris 17."
        />
        <meta
          name="keywords"
          content="avis de décès Jeanne Brisou, obsèques Paris 12, pompes funèbres catholiques Paris, SCF Paris 17, funérailles catholiques"
        />
        <link rel="canonical" href="https://s-c-f.org/avis/jeanne-brisou/" />
        <meta property="og:title" content="Avis de décès de Jeanne BRISOU née Meyneng" />
        <meta property="og:description" content="Jeanne BRISOU née Jeanne Meyneng, survenu le 18 mars 2026. Messe d'obsèques le 27 mars, église Notre Dame de la Nativité, Paris 12ème." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://s-c-f.org/avis/jeanne-brisou/" />
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      {/* ── Blue Hero ── */}
      <section className="relative overflow-hidden bg-[hsl(var(--scf-blue))]" style={{ minHeight: 320 }}>
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: 320, paddingTop: 96, paddingBottom: 48 }}
        >
          <nav aria-label="Fil d'Ariane" className="text-white/70 mb-8" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link to="/agences/paris-17" className="hover:text-white transition-colors">Paris 17ème</Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">Jeanne BRISOU</span>
          </nav>

          <h1
            className="font-display text-white"
            style={{ fontSize: 36, fontWeight: 600, lineHeight: 1.25 }}
          >
            Avis de décès de
            <br />
            Jeanne BRISOU
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-background" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left column */}
            <div className="flex-1 lg:w-[65%] space-y-8">

              {/* Faire-part card */}
              <article
                className="bg-card border-2 border-[hsl(var(--scf-blue)/0.15)]"
                style={{ borderRadius: 12, padding: "36px 40px" }}
              >
                {/* Family */}
                <div className="text-foreground" style={{ fontSize: 16, lineHeight: 1.9 }}>
                  <p>Jacques BRISOU et son épouse Dominique,</p>
                  <p>Jean-Pierre BRISOU et son épouse Anne-Violaine,</p>
                  <p>ses enfants</p>
                </div>

                <div className="text-foreground mt-4" style={{ fontSize: 16, lineHeight: 1.9 }}>
                  <p>Marine, Grégoire-Marie et son épouse Lucile,</p>
                  <p>Timothée, Bertrand,</p>
                  <p>ses petits-enfants</p>
                </div>

                <div className="text-foreground mt-4" style={{ fontSize: 16, lineHeight: 1.9 }}>
                  <p>Sibyle, Faustine et Alban,</p>
                  <p>ses arrière-petits-enfants</p>
                </div>

                <p className="text-muted-foreground mt-6" style={{ fontSize: 16 }}>
                  ont la tristesse de vous faire part du rappel à Dieu de
                </p>

                {/* Name */}
                <div className="text-center my-6">
                  <p
                    className="font-display text-primary font-semibold"
                    style={{ fontSize: 28, lineHeight: 1.3 }}
                  >
                    Jeanne BRISOU
                  </p>
                  <p
                    className="font-display text-primary/80 italic"
                    style={{ fontSize: 22 }}
                  >
                    née Jeanne Meyneng
                  </p>
                </div>

                <p className="text-center text-foreground" style={{ fontSize: 16 }}>
                  survenu le 18 mars 2026 dans sa 95ème année.
                </p>

                <div className="border-t border-border/40 my-6" />

                {/* Ceremony */}
                <div>
                  <h2
                    className="font-display text-foreground"
                    style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}
                  >
                    Célébration des obsèques
                  </h2>
                  <p className="text-foreground" style={{ fontSize: 15, lineHeight: 1.8 }}>
                    La messe d'obsèques sera célébrée le jeudi 27 mars à 14h30 en l'église Notre Dame de la Nativité (place Lachambeaudie – PARIS 12ème) suivie de l'inhumation au cimetière sud de Saint Mandé (25 rue du général Archinard PARIS 12ème).
                  </p>
                </div>

                <div className="border-t border-border/40 my-6" />

                {/* Family addresses */}
                <div>
                  <h2
                    className="font-display text-foreground"
                    style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}
                  >
                    Coordonnées de la famille
                  </h2>
                  <div className="space-y-3" style={{ fontSize: 15 }}>
                    <div>
                      <p className="text-foreground font-medium">Jacques et Dominique BRISOU</p>
                      <p className="text-muted-foreground">2, rue Corbineau 75012 PARIS</p>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Jean-Pierre et Anne-Violaine BRISOU</p>
                      <p className="text-muted-foreground">20, avenue de Chartres 60500 CHANTILLY</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 my-6" />

                {/* Agency */}
                <p className="text-center text-foreground" style={{ fontSize: 15 }}>
                  Service Catholique des Funérailles –{" "}
                  <Link to="/agences/paris-17" className="text-primary hover:underline font-medium">
                    Agence Paris 17
                  </Link>
                </p>
              </article>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link
                  to="/ressources/prieres"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <span style={{ fontSize: 28 }}>🙏</span>
                  <span className="text-foreground font-medium">Unissez-vous par la prière</span>
                </Link>
                <a
                  href="https://www.agitateur-floral.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <span style={{ fontSize: 28 }}>🌸</span>
                  <span className="text-foreground font-medium">Offrir des fleurs</span>
                </a>
                <a
                  href="#condoleances"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <span style={{ fontSize: 28 }}>💝</span>
                  <span className="text-foreground font-medium">Faire un don</span>
                </a>
                <a
                  href="#condoleances"
                  className="flex flex-col items-center gap-2 bg-card border border-border/40 hover:border-primary/30 transition-colors text-center py-5 px-3"
                  style={{ borderRadius: 10, fontSize: 13 }}
                >
                  <span style={{ fontSize: 28 }}>✍️</span>
                  <span className="text-foreground font-medium">Présenter ses condoléances</span>
                </a>
              </div>

              {/* Share */}
              <div>
                <h2
                  className="font-display text-foreground"
                  style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}
                >
                  Partager sur :
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: Facebook, label: "Facebook" },
                    { href: `https://wa.me/?text=${encodeURIComponent(`Avis de décès de Jeanne BRISOU — ${shareUrl}`)}`, icon: Share2, label: "WhatsApp" },
                    { href: `mailto:?subject=${encodeURIComponent("Avis de décès de Jeanne BRISOU")}&body=${encodeURIComponent(shareUrl)}`, icon: Mail, label: "Email" },
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

            {/* Right column — sticky */}
            <div className="lg:w-[35%]">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Condolences form */}
                <div
                  id="condoleances"
                  className="bg-card border border-border/50 shadow-sm"
                  style={{ borderRadius: 10, padding: 20 }}
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
                    SCF Paris 17 — 01 46 22 42 42
                  </p>
                  <Link
                    to="/agences/paris-17"
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

      {/* CTA urgent */}
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

export default AvisJeanneBrisou;
