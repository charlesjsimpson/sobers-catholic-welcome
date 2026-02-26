import { useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agenceParis15 from "@/assets/agence-paris-15.png";

const AgenceParis15 = () => {
  useEffect(() => {
    document.title = "Pompes funèbres Paris 15 | Service Catholique des Funérailles";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pompes funèbres à Paris 15. Service Catholique des Funérailles : organisation d'obsèques et prévoyance funéraire. Urgence décès 7j/7, 24h/24 au 01 44 38 80 80. 66 rue Falguière, 75015 Paris."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-28 pb-16">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-3">
              Pompes funèbres habilitées par la préfecture de Paris
            </p>
            <h1 className="text-3xl md:text-5xl font-display text-primary-foreground mb-6 leading-tight">
              Service Catholique des Funérailles – Paris 15
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:0144388080"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                01 44 38 80 80
              </a>
              <span className="text-primary-foreground/80 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Urgence décès 7j/7 24h/24
              </span>
            </div>
          </div>
        </section>

        {/* Image + infos */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={agenceParis15}
                  alt="Agence Service Catholique des Funérailles - Paris 15ème"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-display text-foreground mb-4">
                  Agence SCF Paris 15 : accompagnement funéraire
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>66, rue Falguière<br />75015 Paris</span>
                  </div>
                  <a
                    href="tel:0144388080"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>01 44 38 80 80</span>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Horaires :</strong> Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Depuis l'ouverture de son agence de <strong className="text-foreground">pompes funèbres à Paris 15</strong> en 2000, avec le soutien du cardinal Jean-Marie Lustiger, le Service Catholique des Funérailles (SCF) a accompagné plus de 3 000 familles dans toute la ville. Notre mission : offrir un accompagnement funéraire respectueux, digne et profondément humain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">En cas de décès, contactez-nous 7 jours sur 7 :{" "}
                <a href="tel:0144388080" className="text-primary hover:text-primary/80 transition-colors">01 44 38 80 80</a>
              </strong>
            </p>
          </div>
        </section>

        {/* Notre agence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">
              Notre agence de pompes funèbres à Paris 15
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Le Service Catholique des Funérailles de Paris, coopérative à gestion désintéressée, accompagne chaque famille avec bienveillance. Basée dans le 15ᵉ arrondissement, notre agence funéraire conçoit <strong className="text-foreground">des parcours adaptés à chaque situation, dans le respect de la dignité humaine et avec une espérance chrétienne.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos conseillers funéraires accueillent toutes les familles, quelle que soit leur confession, et organisent tous types d'obsèques dans Paris et sa région.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-12">
              Nos prestations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display text-foreground mb-4">
                  Organisation des obsèques
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous proposons l'ensemble des services nécessaires à l'organisation des funérailles. Un conseiller funéraire dédié vous accompagne à chaque étape :
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Entretien initial</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Démarches administratives</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Préparation des obsèques</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Coordination le jour de la cérémonie</strong></span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                  Nous veillons à réduire au maximum la charge administrative et matérielle afin de permettre aux familles de traverser cette période avec sérénité.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display text-foreground mb-4">
                  Prévoir ses obsèques
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous accompagnons également toutes les personnes souhaitant anticiper leurs obsèques. La prévoyance funéraire peut prendre plusieurs formes :
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Simple dépôt de volontés</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Estimation du coût des obsèques</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Mise en place d'un contrat d'assurance obsèques</strong></span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                  Ces questions peuvent être abordées en toute confidentialité lors d'un entretien dans notre agence de pompes funèbres à Paris 15.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <h3 className="text-xl font-display text-foreground mb-4">
                Notre engagement auprès des familles
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La proposition du Service Catholique des Funérailles se veut simple, claire et fiable. Sans surenchère commerciale, <strong className="text-foreground">nous plaçons les besoins des familles au centre de notre mission et veillons à respecter leurs souhaits</strong> comme la réalité de leur deuil.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-12">
              Organisation des obsèques à Paris 15 : guide pratique
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Quelles sont les différentes étapes d'organisation des obsèques ?",
                  a: "L'organisation des obsèques de votre proche s'effectue depuis notre agence de Paris. Lors de cet entretien, l'objectif est de vous soulager sur les aspects logistiques, organisationnels et administratifs, et de rapidement vous permettre d'avoir une visibilité sur les jours suivants. Pour cela, nous avons besoin du livret de famille de la personne décédée, de la carte d'identité du mandataire et des habits avec lesquels nous irons retrouver et prendre soin de votre proche."
                },
                {
                  q: "Quels sont les avantages de souscrire un contrat d'assurance obsèques ?",
                  a: "Lors d'un rendez-vous dans notre agence de Paris, nous pouvons vous accompagner dans la réflexion et la préparation de vos propres obsèques ou celles de votre proche. Effectuer une prévoyance funéraire à travers un dépôt de volontés et/ou un contrat obsèques permet de soulager vos proches le jour venu, et peut permettre aussi de garantir le respect de vos volontés."
                },
                {
                  q: "Quelles sont les démarches à effectuer après un décès ?",
                  a: "Les pompes funèbres vous remettront plusieurs originaux d'actes de décès (entre 10 et 15). Ces documents d'état civil représentent le document de référence pour les démarches à effectuer auprès de tous les organismes concernés : employeur, France Travail, banques, caisses d'assurance, mutuelles, notaire, centre des impôts, etc. Nous tenons à votre disposition un modèle de lettre à envoyer à ces divers organismes."
                },
                {
                  q: "Vous faites face à un décès ?",
                  a: "Lorsqu'un décès survient, un médecin ou un infirmier doit venir constater et émettre un certificat médical. La famille doit alors entrer en contact avec les pompes funèbres de son choix. Nous pouvons être appelés 24 heures sur 24 au 01 44 38 80 80 afin de répondre aux questions immédiates et d'assurer les éventuels services urgents. Notre accompagnement comprend le repos du corps du défunt et l'organisation complète des obsèques."
                },
                {
                  q: "Comment organiser une crémation à Paris ?",
                  a: "Il y a un crématorium à Paris : le crématorium du Père Lachaise. Un crématorium se situe également à moins de 15 minutes dans la commune d'Arcueil. Ce sont les pompes funèbres qui réservent les prestations adéquates : salon de recueillement ou salle de cérémonie. Le coût d'une crémation se situe autour de 1 000 € pour les crématoriums à Paris et à proximité."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
                >
                  <h3 className="text-lg font-display text-foreground mb-3">
                    {i + 1}. {item.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborateurs */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-display text-foreground text-center mb-10">
              Nos collaborateurs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { role: "Directeur", prenom: "Christian", nom: "de Cacqueray" },
                { role: "Directeur adjoint", prenom: "Frédéric", nom: "Barut" },
                { role: "Assistant funéraire", prenom: "Baudoin", nom: "Drion" },
                { role: "Assistant funéraire", prenom: "Christophe", nom: "Grimaud" },
                { role: "Assistante funéraire", prenom: "Muriel", nom: "Lavergne" },
                { role: "Assistant funéraire", prenom: "Sébastien", nom: "Legrand" },
                { role: "Assistant funéraire", prenom: "Romain", nom: "Martinot" },
                { role: "Chargée de prévoyance", prenom: "Catherine", nom: "Poincet" },
                { role: "Responsable prévoyance", prenom: "Jean-Philippe", nom: "Rabaroux" },
                { role: "Maître de cérémonie", prenom: "Stéphanie", nom: "d'Hébrail" },
              ].map((collab, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-5 shadow-sm border border-border/50 text-center"
                >
                  <p className="text-primary font-medium text-xs uppercase tracking-wider mb-2">{collab.role}</p>
                  <p className="text-foreground font-display text-sm">{collab.prenom} {collab.nom}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-6 text-center">
            <p className="text-foreground font-medium text-lg">
              ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
            </p>
            <a
              href="tel:0144388080"
              className="btn-primary inline-block mt-4"
            >
              Appeler le 01 44 38 80 80
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgenceParis15;
