import { Stethoscope, FileText, MapPin, CalendarCheck } from "lucide-react";

const demarches = [
  {
    icon: Stethoscope,
    label: "Faire constater le décès*",
  },
  {
    icon: FileText,
    label: "Déclarer le décès",
  },
  {
    icon: MapPin,
    label: "Choisir le lieu de repos du défunt",
  },
  {
    icon: CalendarCheck,
    label: "Organiser les obsèques",
  },
];

const Demarches = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
              Des démarches
            </p>
            <h2 className="section-title">
              Je viens de perdre un proche, que faire ?
            </h2>
            <p className="section-subtitle mx-auto">
              Le Service Catholique des Funérailles vous guide pas à pas.
            </p>
          </div>

          <h3 className="text-xl font-display text-foreground text-center mb-10">
            Quelles sont les obligations légales et démarches à effectuer ?
          </h3>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Le Service Catholique des Funérailles est à vos côtés pour accomplir
            l'ensemble des démarches nécessaires à l'organisation des obsèques{" "}
            <strong>
              une fois que le décès a été constaté par un médecin
            </strong>
            .
          </p>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {demarches.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 text-center shadow-sm border border-border/30 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-xs text-center italic">
            *Le SCF vous accompagne sur l'ensemble de ces démarches SAUF pour le
            constat du décès pour lequel il revient à la famille de faire venir
            un médecin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demarches;
