import { Euro, Factory, HandHeart, Sprout } from "lucide-react";
import PrestationTemplate from "@/components/prestation/PrestationTemplate";
import inhumationImg from "@/assets/cercueil-inhumation.jpg";
import cremationImg from "@/assets/cercueil-cremation.jpg";
import heroImg from "@/assets/cercueils-hero.jpg";

/**
 * Page "Nos cercueils" — instance du gabarit PrestationTemplate.
 * URL conservée à l'identique de l'ancien site pour préserver le SEO : /cercueils
 */
const Cercueils = () => {
  return (
    <PrestationTemplate
      slug="cercueils"
      titreH1="Nos cercueils"
      sousTitreHero="Inhumation ou crémation, deux réponses sobres et dignes."
      metaTitle="Nos cercueils catholiques — Inhumation et crémation | SCF"
      metaDescription="Découvrez les cercueils du Service Catholique des Funérailles : sobres, dignes, aux tarifs maîtrisés. Inhumation et crémation. Conseil en agence."
      canonicalUrl="https://s-c-f.org/cercueils/"
      ogImage={heroImg}
      heroBackgroundImage={heroImg}
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Nos prestations", href: "/organiser-des-obseques" },
        { label: "Fournir un cercueil" },
      ]}
      // ── Intro éditoriale ultra-épurée ──
      accroche="Choisir un cercueil, c'est poser un acte de foi autant qu'un geste pratique."
      accrochePost={
        <p>
          Au SCF, nous refusons la surenchère commerciale. Quelques modèles sobres,
          fabriqués en France, à des prix maîtrisés et publiés.
        </p>
      }
      // ── Sous-catégories ──
      sousCategoriesTitre="Nos différents cercueils"
      sousCategories={[
        {
          titre: "Cercueils inhumation",
          description: "Trois modèles en bois massif, pensés pour la mise en terre.",
          image: inhumationImg,
          imageAlt: "Cercueil en bois massif clair pour inhumation, posé sur un parquet",
          href: "/cercueils/cercueils-inhumation",
        },
        {
          titre: "Cercueils crémation",
          description: "Des modèles conformes aux normes de crémation, dans la même sobriété.",
          image: cremationImg,
          imageAlt: "Cercueil en bois clair conçu pour la crémation",
          href: "/cercueils/cercueils-cremation",
        },
      ]}
      // ── Engagements ──
      engagements={[
        {
          icon: Euro,
          titre: "Transparence des prix",
          description: "Des tarifs clairs, publiés, sans frais cachés ni options superflues.",
        },
        {
          icon: Factory,
          titre: "Fabrication française",
          description: "Du bois massif certifié, issu de forêts gérées durablement.",
        },
        {
          icon: HandHeart,
          titre: "Accompagnement humain",
          description: "Une agence à vos côtés, sans pression commerciale.",
        },
        {
          icon: Sprout,
          titre: "Sens et sobriété",
          description: "Le refus de la surenchère, au service de la dignité du défunt.",
        },
      ]}
      // ── FAQ enrichie pour compenser SEO (8 questions) ──
      faqTitre="Questions fréquentes sur les cercueils"
      faq={[
        {
          question: "Quelle est la différence entre un cercueil d'inhumation et un cercueil de crémation ?",
          reponse:
            "Le cercueil d'inhumation est conçu pour être enterré : son bois est généralement plus épais et certaines garnitures peuvent y être ajoutées. Le cercueil de crémation doit répondre à des normes techniques strictes : il doit être entièrement combustible, sans pièces métalliques significatives, et son épaisseur est réglementairement limitée à 22 mm en France. Dans les deux cas, la dignité du défunt et la sobriété restent les exigences premières.",
        },
        {
          question: "Combien coûte un cercueil au SCF ?",
          reponse:
            "Nos cercueils sont proposés à des prix maîtrisés et entièrement publiés. La fourchette s'étend généralement de 500 à 1 200 €, selon le modèle et l'usage prévu. Tous nos tarifs sont consultables en agence et sur notre page dédiée, sans frais cachés ni options déguisées. Cette transparence est l'un de nos engagements fondateurs.",
        },
        {
          question: "Le cercueil est-il obligatoire pour une crémation ?",
          reponse:
            "Oui. La législation française impose la mise en bière du défunt dans un cercueil pour toute crémation, comme pour toute inhumation. Le cercueil de crémation, conçu spécifiquement, est entièrement détruit lors de la crémation. Il ne peut pas être réutilisé ni remplacé par un autre contenant.",
        },
        {
          question: "L'Église catholique autorise-t-elle la crémation ?",
          reponse:
            "Depuis l'instruction Ad resurgendum cum Christo (2016), l'Église catholique accepte la crémation, à condition que les cendres soient déposées dans un lieu sacré (cimetière, columbarium, jardin du souvenir consacré). La dispersion ou la conservation des cendres au domicile reste déconseillée car elle ne respecte pas le caractère sacré du corps du baptisé.",
        },
        {
          question: "Puis-je choisir un cercueil à l'avance dans le cadre de la prévoyance obsèques ?",
          reponse:
            "Absolument. Notre contrat de prévoyance obsèques vous permet de définir précisément vos volontés, y compris le choix du cercueil. Cela soulage vos proches le moment venu et garantit le respect de vos préférences personnelles, qu'il s'agisse du modèle, de l'essence du bois ou des garnitures.",
        },
        {
          question: "Quels sont les matériaux utilisés par le SCF ?",
          reponse:
            "Nous travaillons exclusivement avec du bois massif français issu de forêts gérées durablement (chêne, pin, hêtre selon les modèles). Les garnitures intérieures sont en tissu naturel et nos modèles évitent les pièces décoratives ostentatoires. Cette exigence garantit à la fois la dignité du rite et le respect de la création.",
        },
        {
          question: "Comment se déroule la mise en bière ?",
          reponse:
            "La mise en bière est l'acte par lequel le corps du défunt est déposé dans le cercueil. Elle est effectuée par nos assistants funéraires avec le plus grand respect, en présence éventuelle de la famille si elle le souhaite. Un temps de prière peut accompagner ce geste, souvent vécu comme un dernier moment d'intimité.",
        },
        {
          question: "Peut-on personnaliser un cercueil au SCF ?",
          reponse:
            "Nos modèles ont été choisis pour leur sobriété et leur dignité : nous ne proposons pas de cercueils personnalisés ou décoratifs. En revanche, des éléments liturgiques comme un crucifix, une plaque d'identification ou un drap mortuaire (pall) peuvent accompagner le cercueil pendant la cérémonie, dans le respect des rites catholiques.",
        },
      ]}
      // ── Tarifs ──
      tarifs={{
        titre: "Tous nos tarifs sont publics",
        description: "Consultables en ligne et en agence, sans frais cachés.",
        ctaLabel: "Voir nos tarifs",
        ctaHref: "/tarifs",
      }}
      // ── Ressources liées (maillage interne SEO) ──
      ressources={[
        {
          titre: "Le sens du cercueil dans la liturgie catholique",
          description: "Comprendre la dimension spirituelle du choix du cercueil.",
          href: "/actualites/sens-cercueil-liturgie-catholique",
        },
        {
          titre: "Anticiper ses obsèques",
          description: "Préparer ses funérailles à l'avance pour soulager ses proches.",
          href: "/services/prevoyance",
        },
        {
          titre: "Organiser des obsèques",
          description: "Comprendre les étapes du rite funéraire chrétien.",
          href: "/organiser-des-obseques",
        },
      ]}
      serviceDescription="Fourniture de cercueils catholiques sobres et dignes, fabriqués en France, pour inhumation ou crémation. Conseil en agence et tarifs publiés."
    />
  );
};

export default Cercueils;
