import { ArrowRight, Radio, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Dialogue sur la mort, avec Gaël Leiblang, réalisateur d'un seul-en-scène sur le deuil périnatal",
    excerpt:
      "Christian de Cacqueray reçoit Gaël Leiblang, auteur du seul-en-scène autobiographique \"Tu seras un homme Papa\", un témoignage poignant sur le deuil périnatal.",
    date: "23 septembre 2025",
    category: "Émission",
    url: "https://s-c-f.org/ressources/emissions/",
  },
  {
    id: 2,
    title: "Dialogue sur la mort, avec Etienne de Varax, assistant funéraire",
    excerpt:
      "Christian de Cacqueray reçoit Etienne de Varax, assistant funéraire, gérant du Service Catholique des Funérailles, pour un échange sur le métier et l'accompagnement des familles.",
    date: "19 septembre 2025",
    category: "Émission",
    url: "https://s-c-f.org/ressources/emissions/",
  },
  {
    id: 3,
    title: "Dialogue sur la mort, avec Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\"",
    excerpt:
      "Christian de Cacqueray reçoit Mathias Mlekuz, acteur et réalisateur du film \"A bicyclette\", dans lequel il aborde avec sensibilité le sujet de la fin de vie.",
    date: "12 septembre 2025",
    category: "Émission",
    url: "https://s-c-f.org/ressources/emissions/",
  },
];

const Actualites = () => {
  return (
    <section id="actualites" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-semibold mb-2">
              Ressources
            </p>
            <h2 className="section-title mb-0">Nos dernières actualités</h2>
            <p className="text-muted-foreground mt-2">
              Retrouvez l'émission hebdomadaire <strong>« Dialogue sur la mort »</strong> animée par Christian de Cacqueray sur Radio Notre Dame.
            </p>
          </div>
          <a
            href="https://s-c-f.org/ressources/emissions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-semibold hover:underline transition-colors shrink-0"
          >
            Toutes les émissions
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon header */}
              <div className="bg-primary/10 flex items-center justify-center py-10">
                <Radio className="w-12 h-12 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                  <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Écouter l'émission
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualites;
