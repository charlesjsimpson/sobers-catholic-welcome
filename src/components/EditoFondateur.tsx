import christianPortrait from "@/assets/christian-de-cacqueray-portrait.jpeg";

const EditoFondateur = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
              L'édito
            </p>
            <h2 className="section-title">
              Le mot du fondateur
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Text */}
            <div className="md:col-span-3 space-y-3 text-foreground leading-snug">
              <p>
                À la fin de l'année 1999, le Cardinal Jean-Marie Lustiger, alors archevêque de Paris, me confiait la mission de fonder le Service Catholique des Funérailles, avec une ambition claire&nbsp;: renouveler l'accompagnement des familles en deuil dans un esprit profondément chrétien.
              </p>
              <p className="font-semibold text-foreground">Cette mission s'est construite autour de trois convictions fortes&nbsp;:</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Placer la qualité de l'accompagnement humain au cœur de chaque étape des obsèques, de la levée de corps jusqu'à l'inhumation ou la crémation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Simplifier l'organisation des funérailles pour permettre aux proches de se recentrer sur l'essentiel&nbsp;: donner du sens à la perte d'un être aimé</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Faire le choix d'un modèle associatif, indépendant de toute logique financière, une singularité rare parmi les pompes funèbres en France</span>
                </li>
              </ul>
              <p>
                Vingt-cinq ans plus tard, je rends grâce chaque jour pour la qualité du collectif humain engagé au service des familles endeuillées. Si la mission est exigeante, la reconnaissance que nous témoignent les familles constitue une source inépuisable d'énergie pour continuer à servir.
              </p>
            </div>

            {/* Photo */}
            <div className="md:col-span-2 flex flex-col items-center">
              <img
                src={christianPortrait}
                alt="Christian de Cacqueray, fondateur et directeur du Service Catholique des Funérailles"
                className="rounded-xl shadow-lg w-full max-w-[280px] object-cover"
              />
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground text-lg">Christian de Cacqueray</p>
                <p className="text-muted-foreground text-sm">Fondateur et directeur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditoFondateur;
