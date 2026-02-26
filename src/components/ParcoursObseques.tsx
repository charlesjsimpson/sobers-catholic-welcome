import { Eye, Church, Landmark } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Eye,
    title: "L'adieu au visage",
    description:
      "Que ce soit à la maison, à l'hôpital ou au funérarium, la première étape est la présentation du corps. Qu'elle prenne la forme d'une veille ou d'une simple levée de corps, elle est l'occasion d'une rencontre entre les vivants et le mort.",
  },
  {
    number: 2,
    icon: Church,
    title: "La célébration",
    description:
      "Si le chemin de la paroisse, pour assister à la messe dominicale, s'est largement perdu chez beaucoup de Français, ils sont nombreux à le retrouver pour une cérémonie d'obsèques.",
  },
  {
    number: 3,
    icon: Landmark,
    title: "L'inhumation ou la crémation",
    description:
      "Troisième étape du parcours rituel, l'étape de l'inhumation marque le détachement définitif des proches du corps de leur parent défunt.",
  },
];

const ParcoursObseques = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
            Un esprit chrétien
          </p>
          <h2 className="section-title">
            Un accompagnement qui a <strong>du sens</strong>
          </h2>
          <p className="section-subtitle mx-auto">
            Vous venez de perdre un proche ? Vous ignorez tout du déroulement
            des obsèques ? Le Service Catholique des Funérailles vous accompagne
            à chaque étape de ce parcours dans un esprit chrétien.
          </p>
        </div>

        {/* Sub-heading */}
        <h3 className="text-2xl font-display text-center text-foreground mb-12">
          Le parcours des funérailles type
        </h3>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="card-subtle group text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <span className="text-2xl font-display text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h4 className="text-xl font-display text-foreground mb-3">
                {step.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParcoursObseques;
