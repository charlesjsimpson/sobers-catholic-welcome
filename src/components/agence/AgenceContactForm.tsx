import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const AgenceContactForm = ({ agenceLabel }: { agenceLabel: string }) => {
  const [motif, setMotif] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!motif || !nom || !telephone) {
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
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-sm border border-border/50 space-y-5">
      <div>
        <label htmlFor="motif" className="block text-sm font-semibold text-foreground mb-1.5">Motif *</label>
        <Select value={motif} onValueChange={setMotif}>
          <SelectTrigger id="motif">
            <SelectValue placeholder="Sélectionnez un motif" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deces">Un décès vient de survenir</SelectItem>
            <SelectItem value="organisation">Organisation d'obsèques</SelectItem>
            <SelectItem value="prevoyance">Prévoyance funéraire</SelectItem>
            <SelectItem value="information">Demande d'information</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-1.5">Nom *</label>
        <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" required maxLength={100} />
      </div>
      <div>
        <label htmlFor="tel" className="block text-sm font-semibold text-foreground mb-1.5">Téléphone *</label>
        <Input id="tel" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 00 00 00 00" required maxLength={20} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.fr" maxLength={255} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message..." rows={4} maxLength={1000} />
      </div>
      <Button type="submit" className="w-full text-base py-3 font-bold">
        Être rappelé
      </Button>
    </form>
  );
};

export default AgenceContactForm;
