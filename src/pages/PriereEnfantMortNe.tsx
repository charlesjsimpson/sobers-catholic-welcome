import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const autresPrieres = [
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
  {
    title: "Prière pour une mort brutale",
    excerpt: "Oh ! Seigneur, aide-nous ! Tu nous vois déchirés et abattus bien plus que nous ne pouvons le dire.",
    image: "https://s-c-f.org/wp-content/uploads/2023/01/home8.jpg",
    href: "/ressources/prieres/priere-pour-une-mort-brutale",
  },
];

const PriereEnfantMortNe = () => {
  useEffect(() => {
    document.title = "Prière pour un enfant mort-né – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Prière catholique pour accompagner un bébé né sans vie. Textes proposés par le Service Catholique des Funérailles pour traverser le deuil périnatal.");
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
              Prière pour un enfant mort‑né
            </h1>
            <p className="text-primary-foreground/60 mt-3 text-sm">13 février 2024</p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src="https://s-c-f.org/wp-content/uploads/2024/02/hands-1926414_1280.jpg"
                alt="Prière pour un enfant mort-né"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <p className="italic text-muted-foreground font-display text-xl">
                <strong>[prénom du défunt]</strong>,
              </p>
              <p>Petite comète dans le ciel de tes parents,</p>
              <p>Tu as pris un élan, celui d'une promesse de vie.</p>
              <p>Et si maintenant cette promesse est cruellement déçue,</p>
              <p>Il reste l'attachement que tu as fait naître dans l'attente.</p>
              <p>Tu resteras promesse, et celle-ci, au-delà de la souffrance, devient déjà protectrice.</p>
              <p>Oui <strong>[prénom du défunt]</strong>, veille sur chacun des membres de ta famille terrestre, jusqu'au jour où cette communion deviendra plus forte en Dieu.</p>
              <p>Merci à toi d'incarner à jamais l'espérance et de nous inviter à en vivre&nbsp;;</p>
              <p>Espérance d'être un jour réuni dans ce Royaume qui t'est déjà familier.</p>

              <div className="mt-6 mb-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Oraison</h2>
              <p>Seigneur,</p>
              <p>tu seras seul à connaître vivant</p>
              <p><strong>[prénom du défunt]</strong>, que la mort nous arrache à sa naissance.</p>
              <p>Mais, avant même d'être né,</p>
              <p>n'était-il pas aimé&nbsp;?</p>
              <p>Toi qui l'aimes aussi depuis le commencement,</p>
              <p>nous te prions&nbsp;:</p>
              <p>Puisqu'il n'a pu vivre auprès de nous,</p>
              <p>fais-le vivre auprès de toi</p>
              <p>pour les siècles des siècles.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Prière</h2>
              <p>Père, nous Te bénissons pour le don de la vie.</p>
              <p>Nous savons que <strong>[prénom du défunt]</strong> a été créé par Ton Amour pour une vie entière d'Amour.</p>
              <p>Aujourd'hui, nous venons déposer <strong>[prénom du défunt]</strong>, dont la vie s'est arrêtée de façon prématurée, dans ce caveau de sa famille…</p>
              <p>Nous savons que Tu es le Dieu de la Vie et que tous Tes projets ne sont que des projets de Vie.</p>
              <p>C'est pourquoi, Père, nous te prions en ce jour d'accueillir ton enfant auprès de toi et de ton Fils Jésus-Christ qui a triomphé de la mort.</p>
              <p><strong>[prénom du défunt]</strong>, nous croyons qu'aujourd'hui tu es dans la Lumière et dans la Paix.</p>
              <p>Au soir de la vie, ceux qui t'aiment sans t'avoir vu, te retrouveront.</p>
              <p>Pour l'heure, c'est le temps pour chacun de continuer sa route, accompagné de l'Amour de notre Père.</p>
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

export default PriereEnfantMortNe;
