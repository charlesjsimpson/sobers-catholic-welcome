import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

interface DeathNotice {
  id: string;
  name: string;
  date_of_death: string | null;
  content: string | null;
  agency_slug: string;
  agency_name: string | null;
}

const AvisDeDecesDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [notice, setNotice] = useState<DeathNotice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("death_notices")
      .select("id, name, date_of_death, content, agency_slug, agency_name")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        setNotice(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Chargement…</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!notice) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-display text-2xl text-foreground">Avis introuvable</h1>
            <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const agenceUrl = notice.agency_slug ? `/agences/${notice.agency_slug}` : "/contacter-une-agence";

  return (
    <>
      <Helmet>
        <title>Avis de décès de {notice.name} – Service Catholique des Funérailles</title>
        <meta name="description" content={`Avis de décès de ${notice.name}. ${notice.date_of_death || ""}`} />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/70 mb-6" style={{ fontSize: 13 }}>
            <Link to="/" className="hover:text-primary-foreground">Accueil</Link>
            <span className="mx-2">›</span>
            <Link to={agenceUrl} className="hover:text-primary-foreground">{notice.agency_name || "Agence"}</Link>
            <span className="mx-2">›</span>
            <span className="text-primary-foreground">{notice.name}</span>
          </nav>
          <h1 className="font-display text-center" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.2 }}>
            Avis de décès de<br />{notice.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-card border border-border/50 rounded-lg shadow-sm" style={{ padding: "32px 40px" }}>
            {notice.content ? (
              <div className="whitespace-pre-line text-foreground leading-relaxed" style={{ fontSize: 16 }}>
                {notice.content.split('\n').map((line, i) => {
                  // Center the name (bold, larger) 
                  if (line.trim() === notice.name) {
                    return (
                      <p key={i} className="text-center font-display font-semibold text-primary my-4" style={{ fontSize: 22 }}>
                        {line}
                      </p>
                    );
                  }
                  // Center date lines
                  if (line.trim().startsWith('le ') && line.includes('202')) {
                    return (
                      <p key={i} className="text-center text-muted-foreground my-2" style={{ fontSize: 15 }}>
                        {line}
                      </p>
                    );
                  }
                  if (line.trim() === '') return <br key={i} />;
                  return <p key={i} className="my-1">{line}</p>;
                })}
              </div>
            ) : (
              <p className="text-muted-foreground text-center">{notice.date_of_death}</p>
            )}
          </div>

          {/* Agence link */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground" style={{ fontSize: 14 }}>
              Service Catholique des Funérailles –{" "}
              <Link to={agenceUrl} className="text-primary hover:underline font-medium">
                Agence {notice.agency_name || ""}
              </Link>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center space-y-3">
            <Link to="/ressources/prieres" className="btn-primary inline-block" style={{ fontSize: 14, padding: "12px 24px" }}>
              Unissez-vous par la prière
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AvisDeDecesDetail;
