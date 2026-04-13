import { HelmetProvider } from "react-helmet-async";
import AgenceTemplate, { type AgenceData } from "@/components/agence/AgenceTemplate";
import photo1 from "@/assets/agence-paris-17-1.webp";
import photo2 from "@/assets/agence-paris-17-2.webp";
import photo3 from "@/assets/agence-paris-17-3.webp";
import photo4 from "@/assets/agence-paris-17-4.webp";
import photo5 from "@/assets/agence-paris-17-5.webp";
import logoPrefecture from "@/assets/logo-prefecture-police.png";

const paris17Data: AgenceData = {
  ville: "Paris",
  arrondissement: "17e",
  adresse: "10 rue Saint-Ferdinand",
  codePostal: "75017",
  telephone: "+33188610800",
  telephoneDisplay: "01 88 61 08 00",
  coordonnees: { latitude: 48.8788349, longitude: 2.2900696 },
  dateOuverture: "novembre 2023",
  horaires: "Lun–Ven 9h–18h",
  horairesSamedi: "Sam sur RDV",
  googleMapsUrl: "https://www.google.fr/maps/place/10+Rue+Saint-Ferdinand,+75017+Paris",
  googleReviewsUrl: "https://maps.google.com/?cid=15212962876070792810",
  slug: "paris-17",
  photos: [photo1, photo2, photo3, photo4, photo5],
  logoPrefecture,
  prefectureLabel: "Habilité préfecture de Paris",
  noteGlobale: 5.0,
  contactFormTitle: "Vous souhaitez être contacté par l'agence de Service Catholique des Funérailles - Paris 17 ?",
  avis: [
    {
      auteur: "Christine Conti",
      note: 5,
      texte: "Merci pour votre intervention très professionnelle, votre rapidité de réponse et pour un accueil bienveillant",
      date: "03 Oct 2024",
    },
    {
      auteur: "Isadora Duncan",
      note: 5,
      texte: "Mon père avait choisi Mr BEGOLE pour ses obsèques, nous avons été très touchés par son professionnalisme, sa bienveillance et son accueil. Nous ne pouvons que recommander ces pompes funèbres.",
      date: "13 Sep 2022",
    },
    {
      auteur: "Gerard Nano",
      note: 5,
      texte: "Ma famille et moi avons bénéficié de l'aide de SCF dirigé par Fabrice Begole et attestons de leur professionnalisme, de leur attitude positive dans ces moments difficiles, du respect de la famille, et de leur accompagnement spirituel.",
      date: "02 Apr 2022",
    },
  ],
  sections: {
    presentation: `<p>Le <strong>Service Catholique des Funérailles (SCF)</strong> est une coopérative de pompes funèbres catholiques fondée en 1999 à la demande du Cardinal Lustiger. Notre agence de <strong>Paris 17e</strong>, ouverte en novembre 2023 au 10 rue Saint-Ferdinand, accompagne les familles endeuillées dans l'organisation d'<strong>obsèques catholiques</strong> — messe de funérailles, veillée funèbre, inhumation ou crémation — avec bienveillance et sans surenchère commerciale. Nous intervenons dans tout Paris et les communes limitrophes, <strong>7 jours sur 7, 24 heures sur 24</strong>.</p>`,
    prestations: `<p>Dès le premier contact, un conseiller funéraire dédié vous accompagne pour organiser l'ensemble des obsèques catholiques de votre proche : prise en charge du corps, démarches administratives, coordination avec la paroisse pour la messe de funérailles, transport, fourniture du cercueil, fleurs et faire-part.</p>
<p>Notre accompagnement comprend la veillée funèbre (adieu au visage), la célébration religieuse à l'église, puis l'inhumation catholique au cimetière ou la crémation au crématorium du Père-Lachaise ou d'Arcueil.</p>`,
    demarches: `<p>Après le constat médical du décès, notre équipe prend en charge l'intégralité des démarches administratives : déclaration de décès en mairie, obtention des actes d'état civil, coordination avec l'hôpital ou l'EHPAD, contact avec le notaire et les organismes sociaux.</p>`,
    prevoyance: `<p>Vous souhaitez anticiper vos obsèques pour soulager vos proches ? Notre agence vous reçoit en entretien confidentiel pour définir vos volontés, établir un devis personnalisé et souscrire un contrat obsèques si vous le souhaitez.</p>`,
    identite: `<p>Ce qui distingue le SCF des autres pompes funèbres parisiennes, c'est une spiritualité chrétienne vécue concrètement : nos assistants funéraires accompagnent les familles dans la prière, coordonnent la cérémonie avec le prêtre officiant, et considèrent leur mission comme un service rendu à la dignité de la personne défunte. Le SCF accompagne toutes les familles, quelle que soit leur confession.</p>`,
  },
  faq: [
    {
      question: "Quelles sont les pompes funèbres catholiques à Paris 17e ?",
      reponse: "Le Service Catholique des Funérailles (SCF) est la principale agence de pompes funèbres catholiques du 17e arrondissement de Paris, située 10 rue Saint-Ferdinand, 75017 Paris. Joignable au 01 88 61 08 00, 7j/7 et 24h/24.",
    },
    {
      question: "Comment organiser une messe de funérailles à Paris 17e ?",
      reponse: "Le SCF Paris 17e coordonne directement avec les paroisses du 17e arrondissement pour organiser une messe de funérailles : contact avec le prêtre officiant, réservation de l'église, préparation de la liturgie avec la famille.",
    },
    {
      question: "Quel est le délai pour organiser des obsèques à Paris ?",
      reponse: "En France, les obsèques doivent avoir lieu dans un délai de 6 jours ouvrables après le décès. Le SCF Paris 17e est disponible 24h/24 pour engager les démarches immédiatement.",
    },
    {
      question: "Où se trouve le crématorium le plus proche de Paris 17e ?",
      reponse: "Le crématorium du Père-Lachaise (20e arr.) est accessible en moins de 30 minutes. Un second crématorium est disponible à Arcueil (94), à environ 15 minutes. Le SCF gère la réservation et la coordination.",
    },
    {
      question: "Le SCF accompagne-t-il les familles non catholiques ?",
      reponse: "Oui. Le SCF accompagne toutes les familles quelle que soit leur confession, avec le même professionnalisme et la même bienveillance, pour des cérémonies religieuses ou laïques.",
    },
  ],
  openingHoursSpec: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
  ],
};

const AgenceParis17 = () => (
  <HelmetProvider>
    <AgenceTemplate data={paris17Data} />
  </HelmetProvider>
);

export default AgenceParis17;
