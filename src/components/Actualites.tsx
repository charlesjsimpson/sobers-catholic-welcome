import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Accompagner le deuil : nos conseils pour les familles",
    excerpt:
      "Le deuil est un chemin personnel. Découvrez nos conseils pour traverser cette épreuve avec sérénité et trouver le soutien dont vous avez besoin.",
    date: "15 février 2026",
    readTime: "3 min de lecture",
    category: "Accompagnement",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Prévoyance funéraire : pourquoi anticiper ?",
    excerpt:
      "Organiser ses obsèques à l'avance permet de soulager ses proches et de s'assurer que ses volontés seront respectées.",
    date: "8 février 2026",
    readTime: "4 min de lecture",
    category: "Prévoyance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Les rites catholiques des funérailles expliqués",
    excerpt:
      "De la veillée funèbre à la messe de requiem, chaque étape des obsèques catholiques porte un sens profond. Nous vous les expliquons.",
    date: "1 février 2026",
    readTime: "5 min de lecture",
    category: "Ressources",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop",
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
              Blog
            </p>
            <h2 className="section-title mb-0">Nos dernières actualités</h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
          >
            Voir tous nos articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
                  <span>· {article.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Lire l'article
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
