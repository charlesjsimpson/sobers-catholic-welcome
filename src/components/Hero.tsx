import { Phone, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-white/70 text-sm tracking-[0.1em] uppercase mb-6 animate-fade-in">
            Service Catholique des Funérailles
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-8 animate-fade-in-up leading-tight">
            Un service de pompes funèbres
            <br />
            qui accompagne les familles
            <br />
            depuis 25 ans
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-delay">
            Le SCF vous accompagne à chaque étape de l'organisation des obsèques<br />et de la prévoyance funéraire, avec des valeurs chrétiennes,<br />à travers 11 agences en France.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay mt-12">
            <a
              href="tel:0143722828"
              className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Nous appeler</span>
            </a>
            <a
              href="#agences"
              className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <span>Trouver une agence</span>
            </a>
          </div>

          {/* Availability badge */}
          <div className="mt-16 inline-flex items-center gap-3 text-white text-lg md:text-xl font-semibold animate-fade-in-delay">
            <Clock className="w-6 h-6" />
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
