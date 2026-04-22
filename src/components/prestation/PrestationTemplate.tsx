import { ReactNode, ComponentType, SVGProps } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  Phone,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Gabarit "Page Prestation" — réutilisable pour toutes les pages de prestations
 * du Service Catholique des Funérailles (cercueils, fleurs, démarches, etc.).
 *
 * Toutes les données sont passées en props pour faciliter le branchement à un CMS.
 * Génère le SEO complet : meta tags, Open Graph, Twitter Card, JSON-LD
 * (BreadcrumbList, FAQPage, Service, Organization).
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface PrestationBreadcrumbItem {
  label: string;
  href?: string; // dernier niveau sans href
}

export interface PrestationSousCategorie {
  titre: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface PrestationEngagement {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  titre: string;
  description: string;
}

export interface PrestationFaqItem {
  question: string;
  reponse: string; // texte simple ; HTML possible côté CMS via dangerouslySetInnerHTML si besoin
}

export interface PrestationRessource {
  titre: string;
  description?: string;
  image?: string;
  href: string;
}

export interface PrestationTarifs {
  titre?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface PrestationAvis {
  note: number; // ex 4.5
  noteSur?: number; // 5
  nbAvis?: number;
  source?: string; // "Google"
}

export interface PrestationTemplateProps {
  // Identité
  slug: string;
  titreH1: string;
  sousTitreHero: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImage?: string;

  // Fil d'Ariane
  breadcrumb: PrestationBreadcrumbItem[];

  // Hero
  heroBackgroundImage?: string;

  // Intro éditoriale (version épurée)
  // Soit on passe une accroche courte mise en valeur (recommandé),
  // soit on passe un titre + contenu riche (legacy / pages plus denses).
  accroche?: string;
  accrochePost?: ReactNode;
  introTitre?: string;
  introContenu?: ReactNode;

  // Sous-catégories / produits (2 à 6)
  sousCategoriesTitre?: string;
  sousCategories: PrestationSousCategorie[];

  // Engagements
  engagementsTitre?: string;
  engagements: PrestationEngagement[];

  // FAQ (FAQPage JSON-LD auto-généré)
  faqTitre?: string;
  faq: PrestationFaqItem[];

  // Tarifs
  tarifs?: PrestationTarifs;

  // Ressources liées (maillage interne SEO)
  ressourcesTitre?: string;
  ressources: PrestationRessource[];

  // CTA agence
  telephone?: string; // ex "01 44 38 80 80"
  agencesUrl?: string;

  // Rassurance
  avis?: PrestationAvis;
  temoignages?: { auteur: string; texte: string }[];

