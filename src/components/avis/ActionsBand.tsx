import { Link } from "react-router-dom";
import prierImg from "@/assets/picto-actions/prier.png";
import fleursImg from "@/assets/picto-actions/fleurs.png";
import donImg from "@/assets/picto-actions/don.png";
import condoleancesImg from "@/assets/picto-actions/condoleances.png";

/**
 * Bande de 4 actions sous l'avis (cartes cliquables, hover subtil).
 * Pictogrammes illustrés (PNG) — style sobre catholique.
 * La 4e renvoie en ancre vers le formulaire de condoléances (#condoleances).
 */

interface ActionCard {
  img: string;
  alt: string;
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

const cards: ActionCard[] = [
  { img: prierImg, alt: "Mains en prière", label: "Prier", href: "/ressources/prieres" },
  {
    img: fleursImg,
    alt: "Bouquet de fleurs",
    label: "Offrir des fleurs",
    href: "https://www.agitateur-floral.com",
    external: true,
  },
  { img: donImg, alt: "Main déposant un cœur dans une urne", label: "Faire un don", href: "/associations-dons" },
  {
    img: condoleancesImg,
    alt: "Stylo écrivant sur une feuille",
    label: "Présenter ses condoléances",
    href: "#condoleances",
    ariaLabel: "Aller au formulaire de condoléances",
  },
];

export const ActionsBand = () => {
  const className =
    "group flex flex-col items-center justify-start gap-3 bg-card border border-border/60 hover:border-[hsl(var(--scf-blue)/0.4)] hover:shadow-[0_4px_16px_-6px_hsl(var(--scf-blue)/0.2)] hover:-translate-y-0.5 transition-all text-center";
  const style = { borderRadius: 12, padding: "20px 14px 18px", minHeight: 150 } as const;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {cards.map(({ img, alt, label, href, external, ariaLabel }) => {
        const inner = (
          <>
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="object-contain"
              style={{ width: 72, height: 72 }}
            />
            <span
              className="text-foreground font-medium font-sans leading-tight"
              style={{ fontSize: 13.5 }}
            >
              {label}
            </span>
          </>
        );

        if (external) {
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label={ariaLabel ?? label}
              className={className}
              style={style}
            >
              {inner}
            </a>
          );
        }
        if (href.startsWith("#")) {
          return (
            <a key={label} href={href} aria-label={ariaLabel ?? label} className={className} style={style}>
              {inner}
            </a>
          );
        }
        return (
          <Link key={label} to={href} aria-label={ariaLabel ?? label} className={className} style={style}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
};
