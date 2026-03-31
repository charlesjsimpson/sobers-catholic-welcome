import { ArrowLeft, Calendar, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import reconcilierMort from "@/assets/reconcilier-mort.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "À qui s'adresse cette session ?",
    answer: "Cette journée est ouverte à toute personne souhaitant réfléchir à sa relation à la mort, qu'elle ait vécu un deuil récent ou qu'elle souhaite simplement avancer dans cette réflexion fondamentale.",
  },
  {
    question: "Combien de temps dure la session ?",
    answer: "La session se déroule sur une journée complète, dans un lieu accueillant propice au recueillement et à l'échange.",
  },
  {
    question: "Qui anime ces sessions ?",
    answer: "Les sessions sont proposées par le Service Catholique des Funérailles, fort de plus de 20 ans d'accompagnement des familles en deuil en France.",
  },
  {
    question: "Comment s'inscrire ?",
    answer: "L'inscription se fait via billetweb.fr/sereconcilieraveclamort ou par téléphone au 07 82 57 26 72.",
  },
  {
    question: "Y a-t-il d'autres sessions prévues après novembre 2026 ?",
    answer: "De nouvelles sessions sont régulièrement programmées. Consultez cette page ou contactez-nous pour être informé des prochaines dates.",
  },
];

const SessionsSeReconcilierAvecLaMort = () => {
  useEffect(() => {
    document.title = "Se réconcilier avec la mort – Session d'une journée | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Participez à une journée pour avancer vers un rapport apaisé à la mort. Sessions proposées par le Service Catholique des Funérailles. Prochaine date : 24 novembre 2026 à Mouvaux.');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-10">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Session</span>
                <h1 className="text-2xl md:text-3xl font-display leading-tight mt-3">
                  Se réconcilier avec la mort : une journée<br />pour apprivoiser sa finitude
                </h1>
                <p className="text-primary-foreground/70 text-sm mt-2">31/03/2026</p>
              </div>
              <img
                src={reconcilierMort}
                alt="Se réconcilier avec la mort"
                className="hidden sm:block w-48 h-32 md:w-64 md:h-44 rounded-2xl object-cover shadow-lg border-2 border-primary-foreground/20 shrink-0"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Depuis 2019, le Service Catholique des Funérailles propose une session d'une journée pour aider chacun à avancer vers un rapport à la mort plus apaisé. Cette journée de réflexion s'adresse à toute personne souhaitant cheminer dans ses deuils, ses renoncements, et redécouvrir en quoi notre finitude peut être source de sagesse.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-3">
              Une pédagogie fondée sur la parole et l'écoute
            </h2>

            <ul className="space-y-2 mb-5">
              {[
                "Avancer vers un rapport à la mort apaisé",
                "Cheminer dans ses propres deuils et renoncements",
                "Découvrir en quoi notre finitude peut être source de sagesse de vie",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Prochaine session */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-5">
              <h2 className="text-xl font-bold text-foreground mb-3">Prochaine session</h2>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">Mardi 24 novembre 2026 – Mouvaux (59)</p>
              </div>
              <p className="text-muted-foreground text-sm mt-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Renseignements et inscriptions : 07 82 57 26 72
              </p>
              <p className="mt-2">
                <a
                  href="http://www.billetweb.fr/sereconcilieraveclamort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                >
                  billetweb.fr/sereconcilieraveclamort
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>

            {/* Vidéo */}
            <div className="mb-5">
              <h3 className="text-xl font-bold text-foreground mb-3">En vidéo</h3>
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

            {/* FAQ */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Questions fréquentes sur la session
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SessionsSeReconcilierAvecLaMort;
