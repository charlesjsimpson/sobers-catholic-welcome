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
      sousTitreHero="Trois modèles essentiels, choisis avec soin. Aucune logique commerciale, seulement le sens."
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
      // ── Intro éditoriale (≈350 mots, structure SEO) ──
      introTitre="Le choix du cercueil dans la tradition catholique"
      introContenu={
        <>
          <p>
            Dans la liturgie catholique, le cercueil n'est pas un objet anodin. Il accueille le
            corps du défunt, ce corps qui fut le temple de l'Esprit Saint et qui sera, selon notre
            foi, ressuscité. Le rite des obsèques chrétiennes l'entoure d'eau bénite, de lumière
            et d'encens : autant de signes qui rappellent la dignité du baptisé. Choisir un
            cercueil, c'est donc poser un acte de foi autant qu'un geste pratique.
          </p>
          <p>
            Le Service Catholique des Funérailles a fait un choix clair : <strong>refuser la
            surenchère commerciale</strong> qui caractérise trop souvent le secteur funéraire.
            Pas de catalogue à rallonge, pas de modèles ostentatoires, pas d'options destinées à
            faire grimper la facture dans un moment de vulnérabilité. Nous proposons une
            sélection volontairement restreinte : quelques cercueils sobres, fabriqués en France,
            en bois massif certifié, à des prix maîtrisés et publiés.
          </p>
          <h3 className="font-display text-xl text-foreground pt-2">Inhumation ou crémation : deux options, une même exigence</h3>
          <p>
            Selon la sépulture choisie par la famille, le cercueil ne répond pas aux mêmes
            contraintes. Les <strong>cercueils d'inhumation</strong> sont conçus pour la mise en
            terre : épaisseur du bois, type d'essence, garniture intérieure. Les{" "}
            <strong>cercueils de crémation</strong> doivent répondre à des normes spécifiques
            (essences combustibles, absence de pièces métalliques) tout en conservant une réelle
            dignité d'apparence. L'Église catholique, depuis l'instruction <em>Ad resurgendum cum
            Christo</em> (2016), accepte la crémation à condition que les cendres soient déposées
            dans un lieu sacré.
          </p>
          <p>
            Quel que soit votre choix, nos équipes vous accompagnent sans vous orienter vers
            telle ou telle gamme. Nous sommes là pour vous aider à choisir <em>juste</em> :
            ni trop, ni trop peu. Le cercueil le plus simple, choisi en conscience, vaut mieux
            que le plus prestigieux choisi par défaut.
          </p>
        </>
      }
      // ── Sous-catégories ──
      sousCategoriesTitre="Nos différents cercueils"
      sousCategories={[
        {
          titre: "Cercueils inhumation",
          description:
            "Trois modèles en bois massif français, pensés pour la mise en terre dans le respect de la liturgie.",
          image: inhumationImg,
          imageAlt: "Cercueil en bois massif clair pour inhumation, posé sur un parquet",
          href: "/cercueils/cercueils-inhumation",
        },
        {
          titre: "Cercueils crémation",
          description:
            "Des modèles conformes aux exigences techniques de la crémation, dans la même exigence de sobriété.",
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
          description: "Des tarifs clairs, publiés sur notre site, sans frais cachés ni options superflues.",
        },
        {
          icon: Factory,
          titre: "Fabrication française",
          description: "Des cercueils produits en France, en bois massif certifié issu de forêts gérées durablement.",
        },
        {
          icon: HandHeart,
          titre: "Accompagnement humain",
          description: "Une agence à vos côtés à chaque étape, pour vous conseiller sans pression commerciale.",
        },
        {
          icon: Sprout,
          titre: "Sens et sobriété",
          description: "Le refus de la surenchère, au service de la dignité du défunt et de la paix des familles.",
        },
      ]}
      // ── FAQ (6 questions, JSON-LD FAQPage auto) ──
      faqTitre="Questions fréquentes sur les cercueils"
      faq={[
        {
          question: "Quelle est la différence entre un cercueil d'inhumation et un cercueil de crémation ?",
          reponse:
            "Le cercueil d'inhumation est conçu pour être enterré : son bois est généralement plus épais et certaines garnitures peuvent être ajoutées. Le cercueil de crémation doit répondre à des normes techniques strictes : il doit être entièrement combustible, sans pièces métalliques significatives, et son épaisseur est réglementairement limitée à 22 mm en France.",
        },
        {
          question: "Combien coûte un cercueil au SCF ?",
          reponse:
            "Nos cercueils sont proposés à des prix maîtrisés et entièrement publiés. La fourchette s'étend généralement de 500 à 1 200 €, selon le modèle et l'usage. Tous nos tarifs sont consultables en agence et sur notre page dédiée, sans frais cachés.",
        },
        {
          question: "Le cercueil est-il obligatoire pour une crémation ?",
          reponse:
            "Oui. La législation française impose la mise en bière du défunt dans un cercueil pour toute crémation, comme pour toute inhumation. Le cercueil de crémation, conçu spécifiquement, est entièrement détruit lors de la crémation.",
        },
        {
          question: "Puis-je choisir un cercueil à l'avance dans le cadre de la prévoyance obsèques ?",
          reponse:
            "Absolument. Notre contrat de prévoyance obsèques vous permet de définir précisément vos volontés, y compris le choix du cercueil. Cela soulage vos proches le moment venu et garantit le respect de vos préférences.",
        },
        {
          question: "Quels sont les matériaux utilisés par le SCF ?",
          reponse:
            "Nous travaillons exclusivement avec du bois massif français issu de forêts gérées durablement (chêne, pin, hêtre selon les modèles). Les garnitures intérieures sont en tissu naturel et nos modèles évitent les pièces décoratives ostentatoires.",
        },
        {
          question: "Comment se déroule la mise en bière ?",
          reponse:
            "La mise en bière est l'acte par lequel le corps du défunt est déposé dans le cercueil. Elle est effectuée par nos assistants funéraires avec le plus grand respect, en présence éventuelle de la famille si elle le souhaite. Un temps de prière peut accompagner ce geste, souvent vécu comme un dernier moment d'intimité.",
        },
      ]}
      // ── Tarifs ──
      tarifs={{
        titre: "Transparence des tarifs",
        description:
          "Le SCF publie l'intégralité de ses prix. Aucun frais caché, aucune option déguisée : nos tarifs sont consultables librement.",
        ctaLabel: "Consulter nos tarifs",
        ctaHref: "/tarifs",
      }}
      // ── Ressources liées (maillage interne SEO) ──
      ressources={[
        {
          titre: "Comment se déroulent des obsèques catholiques ?",
          description: "Comprendre le sens et les étapes du rite funéraire chrétien.",
          href: "/organiser-des-obseques",
        },
        {
          titre: "Anticiper ses obsèques",
          description: "Préparer ses funérailles à l'avance pour soulager ses proches.",
          href: "/services/prevoyance",
        },
        {
          titre: "Prière pour un défunt",
          description: "Confier le défunt à la miséricorde de Dieu.",
          href: "/ressources/prieres",
        },
      ]}
      // ── Service description (JSON-LD Service) ──
      serviceDescription="Fourniture de cercueils catholiques sobres et dignes, fabriqués en France, pour inhumation ou crémation. Conseil en agence et tarifs publiés."
    />
  );
};

export default Cercueils;
