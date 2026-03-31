import { ArrowLeft, Calendar, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PodcastImagePlayer from "@/components/PodcastImagePlayer";
import elisabethImg from "@/assets/elisabeth-schmitt.jpg";

const EmissionElisabethSchmitt = () => {
  useEffect(() => {
    document.title = "Dialogue sur la mort : Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', "Dialogue sur la mort sur Radio Notre Dame et RCF : Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt, partage son témoignage sur le deuil d'un enfant et la force de l'espérance.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center gap-3 text-primary-foreground/70 text-sm mb-4">
              <span className="bg-primary-foreground/20 px-3 py-1 rounded-full font-semibold">Émission</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />11 avril 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              <em>Dialogue sur la mort</em> : Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt
            </h1>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <PodcastImagePlayer src={elisabethImg} alt="Elisabeth Schmitt, mère d'Anne-Lorraine Schmitt" audioUrl="https://s-c-f.org/wp-content/uploads/2025/04/conversationmort_20250411.mp3" />

            <div className="prose prose-lg max-w-none text-foreground [&>p]:mb-4 [&>p]:mt-0 [&>ul]:mb-4">
              <p><em>Dialogue sur la mort</em> est une émission hebdomadaire animée par Christian de Cacqueray, directeur du Service Catholique des Funérailles, diffusée sur <strong>Radio Notre Dame</strong> et <strong>RCF</strong>.</p>
              <p>Chaque semaine, un invité partage son regard sur la mort et le deuil dans notre société.</p>
              <p>Dans cet épisode, <strong>Elisabeth Schmitt</strong>, mère d'Anne-Lorraine Schmitt, témoigne du deuil d'un enfant et de la force de l'espérance face à l'épreuve la plus douloureuse.</p>
              <p>Elle aborde notamment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le deuil d'un enfant et la traversée de la douleur</li>
                <li>La foi comme soutien face à l'indicible</li>
                <li>Le combat pour la mémoire et la justice</li>
                <li>La force du témoignage pour aider d'autres familles</li>
              </ul>
              <p>D'un format court (12 minutes), l'émission est diffusée le vendredi à 15h sur Radio Notre Dame et RCF, puis rediffusée le dimanche à 8h45 et à 17h15 sur Radio Notre Dame.</p>
              <p>Le podcast est accessible en ligne sur :{" "}<a href="https://www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort</a></p>
              <p><strong>Pour écouter l'émission, cliquez sur l'image ci-dessus.</strong></p>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="section-title text-2xl">Autres émissions</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Link to="/ressources/emissions/dialogue-sur-la-mort-avec-helene-risser-journaliste-autrice-de-apres-arthaud" className="group card-subtle flex gap-4 items-start">
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">25 avril 2025</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">Dialogue sur la mort, avec Hélène Risser, journaliste, autrice de "Après Arthaud"</h3>
                  </div>
                </Link>
                <Link to="/ressources/emissions/dialogue-sur-la-mort-avec-laurent-fremont-cofondateur-du-collectif-tenir-ta-main" className="group card-subtle flex gap-4 items-start">
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">4 avril 2025</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">Dialogue sur la mort, avec Laurent Frémont, cofondateur du collectif "Tenir ta main"</h3>
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

export default EmissionElisabethSchmitt;
