import { Link } from "react-router-dom";
import { ReactNode } from "react";

/**
 * Encadré "faire-part" — l'avis de décès lui-même.
 * Texte centré, serif, interligne généreux.
 *
 * Champs dynamiques exposés via props pour branchement CMS.
 */

interface FairePartProps {
  proches: ReactNode;                  // Texte riche (enfants, petits-enfants, arrière-pp)
  defuntPrenom: string;
  defuntNom: string;
  defuntNomJeuneFille?: string;
  dateDeces: string;                   // ISO ex: "2026-03-18"
  dateDecesAffichee: string;           // ex: "18 mars 2026"
  ageMention?: string;                 // ex: "dans sa 95ème année"
  citationBiblique?: string;           // optionnel
  messeDateISO: string;                // datetime complet
  messeTexte: ReactNode;               // phrase complète messe + lieu
  inhumationTexte?: ReactNode;
  famillesAdresses?: ReactNode;
  agenceNom: string;                   // ex: "Agence Paris 17"
  agenceUrl: string;                   // ex: "/agences/paris-17"
  prevoyanceMention?: ReactNode;
  datePublication?: string;            // ex: "20 mars 2026"
}

export const FairePart = ({
  proches,
  defuntPrenom,
  defuntNom,
  defuntNomJeuneFille,
  dateDeces,
  dateDecesAffichee,
  ageMention,
  citationBiblique,
  messeDateISO,
  messeTexte,
  inhumationTexte,
  famillesAdresses,
  agenceNom,
  agenceUrl,
  prevoyanceMention,
  datePublication,
}: FairePartProps) => {
  return (
    <article
      className="bg-card border border-border/60 shadow-[0_2px_20px_-8px_hsl(var(--scf-blue)/0.15)]"
      style={{ borderRadius: 12, padding: "44px clamp(24px, 5vw, 56px)" }}
    >
      {/* Citation biblique optionnelle, en exergue */}
      {citationBiblique && (
        <p
          className="font-display italic text-center text-muted-foreground mb-8"
          style={{ fontSize: 15, lineHeight: 1.7 }}
        >
          « {citationBiblique} »
        </p>
      )}

      {/* Liste des proches */}
      <div
        className="font-sans text-foreground text-center"
        style={{ fontSize: 15.5, lineHeight: 2 }}
      >
        {proches}
      </div>

      <p
        className="font-sans text-muted-foreground text-center mt-7"
        style={{ fontSize: 15, lineHeight: 1.7 }}
      >
        ont la tristesse de vous faire part du rappel à Dieu de
      </p>

      {/* Nom du défunt — H2 sémantique */}
      <div className="text-center my-7">
        <h2
          className="font-display text-primary"
          style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}
        >
          {defuntPrenom}{" "}
          <span style={{ fontWeight: 700 }}>{defuntNom}</span>
        </h2>
        {defuntNomJeuneFille && (
          <p
            className="font-display italic text-primary/75 mt-1"
            style={{ fontSize: 22, fontWeight: 400 }}
          >
            née {defuntNomJeuneFille}
          </p>
        )}
      </div>

      <p
        className="font-sans text-center text-foreground"
        style={{ fontSize: 15.5, lineHeight: 1.7 }}
      >
        survenu le{" "}
        <time dateTime={dateDeces} className="font-medium">
          {dateDecesAffichee}
        </time>
        {ageMention && <> {ageMention}</>}.
      </p>

      <div className="border-t border-border/50 my-7" />

      {/* Messe d'obsèques */}
      <section>
        <h3
          className="font-display text-foreground text-center"
          style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, letterSpacing: "0.02em", textTransform: "uppercase" }}
        >
          Célébration des obsèques
        </h3>
        <p
          className="font-sans text-foreground text-center"
          style={{ fontSize: 15, lineHeight: 1.85 }}
        >
          <time dateTime={messeDateISO}>{messeTexte}</time>
        </p>
      </section>

      {inhumationTexte && (
        <>
          <div className="border-t border-border/50 my-7" />
          <section>
            <h3
              className="font-display text-foreground text-center"
              style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, letterSpacing: "0.02em", textTransform: "uppercase" }}
            >
              Inhumation
            </h3>
            <p
              className="font-sans text-foreground text-center"
              style={{ fontSize: 15, lineHeight: 1.85 }}
            >
              {inhumationTexte}
            </p>
          </section>
        </>
      )}

      {famillesAdresses && (
        <>
          <div className="border-t border-border/50 my-7" />
          <section>
            <h3
              className="font-display text-foreground text-center"
              style={{ fontSize: 17, fontWeight: 600, marginBottom: 12, letterSpacing: "0.02em", textTransform: "uppercase" }}
            >
              Coordonnées de la famille
            </h3>
            <div
              className="font-sans text-foreground text-center"
              style={{ fontSize: 14.5, lineHeight: 1.85 }}
            >
              {famillesAdresses}
            </div>
          </section>
        </>
      )}

      {prevoyanceMention && (
        <>
          <div className="border-t border-border/50 my-7" />
          <p className="text-center text-muted-foreground font-sans" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
            {prevoyanceMention}
          </p>
        </>
      )}

      <div className="border-t border-border/50 my-7" />

      <p className="text-center font-sans" style={{ fontSize: 14 }}>
        <span className="text-muted-foreground">Service Catholique des Funérailles — </span>
        <Link to={agenceUrl} className="text-primary hover:underline font-medium">
          {agenceNom}
        </Link>
      </p>

      {datePublication && (
        <p className="text-center text-muted-foreground/70 mt-4" style={{ fontSize: 12 }}>
          Publié le {datePublication}
        </p>
      )}
    </article>
  );
};
