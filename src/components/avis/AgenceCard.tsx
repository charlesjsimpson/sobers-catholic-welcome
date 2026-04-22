import { Link } from "react-router-dom";
import { PhoneIcon } from "./AvisIcons";

interface AgenceCardProps {
  agenceNom: string;          // "SCF Paris 17"
  agenceTelephone: string;    // "01 46 22 42 42"
  agenceUrl: string;          // "/agences/paris-17"
}

/** Bloc "Obsèques organisées par" — téléphone cliquable. */
export const AgenceCard = ({ agenceNom, agenceTelephone, agenceUrl }: AgenceCardProps) => {
  const telHref = `tel:${agenceTelephone.replace(/\s+/g, "")}`;
  return (
    <div className="bg-card border border-border/50 shadow-sm" style={{ borderRadius: 10, padding: 22 }}>
      <p className="text-muted-foreground font-sans" style={{ fontSize: 13, marginBottom: 4 }}>
        Obsèques organisées par
      </p>
      <p className="text-foreground font-display font-semibold" style={{ fontSize: 17 }}>
        {agenceNom}
      </p>

      <a
        href={telHref}
        className="mt-3 flex items-center gap-2 text-[hsl(var(--scf-blue-dark))] hover:text-[hsl(var(--scf-blue))] transition-colors font-medium"
        style={{ fontSize: 17 }}
        aria-label={`Appeler l'agence ${agenceNom} au ${agenceTelephone}`}
      >
        <PhoneIcon style={{ width: 18, height: 18 }} aria-hidden="true" />
        <span>{agenceTelephone}</span>
      </a>

      <Link
        to={agenceUrl}
        className="text-primary hover:underline mt-3 inline-block font-medium"
        style={{ fontSize: 14 }}
      >
        Contacter l'agence →
      </Link>
    </div>
  );
};
