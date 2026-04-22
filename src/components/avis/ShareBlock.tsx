import { useState } from "react";
import {
  FacebookIcon,
  TwitterXIcon,
  LinkedInIcon,
  WhatsAppIcon,
  MailIcon,
  LinkIcon,
} from "./AvisIcons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check } from "lucide-react";

interface ShareBlockProps {
  url: string;
  title: string; // ex: "Avis de décès de Jeanne BRISOU"
}

/**
 * Bloc "Partager sur :" — icônes monochromes bleu SCF, ~32px,
 * zone tactile min 44x44, tooltip au survol.
 */
export const ShareBlock = ({ url, title }: ShareBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const networks = [
    {
      label: "Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "X (Twitter)",
      Icon: TwitterXIcon,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`,
    },
    {
      label: "Email",
      Icon: MailIcon,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="bg-card border border-border/50 shadow-sm" style={{ borderRadius: 10, padding: 20 }}>
      <h3
        className="font-display text-foreground"
        style={{ fontSize: 16, fontWeight: 600, marginBottom: 14 }}
      >
        Partager sur :
      </h3>

      <TooltipProvider delayDuration={200}>
        <div className="flex flex-wrap items-center gap-2">
          {networks.map(({ label, Icon, href }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Partager sur ${label}`}
                  className="flex items-center justify-center text-[hsl(var(--scf-blue))] hover:bg-[hsl(var(--scf-blue-light))] transition-colors"
                  style={{ width: 44, height: 44, borderRadius: 8 }}
                >
                  <Icon style={{ width: 22, height: 22 }} aria-hidden="true" />
                </a>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copier le lien de l'avis"
                className="flex items-center justify-center text-[hsl(var(--scf-blue))] hover:bg-[hsl(var(--scf-blue-light))] transition-colors"
                style={{ width: 44, height: 44, borderRadius: 8 }}
              >
                {copied ? (
                  <Check style={{ width: 22, height: 22 }} aria-hidden="true" />
                ) : (
                  <LinkIcon style={{ width: 22, height: 22 }} aria-hidden="true" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Lien copié ✓" : "Copier le lien"}</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      {copied && (
        <p
          role="status"
          aria-live="polite"
          className="text-[hsl(var(--scf-blue-dark))] mt-3 font-medium"
          style={{ fontSize: 13 }}
        >
          Lien copié ✓
        </p>
      )}
    </div>
  );
};
