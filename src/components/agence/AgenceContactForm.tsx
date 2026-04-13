import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface AgenceContactFormProps {
  agenceLabel: string;
  formTitle?: string;
  motifs?: { value: string; label: string }[];
}

const defaultMotifs = [
  { value: "fin-de-vie", label: "Pour préparer les obsèques d'un proche en fin de vie" },
  { value: "prevoyance", label: "Pour des informations sur la prévoyance obsèques" },
  { value: "entrevue", label: "Pour une entrevue" },
  { value: "candidature", label: "Pour une candidature spontanée" },
];

const AgenceContactForm = ({ agenceLabel, formTitle, motifs }: AgenceContactFormProps) => {
  const [motif, setMotif] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const usedMotifs = motifs || defaultMotifs;
  const title = formTitle || `Vous souhaitez être contacté par l'agence de Service Catholique des Funérailles - ${agenceLabel} ?`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!motif || !nom || !email) {
      toast.error("Veuillez remplir les champs obligatoires.");
      return;
    }
    toast.success("Votre demande a bien été envoyée. Nous vous recontacterons rapidement.");
    setMotif("");
    setNom("");
    setTelephone("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-4 border border-border space-y-3">
      <h3 className="text-sm font-display font-medium text-foreground leading-snug">{title}</h3>
      <div>
        <label htmlFor="motif" className="block text-xs font-medium text-foreground mb-1">Je souhaite être recontacté *</label>
        <Select value={motif} onValueChange={setMotif}>
          <SelectTrigger id="motif" className="text-xs h-8">
            <SelectValue placeholder="Sélectionnez un motif" />
          </SelectTrigger>
          <SelectContent>
            {usedMotifs.map((m) => (
              <SelectItem key={m.value} value={m.value} className="text-xs">{m.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="nom" className="block text-xs font-medium text-foreground mb-1">Votre nom *</label>
        <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" required maxLength={100} className="text-xs h-8" />
      </div>
      <div>
        <label htmlFor="tel" className="block text-xs font-medium text-foreground mb-1">Téléphone</label>
        <Input id="tel" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 00 00 00 00" maxLength={20} className="text-xs h-8" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">Email *</label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.fr" required maxLength={255} className="text-xs h-8" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">Message</label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message..." rows={3} maxLength={1000} className="text-xs" />
      </div>
      <Button type="submit" className="w-full text-xs py-2 font-bold">
        Être rappelé
      </Button>
      <p className="text-[11px] text-muted-foreground">(*) Du lundi au vendredi 9h-18h, et le samedi sur rendez-vous</p>
    </form>
  );
};

export default AgenceContactForm;