  // Service JSON-LD
  serviceDescription?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────

const SCF_ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Service Catholique des Funérailles",
  url: "https://s-c-f.org",
  telephone: "+33144388080",
  logo: "https://s-c-f.org/logo.svg",
  areaServed: { "@type": "Country", name: "France" },
};

const formatTel = (tel: string) => `tel:${tel.replace(/\s+/g, "")}`;

// ── Composant ─────────────────────────────────────────────────────────────

export const PrestationTemplate = ({
  slug,
  titreH1,
  sousTitreHero,
  metaTitle,
  metaDescription,
  canonicalUrl,
  ogImage,
  breadcrumb,
  heroBackgroundImage,
  accroche,
  accrochePost,
  introTitre,
  introContenu,
  sousCategoriesTitre = "Nos différentes options",
  sousCategories,
  engagementsTitre = "Nos engagements",
  engagements,
  faqTitre = "Questions fréquentes",
  faq,
  tarifs,
  ressourcesTitre = "Pour aller plus loin",
  ressources,
  telephone = "01 44 38 80 80",
  agencesUrl = "/contacter-une-agence",
  avis = { note: 4.5, noteSur: 5, source: "Google" },
  temoignages,
  serviceDescription,
}: PrestationTemplateProps) => {
  // ── JSON-LD ──
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.href ? { item: `https://s-c-f.org${b.href}` } : {}),
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.reponse },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: titreH1,
    description: serviceDescription || metaDescription,
    provider: SCF_ORG_LD,
    areaServed: { "@type": "Country", name: "France" },
    url: canonicalUrl,
  };

  // Grille sous-cat : nombre de colonnes adaptatif selon le nombre d'items
  const gridCols =
    sousCategories.length === 2
      ? "md:grid-cols-2"
      : sousCategories.length === 3
      ? "md:grid-cols-3"
      : sousCategories.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  const engagementsCols =
    engagements.length === 3
      ? "md:grid-cols-3"
      : engagements.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2";

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Helmet>
        <html lang="fr" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Service Catholique des Funérailles" />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">{JSON.stringify(SCF_ORG_LD)}</script>
      </Helmet>

      <Header />

      <main id={`prestation-${slug}`}>
        {/* ─────────── 1. HERO ─────────── */}
        <section className="relative bg-primary pt-28 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex items-center justify-center flex-wrap gap-2 text-sm text-primary-foreground/70">
                {breadcrumb.map((b, i) => (
                  <li key={`${b.label}-${i}`} className="flex items-center gap-2">
                    {b.href ? (
                      <Link to={b.href} className="hover:text-primary-foreground transition-colors">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-primary-foreground font-medium">{b.label}</span>
                    )}
                    {i < breadcrumb.length - 1 && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight mb-6 text-primary-foreground">
              {titreH1}
            </h1>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary-foreground/80" aria-hidden="true" />
            <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic">
              {sousTitreHero}
            </p>

            <div className="mt-8">
              <a
                href="#contact-agence"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:gap-3 transition-all"
              >
                Être accompagné(e) par une agence
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ─────────── 2. INTRO ÉDITORIALE ─────────── */}
        <section className="py-20 bg-background">
          <article className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-8 text-center">
              {introTitre}
            </h2>
            <div className="prose-scf text-foreground/90 leading-relaxed space-y-5 text-base md:text-lg">
              {introContenu}
            </div>
          </article>
        </section>

        {/* ─────────── 3. SOUS-CATÉGORIES ─────────── */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Découvrir
              </span>
              <h2 className="text-2xl md:text-4xl font-display text-foreground">
                {sousCategoriesTitre}
              </h2>
            </div>

            <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
              {sousCategories.map((sc) => (
                <Link
                  key={sc.href}
                  to={sc.href}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                    <img
                      src={sc.image}
                      alt={sc.imageAlt}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
                      {sc.titre}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                      {sc.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Découvrir
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 4. ENGAGEMENTS ─────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Notre exigence
              </span>
              <h2 className="text-2xl md:text-4xl font-display text-foreground">
                {engagementsTitre}
              </h2>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${engagementsCols} gap-8`}>
              {engagements.map((e) => (
                <article key={e.titre} className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                    <e.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display text-foreground mb-3">
                    {e.titre}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {e.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 5. FAQ ─────────── */}
        {faq.length > 0 && (
          <section className="py-20 bg-secondary/40">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-4xl font-display text-foreground">
                  {faqTitre}
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {faq.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-card border border-border rounded-xl px-5 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground hover:no-underline py-5">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                      {f.reponse}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Duplication sr-only pour SEO (les réponses des accordéons fermés restent indexables via le JSON-LD,
                  mais on renforce avec un fallback texte) */}
              <div className="sr-only" aria-hidden="true">
                {faq.map((f, i) => (
                  <div key={`sr-${i}`}>
                    <h3>{f.question}</h3>
                    <p>{f.reponse}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 6. TARIFS ─────────── */}
        {tarifs && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-sm">
                <h2 className="text-xl md:text-3xl font-display text-foreground mb-3">
                  {tarifs.titre || "Transparence des tarifs"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                  {tarifs.description ||
                    "Nous publions l'intégralité de nos tarifs. Aucun frais caché, jamais."}
                </p>
                {tarifs.ctaHref && (
                  <Link
                    to={tarifs.ctaHref}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                  >
                    {tarifs.ctaLabel || "Consulter nos tarifs"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 7. RESSOURCES LIÉES ─────────── */}
        {ressources.length > 0 && (
          <section className="py-20 bg-secondary/40">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-display text-foreground">
                  {ressourcesTitre}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ressources.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {r.image && (
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={r.image}
                          alt={r.titre}
                          loading="lazy"
                          width={800}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display text-lg text-foreground mb-2">{r.titre}</h3>
                      {r.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {r.description}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Lire
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 8. CTA AGENCE ─────────── */}
        <section id="contact-agence" className="py-16 bg-primary">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display text-primary-foreground mb-3">
              Besoin d'être accompagné(e) ?
            </h2>
            <p className="text-primary-foreground/85 mb-8 text-base md:text-lg">
              Nos conseillers en agence vous aident à faire le choix le plus juste, en toute sérénité.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                to={agencesUrl}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary px-7 py-4 rounded-md font-semibold hover:bg-primary-foreground/90 shadow-lg transition-all"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Trouver une agence
              </Link>
              <a
                href={formatTel(telephone)}
                className="inline-flex items-center justify-center gap-3 border-2 border-primary-foreground text-primary-foreground px-7 py-4 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-all"
                aria-label={`Nous appeler au ${telephone}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Nous appeler au {telephone}
              </a>
            </div>
          </div>
        </section>

        {/* ─────────── 9. RASSURANCE ─────────── */}
        {(avis || (temoignages && temoignages.length > 0)) && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
              {avis && (
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 bg-secondary/60 border border-border rounded-full px-6 py-3">
                    <div className="flex items-center gap-0.5" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(avis.note) ? "fill-[hsl(var(--scf-gold))] text-[hsl(var(--scf-gold))]" : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-display text-lg text-foreground">
                      Avis client : {avis.note}/{avis.noteSur ?? 5}
                    </span>
                    {avis.source && (
                      <span className="text-sm text-muted-foreground">— {avis.source}</span>
                    )}
                  </div>
                </div>
              )}

              {temoignages && temoignages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {temoignages.map((t, i) => (
                    <blockquote
                      key={i}
                      className="bg-card border border-border rounded-xl p-6 text-left"
                    >
                      <p className="text-foreground/85 italic leading-relaxed mb-4 text-sm md:text-base">
                        « {t.texte} »
                      </p>
                      <footer className="text-sm text-muted-foreground font-medium">
                        — {t.auteur}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* ─────────── 10. STICKY MOBILE ─────────── */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t border-border shadow-[0_-4px_12px_-4px_hsl(var(--scf-blue)/0.15)]"
        role="region"
        aria-label="Actions rapides"
      >
        <div className="grid grid-cols-2 divide-x divide-border">
          <a
            href={formatTel(telephone)}
            className="flex items-center justify-center gap-2 py-4 text-primary font-semibold text-sm"
            aria-label={`Appeler le ${telephone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Appeler
          </a>
          <Link
            to={agencesUrl}
            className="flex items-center justify-center gap-2 py-4 text-primary font-semibold text-sm"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Trouver une agence
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrestationTemplate;
