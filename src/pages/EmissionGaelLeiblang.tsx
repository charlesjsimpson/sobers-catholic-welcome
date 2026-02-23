import { ArrowLeft, Calendar, Radio, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gaelImg from "@/assets/gael-leiblang-portrait.jpeg";

const EmissionGaelLeiblang = () => {
  useEffect(() => {
    document.title = "Dialogue sur la mort : le deuil périnatal avec Gaël Leiblang | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', "Dialogue sur la mort sur Radio Notre Dame et RCF : Gaël Leiblang évoque le deuil périnatal à travers son seul-en-scène. Un témoignage sensible sur la perte et l'accompagnement.");
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
                23 septembre 2025
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              <em>Dialogue sur la mort</em> : le deuil périnatal avec Gaël Leiblang
            </h1>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Photo with play button */}
            <div className="float-right ml-8 mb-6 w-48 md:w-64 rounded-xl overflow-hidden shadow-md relative group">
              <img
                src={gaelImg}
                alt="Gaël Leiblang, auteur du seul-en-scène Tu seras un homme Papa"
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
                Chaque semaine, un invité vient partager son expérience de la mort et du deuil dans notre société.
              </p>

              <p>
                Dans cet épisode, <strong>Gaël Leiblang</strong>, réalisateur d'un seul-en-scène consacré au deuil périnatal, témoigne avec pudeur et profondeur. À travers son parcours artistique et personnel, il aborde :
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>La réalité du deuil périnatal</li>
                <li>La douleur souvent silencieuse des parents</li>
                <li>La place de la parole et de l'art dans le processus de deuil</li>
                <li>La nécessité d'un accompagnement humain et spirituel</li>
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
                <a
                  href="https://s-c-f.org/ressources/emissions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-subtle flex gap-4 items-start"
                >
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">12 septembre 2025</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                      Dialogue sur la mort, avec Mathias Mlekuz, acteur et réalisateur du film "A bicyclette"
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EmissionGaelLeiblang;
