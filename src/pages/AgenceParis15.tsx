import { useEffect, useState, useCallback } from "react";
import { Phone, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgenceContactForm from "@/components/agence/AgenceContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import agenceParis15 from "@/assets/agence-paris-15.png";
import agenceParis15b from "@/assets/agence-paris-15-2.jpg";
import agenceParis15c from "@/assets/agence-paris-15-3.jpg";
import agenceParis15d from "@/assets/agence-paris-15-4.jpg";
import logoPrefecture from "@/assets/logo-prefecture-police.png";

const agenceImages = [
  { src: agenceParis15, alt: "Agence SCF Paris 15 - Façade rue Falguière" },
  { src: agenceParis15b, alt: "Agence SCF Paris 15 - Vitrine et fleurs" },
  { src: agenceParis15c, alt: "Agence SCF Paris 15 - Entrée intérieure" },
  { src: agenceParis15d, alt: "Agence SCF Paris 15 - Accueil et icône" },
];

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Pompes+Fun%C3%A8bres+-+Service+Catholique+des+Fun%C3%A9railles+de+Paris+15/@48.8408302,2.3129986,20.51z/data=!3m1!5s0x47e67036c4ad173d:0x363b8af8da95306d!4m15!1m8!3m7!1s0x47e67036c356f657:0xe67c11a6abdeb351!2s66+Rue+Falgui%C3%A8re,+75015+Paris!3b1!8m2!3d48.8408037!4d2.313031!16s%2Fg%2F11snpzlv3j!3m5!1s0x47e66e5c70ae092f:0xc5a2f3b66c4ddf9f!8m2!3d48.8408338!4d2.313026!16s%2Fg%2F11hyl63n3z?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

const AgenceParis15 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % agenceImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + agenceImages.length) % agenceImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

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
        <section className="relative bg-primary pt-28 pb-8">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-display text-primary-foreground text-center mb-6 leading-tight">
              Service Catholique des Funérailles – Paris 15
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:0144388080"
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-lg px-6 py-3 inline-flex items-center gap-2 text-lg font-medium hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                01 44 38 80 80
              </a>
              <span className="text-primary-foreground/80 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Urgence décès 7j/7 24h/24
              </span>
              <div className="flex items-center gap-3">
                <span className="text-primary-foreground text-sm text-right leading-tight">
                  Pompes funèbres habilitées<br />par la préfecture de Paris
                </span>
                <img src={logoPrefecture} alt="Logo Préfecture de Paris" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Image carousel + infos pratiques */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Carousel */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <div className="aspect-[16/10]">
                  {agenceImages.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === currentImage ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                {agenceImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {agenceImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImage(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            i === currentImage ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`Image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Infos pratiques */}
              <div>
                <h2 className="text-3xl font-display text-foreground mb-4 whitespace-nowrap">
                  Agence SCF Paris 15 : accompagnement funéraire
                </h2>
                <div className="space-y-3 mb-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>66, rue Falguière<br />75015 Paris</span>
                  </a>
                  <a
                    href="tel:0144388080"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>01 44 38 80 80</span>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong className="text-foreground">Horaires :</strong> Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous
                </p>

                {/* CTA urgence */}
                <div className="bg-secondary rounded-lg p-4 mb-4 text-center">
                  <p className="text-foreground font-medium text-sm mb-2">
                    ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
                  </p>
                  <a href="tel:0144388080" className="btn-primary inline-block text-sm">
                    Appeler le 01 44 38 80 80
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contenu éditorial + sidebar formulaire */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
              {/* Colonne éditoriale */}
              <div>
                {/* Présentation */}
                <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                  Notre agence de pompes funèbres à Paris 15
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Le Service Catholique des Funérailles de Paris, coopérative à gestion désintéressée, accompagne chaque famille avec bienveillance. Basée dans le 15ᵉ arrondissement, notre agence funéraire conçoit <strong className="text-foreground">des parcours adaptés à chaque situation, dans le respect de la dignité humaine et avec une espérance chrétienne.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nos conseillers funéraires accueillent toutes les familles, quelle que soit leur confession, et organisent tous types d'obsèques dans Paris et sa région.
                </p>

                {/* Boutons maillage interne */}
                <div className="flex flex-col sm:flex-row gap-3 my-6 max-w-md">
                  <Link
                    to="/organiser-des-obseques"
                    className="text-center border-2 border-foreground text-foreground font-medium py-2.5 px-5 rounded-lg hover:bg-foreground hover:text-background transition-colors text-sm"
                  >
                    Organiser des obsèques
                  </Link>
                  <Link
                    to="/services/prevoyance"
                    className="text-center bg-primary text-primary-foreground font-medium py-2.5 px-5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    Anticiper ses obsèques
                  </Link>
                </div>

                {/* Organisation des obsèques */}
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  Organisation des obsèques : un accompagnement complet
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Nous proposons l'ensemble des services nécessaires à l'<Link to="/organiser-des-obseques" className="text-primary underline hover:text-primary/80">organisation des funérailles</Link>. Un conseiller funéraire dédié vous accompagne à chaque étape :
                </p>
                <ul className="space-y-1 text-foreground mb-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Entretien initial</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Démarches administratives</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Préparation des obsèques</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Coordination le jour de la cérémonie</strong>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nous veillons à réduire au maximum la charge administrative et matérielle afin de permettre aux familles de traverser cette période avec sérénité.
                </p>

                {/* Prévoir ses obsèques */}
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  Prévoir ses obsèques : contrats et prévoyance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Nous accompagnons également toutes les personnes souhaitant <Link to="/services/prevoyance" className="text-primary underline hover:text-primary/80">anticiper leurs obsèques</Link>. La prévoyance funéraire peut prendre plusieurs formes :
                </p>
                <ul className="space-y-1 text-foreground mb-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Simple dépôt de volontés</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Estimation du coût des obsèques</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <strong>Mise en place d'un contrat d'assurance obsèques</strong>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Ces questions peuvent être abordées en toute confidentialité lors d'un entretien dans notre agence de pompes funèbres à Paris 15.
                </p>

                {/* Engagement */}
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  Notre engagement auprès des familles
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La proposition du Service Catholique des Funérailles se veut simple, claire et fiable. Sans surenchère commerciale, <strong className="text-foreground">nous plaçons les besoins des familles au centre de notre mission et veillons à respecter leurs souhaits</strong> comme la réalité de leur deuil.
                </p>


                {/* Collaborateurs */}
                <h2 className="text-2xl font-display text-foreground mt-10 mb-6">
                  Nos collaborateurs
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                      className="bg-card rounded-lg p-3 shadow-sm border border-border/50 text-center"
                    >
                      <p className="text-primary font-medium text-xs uppercase tracking-wider mb-1">{collab.role}</p>
                      <p className="text-foreground font-display text-sm">{collab.prenom} {collab.nom}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar sticky : formulaire */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <AgenceContactForm agenceLabel="Paris 15" />
                  <p className="text-sm text-primary font-medium mt-3">
                    <strong>(*) Horaires de l'agence :</strong><br />
                    <span className="text-primary">Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire mobile (visible uniquement sur mobile/tablette) */}
        <section className="py-8 bg-secondary lg:hidden">
          <div className="container mx-auto px-6 max-w-lg">
            <AgenceContactForm agenceLabel="Paris 15" />
          </div>
        </section>

        {/* FAQ en bas de page */}
        <section className="py-10 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display text-foreground text-center mb-8">
              Organisation des obsèques à Paris 15 : guide pratique
            </h2>
            <Accordion type="multiple" className="space-y-3">
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
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border/50 px-5">
                  <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-4">
                    {i + 1}. {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                    {item.a}
                  </AccordionContent>
                  {/* Contenu sr-only pour le SEO */}
                  <div className="sr-only">{item.a}</div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgenceParis15;
