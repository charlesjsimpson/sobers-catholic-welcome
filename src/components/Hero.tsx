import { Phone, Clock, MapPin } from "lucide-react";
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
            Pompes funèbres catholiques
            <br />
            au service des familles
            <br />
            depuis 25 ans
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-delay">
            Le SCF vous accompagne avec bienveillance à chaque étape de l'organisation des obsèques, dans le respect des rites catholiques. Présents à Paris et dans toute la France, à travers 11 agences.
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
              <MapPin className="w-5 h-5" />
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

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 100L60 92C120 84 240 68 360 62C480 56 600 60 720 66C840 72 960 80 1080 78C1200 76 1320 64 1380 58L1440 52V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
