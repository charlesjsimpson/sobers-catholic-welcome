const parcours = [
  {
    num: 1,
    title: "L'adieu au visage",
    text: "Que ce soit à la maison, à l'hôpital ou au funérarium, la première étape est la présentation du corps. Qu'elle prenne la forme d'une veillée funèbre ou d'une levée de corps, elle est l'occasion d'une rencontre entre les vivants et le défunt, un moment de recueillement avant la cérémonie.",
  },
  {
    num: 2,
    title: "La cérémonie religieuse",
    text: "Si le chemin de la paroisse s'est largement perdu dans le quotidien de nombreux Français, ils sont nombreux à le retrouver pour une messe de funérailles. La célébration catholique donne un cadre spirituel au deuil et permet à la communauté de se rassembler autour du défunt.",
  },
  {
    num: 3,
    title: "L'inhumation ou la crémation",
    text: "Dernière étape du parcours rituel, l'inhumation catholique, ou la crémation dans le respect des rites de l'Église, marque le moment du détachement définitif. Le SCF vous accompagne jusqu'au cimetière ou au crématorium, avec la même présence et le même soin.",
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
              L'organisation des obsèques catholiques,<br />
              <span className="text-primary">étape par étape</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              Vous venez de perdre un proche&nbsp;? Le Service Catholique des Funérailles vous accompagne dans toutes les démarches funéraires, dans le respect des rites catholiques et avec une attention humaine sincère à chaque étape.
            </p>
          </div>

          {/* Parcours */}
          <div className="border-t-4 border-primary pt-10">
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-10">
              Le parcours des funérailles catholiques
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {parcours.map((item) => (
                <div key={item.num}>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {item.num}. {item.title}
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
