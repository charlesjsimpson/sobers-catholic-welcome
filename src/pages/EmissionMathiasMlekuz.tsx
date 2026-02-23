import { ArrowLeft, Calendar, Radio, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mathiasImg from "@/assets/mathias-mlekuz.jpg";

const EmissionMathiasMlekuz = () => {
  useEffect(() => {
    document.title = "Dialogue sur la mort : Mathias Mlekuz, acteur et réalisateur du film À bicyclette | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', "Dialogue sur la mort sur Radio Notre Dame et RCF : Mathias Mlekuz, acteur et réalisateur du film À bicyclette, partage son témoignage sur le deuil et la création artistique.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center gap-3 text-primary-foreground/70 text-sm mb-4">
              <span className="bg-primary-foreground/20 px-3 py-1 rounded-full font-semibold">
                Émission
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                12 septembre 2025
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              <em>Dialogue sur la mort</em> : Mathias Mlekuz, acteur et réalisateur du film <em>À bicyclette</em>
            </h1>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Photo with play button */}
            <div className="float-right ml-8 mb-6 w-48 md:w-64 rounded-xl overflow-hidden shadow-md relative group">
              <img
                src={mathiasImg}
                alt="Affiche du film A bicyclette de Mathias Mlekuz"
                className="w-full h-auto"
              />
              <a
                href="https://www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg mb-2">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
                <span className="text-white text-sm font-semibold">Écouter l'émission</span>
              </a>
            </div>

            <div className="prose prose-lg max-w-none text-foreground [&>p]:mb-4 [&>p]:mt-0 [&>ul]:mb-4">
              <p>
                <em>Dialogue sur la mort</em> est une émission hebdomadaire animée par Christian de Cacqueray, directeur du Service Catholique des Funérailles, diffusée sur <strong>Radio Notre Dame</strong> et <strong>RCF</strong>.
              </p>

              <p>
                Chaque semaine, un invité partage son regard sur la mort et le deuil dans notre société.
              </p>

              <p>
                Dans cet épisode, <strong>Mathias Mlekuz</strong>, acteur et réalisateur du film <em>À bicyclette</em>, évoque son parcours et la manière dont le cinéma peut devenir un espace pour traverser l'épreuve du deuil.
              </p>

              <p>Il aborde notamment :</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>La perte et le cheminement intérieur</li>
                <li>La création artistique face à la souffrance</li>
                <li>La place du récit pour dire l'indicible</li>
                <li>L'importance d'un accompagnement humain</li>
              </ul>

              <p>
                D'un format court (12 minutes), l'émission est diffusée le vendredi à 15h et 22h45, puis rediffusée le dimanche à 20h45 sur Radio Notre Dame et RCF.
              </p>

              <p>
                Le podcast est accessible en ligne sur :{" "}
                <a
                  href="https://www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort
                </a>
              </p>

              <p>
                <strong>Pour écouter l'émission, cliquez sur l'image ci-dessus.</strong>
              </p>
            </div>

            {/* Other emissions */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="section-title text-2xl">Autres émissions</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Link
                  to="/ressources/emissions/dialogue-sur-la-mort-avec-gael-leiblang-realisateur-dun-seul-en-scene-sur-le-deuil-perinatal"
                  className="group card-subtle flex gap-4 items-start"
                >
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">23 septembre 2025</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                      Dialogue sur la mort, avec Gaël Leiblang, réalisateur d'un seul-en-scène sur le deuil périnatal
                    </h3>
                  </div>
                </Link>
                <Link
                  to="/ressources/emissions/dialogue-sur-la-mort-avec-etienne-de-varax-assistant-funeraire"
                  className="group card-subtle flex gap-4 items-start"
                >
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">19 septembre 2025</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                      Dialogue sur la mort, avec Etienne de Varax, assistant funéraire
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EmissionMathiasMlekuz;
