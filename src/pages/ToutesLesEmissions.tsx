import { ArrowLeft, ArrowRight, Calendar, Radio, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import etienneImg from "@/assets/etienne-de-varax.jpeg";
import gaelImg from "@/assets/gael-leiblang-portrait.jpeg";
import mathiasImg from "@/assets/mathias-mlekuz-portrait.webp";
import philippeImg from "@/assets/philippe-baudasse.jpg";
import catherineImg from "@/assets/catherine-bossaert.jpeg";
import thomasImg from "@/assets/thomas-hug-de-larauze.jpg";
import heleneImg from "@/assets/helene-risser.webp";
import elisabethImg from "@/assets/elisabeth-schmitt.jpg";
import laurentImg from "@/assets/laurent-fremont.png";
import radioImg from "@/assets/radio-notre-dame.png";
import marieToutCourtImg from "@/assets/marie-tout-court.jpeg";
import frereBenjaminImg from "@/assets/frere-benjamin.png";
import maximeBolouImg from "@/assets/maxime-bolou.jpeg";
import inesOysonvilleImg from "@/assets/ines-oysonville.jpeg";
import emmanuelleDeBoryssonImg from "@/assets/emmanuelle-de-boysson.jpeg";
import valerieBruggemannImg from "@/assets/valerie-bruggemann.png";
import heroImg from "@/assets/christian-radio-notre-dame.png";

const emissions = [
  {
    title: "Dialogue sur la mort, avec Gaël Leiblang, réalisateur d'un seul-en-scène sur le deuil périnatal",
    excerpt: "Christian de Cacqueray reçoit Gaël Leiblang, auteur du seul-en-scène autobiographique \"Tu seras un homme Papa\", un témoignage poignant sur le deuil périnatal.",
    date: "23 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal",
    image: gaelImg,
    keywords: ["deuil périnatal", "théâtre", "témoignage", "art"],
  },
  {
    title: "Dialogue sur la mort, avec Etienne de Varax, assistant funéraire",
    excerpt: "Christian de Cacqueray reçoit Etienne de Varax, assistant funéraire, gérant du Service Catholique des Funérailles, pour un échange sur le métier et l'accompagnement des familles.",
    date: "19 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-etienne-de-varax-assistant-funeraire",
    image: etienneImg,
    keywords: ["métier funéraire", "accompagnement", "obsèques", "familles"],
  },
  {
    title: "Dialogue sur la mort, avec Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\"",
    excerpt: "Christian de Cacqueray reçoit Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\", dans lequel il aborde avec sensibilité le sujet de la fin de vie.",
    date: "12 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-mathias-mlekuz-acteur-et-realisateur-du-film-a-bicyclette",
    image: mathiasImg,
    keywords: ["cinéma", "fin de vie", "art", "témoignage"],
  },
  {
    title: "Dialogue sur la mort, avec Philippe Baudassé, coach et formateur",
    excerpt: "Christian de Cacqueray reçoit Philippe Baudassé, coach et formateur, auteur de \"Deuil en nature\".",
    date: "5 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-philippe-baudasse-coach-et-formateur",
    image: philippeImg,
    keywords: ["deuil", "nature", "coaching", "accompagnement"],
  },
  {
    title: "Dialogue sur la mort, avec Emma Joux, psychologue clinicienne à l'AP-HP",
    excerpt: "Christian de Cacqueray reçoit Emma Joux, psychologue clinicienne, au sein de l'équipe mobile de soins palliatifs de l'AP-HP.",
    date: "23 mai 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-emma-joux-psychologue-clinicienne-a-lap-hp",
    image: radioImg,
    keywords: ["soins palliatifs", "psychologie", "fin de vie", "hôpital"],
  },
  {
    title: "Dialogue sur la mort, avec Catherine Bossaert, coach certifiée, accompagnante au deuil",
    excerpt: "Christian de Cacqueray reçoit Catherine Bossaert, cheffe d'accompagnement des blessés de la police nationale, coach certifiée et accompagnante au deuil.",
    date: "16 mai 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-catherine-bossaert-coach-certifiee-accompagnante-au-deuil",
    image: catherineImg,
    keywords: ["deuil", "coaching", "accompagnement", "police"],
  },
  {
    title: "Dialogue sur la mort, avec Marie Tout Court, créatrice de chansons pour patients en fin de vie",
    excerpt: "Christian de Cacqueray reçoit Marie Tout Court, créatrice de chansons pour patients en fin de vie.",
    date: "9 mai 2025",
    url: "/ressources/emissions/marie-tout-court",
    image: marieToutCourtImg,
    keywords: ["musique", "fin de vie", "art", "accompagnement"],
  },
  {
    title: "Dialogue sur la mort, avec Thomas Hug de Larauze, réalisateur du film Promesse",
    excerpt: "Christian de Cacqueray reçoit Thomas Hug de Larauze, réalisateur du film Promesse.",
    date: "2 mai 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-thomas-hug-de-larauze-realisateur-du-film-promesse",
    image: thomasImg,
    keywords: ["cinéma", "fin de vie", "art", "promesse"],
  },
  {
    title: "Dialogue sur la mort, avec Hélène Risser, journaliste, autrice de \"Après Arthaud\"",
    excerpt: "Christian de Cacqueray reçoit Hélène Risser, journaliste et autrice de \"Après Arthaud\".",
    date: "25 avril 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-helene-risser-journaliste-autrice-de-apres-arthaud",
    image: heleneImg,
    keywords: ["littérature", "deuil", "écriture", "journalisme"],
  },
  {
    title: "Dialogue sur la mort, avec Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt",
    excerpt: "Christian de Cacqueray reçoit Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt, pour un témoignage sur le deuil d'un enfant.",
    date: "11 avril 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-elisabeth-schmitt-mere-danne-lorraine-schmitt",
    image: elisabethImg,
    keywords: ["deuil d'un enfant", "témoignage", "espérance", "familles"],
  },
  {
    title: "Dialogue sur la mort, avec Laurent Frémont, cofondateur du collectif \"Tenir ta main\"",
    excerpt: "Christian de Cacqueray reçoit Laurent Frémont, cofondateur du collectif \"Tenir ta main\", engagé pour l'accompagnement des personnes en fin de vie.",
    date: "4 avril 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-laurent-fremont-cofondateur-du-collectif-tenir-ta-main",
    image: laurentImg,
    keywords: ["fin de vie", "accompagnement", "éthique", "engagement"],
  },
  {
    title: "Dialogue sur la mort, avec Yvonne Sand, responsable de chambre mortuaire",
    excerpt: "Christian de Cacqueray reçoit Yvonne Sand, responsable de chambre mortuaire.",
    date: "28 mars 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-yvonne-sand-responsable-de-chambre-mortuaire",
    image: radioImg,
    keywords: ["métier funéraire", "chambre mortuaire", "accompagnement", "familles"],
  },
  {
    title: "Dialogue sur la mort, avec Grégoire Lecalot, journaliste",
    excerpt: "Christian de Cacqueray reçoit Grégoire Lecalot, journaliste radio et président du Fonds de dotation Clémentine.",
    date: "21 mars 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-gregoire-lecalot-journaliste",
    image: radioImg,
    keywords: ["journalisme", "témoignage", "engagement", "médias"],
  },
  {
    title: "Dialogue sur la mort, avec Sandra Meunier, art-thérapeute",
    excerpt: "Christian de Cacqueray reçoit Sandra Meunier, art-thérapeute et \"neztoile\".",
    date: "14 mars 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-sandra-meunier-art-therapeute",
    image: radioImg,
    keywords: ["art-thérapie", "accompagnement", "fin de vie", "art"],
  },
  {
    title: "Dialogue sur la mort, avec Suzanne Tartière, médecin anesthésiste-réanimateur",
    excerpt: "Christian de Cacqueray reçoit le Dr Suzanne Tartière, médecin anesthésiste-réanimateur.",
    date: "8 mars 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-suzanne-tartiere-medecin-anesthesiste-reanimateur",
    image: radioImg,
    keywords: ["médecine", "réanimation", "fin de vie", "éthique"],
  },
  {
    title: "Dialogue sur la mort, avec Tanguy Chatel, sociologue",
    excerpt: "Christian de Cacqueray reçoit Tanguy Chatel, sociologue.",
    date: "28 février 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-tanguy-chatel-sociologue",
    image: radioImg,
    keywords: ["sociologie", "rites funéraires", "deuil", "société"],
  },
  {
    title: "Dialogue sur la mort, avec Marion Waller",
    excerpt: "Christian de Cacqueray reçoit Marion Waller, directrice du Pavillon de l'Arsenal, autrice de Redonner une place aux morts.",
    date: "21 février 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-marion-waller",
    image: radioImg,
    keywords: ["urbanisme", "architecture", "mémoire", "société"],
  },
  {
    title: "Dialogue sur la mort, avec Juliette Cazes",
    excerpt: "Christian de Cacqueray reçoit Juliette Cazes, chercheuse en thanatologie, autrice de \"Pionnières du monde funéraire\".",
    date: "14 février 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-juliette-cazes",
    image: radioImg,
    keywords: ["thanatologie", "métier funéraire", "histoire", "recherche"],
  },
  {
    title: "Dialogue sur la mort, avec le Dr Alix de Bonnières",
    excerpt: "Christian de Cacqueray reçoit le Dr Alix de Bonnières, médecin chef de service en Unité de soins palliatifs.",
    date: "7 février 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-alix-de-bonnieres",
    image: radioImg,
    keywords: ["soins palliatifs", "médecine", "fin de vie", "accompagnement"],
  },
  {
    title: "Dialogue sur la mort, avec Elen Vuidard, officier de liaison Gendarmerie",
    excerpt: "Christian de Cacqueray reçoit la lieutenant-colonelle Elen Vuidard, conseillère à Coordination territoriale auprès de la Gendarmerie.",
    date: "3 février 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-elen-vuidard-officier-de-liaison-gendarmerie",
    image: radioImg,
    keywords: ["gendarmerie", "annonce de décès", "accompagnement", "familles"],
  },
  {
    title: "Dialogue sur la mort, avec Pascal Dupont, aumônier de prison",
    excerpt: "Christian de Cacqueray reçoit Pascal Dupont, aumônier de prison à Dijon.",
    date: "24 janvier 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-pascal-dupont-aumonier-de-prison",
    image: radioImg,
    keywords: ["prison", "aumônerie", "accompagnement", "spiritualité"],
  },
  {
    title: "Dialogue sur la mort, avec Véronique Séité, comédienne-clown en Ehpad",
    excerpt: "Christian de Cacqueray reçoit Véronique Séité, comédienne-clown en Ehpad, fondatrice de l'association Le Nez à Nez.",
    date: "17 janvier 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-veronique-seite-comedienne-clown-en-ehpad",
    image: radioImg,
    keywords: ["Ehpad", "clown", "accompagnement", "personnes âgées"],
  },
  {
    title: "Dialogue sur la mort, avec Patricia Blanc, présidente de l'association Imagine for Margo",
    excerpt: "Christian de Cacqueray reçoit Patricia Blanc, présidente fondatrice de l'association Imagine for Margo.",
    date: "10 janvier 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-patricia-blanc-presidente-de-lassociation-imagine-for-margo",
    image: radioImg,
    keywords: ["cancer pédiatrique", "deuil d'un enfant", "engagement", "association"],
  },
  {
    title: "Dialogue sur la mort, avec Anna Nozière, fondatrice d'une troupe de théâtre et scénariste",
    excerpt: "Christian de Cacqueray reçoit Anna Nozière, fondatrice de la compagnie théâtrale Polka, scénariste.",
    date: "3 janvier 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-anna-noziere-fondatrice-dune-troupe-de-theatre-et-scenariste",
    image: radioImg,
    keywords: ["théâtre", "art", "fin de vie", "écriture"],
  },
  {
    title: "Dialogue sur la mort, avec Frère Benjamin, prêtre salésien, créateur de contenu et auteur",
    excerpt: "Christian de Cacqueray reçoit Frère Benjamin, prêtre salésien, chanteur, créateur de contenu, directeur de collège.",
    date: "28 décembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-frere-benjamin-pretre-salesien-createur-de-contenu-et-auteur",
    image: frereBenjaminImg,
    keywords: ["spiritualité", "réseaux sociaux", "jeunesse", "foi"],
  },
  {
    title: "Dialogue sur la mort, avec Maxime Bolou, président de l'association Ambulance des Rêves",
    excerpt: "Christian de Cacqueray reçoit Maxime Bolou, ambulancier, fondateur et président de l'association Ambulance des rêves.",
    date: "20 décembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-maxime-bolou-president-de-lassociation-ambulance-des-reves",
    image: maximeBolouImg,
    keywords: ["fin de vie", "accompagnement", "association", "derniers souhaits"],
  },
  {
    title: "Dialogue sur la mort, avec Inès d'Oysonville",
    excerpt: "Christian de Cacqueray reçoit Inès d'Oysonville, autrice de \"Pour de vrai, c'est quoi la mort\".",
    date: "13 décembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-ines-doysonville",
    image: inesOysonvilleImg,
    keywords: ["enfants", "littérature", "deuil", "éducation"],
  },
  {
    title: "Dialogue sur la mort, avec Emmanuelle de Boysson, autrice",
    excerpt: "Christian de Cacqueray reçoit Emmanuelle de Boysson, autrice.",
    date: "1 décembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-emmanuelle-de-boysson-autrice",
    image: emmanuelleDeBoryssonImg,
    keywords: ["littérature", "écriture", "deuil", "art"],
  },
  {
    title: "Dialogue sur la mort, avec Valérie Brüggemann, psychopraticienne",
    excerpt: "Christian de Cacqueray reçoit Valérie Brüggemann, psychopraticienne, animatrice de groupes pour frères et sœurs en deuil.",
    date: "22 novembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-valerie-bruggemann",
    image: valerieBruggemannImg,
    keywords: ["deuil", "fratrie", "psychologie", "accompagnement"],
  },
  {
    title: "Dialogue sur la mort, avec le P. Bernard Couronne",
    excerpt: "Christian de Cacqueray reçoit le P. Bernard Couronne, père de Picpus.",
    date: "15 novembre 2024",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-le-p-bernard-couronne",
    image: radioImg,
    keywords: ["spiritualité", "foi", "prière", "espérance"],
  },
];

// Extract unique keywords for filter chips
const allKeywords = Array.from(new Set(emissions.flatMap((e) => e.keywords))).sort();

const PER_PAGE = 6;

const ToutesLesEmissions = () => {
  const [search, setSearch] = useState("");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Dialogue sur la mort : toutes les émissions sur le deuil et l'espérance chrétienne | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Dialogue sur la mort, émission animée par Christian de Cacqueray sur Radio Notre Dame et RCF. Podcasts sur le deuil, la fin de vie et l'accompagnement des familles.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  const filtered = useMemo(() => {
    let result = emissions;
    if (activeKeyword) {
      result = result.filter((e) => e.keywords.includes(activeKeyword));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.excerpt.toLowerCase().includes(q) ||
          e.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return result;
  }, [search, activeKeyword]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, activeKeyword]);

  const clearFilters = () => {
    setSearch("");
    setActiveKeyword(null);
    setPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex flex-col-reverse sm:flex-row-reverse items-center gap-8">
              <img
                src={heroImg}
                alt="Christian de Cacqueray au studio de Radio Notre Dame"
                className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg border-2 border-primary-foreground/20 shrink-0"
              />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Radio className="w-6 h-6 text-primary-foreground/70" />
                  <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Émissions</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-display leading-tight">
                  <em>Dialogue sur la mort</em>
                </h1>
                <p className="text-primary-foreground/80 mt-3 max-w-2xl text-sm">
                  Émission hebdomadaire animée par Christian de Cacqueray, directeur du Service Catholique des Funérailles, diffusée sur <strong>Radio Notre Dame</strong> et <strong>RCF</strong>. Chaque épisode de 12 minutes aborde des thèmes essentiels : deuil, mort, fin de vie, rites catholiques, accompagnement des familles, espérance chrétienne.
                </p>
                <p className="text-primary-foreground/70 mt-2 max-w-2xl text-sm">
                  Invités, témoins, artistes et professionnels partagent leur expérience pour éclairer la place de la mort dans notre société et aider chacun à mieux comprendre l'épreuve du deuil.
                </p>
                <p className="text-primary-foreground mt-3 font-semibold text-sm">
                  Retrouvez ici toutes les émissions et écoutez les épisodes en replay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & filters */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl py-6">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une émission par nom, thème ou invité…"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              {(search || activeKeyword) && (
                <button
                  onClick={clearFilters}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Effacer la recherche"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </section>

        {/* Liste des émissions */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Results count */}
            <p className="text-muted-foreground text-sm mb-6">
              {filtered.length} émission{filtered.length !== 1 ? "s" : ""}
              {(search || activeKeyword) && (
                <> — <button onClick={clearFilters} className="text-primary hover:underline">voir toutes les émissions</button></>
              )}
            </p>

            {paged.length === 0 ? (
              <div className="text-center py-16">
                <Radio className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Aucune émission ne correspond à votre recherche.</p>
                <button onClick={clearFilters} className="text-primary text-sm font-semibold mt-2 hover:underline">
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {paged.map((emission, i) => (
                  <Link
                    key={i}
                    to={emission.url}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col sm:flex-row"
                  >
                    <div className="sm:w-64 h-48 sm:h-44 shrink-0 overflow-hidden">
                      <img
                        src={emission.image}
                        alt={emission.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">Émission</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {emission.date}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                        {emission.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {emission.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                          Écouter l'émission
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="hidden sm:flex gap-1.5">
                          {emission.keywords.slice(0, 2).map((kw) => (
                            <span key={kw} className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
                  aria-label="Page précédente"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                      n === currentPage
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-card text-foreground hover:bg-secondary"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
                  aria-label="Page suivante"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToutesLesEmissions;
