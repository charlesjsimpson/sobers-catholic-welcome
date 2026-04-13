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
  slug: "paris-17",
  photos: [photo1, photo2, photo3, photo4, photo5],
  logoPrefecture,
  prefectureLabel: "Habilité préfecture de Paris",
  avis: [
    {
      auteur: "Marie L.",
      note: 5,
      texte: "Un accompagnement d'une grande humanité dans un moment très difficile. L'équipe a été disponible, à l'écoute et d'une grande délicatesse. Je recommande vivement.",
      date: "Mars 2025",
    },
    {
      auteur: "Philippe D.",
      note: 5,
      texte: "Nous avons été accompagnés avec beaucoup de professionnalisme et de bienveillance pour les obsèques de notre mère. Tout a été parfaitement organisé.",
      date: "Janvier 2025",
    },
    {
      auteur: "Catherine R.",
      note: 5,
      texte: "Service irréprochable, dans le respect de nos souhaits et de notre foi. La cérémonie était très belle. Merci à toute l'équipe du SCF.",
      date: "Décembre 2024",
    },
  ],
  sections: {
    presentation: `<p>Le <strong>Service Catholique des Funérailles (SCF)</strong> est une coopérative de pompes funèbres catholiques fondée en 1999 à la demande du Cardinal Lustiger. Notre agence de <strong>Paris 17e</strong>, ouverte en novembre 2023 au 10 rue Saint-Ferdinand, accompagne les familles endeuillées dans l'organisation d'<strong>obsèques catholiques</strong> — messe de funérailles, veillée funèbre, inhumation ou crémation — avec bienveillance et sans surenchère commerciale.</p>
<p>Nous intervenons dans tout Paris et les communes limitrophes, <strong>7 jours sur 7, 24 heures sur 24</strong>. En cas de décès, contactez-nous immédiatement au <a href="tel:+33188610800" class="text-primary font-semibold hover:underline">01 88 61 08 00</a>.</p>`,
    prestations: `<p>Notre agence de Paris 17e prend en charge l'<strong>organisation complète des obsèques</strong> : entretien avec un conseiller funéraire dédié, démarches administratives, préparation du défunt, transport, choix du cercueil et des fleurs, coordination avec la paroisse pour la <strong>messe de funérailles</strong>, et accompagnement le jour de la cérémonie.</p>
<p>Que vous souhaitiez une <strong>inhumation</strong> dans un cimetière parisien ou une <strong>crémation</strong> au crématorium du Père Lachaise ou d'Arcueil, nous organisons chaque étape avec soin. Notre tarification est transparente et sans surenchère commerciale, conformément à notre mission de coopérative à gestion désintéressée.</p>`,
    demarches: `<p>Lors d'un décès à Paris, un médecin doit d'abord constater le décès et émettre un certificat médical. La famille contacte ensuite les pompes funèbres de son choix. Nous nous chargeons de la <strong>déclaration de décès en mairie</strong>, de l'obtention des <strong>actes de décès</strong> (10 à 15 originaux), et de la coordination avec les différents organismes. Nous mettons à votre disposition un modèle de courrier pour les démarches auprès de l'employeur, des banques, de la mutuelle, du notaire et du centre des impôts.</p>`,
    prevoyance: `<p>Nous accompagnons les personnes qui souhaitent <strong>anticiper leurs obsèques</strong> pour soulager leurs proches le jour venu. Lors d'un rendez-vous confidentiel dans notre agence de Paris 17e, nous vous proposons : un <strong>dépôt de volontés</strong> détaillant vos souhaits (type de cérémonie, lieu d'inhumation, musiques, lectures), une <strong>estimation du coût des obsèques</strong>, et si vous le souhaitez, la mise en place d'un <strong>contrat d'assurance obsèques</strong> qui garantit le financement et le respect de vos volontés.</p>`,
    identite: `<p>Le SCF est né de la volonté de proposer un accompagnement funéraire ancré dans la <strong>tradition catholique</strong>. Chaque cérémonie est pensée pour offrir un cadre de recueillement et d'espérance. Nous travaillons en lien étroit avec les paroisses de Paris pour organiser des <strong>messes de funérailles</strong> dignes et priantes. Notre équipe, formée à l'accompagnement du deuil, accueille néanmoins <strong>toutes les familles</strong>, quelle que soit leur confession, avec le même respect et la même bienveillance.</p>`,
  },
  faq: [
    {
      question: "Quelles sont les pompes funèbres catholiques à Paris 17e ?",
      reponse: "Le Service Catholique des Funérailles (SCF) est la principale agence de pompes funèbres catholiques du 17e arrondissement de Paris, située au 10 rue Saint-Ferdinand. Fondé en 1999, le SCF est une coopérative à gestion désintéressée qui accompagne les familles dans l'organisation d'obsèques catholiques (messe, veillée, inhumation, crémation) avec bienveillance et transparence tarifaire.",
    },
    {
      question: "Comment organiser une messe de funérailles à Paris 17e ?",
      reponse: "Pour organiser une messe de funérailles, notre équipe se coordonne directement avec la paroisse de votre choix dans le 17e ou ailleurs à Paris. Nous prenons en charge l'ensemble de l'organisation : choix des lectures, des chants, coordination avec le prêtre, impression du livret de messe. La messe de funérailles peut être célébrée dans l'église de la paroisse du défunt ou dans toute autre église parisienne.",
    },
    {
      question: "Quel est le délai pour organiser des obsèques à Paris ?",
      reponse: "La loi impose que les obsèques aient lieu dans un délai de 6 jours ouvrables après le décès (sauf dérogation). En pratique, les obsèques sont généralement organisées entre 3 et 5 jours après le décès. Notre équipe est disponible 24h/24, 7j/7 pour prendre en charge l'organisation dès le premier appel et vous accompagner dans les meilleurs délais.",
    },
    {
      question: "Où se trouve le crématorium le plus proche de Paris 17e ?",
      reponse: "Le crématorium le plus proche est celui du Père Lachaise (20e arrondissement de Paris). Un second crématorium se situe à Arcueil, à moins de 15 minutes. Le coût d'une crémation se situe autour de 1 000 € dans ces établissements. Notre agence se charge de la réservation du crématorium et de l'organisation de la cérémonie associée.",
    },
    {
      question: "Le SCF accompagne-t-il les familles non catholiques ?",
      reponse: "Oui, le Service Catholique des Funérailles accueille toutes les familles, quelle que soit leur confession ou leurs convictions. Notre identité catholique guide notre approche — respect, bienveillance, absence de surenchère commerciale — mais nous organisons des obsèques civiles, interreligieuses ou selon d'autres rites si la famille le souhaite.",
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
