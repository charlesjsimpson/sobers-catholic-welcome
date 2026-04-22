import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "./AvisIcons";

interface BandeauUrgenceProps {
  telephonePrincipal?: string;       // ex: "01 44 38 80 80"
  telephoneAffiche?: string;
}

/**
 * Bandeau d'urgence en bas de page — fond cream/gris très clair.
 * Numéro principal cliquable + CTA "Trouver une agence".
 */
export const BandeauUrgence = ({
  telephonePrincipal = "01 44 38 80 80",
  telephoneAffiche = "01 44 38 80 80",
}: BandeauUrgenceProps) => {
  const telHref = `tel:${telephonePrincipal.replace(/\s+/g, "")}`;
  return (
    <section
      className="bg-[hsl(var(--scf-cream))] border-t border-border/40"
      style={{ paddingTop: 36, paddingBottom: 36 }}
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-foreground/80 font-sans" style={{ fontSize: 14.5, marginBottom: 14 }}>
          Si le décès vient d'avoir lieu, contactez une agence SCF immédiatement.
        </p>

        <a
          href={telHref}
          className="inline-flex items-center gap-2 text-[hsl(var(--scf-blue-dark))] hover:text-[hsl(var(--scf-blue))] font-display font-semibold transition-colors"
          style={{ fontSize: 28 }}
          aria-label={`Appeler le ${telephoneAffiche}`}
        >
          <PhoneIcon style={{ width: 26, height: 26 }} aria-hidden="true" />
          <span>{telephoneAffiche}</span>
        </a>

        <div className="mt-5">
          <Button asChild variant="outline">
            <Link to="/contacter-une-agence">Trouver une agence</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
