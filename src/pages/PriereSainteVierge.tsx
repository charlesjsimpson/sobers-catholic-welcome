import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import priereSainteViergeImg from "@/assets/priere-sainte-vierge.jpg";

const PriereSainteVierge = () => {
  useEffect(() => {
    document.title = "Prière à la Sainte Vierge pour un défunt – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Une prière catholique à la Vierge Marie pour confier un défunt et traverser le deuil. Proposée par le Service Catholique des Funérailles.");
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
              Prière à la Sainte Vierge pour un défunt
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl text-justify">
              Dans la tradition catholique, Marie occupe une place particulière auprès des défunts. Elle qui a vécu la mort de son propre fils connaît la douleur des proches qui pleurent. Cette prière à la Sainte Vierge pour un défunt peut être dite à tout moment du deuil, lors des obsèques, au cimetière ou dans le silence de la prière personnelle, pour confier l'être aimé à sa bienveillance maternelle.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <img
                src={priereSainteViergeImg}
                alt="Prière à la Sainte Vierge pour un défunt"
                className="w-full h-full object-cover"
                width={1280}
                height={720}
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
              <p className="font-semibold">
                Je vous salue Marie, pleine de grâces, le Seigneur est avec vous, Vous êtes bénie entre toutes les femmes, et Jésus, le fruit de vos entrailles est béni, Sainte Marie, Mère de Dieu, priez pour nous, pauvres pécheurs, maintenant et à l'heure de notre mort. Amen
              </p>

              <p>Comme nous, tu as attendu ton fils avec tout ton amour de mère et tu t'es donné tout à lui.</p>

              <p>Comme nous, ton cœur s'est déchiré lorsque tu as vu ton fils mourir.</p>

              <p>Oh&nbsp;! Marie, notre Mère du ciel nous te confions <strong>[prénom du défunt]</strong></p>

              <p>Reçois-le dans tes bras de mère, présente-le à ton fils.</p>

              <p>Qu'il lui accorde la Vie Eternelle jusqu'au jour où nous pourrons, nous aussi, le serrer contre notre cœur.</p>

              <p>Oh&nbsp;! Marie, notre Mère du ciel tu sais que notre cœur est déchiré mais nous croyons que <strong>[prénom du défunt]</strong>, nourri de l'amour de Dieu, est dans la Paix.</p>

              <p>Notre amour pour lui né sur cette terre, nous continuerons à le lui donner sans mesure.</p>

              <p>L'amour qu'il nous aurait donné sur cette terre, il nous le donnera tous les jours de notre vie.</p>

              <p>Oh Marie, notre Mère du ciel tu connais notre chagrin.</p>

              <p>Viens sécher nos larmes, sois à nos côtés, protège-nous et donne nous force et courage.</p>
            </div>

            {/* Voir aussi */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">Voir aussi&nbsp;:</span>{" "}
                <Link to="/ressources/prieres/priere-pour-ladieu-au-visage" className="text-primary hover:underline">
                  Prière pour l'adieu au visage
                </Link>
                {" · "}
                <Link to="/ressources/prieres/prieres" className="text-primary hover:underline">
                  Prière au moment de l'inhumation
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PriereSainteVierge;
