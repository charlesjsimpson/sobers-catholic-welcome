import { ArrowLeft, Calendar, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import reconcilierMort from "@/assets/reconcilier-mort.png";

const SessionsSeReconcilierAvecLaMort = () => {
  useEffect(() => {
    document.title = "Se réconcilier avec la mort – Sessions | Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Le Service Catholique des Funérailles propose des sessions d\'une journée pour avancer vers un rapport à la mort apaisé et se réconcilier avec notre condition de mortel.');
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
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Session
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
                  Se réconcilier avec la mort
                </h1>
                <p className="text-primary-foreground/70 text-sm mt-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  19/01/2023
                </p>
              </div>
              <div className="w-full md:w-80 shrink-0">
                <img
                  src={reconcilierMort}
                  alt="Se réconcilier avec la mort"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Le Service Catholique des Funérailles a mis sur pied en 2019 un parcours d'une journée pour avancer vers un rapport à la mort apaisé et se réconcilier avec notre condition de mortel.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6 leading-snug">
              Une journée vivifiante, fondée sur une pédagogie sollicitant la prise de parole personnelle et l'écoute de l'autre jusqu'au bout, pour :
            </h2>

            <ul className="space-y-3 mb-8">
              {[
                "Avancer vers un rapport à la mort apaisé,",
                "Cheminer dans ses propres deuils et renoncements,",
                "Découvrir en quoi notre finitude peut être source de sagesse de vie.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-foreground mb-6">
              Pour connaître les dates des prochaines sessions ou pour programmer une session, consultez le site{" "}
              <a
                href="http://www.billetweb.fr/sereconcilieraveclamort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                www.billetweb.fr/sereconcilieraveclamort
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>

            {/* Prochaines sessions */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Prochaines sessions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">Samedi 21 mars 2026 à La-Seyne-sur-Mer (83)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">Mardi 24 novembre 2026 à Mouvaux (59)</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Renseignements au 07 82 57 26 72
              </p>
            </div>

            {/* Vidéo */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">En vidéo</h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/QmRIPiB1ORk"
                  title="Vous nous étonnez : Christian, fondateur du Service Catholique des funérailles"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SessionsSeReconcilierAvecLaMort;
