import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const condolSchema = z.object({
  name: z.string().trim().min(2, "Veuillez indiquer votre nom.").max(100),
  email: z
    .string()
    .trim()
    .max(255)
    .email("Adresse email invalide.")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(5, "Votre message est trop court.").max(2000),
});

interface CondoleancesFormProps {
  /** Nom du défunt utilisé dans le toast de confirmation */
  defuntLabel: string;
}

/**
 * Livre de condoléances — formulaire simple, validation zod.
 * (Branchement back-office à venir : POST vers Supabase.)
 */
export const CondoleancesForm = ({ defuntLabel }: CondoleancesFormProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = condolSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      toast({
        title: "Champs incomplets",
        description: parsed.error.issues[0]?.message ?? "Vérifiez votre saisie.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    // TODO : brancher au CMS / Supabase (insertion table `condolences`)
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: `Vos condoléances pour ${defuntLabel} seront transmises à la famille sous 48h.`,
      });
      setName("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div
      id="condoleances"
      className="bg-card border border-border/50 shadow-sm"
      style={{ borderRadius: 10, padding: 22 }}
    >
      <h3
        className="font-display text-foreground"
        style={{ fontSize: 17, fontWeight: 600, marginBottom: 14 }}
      >
        Livre de condoléances
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div>
          <label htmlFor="condol-name" className="text-foreground block mb-1.5 font-medium" style={{ fontSize: 13 }}>
            Votre nom <span className="text-destructive">*</span>
          </label>
          <Input
            id="condol-name"
            placeholder="Prénom et nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
          />
        </div>

        <div>
          <label htmlFor="condol-email" className="text-foreground block mb-1.5 font-medium" style={{ fontSize: 13 }}>
            Votre email{" "}
            <span className="text-muted-foreground font-normal">(optionnel)</span>
          </label>
          <Input
            id="condol-email"
            type="email"
            placeholder="pour que la famille puisse vous remercier"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
          />
        </div>

        <div>
          <label htmlFor="condol-msg" className="text-foreground block mb-1.5 font-medium" style={{ fontSize: 13 }}>
            Votre message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="condol-msg"
            placeholder="Exprimez vos condoléances à la famille…"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={2000}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Envoi…" : "Envoyer mes condoléances"}
        </Button>
      </form>

      <p className="text-foreground/80 mt-3 leading-relaxed" style={{ fontSize: 13 }}>
        Votre message sera transmis à la famille par l'agence SCF sous 48h.
      </p>
    </div>
  );
};
