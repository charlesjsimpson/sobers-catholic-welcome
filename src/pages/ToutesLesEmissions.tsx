import { ArrowLeft, ArrowRight, Calendar, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import etienneImg from "@/assets/etienne-de-varax.jpeg";
import gaelImg from "@/assets/gael-leiblang-portrait.jpeg";
import mathiasImg from "@/assets/mathias-mlekuz-portrait.webp";
import heroImg from "@/assets/christian-radio-notre-dame.png";

const emissions = [
  {
    title: "Dialogue sur la mort, avec Gaël Leiblang, réalisateur d'un seul-en-scène sur le deuil périnatal",
    excerpt: "Christian de Cacqueray reçoit Gaël Leiblang, auteur du seul-en-scène autobiographique \"Tu seras un homme Papa\", un témoignage poignant sur le deuil périnatal.",
    date: "23 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal",
    image: gaelImg,
  },
  {
    title: "Dialogue sur la mort, avec Etienne de Varax, assistant funéraire",
    excerpt: "Christian de Cacqueray reçoit Etienne de Varax, assistant funéraire, gérant du Service Catholique des Funérailles, pour un échange sur le métier et l'accompagnement des familles.",
    date: "19 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-etienne-de-varax-assistant-funeraire",
    image: etienneImg,
  },
  {
    title: "Dialogue sur la mort, avec Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\"",
    excerpt: "Christian de Cacqueray reçoit Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\", dans lequel il aborde avec sensibilité le sujet de la fin de vie.",
    date: "12 septembre 2025",
    url: "/ressources/emissions/dialogue-sur-la-mort-avec-mathias-mlekuz-acteur-et-realisateur-du-film-a-bicyclette",
    image: mathiasImg,
  },
];

const ToutesLesEmissions = () => {
  useEffect(() => {
    document.title = "Dialogue sur la mort : toutes les émissions sur le deuil et l'espérance chrétienne | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Dialogue sur la mort, émission animée par Christian de Cacqueray sur Radio Notre Dame et RCF. Podcasts sur le deuil, la fin de vie et l'accompagnement des familles.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

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

        {/* Liste des émissions */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col gap-6">
              {emissions.map((emission, i) => (
                <Link
                  key={i}
                  to={emission.url}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col sm:flex-row"
                >
                  <div className="sm:w-64 shrink-0 aspect-[3/2] sm:aspect-auto overflow-hidden">
                    <img
                      src={emission.image}
                      alt={emission.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                      Écouter l'émission
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToutesLesEmissions;
