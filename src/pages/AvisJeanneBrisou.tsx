import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { FairePart } from "@/components/avis/FairePart";
import { ShareBlock } from "@/components/avis/ShareBlock";
import { CondoleancesForm } from "@/components/avis/CondoleancesForm";
import { AgenceCard } from "@/components/avis/AgenceCard";
import { ActionsBand } from "@/components/avis/ActionsBand";
import { AutresAvis } from "@/components/avis/AutresAvis";
import { BandeauUrgence } from "@/components/avis/BandeauUrgence";

/**
 * Gabarit "Avis de décès" — données d'exemple : Jeanne BRISOU.
 *
 * Champs dynamiques (à brancher au CMS) regroupés au début pour clarté.
 */
const AvisJeanneBrisou = () => {
  // ── Données du défunt ──
  const defunt = {
    prenom: "Jeanne",
    nom: "BRISOU",
    nomJeuneFille: "Jeanne Meyneng",
    dateDecesISO: "2026-03-18",
    dateDecesAffichee: "18 mars 2026",
    ageMention: "dans sa 95ème année",
  };

  // ── Cérémonies ──
  const messe = {
    dateISO: "2026-03-27T14:30:00+01:00",
    dateAffichee: "jeudi 27 mars à 14h30",
    eglise: "Église Notre Dame de la Nativité",
    adresse: "Place Lachambeaudie, 75012 Paris",
  };
  const inhumation = {
    lieu: "Cimetière sud de Saint-Mandé",
    adresse: "25 rue du Général Archinard, 75012 Paris",
  };

  // ── Agence ──
  const agence = {
    nom: "SCF Paris 17",
    nomLong: "Agence Paris 17",
    ville: "Paris 17ème",
    telephone: "01 46 22 42 42",
    url: "/agences/paris-17",
  };

  const shareUrl = "https://s-c-f.org/avis/jeanne-brisou/";
  const titlePage = `Avis de décès de ${defunt.prenom} ${defunt.nom} (${defunt.dateDecesAffichee}) — SCF ${agence.ville}`;
  const metaDesc = `Avis de décès de ${defunt.prenom} ${defunt.nom}, décédée le ${defunt.dateDecesAffichee}. Messe d'obsèques le ${messe.dateAffichee} en ${messe.eglise}, Paris 12. Service Catholique des Funérailles.`;

  // ── JSON-LD ──
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${defunt.prenom} ${defunt.nom}`,
    givenName: defunt.prenom,
    familyName: defunt.nom,
    birthName: defunt.nomJeuneFille,
    deathDate: defunt.dateDecesISO,
    deathPlace: { "@type": "Place", name: "Paris, France" },
  };

  const messeLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Messe d'obsèques de ${defunt.prenom} ${defunt.nom}`,
    startDate: messe.dateISO,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: messe.eglise,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Place Lachambeaudie",
        postalCode: "75012",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Service Catholique des Funérailles",
      url: "https://s-c-f.org",
    },
  };

  const inhumationLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Inhumation de ${defunt.prenom} ${defunt.nom}`,
    startDate: messe.dateISO,
    location: {
      "@type": "Place",
      name: inhumation.lieu,
      address: {
        "@type": "PostalAddress",
        streetAddress: "25 rue du Général Archinard",
        postalCode: "75012",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Service Catholique des Funérailles — ${agence.nomLong}`,
    telephone: agence.telephone,
    url: `https://s-c-f.org${agence.url}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      postalCode: "75017",
      addressCountry: "FR",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://s-c-f.org/" },
      { "@type": "ListItem", position: 2, name: agence.ville, item: `https://s-c-f.org${agence.url}/` },
      { "@type": "ListItem", position: 3, name: `${defunt.prenom} ${defunt.nom}` },
    ],
  };

  // ── Maillage interne ──
  const autresAvis = [
    { name: "Marie-Hélène DURAND", dateAffichee: "12 mars 2026", dateISO: "2026-03-12", href: "#" },
    { name: "Pierre LEFÈVRE", dateAffichee: "5 mars 2026", dateISO: "2026-03-05", href: "#" },
    { name: "Suzanne MARTIN", dateAffichee: "28 février 2026", dateISO: "2026-02-28", href: "#" },
  ];

  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`avis de décès ${defunt.prenom} ${defunt.nom}, obsèques Paris 12, pompes funèbres catholiques Paris, SCF Paris 17, funérailles catholiques`} />
        <link rel="canonical" href={shareUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Avis de décès de ${defunt.prenom} ${defunt.nom}`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:site_name" content="Service Catholique des Funérailles" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Avis de décès de ${defunt.prenom} ${defunt.nom}`} />
        <meta name="twitter:description" content={metaDesc} />

        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
        <script type="application/ld+json">{JSON.stringify(messeLd)}</script>
        <script type="application/ld+json">{JSON.stringify(inhumationLd)}</script>
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      {/* ── En-tête bleu SCF ── */}
      <section
        className="relative bg-[hsl(var(--scf-blue))]"
        style={{ minHeight: 280 }}
      >
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: 280, paddingTop: 88, paddingBottom: 44 }}
        >
          <nav aria-label="Fil d'Ariane" className="text-white/75 mb-7 font-sans" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link to={agence.url} className="hover:text-white transition-colors">
              {agence.ville}
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-white/90">{defunt.prenom} {defunt.nom}</span>
          </nav>

          <h1
            className="font-display text-white"
            style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            Avis de décès de
            <br />
            <span style={{ fontWeight: 700 }}>{defunt.prenom} {defunt.nom}</span>
          </h1>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <section className="bg-background" style={{ paddingTop: 44, paddingBottom: 56 }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne gauche — l'avis */}
            <div className="flex-1 lg:w-2/3 space-y-7">
              <FairePart
                defuntPrenom={defunt.prenom}
                defuntNom={defunt.nom}
                defuntNomJeuneFille={defunt.nomJeuneFille}
                dateDeces={defunt.dateDecesISO}
                dateDecesAffichee={defunt.dateDecesAffichee}
                ageMention={defunt.ageMention}
                proches={
                  <>
                    <p>Jacques BRISOU et son épouse Dominique,</p>
                    <p>Jean-Pierre BRISOU et son épouse Anne-Violaine,</p>
                    <p className="text-muted-foreground italic" style={{ fontSize: 14 }}>ses enfants</p>

                    <p className="mt-5">Marine, Grégoire-Marie et son épouse Lucile,</p>
                    <p>Timothée, Bertrand,</p>
                    <p className="text-muted-foreground italic" style={{ fontSize: 14 }}>ses petits-enfants</p>

                    <p className="mt-5">Sibyle, Faustine et Alban,</p>
                    <p className="text-muted-foreground italic" style={{ fontSize: 14 }}>ses arrière-petits-enfants</p>
                  </>
                }
                messeDateISO={messe.dateISO}
                messeTexte={
                  <>
                    La messe d'obsèques sera célébrée le <strong>{messe.dateAffichee}</strong> en
                    l'<strong>{messe.eglise}</strong> (
                    <address style={{ display: "inline", fontStyle: "normal" }}>
                      {messe.adresse}
                    </address>
                    ).
                  </>
                }
                inhumationTexte={
                  <>
                    L'inhumation aura lieu au <strong>{inhumation.lieu}</strong> (
                    <address style={{ display: "inline", fontStyle: "normal" }}>
                      {inhumation.adresse}
                    </address>
                    ).
                  </>
                }
                famillesAdresses={
                  <>
                    <p>
                      <span className="font-medium text-foreground">Jacques et Dominique BRISOU</span>
                      <br />
                      <address style={{ display: "inline", fontStyle: "normal" }} className="text-muted-foreground">
                        2 rue Corbineau, 75012 Paris
                      </address>
                    </p>
                    <p className="mt-3">
                      <span className="font-medium text-foreground">Jean-Pierre et Anne-Violaine BRISOU</span>
                      <br />
                      <address style={{ display: "inline", fontStyle: "normal" }} className="text-muted-foreground">
                        20 avenue de Chartres, 60500 Chantilly
                      </address>
                    </p>
                  </>
                }
                agenceNom={agence.nomLong}
                agenceUrl={agence.url}
                datePublication="20 mars 2026"
              />

              <ActionsBand />

              <AutresAvis agenceVille={agence.ville} items={autresAvis} />
            </div>

            {/* Colonne droite — actions (sticky desktop) */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-5">
                <ShareBlock
                  url={shareUrl}
                  title={`Avis de décès de ${defunt.prenom} ${defunt.nom}`}
                />
                <CondoleancesForm defuntLabel={`${defunt.prenom} ${defunt.nom}`} />
                <AgenceCard
                  agenceNom={agence.nom}
                  agenceTelephone={agence.telephone}
                  agenceUrl={agence.url}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BandeauUrgence />

      <Footer />
    </>
  );
};

export default AvisJeanneBrisou;
