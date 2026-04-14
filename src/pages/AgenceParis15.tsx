import { useEffect, useState, useCallback } from "react";
import { Phone, MapPin, Clock, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgenceContactForm from "@/components/agence/AgenceContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import agenceParis15 from "@/assets/agence-paris-15.png";
import agenceParis15b from "@/assets/agence-paris-15-2.jpg";
import agenceParis15c from "@/assets/agence-paris-15-3.jpg";
import agenceParis15d from "@/assets/agence-paris-15-4.jpg";
import logoPrefecture from "@/assets/logo-prefecture-police.png";
import collabChristian from "@/assets/collab-christian-de-cacqueray.png";
import agenceParis15e from "@/assets/agence-paris15-bureau1.jpg";
import agenceParis15f from "@/assets/agence-paris15-bureau2.jpg";

const agenceImages = [
  { src: agenceParis15, alt: "Agence SCF Paris 15 - Façade rue Falguière" },
  { src: agenceParis15b, alt: "Agence SCF Paris 15 - Vitrine et fleurs" },
  { src: agenceParis15c, alt: "Agence SCF Paris 15 - Entrée intérieure" },
  { src: agenceParis15d, alt: "Agence SCF Paris 15 - Accueil et icône" },
  { src: agenceParis15e, alt: "Agence SCF Paris 15 - Entretien avec une famille" },
  { src: agenceParis15f, alt: "Agence SCF Paris 15 - Bureau et accueil téléphonique" },
];

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Pompes+Fun%C3%A8bres+-+Service+Catholique+des+Fun%C3%A9railles+de+Paris+15/@48.8408302,2.3129986,20.51z/data=!3m1!5s0x47e67036c4ad173d:0x363b8af8da95306d!4m15!1m8!3m7!1s0x47e67036c356f657:0xe67c11a6abdeb351!2s66+Rue+Falgui%C3%A8re,+75015+Paris!3b1!8m2!3d48.8408037!4d2.313031!16s%2Fg%2F11snpzlv3j!3m5!1s0x47e66e5c70ae092f:0xc5a2f3b66c4ddf9f!8m2!3d48.8408338!4d2.313026!16s%2Fg%2F11hyl63n3z?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=15212962876070792810";

const avis = [
  {
    nom: "Christine Conti",
    date: "octobre 2024",
    etoiles: 5,
    texte: "Merci pour votre intervention très professionnelle, votre rapidité de réponse et pour un accueil bienveillant.",
  },
  {
    nom: "Isadora Duncan",
    date: "septembre 2022",
    etoiles: 5,
    texte: "Mon père avait choisi Mr Bégolé pour ses obsèques, nous avons été très touchés par son professionnalisme, sa bienveillance et son accueil. Nous ne pouvons que recommander ces pompes funèbres.",
  },
  {
    nom: "Gerard Nano",
    date: "avril 2022",
    etoiles: 5,
    texte: "Ma famille et moi attestons de leur professionnalisme, de leur attitude positive dans ces moments difficiles, du respect de la famille, et de leur accompagnement spirituel.",
  },
];

const jsonLdFuneralHome = {
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  "name": "Service Catholique des Funérailles — Paris 15e",
  "url": "https://s-c-f.org/agences/paris-15/",
  "telephone": "+33144388080",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "66, rue Falguière",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressCountry": "FR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8432,
    "longitude": 2.3156,
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "12:00" },
  ],
  "description": "Pompes funèbres catholiques à Paris 15e. Obsèques catholiques, messe de funérailles, inhumation, crémation. Disponible 24h/24 7j/7.",
  "areaServed": "Paris 15e arrondissement",
  "founder": { "@type": "Person", "name": "Christian de Cacqueray" },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://s-c-f.org/" },
    { "@type": "ListItem", "position": 2, "name": "Nos agences", "item": "https://s-c-f.org/agences/" },
    { "@type": "ListItem", "position": 3, "name": "Paris 15e", "item": "https://s-c-f.org/agences/paris-15/" },
  ],
};

const StarRating = ({ count, size = 14 }: { count: number; size?: number }) => (
  <span className="inline-flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={i < count ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}
        style={{ width: size, height: size }}
      />
    ))}
  </span>
);

