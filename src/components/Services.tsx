import { Flower2, Church, FileText, Car, Users2, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Démarches administratives",
    description: "Nous nous occupons de toutes les formalités : état civil, assurances, caisses de retraite.",
  },
  {
    icon: Flower2,
    title: "Organisation des obsèques",
    description: "Cercueil, fleurs, avis de décès... Nous vous guidons dans chaque choix avec discrétion.",
  },
  {
    icon: Church,
    title: "Cérémonie religieuse",
    description: "Préparation de la célébration en lien avec la paroisse et le prêtre ou le diacre.",
  },
  {
    icon: Car,
    title: "Transport & convoi",
    description: "Rapatriement, transfert en chambre funéraire, organisation du convoi le jour des obsèques.",
  },
  {
    icon: Users2,
    title: "Funérarium",
    description: "Un lieu de recueillement paisible pour les familles qui le souhaitent.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement au deuil",
    description: "Orientation vers des groupes de parole et de soutien pour traverser l'épreuve.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle mx-auto">
            Un accompagnement complet, de la prise en charge initiale jusqu'au soutien dans le deuil.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 shadow-sm border border-border/30 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Chaque situation est unique. Contactez-nous pour un accompagnement personnalisé.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Prendre contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
