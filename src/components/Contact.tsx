import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Nous contacter</h2>
          <p className="section-subtitle mx-auto">
            Nous sommes à votre écoute jour et nuit. N'hésitez pas à nous appeler.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              {/* Emergency call */}
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wide opacity-80">
                    Disponible 24h/24
                  </span>
                </div>
                <a
                  href="tel:0143722828"
                  className="flex items-center gap-4 text-3xl md:text-4xl font-display hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-8 h-8" />
                  01 43 72 28 28
                </a>
              </div>

              {/* Other contact methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:contact@s-c-f.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@s-c-f.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      3, rue du Marché Saint-Honoré
                      <br />
                      75001 Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-secondary rounded-xl p-8 md:p-10">
              <h3 className="text-xl font-display text-foreground mb-4">
                Une question ?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pour toute question concernant l'organisation d'obsèques, les démarches administratives ou simplement pour être écouté, n'hésitez pas à nous contacter.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous vous répondrons avec toute l'attention et la discrétion que votre situation mérite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0143722828"
                  className="btn-primary text-center"
                >
                  Appeler maintenant
                </a>
                <a
                  href="mailto:contact@s-c-f.org"
                  className="btn-outline text-center"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
