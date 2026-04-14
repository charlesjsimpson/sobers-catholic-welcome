import { useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agenceParis17 from "@/assets/agence-paris-17.png";

const AgenceParis17 = () => {
  useEffect(() => {
    document.title = "Pompes funèbres Paris 17 | Service Catholique des Funérailles";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pompes funèbres à Paris 17. Service Catholique des Funérailles : organisation d'obsèques et prévoyance funéraire. Urgence décès 7j/7, 24h/24 au 01 88 61 08 00. 10 rue Saint-Ferdinand, 75017 Paris."
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
              Service Catholique des Funérailles – Paris 17
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:0188610800"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                01 88 61 08 00
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
                  src={agenceParis17}
                  alt="Agence Service Catholique des Funérailles - Paris 17ème"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-display text-foreground mb-4">
                  Agence SCF Paris 17 : accompagnement funéraire
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>10, rue Saint-Ferdinand<br />75017 Paris</span>
                  </div>
                  <a
                    href="tel:0188610800"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>01 88 61 08 00</span>
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
              Ouverte en novembre 2023, l'agence de <strong className="text-foreground">pompes funèbres à Paris 17</strong> du Service Catholique des Funérailles (SCF) accompagne les familles endeuillées dans l'organisation d'obsèques respectueuses et dignes. Fondé en 1999 à la demande du cardinal Jean-Marie Lustiger, le SCF est une coopérative à gestion désintéressée, au service de la dignité humaine et de l'espérance chrétienne.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">En cas de décès, contactez-nous 7 jours sur 7 :{" "}
                <a href="tel:0188610800" className="text-primary hover:text-primary/80 transition-colors">01 88 61 08 00</a>
              </strong>
            </p>
          </div>
        </section>

        {/* Notre agence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">
              Notre agence de pompes funèbres à Paris 17
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Située au 10 rue Saint-Ferdinand dans le 17ᵉ arrondissement, notre agence funéraire propose un <strong className="text-foreground">accompagnement complet pour l'organisation des obsèques catholiques</strong> : messe de funérailles, veillée funèbre, inhumation ou crémation. Nous intervenons dans tout Paris et les communes limitrophes, 7 jours sur 7, 24 heures sur 24.
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
                  Dès le premier contact, un conseiller funéraire dédié vous accompagne pour organiser l'ensemble des obsèques de votre proche :
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Prise en charge du corps</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Démarches administratives</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Coordination avec la paroisse</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Cérémonie, inhumation ou crémation</strong></span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                  Notre accompagnement comprend la veillée funèbre (adieu au visage), la célébration religieuse à l'église, puis l'inhumation au cimetière ou la crémation au crématorium du Père-Lachaise ou d'Arcueil.
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
                  Ces questions peuvent être abordées en toute confidentialité lors d'un entretien dans notre agence de pompes funèbres à Paris 17.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <h3 className="text-xl font-display text-foreground mb-4">
                Notre engagement auprès des familles
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ce qui distingue le SCF des autres pompes funèbres parisiennes, c'est une spiritualité chrétienne vécue concrètement : nos assistants funéraires accompagnent les familles dans la prière, coordonnent la cérémonie avec le prêtre officiant, et considèrent leur mission comme un service rendu à la dignité de la personne défunte. <strong className="text-foreground">Le SCF accompagne toutes les familles, quelle que soit leur confession.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-12">
              Organisation des obsèques à Paris 17 : guide pratique
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Quelles sont les pompes funèbres catholiques à Paris 17e ?",
                  a: "Le Service Catholique des Funérailles (SCF) est la principale agence de pompes funèbres catholiques du 17e arrondissement de Paris, située 10 rue Saint-Ferdinand, 75017 Paris. Joignable au 01 88 61 08 00, 7j/7 et 24h/24."
                },
                {
                  q: "Comment organiser une messe de funérailles à Paris 17e ?",
                  a: "Le SCF Paris 17e coordonne directement avec les paroisses du 17e arrondissement pour organiser une messe de funérailles : contact avec le prêtre officiant, réservation de l'église, préparation de la liturgie avec la famille."
                },
                {
                  q: "Quel est le délai pour organiser des obsèques à Paris ?",
                  a: "En France, les obsèques doivent avoir lieu dans un délai de 6 jours ouvrables après le décès. Le SCF Paris 17e est disponible 24h/24 pour engager les démarches immédiatement."
                },
                {
                  q: "Où se trouve le crématorium le plus proche de Paris 17e ?",
                  a: "Le crématorium du Père-Lachaise (20e arr.) est accessible en moins de 30 minutes. Un second crématorium est disponible à Arcueil (94), à environ 15 minutes. Le SCF gère la réservation et la coordination."
                },
                {
                  q: "Le SCF accompagne-t-il les familles non catholiques ?",
                  a: "Oui. Le SCF accompagne toutes les familles quelle que soit leur confession, avec le même professionnalisme et la même bienveillance, pour des cérémonies religieuses ou laïques."
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

        {/* Avis */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-display text-foreground text-center mb-10">
              Avis des familles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  auteur: "Christine Conti",
                  texte: "Merci pour votre intervention très professionnelle, votre rapidité de réponse et pour un accueil bienveillant.",
                  date: "03 Oct 2024",
                },
                {
                  auteur: "Isadora Duncan",
                  texte: "Mon père avait choisi Mr BEGOLE pour ses obsèques, nous avons été très touchés par son professionnalisme, sa bienveillance et son accueil. Nous ne pouvons que recommander ces pompes funèbres.",
                  date: "13 Sep 2022",
                },
                {
                  auteur: "Gerard Nano",
                  texte: "Ma famille et moi avons bénéficié de l'aide de SCF et attestons de leur professionnalisme, de leur attitude positive dans ces moments difficiles, du respect de la famille, et de leur accompagnement spirituel.",
                  date: "02 Avr 2022",
                },
              ].map((avis, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-5 shadow-sm border border-border/50"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-500 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    "{avis.texte}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-foreground font-medium text-sm">{avis.auteur}</p>
                    <p className="text-muted-foreground text-xs">{avis.date}</p>
                  </div>
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
              href="tel:0188610800"
              className="btn-primary inline-block mt-4"
            >
              Appeler le 01 88 61 08 00
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgenceParis17;
