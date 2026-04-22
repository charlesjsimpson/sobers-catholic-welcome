import * as React from "react";

/**
 * Icônes SVG monochromes inline pour les pages "Avis de décès".
 * Style sobre, catholique, pleine couleur via `currentColor`.
 * À utiliser avec `text-[hsl(var(--scf-blue))]` côté parent.
 */

type IconProps = React.SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/** Mains jointes en prière — Prier */
export const PrayingHandsIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9.5 3.5c-.7 0-1.3.6-1.3 1.3v7.6c0 .3-.1.5-.3.7l-2.9 3.1c-.5.5-.5 1.3-.1 1.8l1.6 2.1c.3.3.7.5 1.1.5H11V4.8c0-.7-.6-1.3-1.5-1.3Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M14.5 3.5c.7 0 1.3.6 1.3 1.3v7.6c0 .3.1.5.3.7l2.9 3.1c.5.5.5 1.3.1 1.8l-1.6 2.1c-.3.3-.7.5-1.1.5H13V4.8c0-.7.6-1.3 1.5-1.3Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M11 20.6V4.8M13 20.6V4.8" />
  </svg>
);

/** Bouquet / fleur stylisée — Offrir des fleurs */
export const FlowerIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="2.2" fill="currentColor" fillOpacity="0.12" />
    <path d="M12 5.8c0-1.5 1.2-2.7 2.7-2.7M12 5.8c0-1.5-1.2-2.7-2.7-2.7M9.8 8c-1.5 0-2.7-1.2-2.7-2.7M14.2 8c1.5 0 2.7-1.2 2.7-2.7M9.8 8.4c-1.5.4-2.4 1.9-2 3.4M14.2 8.4c1.5.4 2.4 1.9 2 3.4" />
    <path d="M12 10.2v10.6M9 13.5c-.8 1.5-.5 3.4.8 4.5M15 13.5c.8 1.5.5 3.4-.8 4.5" />
  </svg>
);

/** Cœur ouvert — Faire un don */
export const HeartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 20.5s-7-4.3-7-10A4 4 0 0 1 12 7.5 4 4 0 0 1 19 10.5c0 5.7-7 10-7 10Z" fill="currentColor" fillOpacity="0.12" />
  </svg>
);

/** Plume / écriture — Présenter ses condoléances */
export const FeatherIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M19 5c0 7-5 12-12 12H4l8-8M19 5c-3 0-7 1-10 4M19 5l-7 7" fill="currentColor" fillOpacity="0.08" />
  </svg>
);

/** Téléphone */
export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 4.5h3l1.5 4-2 1.2a11 11 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6.5a2 2 0 0 1 2-2Z" fill="currentColor" fillOpacity="0.08" />
  </svg>
);

/** Cierge / flamme votive — alternative pour Prier */
export const CandleIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3c1.2 1 1.8 2 1.8 3 0 1.2-1.8 1.5-1.8 3 0-1.5-1.8-1.8-1.8-3 0-1 .6-2 1.8-3Z" fill="currentColor" fillOpacity="0.18" />
    <rect x="9.5" y="9" width="5" height="11" rx="1" fill="currentColor" fillOpacity="0.08" />
    <path d="M8 20.5h8" />
  </svg>
);

/* ── Réseaux sociaux (monochromes) ── */

export const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);

export const TwitterXIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 3H21l-6.52 7.45L22 21h-6.156l-4.82-6.31L5.5 21H2.74l6.97-7.97L2 3h6.32l4.36 5.77L18.244 3Zm-1.08 16.2h1.64L7.92 4.7H6.16l11 14.5Z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.003 0h-.006C7.17 0 .003 7.168.003 16c0 3.504 1.128 6.752 3.046 9.392L1.05 31.376l6.193-1.981A15.92 15.92 0 0 0 16.003 32C24.836 32 32 24.832 32 16S24.836 0 16.003 0zm9.314 22.591c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.898-2.524-1.898-4.816 0-2.292 1.166-3.41 1.636-3.89.386-.394.96-.574 1.51-.574.178 0 .338.008.482.016.43.018.646.044.93.726.354.852 1.214 2.946 1.316 3.16.104.214.208.504.062.788-.136.294-.256.422-.47.668-.214.246-.418.434-.632.694-.196.226-.418.468-.17.896.248.418 1.104 1.818 2.366 2.94 1.628 1.45 2.948 1.916 3.42 2.114.352.146.772.112 1.03-.16.328-.354.732-.94 1.144-1.518.292-.414.66-.466 1.046-.32.394.136 2.488 1.172 2.918 1.386.43.214.714.318.82.498.104.18.104 1.034-.282 2.124z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.06" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const LinkIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9.5 14.5a3.5 3.5 0 0 1 0-5l3-3a3.5 3.5 0 0 1 5 5l-1.5 1.5M14.5 9.5a3.5 3.5 0 0 1 0 5l-3 3a3.5 3.5 0 0 1-5-5L8 11" />
  </svg>
);
