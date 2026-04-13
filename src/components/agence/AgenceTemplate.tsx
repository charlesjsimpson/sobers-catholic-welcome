import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Clock, CheckCircle, AlertTriangle, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgenceContactForm from "./AgenceContactForm";

export interface AgenceData {
  ville: string;
  arrondissement?: string;
  adresse: string;
  codePostal: string;
  telephone: string;
  telephoneDisplay: string;
  coordonnees: { latitude: number; longitude: number };
  dateOuverture: string;
  responsable?: string;
  horaires: string;
  horairesSamedi?: string;
  googleMapsUrl: string;
  slug: string;
  photos: string[];
  collaborateurs?: { prenom: string; nom: string; role: string; photo?: string }[];
  logoPrefecture?: string;
  prefectureLabel?: string;
  avis?: { auteur: string; note: number; texte: string; date: string }[];
  sections: {
    presentation: string;
    prestations: string;
    demarches: string;
    prevoyance: string;
    identite: string;
  };
  faq: { question: string; reponse: string }[];
  openingHoursSpec: { dayOfWeek: string | string[]; opens: string; closes: string }[];
}

const AgenceTemplate = ({ data }: { data: AgenceData }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const villeLabel = data.arrondissement ? `${data.ville} ${data.arrondissement}` : data.ville;
  const fullTitle = `Pompes funèbres catholiques à ${villeLabel} | Service Catholique des Funérailles`;
  const metaDescription = `Pompes funèbres catholiques à ${villeLabel}. Obsèques catholiques, messe de funérailles, inhumation, crémation. Disponible 24h/24 7j/7. ${data.telephoneDisplay}.`;
  const canonicalUrl = `https://s-c-f.org/agences/${data.slug}/`;

  const jsonLdFuneralHome = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: `Service Catholique des Funérailles — ${villeLabel}`,
    url: canonicalUrl,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.adresse,
      addressLocality: data.ville,
      postalCode: data.codePostal,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.coordonnees.latitude,
      longitude: data.coordonnees.longitude,
    },
    openingHoursSpecification: data.openingHoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "€€",
    description: metaDescription,
    areaServed: `${villeLabel} et environs`,
    founder: { "@type": "Person", name: "Christian de Cacqueray" },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://s-c-f.org/" },
      { "@type": "ListItem", position: 2, name: "Nos agences", item: "https://s-c-f.org/agences/" },
      { "@type": "ListItem", position: 3, name: villeLabel, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLdFuneralHome)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-muted border-b border-border pt-24 pb-3" aria-label="Fil d'Ariane">
          <div className="container mx-auto px-6 max-w-5xl">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li>/</li>
              <li><Link to="/contacter-une-agence" className="hover:text-primary transition-colors">Nos agences</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">{villeLabel}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-primary py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            {data.prefectureLabel && (
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 text-primary-foreground text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  {data.prefectureLabel}
                </span>
                {data.logoPrefecture && (
                  <img src={data.logoPrefecture} alt={data.prefectureLabel} className="h-12 w-auto" loading="lazy" />
                )}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground text-center mb-8 leading-tight">
              Pompes funèbres catholiques à {villeLabel}
            </h1>

            {/* Info bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-primary-foreground/90 text-sm md:text-base">
              <a href={`tel:${data.telephone}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                <span className="font-bold">Urgence 7j/7 24h/24 — {data.telephoneDisplay}</span>
              </a>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {data.adresse}, {data.codePostal} {data.ville}
              </span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {data.horaires}{data.horairesSamedi && ` · ${data.horairesSamedi}`}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${data.telephone}`}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors min-w-[280px]"
              >
                <Phone className="w-5 h-5" />
                Nous appeler — {data.telephoneDisplay}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-colors min-w-[280px]"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>

        {/* Carrousel photos */}
        {data.photos.length > 0 && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="rounded-xl overflow-hidden shadow-lg relative">
                <img
                  src={data.photos[currentPhoto]}
                  alt={`Agence SCF ${villeLabel} - Photo ${currentPhoto + 1}`}
                  className="w-full h-72 md:h-96 object-cover"
                />
                {data.photos.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentPhoto((p) => (p - 1 + data.photos.length) % data.photos.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg"
                      aria-label="Photo précédente"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={() => setCurrentPhoto((p) => (p + 1) % data.photos.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg"
                      aria-label="Photo suivante"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {data.photos.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPhoto(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentPhoto ? "bg-primary" : "bg-background/60"}`}
                          aria-label={`Photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Section 1 — Présentation */}
        <section className="py-14 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Un accompagnement funéraire chrétien au cœur du {data.arrondissement ? `${data.arrondissement} arrondissement` : villeLabel}
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base" dangerouslySetInnerHTML={{ __html: data.sections.presentation }} />
          </div>
        </section>

        {/* Section 2 — Prestations */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Organisation des obsèques catholiques à {villeLabel}
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base" dangerouslySetInnerHTML={{ __html: data.sections.prestations }} />
          </div>
        </section>

        {/* Section 3 — Démarches */}
        <section className="py-14 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Démarches après un décès à {villeLabel}
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base" dangerouslySetInnerHTML={{ __html: data.sections.demarches }} />
          </div>
        </section>

        {/* Section 4 — Prévoyance */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Prévoyance funéraire — préparer ses obsèques à l'avance
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base" dangerouslySetInnerHTML={{ __html: data.sections.prevoyance }} />
          </div>
        </section>

        {/* Section 5 — Identité catholique */}
        <section className="py-14 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Le SCF {villeLabel} — notre identité catholique
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base" dangerouslySetInnerHTML={{ __html: data.sections.identite }} />
          </div>
        </section>

        {/* Section 6 — FAQ statique */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
              Questions fréquentes — obsèques à {villeLabel}
            </h2>
            <div className="space-y-6">
              {data.faq.map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">
                    {i + 1}. {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.reponse}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — Formulaire de contact */}
        <section id="contact" className="py-14 bg-secondary">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Être recontacté par l'agence {villeLabel}
            </h2>
            <AgenceContactForm agenceLabel={villeLabel} />
          </div>
        </section>

        {/* Section 8 — Carte + Adresse */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Localiser l'agence SCF {villeLabel}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{data.adresse}</p>
                    <p>{data.codePostal} {data.ville}</p>
                  </div>
                </div>
                <a href={`tel:${data.telephone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold">{data.telephoneDisplay}</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p>{data.horaires}</p>
                    {data.horairesSamedi && <p>{data.horairesSamedi}</p>}
                  </div>
                </div>
                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors mt-2"
                >
                  Voir sur Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  title={`Carte agence SCF ${villeLabel}`}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(data.adresse + ", " + data.codePostal + " " + data.ville)}`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 — Avis Google */}
        {data.avis && data.avis.length > 0 && (
          <section className="py-14 bg-secondary">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
                Avis de nos familles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {data.avis.map((avis, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < avis.note ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">"{avis.texte}"</p>
                    <p className="text-foreground font-semibold text-sm">{avis.auteur}</p>
                    <p className="text-muted-foreground text-xs">{avis.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 10 — Maillage interne */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
              En savoir plus
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { to: "/organiser-des-obseques", label: "Organiser des obsèques" },
                { to: "/organiser-des-obseques", label: "Démarches après un décès" },
                { to: "/services/prevoyance", label: "Anticiper ses obsèques" },
                { to: "/contacter-une-agence", label: "Toutes nos agences" },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="flex items-center justify-center gap-2 bg-card border border-border/50 rounded-xl px-4 py-4 text-center font-semibold text-foreground hover:border-primary hover:text-primary transition-colors shadow-sm"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA urgence */}
        <section className="py-10 bg-red-50 border-t border-red-200">
          <div className="container mx-auto px-6 text-center">
            <p className="flex items-center justify-center gap-2 text-foreground font-bold text-lg mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
            </p>
            <a
              href={`tel:${data.telephone}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler le {data.telephoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgenceTemplate;
