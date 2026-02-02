import { Heart, Users, HandHeart, Building2 } from "lucide-react";

const differences = [
  {
    icon: Building2,
    title: "Une association, pas une entreprise",
    description:
      "Nous sommes une association loi 1901 à but non lucratif. Aucun actionnaire, aucune logique de profit. Chaque euro est réinvesti dans notre mission d'accompagnement.",
  },
  {
    icon: Heart,
    title: "Des valeurs chrétiennes",
    description:
      "Inspirés par l'Évangile, nous accueillons chaque famille avec respect et bienveillance, quelle que soit sa confession ou ses convictions.",
  },
  {
    icon: Users,
    title: "L'écoute avant tout",
    description:
      "Nous prenons le temps nécessaire pour vous accompagner. Pas de pression commerciale, pas de vente forcée. Votre rythme est le nôtre.",
  },
  {
    icon: HandHeart,
    title: "Un accompagnement global",
    description:
      "Au-delà des obsèques, nous vous orientons vers des groupes de parole et d'accompagnement au deuil pour vous soutenir dans l'épreuve.",
  },
];

const Difference = () => {
  return (
    <section id="difference" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Notre différence</h2>
          <p className="section-subtitle mx-auto">
            Depuis 1947, nous plaçons l'humain au cœur de notre mission.
            Découvrez ce qui fait de nous un service funéraire unique.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differences.map((item, index) => (
            <div
              key={index}
              className="card-subtle group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-display text-primary italic leading-relaxed">
            « Servir, ce n'est pas vendre. C'est accompagner. »
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Notre engagement quotidien</p>
        </div>
      </div>
    </section>
  );
};

export default Difference;
