import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoScf from "@/assets/logo-scf-blanc.png";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  href: string;
}

interface NavColumn {
  title: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  columns?: NavColumn[];
  bottomLink?: { label: string; href: string };
}

const navItems: NavItem[] = [
  {
    label: "Obsèques",
    href: "/organiser-des-obseques",
    children: [
      { label: "Organiser des obsèques", href: "/organiser-des-obseques" },
      { label: "Démarches après un décès", href: "/demarches" },
      { label: "Cercueils et fleurs", href: "/cercueils" },
      { label: "Trouver une agence", href: "/contacter-une-agence" },
      { label: "Le carnet du SCF", href: "/carnet-deuil" },
    ],
  },
  {
    label: "Nos prestations",
    href: "/services",
    children: [
      { label: "Cercueils", href: "/cercueils" },
      { label: "Compositions florales", href: "/services/organiser-vos-obseques/compositions-florales" },
      { label: "Cartes de remerciements", href: "/services/organiser-vos-obseques/faire-part-et-cartes-de-remerciement" },
      { label: "Monuments funéraires", href: "#" },
      { label: "Nos tarifs", href: "/services/tarifs" },
      { label: "Qui sommes-nous", href: "/a-propos" },
    ],
  },
  {
    label: "Anticiper",
    href: "/services/prevoyance",
    children: [
      { label: "Pourquoi anticiper", href: "/services/prevoyance" },
      { label: "Déposer ses volontés", href: "/services/deposer-ses-volontes" },
      { label: "Préfinancer mes obsèques", href: "/services/contrats" },
      { label: "Trouver une agence", href: "/contacter-une-agence" },
    ],
  },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      { label: "Articles et actualités", href: "/ressources/actualites" },
      { label: "Prières", href: "/ressources/prieres" },
      { label: "Émissions radio", href: "/ressources/emissions" },
      { label: "Livres", href: "/ressources/livres" },
      { label: "Sessions deuil", href: "/ressources/sessions/se-reconcilier-avec-la-mort" },
      { label: "FAQ", href: "/foire-aux-questions" },
      { label: "Qui sommes-nous", href: "/a-propos" },
    ],
  },
  {
    label: "Nos agences",
    href: "/contacter-une-agence",
    columns: [
      {
        title: "Île-de-France",
        items: [
          { label: "Paris 15e", href: "/agences/paris-15" },
          { label: "Paris 17e", href: "/agences/paris-17" },
          { label: "Boulogne-Billancourt", href: "/agences/boulogne-billancourt" },
          { label: "Versailles", href: "/agences/versailles" },
        ],
      },
      {
        title: "En France",
        items: [
          { label: "Bordeaux", href: "/agences/bordeaux" },
          { label: "Lyon", href: "/agences/lyon" },
          { label: "Marseille", href: "/agences/marseille" },
          { label: "Aix-en-Provence", href: "/agences/aix-en-provence" },
          { label: "Toulon", href: "/agences/toulon" },
          { label: "Fréjus", href: "/agences/frejus" },
          { label: "Nice", href: "/agences/nice" },
        ],
      },
    ],
    bottomLink: { label: "Voir toutes nos agences", href: "/contacter-une-agence" },
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktopIndex, setOpenDesktopIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileIndex(null);
  }, [location.pathname]);

  const handleNavigate = (href: string) => {
    if (href === "#") return;
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
    setOpenDesktopIndex(null);
  };

  const isActive = (href: string) => href !== "#" && (location.pathname === href || location.pathname.startsWith(href + "/"));

  const isParentActive = (item: NavItem) => {
    if (item.children) return item.children.some((c) => isActive(c.href));
    if (item.columns) return item.columns.some((col) => col.items.some((c) => isActive(c.href)));
    return item.href ? isActive(item.href) : false;
  };

  const handleDesktopEnter = (index: number) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDesktopIndex(index);
  };

  const handleDesktopLeave = () => {
    closeTimerRef.current = setTimeout(() => setOpenDesktopIndex(null), 200);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-primary transition-shadow duration-300",
        scrolled && "shadow-lg"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile: Burger left */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo — left on desktop, center on mobile */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavigate("/"); }}
            className="flex items-center cursor-pointer shrink-0 lg:mr-8 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <img src={logoScf} alt="Service Catholique des Funérailles" className="h-12 lg:h-16 w-auto" />
          </a>

          {/* Desktop Navigation — centered */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDesktopEnter(index)}
                onMouseLeave={handleDesktopLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2.5 text-primary-foreground text-[15px] font-bold tracking-wide transition-colors rounded-md hover:bg-primary-foreground/10",
                    isParentActive(item) && "underline underline-offset-4 decoration-2"
                  )}
                  onClick={() => handleNavigate(item.href)}
                >
                  {item.label}
                  {(item.children || item.columns) && (
                    <ChevronDown className={cn("w-3 h-3 transition-transform", openDesktopIndex === index && "rotate-180")} />
                  )}
                </button>

                {/* Dropdown */}
                {openDesktopIndex === index && (item.children || item.columns) && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-background rounded-lg shadow-xl border border-border p-2 min-w-[240px] animate-fade-in">
                      {item.children && (
                        <div className="flex flex-col">
                          {item.children.map((child) => (
                            <a
                              key={child.label + child.href}
                              href={child.href}
                              onClick={(e) => { e.preventDefault(); handleNavigate(child.href); }}
                              className={cn(
                                "px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-accent rounded-md transition-colors",
                                isActive(child.href) && "bg-accent/10 text-accent font-semibold"
                              )}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}

                      {item.columns && (
                        <div>
                          <div className="flex gap-6 p-2 min-w-[420px]">
                            {item.columns.map((col) => (
                              <div key={col.title} className="flex-1">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2 pb-2">
                                  {col.title}
                                </p>
                                {col.items.map((child) => (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    onClick={(e) => { e.preventDefault(); handleNavigate(child.href); }}
                                    className={cn(
                                      "block px-2 py-1.5 text-sm text-foreground hover:bg-accent/10 hover:text-accent rounded transition-colors",
                                      isActive(child.href) && "bg-accent/10 text-accent font-semibold"
                                    )}
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                          {item.bottomLink && (
                            <div className="border-t border-border mt-2 pt-2 px-2">
                              <a
                                href={item.bottomLink.href}
                                onClick={(e) => { e.preventDefault(); handleNavigate(item.bottomLink!.href); }}
                                className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline px-2 py-1.5"
                              >
                                {item.bottomLink.label}
                                <ChevronRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Urgence + Phone */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Urgence décès button */}
            <a
              href="/organiser-des-obseques"
              onClick={(e) => { e.preventDefault(); handleNavigate("/organiser-des-obseques"); }}
              className="flex items-center gap-2 text-white font-semibold text-sm lg:text-[15px] px-4 lg:px-5 py-2.5 rounded-md transition-colors"
              style={{ backgroundColor: "#B03020" }}
            >
              {/* Pulsing dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-200"></span>
              </span>
              <span className="hidden sm:inline">Urgence décès</span>
              <span className="sm:hidden">Urgence</span>
            </a>

            {/* Phone button — desktop only */}
            <a
              href="tel:+33144388080"
              className="hidden lg:flex items-center gap-2 bg-white text-primary font-semibold text-[15px] px-5 py-2.5 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>01 44 38 80 80</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const hasDropdown = item.children || item.columns;
                const isOpen = openMobileIndex === index;

                return (
                  <div key={item.label}>
                    <button
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-3 text-primary-foreground font-bold text-base transition-colors rounded-md",
                        isParentActive(item) && "bg-primary-foreground/10"
                      )}
                      onClick={() => {
                        if (hasDropdown) {
                          setOpenMobileIndex(isOpen ? null : index);
                        } else {
                          handleNavigate(item.href);
                        }
                      }}
                    >
                      {item.label}
                      {hasDropdown && (
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="pl-4 pb-2 animate-fade-in">
                        {item.children?.map((child) => (
                          <a
                            key={child.label + child.href}
                            href={child.href}
                            onClick={(e) => { e.preventDefault(); handleNavigate(child.href); }}
                            className={cn(
                              "block px-3 py-2.5 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors",
                              isActive(child.href) && "text-primary-foreground font-semibold underline underline-offset-4"
                            )}
                          >
                            {child.label}
                          </a>
                        ))}

                        {item.columns?.map((col) => (
                          <div key={col.title} className="mt-2">
                            <p className="px-3 py-1 text-xs font-bold text-primary-foreground/50 uppercase tracking-wider">
                              {col.title}
                            </p>
                            {col.items.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={(e) => { e.preventDefault(); handleNavigate(child.href); }}
                                className={cn(
                                  "block px-3 py-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors",
                                  isActive(child.href) && "text-primary-foreground font-semibold underline underline-offset-4"
                                )}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        ))}

                        {item.bottomLink && (
                          <a
                            href={item.bottomLink.href}
                            onClick={(e) => { e.preventDefault(); handleNavigate(item.bottomLink!.href); }}
                            className="flex items-center gap-1 px-3 py-2.5 text-primary-foreground font-semibold text-sm mt-1"
                          >
                            {item.bottomLink.label}
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Phone CTA mobile */}
              <a
                href="tel:+33144388080"
                className="flex items-center justify-center gap-2 mx-3 mt-3 border border-primary-foreground/30 text-primary-foreground font-medium text-sm px-5 py-3 rounded-md"
              >
                <Phone className="w-4 h-4" />
                <span>01 44 38 80 80</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
