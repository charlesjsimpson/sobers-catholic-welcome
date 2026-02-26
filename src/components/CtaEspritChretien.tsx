import { Link } from "react-router-dom";

const CtaEspritChretien = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Le Service Catholique des Funérailles vous accompagne dans{" "}
            <strong>un esprit chrétien</strong>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Familles et proches endeuillés, contactez-nous, nous apporterons une
            réponse claire et efficace à vos questions.
          </p>
          <Link
            to="/contacter-une-agence"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Contacter une agence
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaEspritChretien;
