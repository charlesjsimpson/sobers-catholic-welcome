import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import priereMortBrutaleImg from "@/assets/priere-mort-brutale.jpg";

const autresPrieres = [
  {
    title: "Prière pour un enfant mort‑né",
    excerpt: "Prière pour un bébé né sans vie.",
    image: "https://s-c-f.org/wp-content/uploads/2024/02/hands-1926414_1280.jpg",
    href: "/ressources/prieres/priere-pour-un-enfant-mort-ne",
  },
  {
    title: "Prière pour l'adieu au visage",
    excerpt: "Le corps mis dans le cercueil, avant que ce dernier ne soit fermé, fait l'objet d'un dernier adieu.",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/priere_adieu_au_visage-1.jpg",
    href: "/ressources/prieres/priere-pour-ladieu-au-visage",
  },
  {
    title: "Prière au moment de l'inhumation",
    excerpt: "Sans ordonnancement prédéfini, l'étape de l'inhumation dans un cimetière revêt toutefois un relief particulier.",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/priere_au_cimetierre.jpg",
    href: "/ressources/prieres/prieres",
  },
];

const PriereMortBrutale = () => {
  useEffect(() => {
    document.title = "Prière pour une mort brutale – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Prière catholique pour accompagner le deuil après une mort brutale. Textes proposés par le Service Catholique des Funérailles pour traverser la douleur et la révolte.");
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
              to="/ressources/prieres"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Toutes les prières
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-primary-foreground/70" />
              <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Prière</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight">
              Prière pour une mort brutale
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl text-justify">
              La mort brutale laisse les proches sans préparation, dans un état de choc et d'incompréhension profonde. Cette prière pour une mort brutale est un appui pour ceux qui cherchent des mots quand tous les mots semblent insuffisants. Elle peut être dite seul ou en famille, dans les heures ou les jours qui suivent le décès.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src={priereMortBrutaleImg}
                alt="Prière pour une mort brutale"
                className="w-full h-full object-cover"
                width={1280}
                height={720}
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <h2 className="font-display text-2xl text-foreground">Oh ! Seigneur, aide-nous !</h2>

              <p>Seigneur nous avons du mal à accepter la mort de <strong>[prénom du défunt]</strong> que nous aimons.</p>

              <p>Tu nous vois déchirés et abattus bien plus que nous ne pouvons l'exprimer.</p>

              <p>Nous nous tournons vers toi pour te dire notre peine et notre révolte.</p>

              <p>Ne nous laisse pas seuls au fond de notre tristesse.</p>

              <p>Aide-nous à supporter le désespoir qui nous envahit.</p>

              <p>Toi qui es un père pour tous les hommes, toi qui nous aimes d'un amour infini, sois à nos côtés, aide-nous, donne-nous la force de nous relever.</p>

              <p>Accueille <strong>[prénom du défunt]</strong> comme un père accueille en sa maison.</p>

              <p>Donne-lui la paix et le bonheur que tu promets à tous tes enfants.</p>

              <p>Que son amour né sur cette terre grandisse auprès de toi pour mieux nous consoler et nous redonner goût à la vie.</p>

              <p>Que son amour uni à ton propre amour soit pour nous source de force et de courage jusqu'à ce que nous le retrouvions enfin pour partager ton amour dans la lumière de ta maison.</p>

              <p className="font-semibold text-primary">Amen.</p>
            </div>
          </div>
        </section>

        {/* Autres prières */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="section-title text-2xl md:text-3xl mb-10">Prières</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {autresPrieres.map((priere) => (
                <Link
                  key={priere.href}
                  to={priere.href}
                  className="group card-subtle overflow-hidden rounded-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={priere.image}
                      alt={priere.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Prière</span>
                    <h3 className="font-display text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      {priere.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{priere.excerpt}</p>
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

export default PriereMortBrutale;
