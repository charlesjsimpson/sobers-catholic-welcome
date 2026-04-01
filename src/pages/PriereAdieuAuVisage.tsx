import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const autresPrieres = [
  {
    title: "Prière pour un enfant mort-né",
    excerpt: "Prière pour un bébé né sans vie.",
    image: "https://s-c-f.org/wp-content/uploads/2024/02/hands-1926414_1280.jpg",
    href: "/ressources/prieres/priere-pour-un-enfant-mort-ne",
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

const PriereAdieuAuVisage = () => {
  useEffect(() => {
    document.title = "Prière pour l'adieu au visage avant la fermeture du cercueil – SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Une prière catholique au moment de l'adieu au visage du défunt, avant la fermeture du cercueil. Texte proposé par le Service Catholique des Funérailles.");
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
              Prière pour l'adieu au visage
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl">
              Avant que le cercueil ne soit fermé, la tradition catholique invite les proches à un dernier moment de prière auprès du visage du défunt. C'est un instant solennel et douloureux — l'ultime adieu au corps de l'être aimé. Cette prière peut être menée par un religieux ou un laïc, dans le calme et le recueillement, que ce soit au domicile, à l'hôpital ou en chambre funéraire.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src="https://s-c-f.org/wp-content/uploads/2023/03/priere_adieu_au_visage-1.jpg"
                alt="Prière pour l'adieu au visage"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <p>
                Le corps mis dans le cercueil, avant que ce dernier ne soit fermé, fait l'objet d'un premier temps de prière que l'on appelle «&nbsp;l'adieu au visage&nbsp;». Première étape du parcours rituel des funérailles, cet adieu marque la séparation définitive avec le corps de chair du défunt. Il ne sera plus visible dès lors que le cercueil sera fermé. L'émotion est grande et ce temps, quel que soit le lieu de son déroulement, reste un temps intime et familial, vécu différemment selon qu'il est organisé dans un domicile, un hôpital ou une chambre funéraire.
              </p>
              <p>
                La prière qui accompagne ce temps peut être menée par un religieux ou un laïc, membre d'une aumônerie ou pas.
              </p>
              <p>
                Si les enfants ont fait le choix d'y assister, il peut leur être proposé de déposer un mot ou un dessin dans le cercueil avant qu'il ne soit fermé.
              </p>
              <p>
                Enfin, il n'est pas rare que les proches décident de manifester leur attachement à la personne défunte en posant un geste d'affection sur sa dépouille.
              </p>

              <div className="mt-6 mb-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Oraison</h2>
              <p>Les mots nous manquent Seigneur, nous sommes dans l'épreuve, accepte notre silence comme une prière pour <strong>[prénom du défunt]</strong> que Tu connais et que Tu aimes.</p>
              <p>Son chemin le conduit maintenant jusqu'à Toi&nbsp;: accueille-le dans la clarté et la paix de Ton Royaume.</p>
              <p>Et que Ton Amour soit pour nous lumière sur la route, jusqu'au jour où Tu nous réuniras auprès de Toi pour les siècles des Siècles.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Prière</h2>
              <p>Seigneur, nous tournons vers toi notre regard à l'heure où disparaît ce visage qui nous est cher&nbsp;: Accorde-lui de te voir face à face et affermis notre espérance de le revoir auprès de toi, pour les siècles des siècles. Amen.</p>
              <p className="mt-4">On peut utiliser le verset&nbsp;:</p>
              <p>V. Accorde-lui, Seigneur, l'éternel repos&nbsp;;</p>
              <p className="italic text-muted-foreground">R/. Et que brille à ses yeux la lumière sans déclin.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Invocations</h2>
              <p>Après tous nos regards qui ont croisé le sien,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>
              <p>Après la joie et l'amour qui ont illuminé sa vie,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>
              <p>Après les peines et les larmes qui ont obscurci ses yeux,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>
              <p>Après le péché qui a terni son regard,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>
              <p>Il a cherché la vérité dans la droiture de sa conscience,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>
              <p>Il a cru en toi sans jamais t'avoir vu,</p>
              <p className="italic text-muted-foreground">Accorde-lui, Seigneur, de contempler ton visage.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Psaume 22 : Le Seigneur est mon berger</h2>
              <p className="italic text-muted-foreground">Le Seigneur est mon berger, Rien ne saurait me manquer.</p>
              <p>Le Seigneur est mon berger, je ne manque de rien.</p>
              <p>Sur des prés d'herbe fraîche, il me fait reposer.</p>
              <p>Il me mène vers les eaux tranquilles et me fait revivre&nbsp;;</p>
              <p>Il me conduit par le juste chemin pour l'honneur de son nom.</p>
              <p>Si je passe un ravin de ténèbres, je ne crains aucun mal,</p>
              <p>car tu es avec moi, ton bâton me guide et me rassure.</p>
              <p>Tu prépares la table pour moi devant mes adversaires&nbsp;;</p>
              <p>Tu répands le parfum sur ma tête, ma coupe est débordante.</p>
              <p>Grâce et bonheur m'accompagnent tous les jours de ma vie.</p>
              <p>J'habiterai la maison du Seigneur pour la durée de mes jours.</p>

              <p className="mt-6 font-semibold text-center">ou</p>

              <h2 className="font-display text-2xl text-foreground">Psaume 26 : Le Seigneur est ma lumière et mon salut</h2>
              <p className="italic text-muted-foreground">Ma lumière et mon salut, c'est le Seigneur, Alléluia&nbsp;!</p>
              <p>Le Seigneur est ma lumière et mon salut&nbsp;: de qui aurais-je crainte&nbsp;?</p>
              <p>Le Seigneur est le rempart de ma vie, devant qui tremblerais-je&nbsp;?</p>
              <p>J'ai demandé une chose au Seigneur, la seule que je cherche&nbsp;:</p>
              <p>Habiter la maison du Seigneur, tous les jours de ma vie.</p>
              <p>Écoute Seigneur, je t'appelle&nbsp;! Pitié&nbsp;! Réponds-moi&nbsp;!</p>
              <p>Mon cœur m'a redit ta parole&nbsp;: «&nbsp;cherchez ma face&nbsp;».</p>
              <p>C'est ta face, Seigneur, que je cherche. Ne me cache pas ta face.</p>
              <p>Mais, j'en suis sûr, je verrai les bontés du Seigneur sur la terre des vivants.</p>
              <p>«&nbsp;Espère le Seigneur, sois fort et prends courage, espère le Seigneur.&nbsp;»</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Oraison</h2>
              <p>Seigneur Jésus, tu veux prendre avec toi ceux que le Père T'a donnés. Conduis notre frère/sœur <strong>[prénom du défunt]</strong> jusqu'à sa demeure éternelle&nbsp;: il/elle quitte la maison où il/elle a vécu sur cette terre&nbsp;; accueille-le/la parmi ceux que Tu fais vivre auprès de Toi. Et nous qui restons ici-bas, donne-nous la force de faire de notre vie une marche vers Toi qui es vivant avec le Père et le Saint-Esprit pour les siècles des siècles. Amen.</p>
              <p>En union avec <strong>[prénom du défunt]</strong>, nous pouvons reprendre ensemble la prière que Jésus a apprise à ses disciples&nbsp;: Notre Père….</p>
              <p>Pour conclure cette prière, nous confions <strong>[prénom du défunt]</strong> à la bienveillance de Marie, la très Sainte Vierge, Mère du Christ et mère de tous les hommes&nbsp;: Je vous salue Marie….</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Un Amour m'attend</h2>
              <p>Ce qui se passera de l'autre côté, quand tout pour moi aura basculé dans l'éternité,</p>
              <p>Je ne le sais pas. Je crois, je crois seulement qu'un Amour m'attend.</p>
              <p>Je sais pourtant qu'alors il me faudra faire pauvre et sans poids, le bilan de moi.</p>
              <p>Mais ne pensez pas que je désespère. Je crois, je crois tellement qu'un Amour m'attend.</p>
              <p>Quand je meurs, ne pleurez pas</p>
              <p>C'est un Amour qui me prend.</p>
              <p>Si j'ai peur – et pourquoi pas&nbsp;?</p>
              <p>Rappelez-moi simplement</p>
              <p>Qu'un Amour, un Amour m'attend.</p>
              <p>Il va m'ouvrir tout entier à sa joie, à sa lumière.</p>
              <p>Oui, Père, je viens à Toi</p>
              <p>Dans le vent, dont on ne sait ni d'où il vient, ni où il va,</p>
              <p>Vers Ton Amour, Ton Amour qui m'attend.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Prière du Père Sertillanges</h2>
              <p>Par la mort, la famille ne se détruit pas, elle se transforme, une part d'elle va dans l'invisible.</p>
              <p>On croit que la mort est une absence, quand elle est une présence secrète.</p>
              <p>On croit qu'elle crée une infinie distance, alors qu'elle supprime la distance en ramenant à l'esprit ce qui était dans la chair. Que de liens, elle renoue, que de barrières elle brise, que de murs elle fait crouler, que de brouillard elle dissipe, si nous le voulons bien. Vivre, c'est souvent se quitter&nbsp;; Mourir, c'est se rejoindre. Ce n'est pas un paradoxe de l'affirmer. Pour ceux qui sont allés au fond de l'amour, la mort est une consécration non un châtiment… Au fond, personne ne meurt, puisqu'on ne sort pas de Dieu. Celui qui a paru s'arrêter brusquement sur sa route, écrivain de sa vie, a seulement tourné la page.</p>
              <p>Plus il y a d'êtres qui ont quitté le foyer, plus les survivants ont d'attaches célestes.</p>
              <p>Le ciel n'est plus alors uniquement peuplé d'anges, de saints connus ou inconnus et du Dieu mystérieux, il devient familier.</p>
              <p>C'est la maison de famille, la maison en son étage supérieur, si je puis dire, et du bas en haut, le souvenir, les secours, les appels se répondent.</p>

              <div className="my-10"><hr className="border-border" /></div>

              <h2 className="font-display text-2xl text-foreground">Méditation de Christian de Cacqueray</h2>
              <p>Devant nous ton visage, <em>(nom du défunt)</em>, comme plongé dans un sommeil sans fin que désormais rien ne viendra plus troubler.</p>
              <p>Nous le chérissons ce visage, dernière relique de ta présence en ce monde.</p>
              <p>Mais derrière le silence dans lequel nous nous tenons, nos esprits s'interrogent.</p>
              <p>Si la vie s'est glissée hors de ton corps, sur le point de rejoindre les éléments, qui pourra nous dire où ton être s'en est allé&nbsp;?</p>
              <p>Où l'élan vital qui t'a mu au long des ans t'a-t-il entraîné&nbsp;?</p>
              <p>Vers quelle destinée ton esprit s'est-il envolé&nbsp;?</p>
              <p>À nos questions, tu sembles opposer le silence et la paix, nous renvoyant au sens profond de notre existence.</p>
              <p>Oui, ta mort nous interpelle. Elle est venue interrompre le cours de notre quotidien, en projetant sur lui une lumière crue.</p>
              <p>Libre à nous de laisser la vue de ta dépouille transfigurer ce qui dans notre vie partait vers le néant.</p>
              <p>À présent nous consentons à rompre les amarres qui te retiennent ici-bas.</p>
              <p>Va vers ton Créateur, nous ne te retenons pas.</p>
              <p>Et lorsque dans un instant, ton visage nous sera à jamais enlevé, fais, Seigneur, que nous le retrouvions, au plus profond de notre être, comme une lueur qui nous guidera vers l'amour vrai.</p>
            </div>

            {/* Navigation vers d'autres prières */}
            <nav className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Voir aussi :{" "}
                <Link to="/ressources/prieres/prieres" className="text-primary hover:underline font-medium">
                  Prière au moment de l'inhumation
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

export default PriereAdieuAuVisage;
