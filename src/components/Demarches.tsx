import { Stethoscope, FileText, MapPin, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <p className="text-foreground text-sm tracking-wide font-semibold mb-2">
              Des démarches
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 leading-tight">
              Quelles sont les obligations légales et démarches à effectuer?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Le Service Catholique des Funérailles est à vos côtés pour accomplir
              l'ensemble des démarches nécessaires à l'organisation des obsèques{" "}
              <strong className="text-foreground">
                une fois que le décès a été constaté par un médecin
              </strong>
              .
            </p>
          </div>

          {/* Steps - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {demarches.map((item, index) => (
              <div
                key={index}
                className="bg-primary/5 rounded-lg p-6 flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm italic mb-8">
            *Le SCF vous accompagne sur l'ensemble de ces démarches SAUF pour le
            constat du décès pour lequel il revient à la famille de faire venir
            un médecin.
          </p>

          <Link
            to="/organiser-des-obseques"
            className="inline-block bg-foreground text-background px-8 py-4 rounded-md font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:opacity-90"
          >
            Voir en détail les démarches
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Demarches;
