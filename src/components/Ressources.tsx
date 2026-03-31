import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import reconcilierMort from "@/assets/reconcilier-mort.png";
import radioNotreDame from "@/assets/radio-notre-dame.png";

const ressources = [
  {
    category: "Ressource",
    title: "Une session pour avancer vers un rapport à la mort pacifié",
    excerpt:
      "Prochaines sessions prévues le 20 janvier 2026 à Aix-en-Provence et le 21 mars 2026...",
    href: "/contacter-une-agence",
  },
  {
    category: "Ressource",
    title:
      "Dialogue sur la mort : une émission hebdomadaire sur Radio Notre Dame - RCF",
    excerpt:
      "Chaque semaine, Christian de Cacqueray reçoit un·e invité·e pour un dialogue de 12 minutes sur...",
    href: "/ressources/emissions",
  },
  {
    category: "Livre",
    title: "Conversations sur la mort, et donc sur la vie",
    excerpt:
      "24 personnes, dont Tanguy Chatel, Marie de Hennezel, Anne-Dauphine Julliand, Martin Steffens, témoignent de leur...",
    href: "/ressources/emissions",
  },
];

const Ressources = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
              Ressources
            </p>
            <h2 className="section-title">
              Réfléchir sur son rapport à la mort<br />
              avec le Service Catholique des Funérailles
            </h2>
            <p className="section-subtitle mx-auto">
              Nous mettons à votre disposition des ressources pour vous
              permettre de mieux vivre votre deuil et de réfléchir sur votre
              propre rapport à la mort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {ressources.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                {index === 0 && (
                  <img src={reconcilierMort} alt="Se réconcilier avec la mort" className="w-full h-48 object-cover" />
                )}
                {index === 1 && (
                  <img src={radioNotreDame} alt="Dialogue sur la mort - Radio Notre Dame" className="w-full h-48 object-cover" />
                )}
                <div className="p-6 flex flex-col flex-1">
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold text-xs w-fit">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ressources;
