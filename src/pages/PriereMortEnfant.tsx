import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
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
    title: "Prière au moment de l'inhumation",
    excerpt: "Sans ordonnancement prédéfini, l'étape de l'inhumation dans un cimetière revêt toutefois un relief particulier.",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/priere_au_cimetierre.jpg",
    href: "/ressources/prieres/prieres",
  },
];

const PriereMortEnfant = () => {
  useEffect(() => {
    document.title = "Prière pour la mort d'un enfant – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Prières catholiques pour accompagner le deuil d'un enfant. Textes proposés par le Service Catholique des Funérailles pour traverser cette épreuve avec foi et espérance.");
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
              Prière pour la mort d'un enfant
            </h1>
            
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src="https://s-c-f.org/wp-content/uploads/2023/01/priere_mort_enfant-1.jpg"
                alt="Prière pour la mort d'un enfant"
                className="w-full h-full object-cover"
                width={1280}
                height={720}
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <h2 className="font-display text-2xl text-foreground">Prières au Père</h2>

              <p>Seigneur, nous avons du mal à comprendre que l'on puisse mourir si jeune, qu'une vie soit brisée alors qu'elle commençait à s'éveiller.</p>

              <p>Tu nous vois déchirés et abattus&nbsp;; la mort de <strong>[prénom de l'enfant]</strong> nous semble une injustice.</p>

              <p>Alors, nous nous tournons vers toi pour te dire notre peine.</p>

              <p>Ne nous laisse pas seuls au fond de notre tristesse&nbsp;; aide-nous à supporter le vide qui s'est creusé parmi nous&nbsp;; fortifie notre espérance au-delà de notre souffrance.</p>

              <p>Accueille <strong>[prénom de l'enfant]</strong> comme un père accueille en sa maison&nbsp;; donne-lui le bonheur que tu promets et l'éternelle jeunesse de Jésus-Christ.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Mon enfant, mon trésor</h2>

              <p>Mon enfant, mon trésor, toi, la chair de ma chair que j'ai porté, enfanté, nourri, bercé, soigné, veillé, tenu par la main au fil des heures sombres et des jours heureux…</p>

              <p>Mon enfant, mon amour, transfiguré dans la lumière, je crois que tu n'as rien perdu de tout ce qui fait de toi un être unique.</p>

              <p>Tu es irremplaçable pour Dieu, pour ton père et pour ta mère.</p>

              <p>Mon enfant, mon chéri, nous voulons garder l'image des jours heureux quand ton sourire illuminait ton visage.</p>

              <p>Mon enfant aujourd'hui de nouveau né, ta présence nouvelle se lève dans notre cœur comme un soleil de printemps qui nous illumine et chasse les ténèbres du désespoir qui nous engloutissaient.</p>

              <p>Mon enfant, mon ange, nous osons te prier&nbsp;! N'es-tu pas, désormais, plus proche que nous de l'amour brûlant du cœur de Dieu&nbsp;!</p>

              <p>Nous te prions de nous aider à ne pas nous épuiser à te retenir dans un passé qui n'est plus.</p>

              <p>Mon enfant bien-aimé, puisque tu es devenu notre aîné dans cette longue ascension vers Dieu, prends-nous par la main pour que nous ayons la force d'aller plus loin, donne-nous le courage de nous dépasser pour atteindre cette joie lumineuse où tu nous as précédés.</p>

              <p>Mon enfant, ton sourire nous manque mais nous croyons que ton amour pour nous est immortel.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Quoi qu'on en dise</h2>

              <p>Quoi qu'on en dise, un enfant qui part avant ses parents est toujours une anomalie inacceptable, un glaive de douleur qui vous transperce le cœur.</p>

              <p>Que c'est dur, Seigneur, de remonter de ce puits sans fond, que de larmes il faut verser pour découvrir que l'espérance peut émerger de quelques bribes d'Évangile qui surnagent dans notre tête disloquée&nbsp;:</p>

              <p className="italic text-muted-foreground">Je suis la Résurrection et la Vie.</p>
              <p className="italic text-muted-foreground">Qui croit en moi ne mourra jamais.</p>
              <p className="italic text-muted-foreground">Je suis venu pour que les hommes aient la vie en surabondance.</p>
              <p className="italic text-muted-foreground">Il est vraiment ressuscité, nous en sommes témoins…</p>

              <p>Seigneur, comme ces messages ont du mal à se frayer un chemin dans notre cœur accablé de chagrin.</p>

              <p>Ô Seigneur, aide-nous, ne laisse pas des parents s'enfermer dans le désespoir, donne-nous de nous tourner vers ta lumière pour que tu nous consoles et nous réchauffe de ton Amour.</p>

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

export default PriereMortEnfant;
