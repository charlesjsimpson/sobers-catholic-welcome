import { ArrowLeft, Calendar, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PodcastImagePlayer from "@/components/PodcastImagePlayer";
import nicolasImg from "@/assets/nicolas-rousselot.jpg";

const EmissionNicolasRousselot = () => {
  useEffect(() => {
    document.title = "Dialogue sur la mort : Père Nicolas Rousselot sj | SCF";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', "Dialogue sur la mort sur Radio Notre Dame et RCF : Christian de Cacqueray reçoit le Père Nicolas Rousselot sj, chapelain de l'église St-Ignace à Paris.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link to="/ressources/emissions" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Toutes les émissions
            </Link>
            <div className="flex items-center gap-3 text-primary-foreground/70 text-sm mb-4">
              <span className="bg-primary-foreground/20 px-3 py-1 rounded-full font-semibold">Émission</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />1 novembre 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              <em>Dialogue sur la mort</em> : le Père Nicolas Rousselot sj
            </h1>
          </div>
        </section>
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <PodcastImagePlayer src={nicolasImg} alt="Père Nicolas Rousselot sj" audioUrl="https://s-c-f.org/wp-content/uploads/2024/11/conversationmort_20241101.mp3" />
            <div className="prose prose-lg max-w-none text-foreground [&>p]:mb-4 [&>p]:mt-0 [&>ul]:mb-4">
              <p><em>Dialogue sur la mort</em> est une émission hebdomadaire animée par Christian de Cacqueray, directeur du Service Catholique des Funérailles, diffusée sur <strong>Radio Notre Dame</strong> et <strong>RCF</strong>.</p>
              <p>Dans cet épisode, le <strong>Père Nicolas Rousselot sj</strong>, chapelain de l'église St-Ignace à Paris, partage sa vision de la mort et de l'espérance à travers la spiritualité ignatienne.</p>
              <p>Il aborde notamment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La spiritualité ignatienne face à la mort</li>
                <li>L'accompagnement des fidèles dans l'épreuve du deuil</li>
                <li>La prière et le discernement spirituel</li>
                <li>L'espérance chrétienne et la résurrection</li>
              </ul>
              <p>D'un format court (12 minutes), l'émission est diffusée le vendredi à 15h sur Radio Notre Dame et RCF, puis rediffusée le dimanche à 17h15 et à 19h45 sur Radio Notre Dame.</p>
              <p>Le podcast est accessible en ligne sur :{" "}<a href="https://www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.rcf.fr/vie-spirituelle/dialogue-sur-la-mort</a></p>
              <p><strong>Pour écouter l'émission, cliquez sur l'image ci-dessus.</strong></p>
            </div>
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="section-title text-2xl">Autres émissions</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Link to="/ressources/emissions/dialogue-sur-la-mort-avec-anne-fulda-journaliste" className="group card-subtle flex gap-4 items-start">
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">8 novembre 2024</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">Dialogue sur la mort, avec Anne Fulda, journaliste</h3>
                  </div>
                </Link>
                <Link to="/ressources/emissions/dialogue-sur-la-mort-avec-jean-bernard-prim-alliance-simeon" className="group card-subtle flex gap-4 items-start">
                  <Radio className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">26 octobre 2024</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">Dialogue sur la mort, avec Jean-Bernard Prim (Alliance Siméon)</h3>
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

export default EmissionNicolasRousselot;
