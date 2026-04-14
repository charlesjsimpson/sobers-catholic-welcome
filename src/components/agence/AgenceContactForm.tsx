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
  const title = formTitle || `Vous souhaitez être contacté par l'agence de Service Catholique des Funérailles - ${agenceLabel} ?*`;

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
    <form onSubmit={handleSubmit} className="rounded-lg p-5 space-y-4" style={{ backgroundColor: "#DCF4FF" }}>
      <h3 className="text-lg font-display font-bold text-foreground text-center leading-snug">{title}</h3>
      <div>
        <label htmlFor="motif" className="block text-xs font-medium text-foreground mb-1.5">Je souhaite être recontacté : *</label>
        <Select value={motif} onValueChange={setMotif}>
          <SelectTrigger id="motif" className="text-xs h-9 bg-white border-border">
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
        <label htmlFor="nom" className="block text-xs font-medium text-foreground mb-1.5">Votre nom *</label>
        <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" required maxLength={100} className="text-xs h-9 bg-white border-border" />
      </div>
      <div>
        <label htmlFor="tel" className="block text-xs font-medium text-foreground mb-1.5">Tél</label>
        <Input id="tel" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Votre téléphone" maxLength={20} className="text-xs h-9 bg-white border-border" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">E-mail *</label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.fr" required maxLength={255} className="text-xs h-9 bg-white border-border" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">Message</label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message..." rows={4} maxLength={1000} className="text-xs bg-white border-border" />
      </div>
      <Button type="submit" className="w-full text-xs py-2.5 font-bold uppercase tracking-wide">
        Être rappelé
      </Button>
    </form>
  );
};

export default AgenceContactForm;
