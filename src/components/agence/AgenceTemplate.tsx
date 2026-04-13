import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Clock, CheckCircle, AlertTriangle, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgenceContactForm from "./AgenceContactForm";

export interface AgenceAvis {
  auteur: string;
  note: number;
  texte: string;
  date: string;
}

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
  googleReviewsUrl?: string;
  slug: string;
  photos: string[];
  collaborateurs?: { prenom: string; nom: string; role: string; photo?: string }[];
  logoPrefecture?: string;
  prefectureLabel?: string;
  avis?: AgenceAvis[];
  noteGlobale?: number;
  sections: {
    presentation: string;
    prestations: string;
    demarches: string;
    prevoyance: string;
    identite: string;
  };
  faq: { question: string; reponse: string }[];
  openingHoursSpec: { dayOfWeek: string | string[]; opens: string; closes: string }[];
  contactFormTitle?: string;
  contactMotifs?: { value: string; label: string }[];
}

const AgenceTemplate = ({ data }: { data: AgenceData }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const villeLabel = data.arrondissement ? `${data.ville} ${data.arrondissement}` : data.ville;
  const fullTitle = `Pompes funèbres catholiques ${villeLabel} — SCF | ${data.telephoneDisplay}`;
  const metaDescription = `Obsèques catholiques à ${villeLabel}, disponibles 24h/24. Messe de funérailles, inhumation, crémation. Agence SCF, ${data.adresse}. Appelez le ${data.telephoneDisplay}.`;
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

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.reponse },
    })),
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLdFuneralHome)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <nav className="bg-muted border-b border-border py-1.5" aria-label="Fil d'Ariane">
          <div className="container mx-auto px-4 max-w-6xl">
            <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li>›</li>
              <li><Link to="/contacter-une-agence" className="hover:text-primary transition-colors">Nos agences</Link></li>
              <li>›</li>
              <li className="text-foreground font-medium">{villeLabel}</li>
            </ol>
          </div>
        </nav>

        {/* Hero compact */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            {data.prefectureLabel && (
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 text-primary-foreground text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  {data.prefectureLabel}
                </span>
                {data.logoPrefecture && (
                  <img src={data.logoPrefecture} alt={data.prefectureLabel} className="h-8 w-auto" loading="lazy" />
                )}
              </div>
            )}

            <h1 className="text-xl md:text-2xl font-display font-medium text-primary-foreground mb-3 leading-tight">
              Pompes funèbres catholiques à {villeLabel}
            </h1>

            {/* Info bar */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 text-primary-foreground/90 text-xs">
              <a href={`tel:${data.telephone}`} className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="font-bold">{data.telephoneDisplay} — 7j/7 24h/24</span>
              </a>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {data.adresse}, {data.codePostal} {data.ville}
              </span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {data.horaires}{data.horairesSamedi && ` · ${data.horairesSamedi}`}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-2">
              <a
                href={`tel:${data.telephone}`}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                Appeler — {data.telephoneDisplay}
              </a>
              <a
                href="#formulaire"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
              >
                Être recontacté
              </a>
            </div>
          </div>
        </section>

        {/* 2-column layout */}
        <div className="container mx-auto px-4 max-w-6xl py-5">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column — 65% */}
            <div className="lg:w-[65%] space-y-5">
              {/* Photo */}
              {data.photos.length > 0 && (
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    src={data.photos[currentPhoto]}
                    alt={`Agence SCF ${villeLabel} - Photo ${currentPhoto + 1}`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  {data.photos.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentPhoto((p) => (p - 1 + data.photos.length) % data.photos.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1 shadow"
                        aria-label="Photo précédente"
                      >
                        <ChevronLeft className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => setCurrentPhoto((p) => (p + 1) % data.photos.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1 shadow"
                        aria-label="Photo suivante"
                      >
                        <ChevronRight className="w-4 h-4 text-foreground" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {data.photos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPhoto(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === currentPhoto ? "bg-primary" : "bg-background/60"}`}
                            aria-label={`Photo ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Presentation */}
              <ContentSection
                title={`Un accompagnement funéraire chrétien au cœur du ${data.arrondissement ? `${data.arrondissement} arrondissement` : villeLabel}`}
                html={data.sections.presentation}
              />

              {/* Prestations */}
              <ContentSection
                title={`Organisation des obsèques catholiques à ${villeLabel}`}
                html={data.sections.prestations}
              />

              {/* Demarches */}
              <ContentSection
                title={`Démarches après un décès à ${villeLabel}`}
                html={data.sections.demarches}
              />

              {/* Prevoyance */}
              <ContentSection
                title="Préparer ses obsèques à l'avance"
                html={data.sections.prevoyance}
              />

              {/* Identite */}
              <ContentSection
                title="Notre identité catholique"
                html={data.sections.identite}
              />

              {/* Avis */}
              {data.avis && data.avis.length > 0 && (
                <div>
                  <h2 className="text-[15px] font-display font-medium text-foreground mb-1">
                    Avis des familles
                    {data.noteGlobale && (
                      <span className="ml-2 text-xs text-muted-foreground font-normal">
                        {data.noteGlobale}/5
                        <span className="ml-1 text-yellow-500">{"★".repeat(Math.round(data.noteGlobale))}</span>
                      </span>
                    )}
                  </h2>
                  <div className="space-y-2">
                    {data.avis.map((avis, i) => (
                      <div key={i} className="bg-card rounded-md p-3 border border-border/50">
                        <div className="flex items-center gap-0.5 mb-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-3 h-3 ${j < avis.note ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`} />
                          ))}
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-1">"{avis.texte}"</p>
                        <p className="text-foreground font-medium text-xs">{avis.auteur} <span className="text-muted-foreground font-normal">· {avis.date}</span></p>
                      </div>
                    ))}
                  </div>
                  {data.googleReviewsUrl && (
                    <a
                      href={data.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-xs font-medium mt-2 transition-colors"
                    >
                      Voir tous nos avis sur Google
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-[15px] font-display font-medium text-foreground mb-2">
                  Questions fréquentes — obsèques à {villeLabel}
                </h2>
                <div className="space-y-2">
                  {data.faq.map((item, i) => (
                    <div key={i} className="bg-secondary rounded-md px-3.5 py-2.5">
                      <h3 className="text-[13px] font-medium text-foreground mb-1">
                        {i + 1}. {item.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-[13px]">{item.reponse}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-[15px] font-display font-medium text-foreground mb-2">
                  Localiser l'agence SCF {villeLabel}
                </h2>
                <div className="grid md:grid-cols-2 gap-4 items-start">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{data.adresse}</p>
                        <p>{data.codePostal} {data.ville}</p>
                      </div>
                    </div>
                    <a href={`tel:${data.telephone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-medium">{data.telephoneDisplay}</span>
                    </a>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p>{data.horaires}</p>
                        {data.horairesSamedi && <p>{data.horairesSamedi}</p>}
                      </div>
                    </div>
                    <a
                      href={data.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors mt-1"
                    >
                      Obtenir l'itinéraire
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      title={`Carte agence SCF ${villeLabel}`}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(data.adresse + ", " + data.codePostal + " " + data.ville)}`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Maillage interne */}
              <div>
                <h3 className="text-[13px] font-medium text-foreground mb-2">Voir aussi</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { to: "/organiser-des-obseques", label: "Organiser des obsèques" },
                    { to: "/organiser-des-obseques", label: "Démarches après un décès" },
                    { to: "/services/prevoyance", label: "Anticiper ses obsèques" },
                    { to: "/contacter-une-agence", label: "Toutes nos agences" },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      to={link.to}
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — 35% sticky */}
            <div className="lg:w-[35%]">
              <div className="lg:sticky lg:top-24 space-y-4">
                {/* Infos pratiques card */}
                <div className="bg-card rounded-lg border border-border p-4">
                  <h3 className="text-sm font-display font-medium text-foreground mb-3">
                    Agence {villeLabel}
                  </h3>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{data.adresse}, {data.codePostal} {data.ville}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-medium">{data.telephoneDisplay}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0" />
                      <span>Urgence : 7j/7 — 24h/24</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{data.horaires}{data.horairesSamedi && ` · ${data.horairesSamedi}`}</span>
                    </div>
                    {data.prefectureLabel && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{data.prefectureLabel}</span>
                      </div>
                    )}
                  </div>
                  <a
                    href={`tel:${data.telephone}`}
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-md transition-colors w-full mt-3"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Appeler maintenant
                  </a>
                </div>

                {/* Contact form */}
                <div id="formulaire">
                  <AgenceContactForm
                    agenceLabel={villeLabel}
                    formTitle={data.contactFormTitle}
                    motifs={data.contactMotifs}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA urgence bottom */}
        <section className="py-4 bg-red-50 border-t border-red-200">
          <div className="container mx-auto px-4 text-center">
            <p className="flex items-center justify-center gap-1.5 text-foreground font-bold text-xs mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              Si le décès a déjà eu lieu, contactez-nous par téléphone
            </p>
            <a
              href={`tel:${data.telephone}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              Appeler le {data.telephoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ContentSection = ({ title, html }: { title: string; html: string }) => (
  <div>
    <h2 className="text-[15px] font-display font-medium text-foreground mb-1.5">{title}</h2>
    <div
      className="text-muted-foreground leading-relaxed text-[13px] space-y-2 [&_a]:text-primary [&_a]:font-medium [&_a:hover]:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
);

export default AgenceTemplate;
