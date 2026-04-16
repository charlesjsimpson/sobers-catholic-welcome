import logoScf from "@/assets/logo-scf-bleu.gif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & description */}
          <div>
            <img
              src={logoScf}
              alt="Service Catholique des Funérailles"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Association loi 1901 au service des familles endeuillées depuis 1999. Un accompagnement humain, digne et respectueux.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#accueil" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#difference" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Notre différence
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:0144388080" className="hover:text-primary-foreground transition-colors">
                  01 44 38 80 80
                </a>
              </li>
              <li>
                <a href="mailto:contact@s-c-f.org" className="hover:text-primary-foreground transition-colors">
                  contact@s-c-f.org
                </a>
              </li>
              <li>
                66, rue Falguière
                <br />
                75015 Paris
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} Service Catholique des Funérailles. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="/a-propos" className="hover:text-primary-foreground transition-colors">
                Qui sommes-nous
              </a>
              <a href="/plan-du-site" className="hover:text-primary-foreground transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
