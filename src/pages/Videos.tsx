import { ArrowRight, Video, MapPin } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface VideoItem {
  title: string;
  excerpt: string;
  location?: string;
  youtubeId: string;
  url?: string;
}

const videos: VideoItem[] = [
  {
    title: "Les rites funéraires catholiques expliqués",
    excerpt: "Une vidéo réalisée pour la chaîne Youtube de Happy End",
    youtubeId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Conférence de Christian de Cacqueray au Pèlerinage du Rosaire 2021 à Lourdes",
    excerpt: "Le 6 octobre 2021, lors du Pèlerinage du Rosaire à Lourdes, Christian de Cacqueray a présenté une conférence sur la mort et le deuil.",
    youtubeId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Mettre des mots sur la mort – Quand la mort frappe trop tôt la famille",
    excerpt: "Le 17/03/22, Christian de Cacqueray était l'un des 3 invités de l'émission Com' à la maison sur la chaîne C8.",
    youtubeId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Présentation du SCF du Var",
    excerpt: "Jérôme Bertrand, ancien gérant du SCF du Var, présente les spécificités du Service Catholique des Funérailles dans le Var.",
    location: "Toulon",
    youtubeId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Rencontre-interview autour du livre Conversations sur la mort et donc sur la vie",
    excerpt: "Le 10 mars 2022, la Librairie La Procure a organisé une rencontre interview de Christian de Cacqueray autour de son livre.",
    youtubeId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Videos = () => {
  useEffect(() => {
    document.title = "Vidéos – Service Catholique des Funérailles";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Retrouvez les vidéos du Service Catholique des Funérailles : conférences, témoignages et présentations autour de la mort, du deuil et des rites funéraires catholiques.");
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
    return () => { document.title = "Service Catholique des Funérailles"; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-primary-foreground/70" />
                  <span className="text-primary-foreground/70 text-sm font-semibold tracking-wide uppercase">Ressources</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight">
                  Vidéos
                </h1>
                <p className="text-primary-foreground/80 mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-justify">
                  Conférences, témoignages et présentations du Service Catholique des Funérailles autour de la mort, du deuil et des rites funéraires catholiques.
                </p>
              </div>
              <Video className="hidden md:block w-24 h-24 lg:w-32 lg:h-32 text-primary-foreground/20 flex-shrink-0" strokeWidth={1} />
          </div>
        </section>

        {/* Grille */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-muted-foreground text-sm mb-8">{videos.length} vidéos</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <article
                  key={index}
                  className="group bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail YouTube */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current ml-1">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Vidéo</span>
                      {video.location && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {video.location}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
                      {video.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {video.excerpt}
                    </p>
                    {video.url && (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
                      >
                        Regarder <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
