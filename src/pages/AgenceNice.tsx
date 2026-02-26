import { useEffect } from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agenceNice from "@/assets/agence-nice.png";

const AgenceNice = () => {
  useEffect(() => {
    document.title = "Service Catholique des Funérailles - Nice | Pompes funèbres";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Service Catholique des Funérailles à Nice. Organisation d'obsèques et prévoyance funéraire. Urgence décès 7j/7, 24h/24 au 04 89 94 62 32. 8 avenue de la République, 06000 Nice."
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
              Pompes funèbres habilitées par la préfecture des Alpes-Maritimes
            </p>
            <h1 className="text-3xl md:text-5xl font-display text-primary-foreground mb-6 leading-tight">
              Service Catholique des Funérailles – Nice
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="tel:0489946232"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                04 89 94 62 32
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
                  src={agenceNice}
                  alt="Agence Service Catholique des Funérailles - Nice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-display text-foreground mb-6">
                  Notre agence de Nice
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>8, avenue de la République<br />06000 Nice</span>
                  </div>
                  <a
                    href="tel:0489946232"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>04 89 94 62 32</span>
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Depuis l'ouverture de son agence de Nice en février 2017, le Service Catholique des Funérailles accompagne les familles dans tout le département des Alpes-Maritimes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Le Service Catholique des Funérailles de Nice, coopérative à gestion désintéressée, est <strong className="text-foreground">un service de pompes funèbres</strong> soucieux de mettre en place et d'accompagner des <strong className="text-foreground">parcours rituels funéraires adaptés à chaque famille</strong>, dans un esprit de respect de la dignité humaine et avec une espérance chrétienne.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En tant que professionnels des pompes funèbres, les conseillers du SCF – Nice s'engagent à accompagner les familles en deuil de toutes les Alpes-Maritimes, sans distinction. Ils accueillent les familles quels que soient leur confession et le type d'obsèques qu'elles demandent.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-12">
              Nos prestations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display text-foreground mb-4">
                  Organiser des obsèques à Nice
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous offrons l'ensemble des services de pompes funèbres nécessaires à toute famille niçoise confrontée au décès d'un proche. Nous mobilisons notre cœur, notre énergie et nos compétences pour soutenir moralement les familles de Nice et des Alpes-Maritimes, et veillons à alléger tous les aspects matériels, administratifs et organisationnels.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display text-foreground mb-4">
                  Prévoyance funéraire
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous vous aidons dans la préparation anticipée de vos obsèques. Cette prévoyance funéraire peut se décliner de plusieurs façons : du simple dépôt de volontés à l'évaluation du prix des obsèques et jusqu'à la mise en place d'un contrat d'assurance obsèques.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-center mt-10 max-w-3xl mx-auto">
              La proposition du Service Catholique des Funérailles se veut fiable et simple. Dénuée de toute surenchère commerciale, elle donne <strong className="text-foreground">priorité à la réponse aux besoins des familles</strong> niçoises et des Alpes-Maritimes.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-12">
              Les étapes clés de l'organisation des obsèques à Nice
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Quelles sont les différentes étapes d'organisation des obsèques ?",
                  a: "L'organisation des obsèques s'effectue depuis notre agence de Nice. Lors de cet entretien, l'objectif est de vous soulager sur les aspects logistiques, organisationnels et administratifs. Un conseiller funéraire dédié vous accompagne pendant toutes les étapes, depuis l'entretien initial jusqu'au jour des obsèques."
                },
                {
                  q: "Quels sont les avantages de souscrire un contrat d'assurance obsèques ?",
                  a: "Effectuer une prévoyance funéraire à travers un dépôt de volontés et/ou un contrat obsèques permet de soulager vos proches le jour venu, et peut permettre aussi de garantir le respect de vos volontés."
                },
                {
                  q: "Quelles sont les démarches à effectuer après un décès ?",
                  a: "Les agences de pompes funèbres vous remettront plusieurs originaux d'actes de décès (entre 10 et 15). Ces documents permettent d'informer tous les organismes concernés. Le Service Catholique des Funérailles met à disposition des familles un modèle de lettre à envoyer à ces divers organismes."
                },
                {
                  q: "Vous faites face à un décès ?",
                  a: "Lorsqu'un décès survient, un médecin doit constater et émettre un certificat médical. La famille doit alors entrer en contact avec les pompes funèbres de son choix. Nous sommes joignables 24h/24 au 04 89 94 62 32 afin de répondre aux questions immédiates."
                },
                {
                  q: "Comment organiser une crémation à Nice ?",
                  a: "Le crématorium de Nice Côte d'Azur est situé dans la commune de Colomars, à 20 km de la ville. Les villes de Cannes et Saint-Raphaël ont aussi un crématorium à disposition des familles. Ce sont les pompes funèbres qui réservent les prestations adéquates lors de l'entretien d'organisation."
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

        {/* Collaborateur */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-2xl font-display text-foreground mb-8">
              Notre collaborateur
            </h2>
            <div className="inline-block bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-1">Responsable d'agence</p>
              <p className="text-foreground font-display text-xl">Nicolas Fresnet</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <p className="text-foreground font-medium text-lg">
              ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
            </p>
            <a
              href="tel:0489946232"
              className="btn-primary inline-block mt-4"
            >
              Appeler le 04 89 94 62 32
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgenceNice;
