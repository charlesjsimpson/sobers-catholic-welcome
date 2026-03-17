const parcours = [
  {
    num: 1,
    title: "L'adieu au visage",
    text: "Que ce soit à la maison, à l'hôpital ou au funérarium, la première étape est la présentation du corps. Qu'elle prenne la forme d'une veille ou d'une simple levée de corps, elle est l'occasion d'une rencontre entre les vivants et le mort.",
  },
  {
    num: 2,
    title: "La célébration",
    text: "Si le chemin de la paroisse, pour assister à la messe dominicale, s'est largement perdu chez beaucoup de Français, ils sont nombreux à le retrouver pour une cérémonie d'obsèques.",
  },
  {
    num: 3,
    title: "L'inhumation ou la crémation",
    text: "Troisième étape du parcours rituel, l'étape de l'inhumation marque le détachement définitif des proches du corps de leur parent défunt.",
  },
];

const CtaEspritChretien = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
              Un esprit chrétien
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6 leading-tight">
              Un accompagnement<br />
              qui a <span className="text-primary">du sens</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Vous venez de perdre un proche ? Vous ignorez tout du déroulement
              des obsèques ? Le Service Catholique des Funérailles vous
              accompagne à chaque étape de ce parcours dans un esprit chrétien.
            </p>
          </div>

          {/* Parcours */}
          <div className="border-t-4 border-primary pt-10">
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-10">
              Le parcours des funérailles type
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {parcours.map((item) => (
                <div key={item.num}>
                  <p className="text-muted-foreground text-sm mb-1">{item.num}.</p>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaEspritChretien;
