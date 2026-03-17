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
                Lorsqu'à la fin de 1999, le Cardinal Jean-Marie Lustiger, archevêque de
                Paris, me demandait pour fonder le Service Catholique des Funérailles,
                je recevais de lui la mission de renouveler l'offre de services funéraires.
              </p>
              <p className="font-semibold text-foreground">Comment ?</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>En centrant tous nos efforts sur la qualité de l'accompagnement des familles à chaque étape du parcours des funérailles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>En allégeant l'offre matérielle afin de permettre aux proches de se consacrer à l'essentiel&nbsp;: la quête du sens de la perte de l'être aimé.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>En choisissant un statut associatif, afin d'être affranchis des lois de la finance.</span>
                </li>
              </ul>
              <p>
                Vingt-cinq années après cet envoi en mission, je salue chaque jour la
                qualité du collectif humain que nous formons au service des familles en
                deuil. Le travail est ardu mais la reconnaissance des familles constitue
                une source inépuisable d'énergie pour servir.
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
