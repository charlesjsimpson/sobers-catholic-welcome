import { Phone, Clock } from "lucide-react";
import logoScfBlanc from "@/assets/logo-scf-blanc.png";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <img
              src={logoScfBlanc}
              alt="Service Catholique des Funérailles"
              className="h-40 md:h-52 w-auto mx-auto"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground mb-8 animate-fade-in-up leading-tight">
            Accompagner avec dignité,
            <br />
            <span className="opacity-90">servir avec humanité</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Association à but non lucratif au service des familles depuis 1947
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <a
              href="tel:0143722828"
              className="flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Nous appeler</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              <span>Nous contacter</span>
            </a>
          </div>

          {/* Availability badge */}
          <div className="mt-16 inline-flex items-center gap-2 text-primary-foreground/70 text-sm animate-fade-in-delay">
            <Clock className="w-4 h-4" />
            <span>Disponible 24h/24, 7j/7</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
