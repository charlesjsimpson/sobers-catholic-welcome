import { Quote } from "lucide-react";

const temoignages = [
  {
    name: "Benoît G.",
    text: "Un accompagnement plein d'humanité et dénué de tout esprit mercantile. Une spécificité remarquable.",
  },
  {
    name: "Elisabeth D.",
    text: "Très touchée par la disponibilité et la gentillesse du SCF tout au long des obsèques. On est en grande confiance, c'est un grand soulagement. Un grand merci au SCF.",
  },
  {
    name: "Georges-Pierre O.",
    text: "L'équipe a fait preuve de beaucoup d'humanité, de sensibilité et de tact. Avec une grande présence et compétence professionnelle. MERCI.",
  },
  {
    name: "Catherine V.",
    text: "Accompagnement remarquable dans toutes les étapes de l'organisation des obsèques, et au-delà, dans l'attitude de chacun des accompagnants. Merci.",
  },
  {
    name: "Marie-Dominique B.",
    text: "Un soutien exceptionnel, une compétence irréprochable dans un dossier compliqué. J'ajoute que l'accompagnement dans la prière de Madame Daix jusqu'au cimetière nous a tous émus. Merci.",
  },
  {
    name: "Marie-Thérèse O.",
    text: "L'organisation était parfaite et reconnue par toute la famille et les amis présents.",
  },
  {
    name: "Ariane L.",
    text: "La spécificité chrétienne se ressent sans être imposée. Votre accueil est souriant, fraternel et c'est par là qu'on sent l'espérance chrétienne. Merci pour la simplicité des échanges, la prise en charge de toute l'organisation et votre accompagnement dans ces moments difficiles.",
  },
  {
    name: "Marc-Antoine de G.",
    text: "Le SCF s'est montré très réactif et a su nous accompagner très efficacement dans nos démarches.",
  },
  {
    name: "Roselyne P.",
    text: "Nous avons été admirablement accompagnés. Une grande humanité, beaucoup de délicatesse. Merci.",
  },
];

const Temoignages = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Depuis 25 ans, le Service Catholique des Funérailles a accompagné{" "}
              <strong>des milliers de familles.</strong>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {temoignages.slice(0, 6).map((t, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 shadow-sm border border-border/30"
              >
                <Quote className="w-6 h-6 text-primary/30 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  « {t.text} »
                </p>
                <p className="text-foreground font-semibold text-sm">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
