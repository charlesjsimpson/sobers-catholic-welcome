import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import priereInhumationImg from "@/assets/priere-inhumation.jpg";
import Footer from "@/components/Footer";

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
    title: "Prière pour une mort brutale",
    excerpt: "Oh ! Seigneur, aide-nous ! Tu nous vois déchirés et abattus bien plus que nous ne pouvons le dire.",
    image: "https://s-c-f.org/wp-content/uploads/2023/01/home8.jpg",
    href: "/ressources/prieres/priere-pour-une-mort-brutale",
  },
];

const PriereInhumation = () => {
  useEffect(() => {
    document.title = "Prière au moment de l'inhumation au cimetière – SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Une prière catholique pour accompagner le moment de l'inhumation au cimetière. Texte du Service Catholique des Funérailles pour ce dernier adieu auprès du cercueil.");
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
              Prière au moment de l'inhumation
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl text-justify">
              L'inhumation est le dernier temps du parcours funéraire, celui où le cercueil est confié à la terre et où les proches vivent le nécessaire détachement de la dépouille mortelle. Un temps de prière au moment de l'inhumation peut être organisé autour du cercueil, au cimetière, avec ou sans l'aide d'un célébrant, avant qu'il ne soit définitivement enlevé à la vue de ceux qui l'ont accompagné. À l'issue de l'inhumation, chaque membre de l'assistance est invité à s'incliner devant la tombe encore ouverte, par un signe de croix, un jeté de fleurs ou une aspersion d'eau bénite, manifestant son espérance de revoir un jour le défunt dans le Royaume de Dieu.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src={priereInhumationImg}
                alt="Prière au moment de l'inhumation"
                className="w-full h-full object-cover"
                width={1280}
                height={720}
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">



              <h2 className="font-display text-2xl text-foreground">Invitation à la prière</h2>
              <p>Dans ce lieu où tant de défunts de nos familles ont précédé celui qui vient de nous quitter…</p>
              <p className="font-semibold text-center">ou</p>
              <p>Dans ce lieu où tant d'hommes et de femmes viennent se recueillir sur la tombe d'un être cher…</p>
              <p>Faisons d'abord silence, en laissant nos cœurs se rejoindre pour retrouver Dieu.</p>
              <p className="italic text-muted-foreground">(Silence)</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Prière litanique</h2>
              <p>
                Rappelons-nous les paroles de Jésus à la sœur de son ami Lazare qui venait de mourir&nbsp;: «&nbsp;Je suis la Résurrection et la Vie&nbsp;: celui qui croit en moi, même s'il meurt, vivra&nbsp;».
              </p>
              <p>Prions ensemble en disant&nbsp;: Seigneur, écoute-nous.</p>

              <p>Seigneur Jésus, toi qui as pleuré ton ami Lazare, au tombeau, essuie nos larmes, nous t'en prions.</p>
              <p className="italic text-muted-foreground">Seigneur, écoute-nous.</p>

              <p>Toi qui as fait revivre les morts, accorde la vie éternelle à notre frère/sœur, nous t'en prions.</p>
              <p className="italic text-muted-foreground">Seigneur, écoute-nous.</p>

              <p>Tu as sanctifié <strong>[prénom du défunt]</strong> dans l'eau du baptême, donne-lui en plénitude la vie des enfants de Dieu, nous t'en prions.</p>
              <p className="italic text-muted-foreground">Seigneur, écoute-nous.</p>

              <p>Tu l'as nourri de ton corps, reçois-le à la table de ton Royaume, nous t'en prions.</p>
              <p className="italic text-muted-foreground">Seigneur, écoute-nous.</p>

              <p>Tu as connu la mort par amour pour nous et tu en as triomphé pour que nous ayons la vie, assure toi-même nos cœurs dans l'espérance, nous t'en prions.</p>
              <p className="italic text-muted-foreground">Seigneur, écoute-nous.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Ou : Prière à dire par un proche du défunt</h2>
              <p><strong>[Prénom du défunt]</strong>, ici s'achève ton chemin parmi nous&nbsp;;</p>
              <p>mais ici même nous reviendrons pour nous souvenir,</p>
              <p>pour continuer avec toi, dans le même sens, ces années</p>
              <p>où nous avons marché ensemble.</p>
              <p>Nous voici avec toi au moment où tu entres</p>
              <p>dans une communion nouvelle et plus forte avec nous.</p>
              <p>Ce que tu as vécu, tout cela continue aujourd'hui,</p>
              <p>et l'élan que tu as pris, qui l'arrêtera&nbsp;?</p>

              <p>Et maintenant, Seigneur Jésus-Christ,</p>
              <p>c'est vers Toi que nous regardons,</p>
              <p>Toi, l'un de nous, Toi, plus grand que nous&nbsp;;</p>
              <p>ce que Tu as vécu sur cette terre,</p>
              <p>tout cela continue à travers nous&nbsp;;</p>
              <p>et l'élan que Tu nous as communiqué,</p>
              <p>qui l'arrêtera&nbsp;?</p>

              <p>Toi en qui l'homme reconnaît son vrai visage,</p>
              <p>Toi qui nous appelles au-delà de nous-mêmes,</p>
              <p>Toi, déjà présent dans ces liens noués entre les hommes,</p>
              <p>Toi, Jésus-Christ, tiens-nous debout</p>
              <p>dans cet Amour plus fort que la mort.</p>

              <p className="font-semibold">On peut conclure par un Notre Père.</p>

              <p>Dans l'espérance de la Résurrection, que notre frère/sœur <strong>[prénom du défunt]</strong> repose dans la paix.</p>
              <p>Au nom du Père et du Fils et du Saint-Esprit.</p>
              <p className="font-semibold text-primary">Amen.</p>
            </div>

            {/* Navigation vers d'autres prières */}
            <nav className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Voir aussi :{" "}
                <Link to="/ressources/prieres/priere-pour-ladieu-au-visage" className="text-primary hover:underline font-medium">
                  Prière pour l'adieu au visage
                </Link>
                {" · "}
                <Link to="/ressources/prieres/priere-a-la-sainte-vierge" className="text-primary hover:underline font-medium">
                  Prière à la Sainte Vierge
                </Link>
              </p>
            </nav>
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

export default PriereInhumation;
