import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const situations = [
  {
    title: "En train d'organiser les obsèques d'un proche ?",
    href: "/contacter-une-agence",
  },
  {
    title: "Une personne qui désire préparer ses obsèques ?",
    href: "/contacter-une-agence",
  },
  {
    title: "Une personne qui souhaite réfléchir à son rapport à la mort ?",
    href: "/ressources/emissions",
  },
];

const VousEtes = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Vous êtes...</h2>
          <p className="section-subtitle mx-auto text-center mb-12">
            Nous vous orientons en fonction de votre situation et de vos besoins.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {situations.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="card-subtle group flex flex-col justify-between text-center"
              >
                <h3 className="text-lg font-display text-foreground mb-6 leading-snug">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm justify-center group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VousEtes;
