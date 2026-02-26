import { useState, useEffect } from "react";
import { Phone, MapPin, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Region = "Toutes" | "Île-de-France" | "Nouvelle-Aquitaine" | "Provence-Alpes-Côte d'Azur" | "Auvergne-Rhône-Alpes";

interface Agence {
  nom: string;
  telephone: string;
  adresse: string;
  region: Exclude<Region, "Toutes">;
  image: string;
  slug: string;
}

const agences: Agence[] = [
  {
    nom: "Paris 15ème",
    telephone: "01 44 38 80 80",
    adresse: "66, rue Falguière",
    region: "Île-de-France",
    image: "https://s-c-f.org/wp-content/uploads/2026/01/Design-sans-titre-6-scaled.png",
    slug: "paris-15",
  },
  {
    nom: "Paris 17ème",
    telephone: "01 88 61 08 00",
    adresse: "10 rue Saint-Ferdinand",
    region: "Île-de-France",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/GUILLAUMEPOLI2025-LOCAUX-DU-SCF-53-scaled.jpg",
    slug: "paris-17",
  },
  {
    nom: "Boulogne-Billancourt",
    telephone: "01 46 21 30 30",
    adresse: "56bis route de la Reine",
    region: "Île-de-France",
    image: "https://s-c-f.org/wp-content/uploads/2026/01/Design-sans-titre-7-scaled.png",
    slug: "boulogne-billancourt",
  },
  {
    nom: "Versailles",
    telephone: "01 39 20 14 83",
    adresse: "8 Rue Rameau",
    region: "Île-de-France",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/GUILLAUMEPOLI2025-LOCAUX-DU-SCF-66-scaled.jpg",
    slug: "versailles",
  },
  {
    nom: "Bordeaux",
    telephone: "05 56 30 20 10",
    adresse: "30 rue Ravez",
    region: "Nouvelle-Aquitaine",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/agence-Bdx-30-mai-24-scaled.jpg",
    slug: "bordeaux",
  },
  {
    nom: "Lyon",
    telephone: "04 72 16 29 08",
    adresse: "7 rue du Plat",
    region: "Auvergne-Rhône-Alpes",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/Lyon.jpg",
    slug: "lyon",
  },
  {
    nom: "Marseille",
    telephone: "04 91 95 18 18",
    adresse: "2 place de la Préfecture",
    region: "Provence-Alpes-Côte d'Azur",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/SCF-Marseille-agence-2-scaled.jpg",
    slug: "marseille",
  },
  {
    nom: "Aix-en-Provence",
    telephone: "07 69 53 35 35",
    adresse: "66 cours Sextius",
    region: "Provence-Alpes-Côte d'Azur",
    image: "https://s-c-f.org/wp-content/uploads/2023/03/SCF_Aix_Facade-scaled.jpg",
    slug: "aix-en-provence",
  },
  {
    nom: "Toulon",
    telephone: "04 94 01 70 95",
    adresse: "6 rue Anatole France",
    region: "Provence-Alpes-Côte d'Azur",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/equipe-1.jpg",
    slug: "toulon",
  },
  {
    nom: "Fréjus",
    telephone: "04 94 83 46 51",
    adresse: "432 avenue De-Lattre-de-Tassigny",
    region: "Provence-Alpes-Côte d'Azur",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/Agence-Frejus-scaled.jpg",
    slug: "frejus",
  },
  {
    nom: "Nice",
    telephone: "04 89 94 62 32",
    adresse: "8, avenue de la République",
    region: "Provence-Alpes-Côte d'Azur",
    image: "https://s-c-f.org/wp-content/uploads/2023/02/IMG_20260217_144429-1.jpg",
    slug: "nice",
  },
];

const regions: Region[] = [
  "Toutes",
  "Île-de-France",
  "Nouvelle-Aquitaine",
  "Auvergne-Rhône-Alpes",
  "Provence-Alpes-Côte d'Azur",
];

const ContacterUneAgence = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>("Toutes");

  useEffect(() => {
    document.title = "Contacter une agence | Service Catholique des Funérailles";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contactez une agence de pompes funèbres catholiques proche de chez vous. Organisation d'obsèques catholiques 24h/24 et 7j/7 à Paris, Lyon, Marseille, Bordeaux, Nice et partout en France.");
    }
  }, []);

  const filteredAgences =
    selectedRegion === "Toutes"
      ? agences
      : agences.filter((a) => a.region === selectedRegion);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative bg-primary pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-display text-primary-foreground mb-6 leading-tight">
              Contacter l'agence la plus proche de chez vous
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-display text-foreground mb-6">
              Organisation d'obsèques catholiques – Contact 24h/24 et 7j/7
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Le Service Catholique des Funérailles vous accompagne avec humanité et professionnalisme dans l'organisation des obsèques catholiques.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Nos agences de pompes funèbres catholiques sont disponibles 24h/24 et 7j/7 pour vous soutenir immédiatement, partout en France. Nous vous aidons à chaque étape : démarches administratives, organisation de la cérémonie, choix des rites catholiques et accompagnement des familles en deuil.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h3 className="text-xl font-display text-foreground text-center mb-8">
              Trouver l'agence de pompes funèbres la plus proche de chez vous
            </h3>

            {/* Region tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedRegion === region
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Agency cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredAgences.map((agence) => (
                <div
                  key={agence.slug}
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={agence.image}
                      alt={`Service Catholique des Funérailles - ${agence.nom}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-primary-foreground font-display text-2xl drop-shadow-lg">
                        {agence.nom}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-display text-foreground mb-4">
                      {agence.nom}
                    </h4>
                    <div className="space-y-3 mb-5">
                      <a
                        href={`tel:${agence.telephone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{agence.telephone}</span>
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{agence.adresse}</span>
                      </div>
                    </div>
                    <a
                      href={`https://s-c-f.org/agences/${agence.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning banner */}
        <section className="py-10 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <p className="text-foreground font-medium text-lg">
              ⚠️ Si le décès a déjà eu lieu, il est impératif de nous contacter par téléphone
            </p>
            <a
              href="tel:0144388080"
              className="btn-primary inline-block mt-4"
            >
              Appeler maintenant
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContacterUneAgence;
