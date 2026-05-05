import { ShinyButton } from "@/components/ui/shiny-button";
import { ExternalLink } from "lucide-react";

interface FinalCTAProps {
  whatsappUrl?: string;
}

const FinalCTA = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FinalCTAProps) => {
  return (
    <section className="py-20 px-4 gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Pare de ficar pra trás com <span className="text-gradient">IA.</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Você já sabe o suficiente pra começar. O que falta é direção. É isso que eu ofereço.
        </p>

        <ShinyButton
          className="text-xl px-12 py-8"
          onClick={() => window.open(whatsappUrl, "_blank")}
        >
          <span className="flex items-center gap-3">
            Quero uma vaga agora →
            <ExternalLink className="h-6 w-6" />
          </span>
        </ShinyButton>

        <div className="mt-8 text-sm text-muted-foreground">
          Vagas limitadas por ciclo • Início imediato
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
