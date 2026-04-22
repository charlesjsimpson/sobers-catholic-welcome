import { Link } from "react-router-dom";

export interface AutreAvis {
  name: string;
  dateAffichee: string;
  dateISO: string;
  href: string;
}

interface AutresAvisProps {
  agenceVille: string;
  items: AutreAvis[];
}

/** Bloc "Autres avis de l'agence X" — maillage interne SEO + rétention. */
export const AutresAvis = ({ agenceVille, items }: AutresAvisProps) => {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2
        className="font-display text-foreground mb-5"
        style={{ fontSize: 22, fontWeight: 600 }}
      >
        Autres avis de décès de l'agence {agenceVille}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((a) => (
          <li key={a.href}>
            <Link
              to={a.href}
              className="block bg-card border border-border/60 hover:border-[hsl(var(--scf-blue)/0.4)] hover:shadow-sm transition-all"
              style={{ borderRadius: 10, padding: "18px 20px" }}
            >
              <p className="font-display text-foreground font-semibold" style={{ fontSize: 16 }}>
                {a.name}
              </p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: 13 }}>
                <time dateTime={a.dateISO}>{a.dateAffichee}</time>
              </p>
              <p className="text-primary mt-3" style={{ fontSize: 13, fontWeight: 500 }}>
                Voir l'avis →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