const HalfStarRating = () => (
  <span className="inline-flex gap-0.5 items-center">
    {Array.from({ length: 4 }).map((_, i) => (
      <Star key={i} className="text-yellow-500 fill-yellow-500" style={{ width: 16, height: 16 }} />
    ))}
    <span className="relative inline-block" style={{ width: 16, height: 16 }}>
      <Star className="text-muted-foreground/30 absolute inset-0" style={{ width: 16, height: 16 }} />
      <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
        <Star className="text-yellow-500 fill-yellow-500" style={{ width: 16, height: 16 }} />
      </span>
    </span>
  </span>
);

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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pompes funèbres catholiques Paris 15e — SCF | 01 44 38 80 80</title>
        <meta
          name="description"
          content="Pompes funèbres catholiques à Paris 15e, disponibles 24h/24. Obsèques catholiques, messe de funérailles, inhumation, crémation. 66 rue Falguière. 01 44 38 80 80."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdFuneralHome)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-28 pb-5">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-1.5 text-primary-foreground/60" style={{ fontSize: 12 }}>
                <li><Link to="/" className="hover:text-primary-foreground/90">Accueil</Link></li>
                <li>/</li>
                <li><Link to="/contacter-une-agence" className="hover:text-primary-foreground/90">Nos agences</Link></li>
                <li>/</li>
                <li className="text-primary-foreground/90">Paris 15e</li>
              </ol>
            </nav>
            <h1 className="font-display text-primary-foreground text-center mb-1" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.2 }}>
              Pompes funèbres catholiques à Paris 15e
            </h1>
            <p className="text-primary-foreground/70 text-center mb-4" style={{ fontSize: 17 }}>
              Service Catholique des Funérailles – Paris 15
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="tel:0144388080"
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-lg px-5 py-2.5 inline-flex items-center gap-2 font-medium hover:bg-primary-foreground/20 transition-colors"
                style={{ fontSize: 15 }}
              >
                <Phone className="w-4 h-4" />
                01 44 38 80 80
              </a>
              <span className="text-primary-foreground/80 flex items-center gap-2" style={{ fontSize: 14 }}>
                <Clock className="w-3.5 h-3.5" />
                Urgence décès 7j/7 24h/24
              </span>
              <div className="flex items-center gap-3">
                <span className="text-primary-foreground text-right leading-tight" style={{ fontSize: 14 }}>
                  Pompes funèbres habilitées<br />par la préfecture de Paris
                </span>
                <img src={logoPrefecture} alt="Logo Préfecture de Paris" className="h-9 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Image carousel + infos pratiques */}
        <section className="bg-background" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Carousel */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group min-h-[280px]">
                <div className="absolute inset-0">
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
                <h2 className="font-display text-foreground mb-3 whitespace-nowrap" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Agence SCF Paris 15 : accompagnement funéraire
                </h2>
                <div className="space-y-2 mb-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontSize: 16 }}
                  >
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>66, rue Falguière<br />75015 Paris</span>
                  </a>
                  <a
                    href="tel:0144388080"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontSize: 16 }}
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>01 44 38 80 80</span>
                  </a>
                </div>
                <p className="text-muted-foreground mb-4" style={{ fontSize: 14 }}>
                  <strong className="text-foreground">Horaires :</strong> Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous
                </p>

                {/* CTA urgence */}
                <div className="bg-secondary rounded-lg p-3 mb-3 text-center">
                  <p className="text-foreground font-medium mb-1.5" style={{ fontSize: 15 }}>
                    ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
                  </p>
                  <a href="tel:0144388080" className="btn-primary inline-block" style={{ fontSize: 15 }}>
                    Appeler le 01 44 38 80 80
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu éditorial + sidebar formulaire */}
        <section className="bg-background" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
              {/* Colonne éditoriale */}
              <div>
                {/* Présentation */}
                <h2 className="font-display text-foreground mb-3" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Notre agence de pompes funèbres à Paris 15
                </h2>
                <p className="text-muted-foreground mb-2" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Le Service Catholique des Funérailles de Paris, <strong className="text-foreground">coopérative à gestion désintéressée</strong>, accompagne chaque famille avec bienveillance. Basée dans le 15ᵉ arrondissement, notre agence funéraire conçoit des parcours adaptés à chaque situation, dans le respect de la dignité humaine et avec une espérance chrétienne.
                </p>
                <p className="text-muted-foreground mb-5" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Nos conseillers funéraires accueillent toutes les familles, quelle que soit leur confession, et organisent tous types d'obsèques dans Paris et sa région.
                </p>

                {/* Boutons maillage interne */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5 max-w-md">
                  <Link
                    to="/organiser-des-obseques"
                    className="text-center border-2 border-foreground text-foreground font-medium py-2 px-4 rounded-lg hover:bg-foreground hover:text-background transition-colors"
                    style={{ fontSize: 15 }}
                  >
                    Organiser des obsèques catholiques
                  </Link>
                  <Link
                    to="/services/prevoyance"
                    className="text-center bg-primary text-primary-foreground font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                    style={{ fontSize: 15 }}
                  >
                    Préfinancer mes obsèques
                  </Link>
                </div>

                {/* Organisation des obsèques */}
                <h2 className="font-display text-foreground mb-2" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Organisation des obsèques : un accompagnement complet
                </h2>
                <p className="text-muted-foreground mb-2" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Nous proposons l'ensemble des services nécessaires à l'<Link to="/organiser-des-obseques" className="text-primary underline hover:text-primary/80">organisation des funérailles</Link>. Un conseiller funéraire dédié vous accompagne à chaque étape :
                </p>
                <ul className="space-y-1 text-foreground mb-2 ml-4" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Entretien initial
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Démarches administratives
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Préparation des <strong className="text-foreground">obsèques catholiques</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Coordination le jour de la cérémonie
                  </li>
                </ul>
                <p className="text-muted-foreground mb-5" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Nous veillons à réduire au maximum la charge administrative et matérielle afin de permettre aux familles de traverser cette période avec sérénité.
                </p>

                {/* Prévoir ses obsèques */}
                <h2 className="font-display text-foreground mb-2" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Prévoir ses obsèques : contrats et prévoyance
                </h2>
                <p className="text-muted-foreground mb-2" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Nous accompagnons également toutes les personnes souhaitant <Link to="/services/prevoyance" className="text-primary underline hover:text-primary/80">anticiper leurs obsèques</Link>. La <strong className="text-foreground">prévoyance funéraire</strong> peut prendre plusieurs formes :
                </p>
                <ul className="space-y-1 text-foreground mb-2 ml-4" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Simple dépôt de volontés
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Estimation du coût des obsèques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Mise en place d'un contrat d'assurance obsèques
                  </li>
                </ul>
                <p className="text-muted-foreground mb-5" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Ces questions peuvent être abordées en toute confidentialité lors d'un entretien dans notre agence de <strong className="text-foreground">pompes funèbres</strong> à Paris 15.
                </p>

                {/* Engagement */}
                <h2 className="font-display text-foreground mb-2" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Notre engagement auprès des familles
                </h2>
                <p className="text-muted-foreground mb-5" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  La proposition du Service Catholique des Funérailles se veut simple, claire et fiable. Sans surenchère commerciale, nous plaçons les besoins des familles au centre de notre mission et veillons à respecter leurs souhaits comme la réalité de leur deuil.
                </p>

                {/* Identité catholique */}
                <h2 className="font-display text-foreground mb-2" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Notre identité catholique
                </h2>
                <p className="text-muted-foreground mb-5" style={{ fontSize: 16, lineHeight: 1.75 }}>
                  Ce qui distingue le SCF des autres <strong className="text-foreground">pompes funèbres</strong> parisiennes, c'est une spiritualité chrétienne vécue concrètement : nos assistants funéraires accompagnent les familles dans la prière, coordonnent la cérémonie avec le prêtre officiant, et considèrent leur mission comme un service rendu à la dignité de la personne défunte et à la consolation des vivants. Le SCF accompagne toutes les familles, quelle que soit leur confession, avec le même respect et la même humanité.
                </p>

                {/* Avis des familles */}
                <h2 className="font-display text-foreground mb-3" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Avis des familles
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-foreground font-medium" style={{ fontSize: 16 }}>4,5/5</span>
                  <HalfStarRating />
                </div>
                <div className="grid sm:grid-cols-3 gap-3 mb-3">
                  {avis.map((a, i) => (
                    <div key={i} className="bg-secondary rounded-lg shadow-sm" style={{ padding: 14 }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-foreground font-medium" style={{ fontSize: 14 }}>{a.nom}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <StarRating count={a.etoiles} size={12} />
                        <span className="text-muted-foreground" style={{ fontSize: 12 }}>{a.date}</span>
                      </div>
                      <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.6 }}>{a.texte}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  style={{ fontSize: 15 }}
                >
                  Voir tous nos avis sur Google →
                </a>

                {/* Collaborateurs */}
                <h2 className="font-display text-foreground mt-8 mb-5 text-center" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
                  Nos collaborateurs
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {[
                    { role: "Directeur", prenom: "Christian", nom: "de Cacqueray", photo: collabChristian },
                    { role: "Directeur adjoint", prenom: "Frédéric", nom: "Barut", photo: null },
                    { role: "Assistant funéraire", prenom: "Baudoin", nom: "Drion", photo: null },
                    { role: "Assistant funéraire", prenom: "Christophe", nom: "Grimaud", photo: null },
                    { role: "Assistante funéraire", prenom: "Muriel", nom: "Lavergne", photo: null },
                    { role: "Assistant funéraire", prenom: "Sébastien", nom: "Legrand", photo: null },
                    { role: "Assistant funéraire", prenom: "Romain", nom: "Martinot", photo: null },
                    { role: "Chargée de prévoyance", prenom: "Catherine", nom: "Poincet", photo: null },
                    { role: "Responsable prévoyance", prenom: "Jean-Philippe", nom: "Rabaroux", photo: null },
                    { role: "Maître de cérémonie", prenom: "Stéphanie", nom: "d'Hébrail", photo: null },
                  ].map((collab, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-muted mb-2 shrink-0">
                        {collab.photo ? (
                          <img src={collab.photo} alt={`${collab.prenom} ${collab.nom}`} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-display" style={{ fontSize: 18 }}>
                            {collab.prenom[0]}{collab.nom[0]}
                          </div>
                        )}
                      </div>
                      <p className="font-semibold uppercase tracking-wider text-primary mb-0.5" style={{ fontSize: 12 }}>{collab.role}</p>
                      <p className="font-display text-foreground" style={{ fontSize: 15 }}>{collab.prenom} {collab.nom}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar sticky : formulaire */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <AgenceContactForm agenceLabel="Paris 15" />
                  <p className="text-primary font-medium mt-2" style={{ fontSize: 14 }}>
                    <strong>(*) Horaires de l'agence :</strong><br />
                    <span className="text-primary">Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire mobile */}
        <section className="bg-secondary lg:hidden" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div className="container mx-auto px-6 max-w-lg">
            <AgenceContactForm agenceLabel="Paris 15" />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-foreground text-center mb-5" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3 }}>
              Organisation des obsèques à Paris 15 : guide pratique
            </h2>
            <Accordion type="multiple" className="space-y-2">
              {[
                {
                  q: "Quelles sont les différentes étapes d'organisation des obsèques ?",
                  a: "L'organisation des obsèques de votre proche s'effectue depuis notre agence de Paris. Lors de cet entretien, l'objectif est de vous soulager sur les aspects logistiques, organisationnels et administratifs, et de rapidement vous permettre d'avoir une visibilité sur les jours suivants. Pour cela, nous avons besoin du livret de famille de la personne décédée, de la carte d'identité du mandataire et des habits avec lesquels nous irons retrouver et prendre soin de votre proche.",
                },
                {
                  q: "Quels sont les avantages de souscrire un contrat d'assurance obsèques ?",
                  a: "Lors d'un rendez-vous dans notre agence de Paris, nous pouvons vous accompagner dans la réflexion et la préparation de vos propres obsèques ou celles de votre proche. Effectuer une prévoyance funéraire à travers un dépôt de volontés et/ou un contrat obsèques permet de soulager vos proches le jour venu, et peut permettre aussi de garantir le respect de vos volontés.",
                },
                {
                  q: "Quelles sont les démarches à effectuer après un décès ?",
                  a: "Les pompes funèbres vous remettront plusieurs originaux d'actes de décès (entre 10 et 15). Ces documents d'état civil représentent le document de référence pour les démarches à effectuer auprès de tous les organismes concernés : employeur, France Travail, banques, caisses d'assurance, mutuelles, notaire, centre des impôts, etc. Nous tenons à votre disposition un modèle de lettre à envoyer à ces divers organismes.",
                },
                {
                  q: "Vous faites face à un décès ?",
                  a: "Lorsqu'un décès survient, un médecin ou un infirmier doit venir constater et émettre un certificat médical. La famille doit alors entrer en contact avec les pompes funèbres de son choix. Nous pouvons être appelés 24 heures sur 24 au 01 44 38 80 80 afin de répondre aux questions immédiates et d'assurer les éventuels services urgents. Notre accompagnement comprend le repos du corps du défunt et l'organisation complète des obsèques.",
                },
                {
                  q: "Comment organiser une crémation à Paris ?",
                  a: "Il y a un crématorium à Paris : le crématorium du Père Lachaise. Un crématorium se situe également à moins de 15 minutes dans la commune d'Arcueil. Ce sont les pompes funèbres qui réservent les prestations adéquates : salon de recueillement ou salle de cérémonie. Le coût d'une crémation se situe autour de 1 000 € pour les crématoriums à Paris et à proximité.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border/50 px-4">
                  <AccordionTrigger className="text-left font-display text-foreground hover:no-underline py-3" style={{ fontSize: 17, fontWeight: 500 }}>
                    {i + 1}. {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-3" style={{ fontSize: 16, lineHeight: 1.75 }}>
                    {item.a}
                  </AccordionContent>
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
