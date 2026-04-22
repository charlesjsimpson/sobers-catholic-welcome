import { Link } from "react-router-dom";
import { PrayingHandsIcon, FlowerIcon, HeartIcon, FeatherIcon } from "./AvisIcons";

/**
 * Bande de 4 actions sous l'avis (cartes cliquables, hover subtil).
 * La 4e renvoie en ancre vers le formulaire de condoléances (#condoleances).
 */

interface ActionCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

const cards: ActionCard[] = [
  { icon: PrayingHandsIcon, label: "Prier", href: "/ressources/prieres" },
  {
    icon: FlowerIcon,
    label: "Offrir des fleurs",
    href: "https://www.agitateur-floral.com",
    external: true,
  },
  { icon: HeartIcon, label: "Faire un don", href: "/associations-dons" },
  {
    icon: FeatherIcon,
    label: "Présenter ses condoléances",
    href: "#condoleances",
    ariaLabel: "Aller au formulaire de condoléances",
  },
];

export const ActionsBand = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {cards.map(({ icon: Icon, label, href, external, ariaLabel }) => {
        const className =
          "group flex flex-col items-center justify-center gap-3 bg-card border border-border/60 hover:border-[hsl(var(--scf-blue)/0.4)] hover:shadow-[0_4px_16px_-6px_hsl(var(--scf-blue)/0.2)] hover:-translate-y-0.5 transition-all text-center";
        const style = { borderRadius: 12, padding: "22px 14px", minHeight: 130 } as const;
        const inner = (
          <>
            <Icon
              className="text-[hsl(var(--scf-blue))]"
              style={{ width: 36, height: 36 }}
              aria-hidden="true"
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
