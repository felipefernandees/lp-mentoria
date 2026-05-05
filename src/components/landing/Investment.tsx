import { RainbowButton } from "@/components/ui/rainbow-button";
import { CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InvestmentProps {
  whatsappUrl?: string;
}

const Investment = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: InvestmentProps) => {
  const includes = [
    "3 meses de acompanhamento individual",
    "1 call por semana direto com Felipe",
    "Suporte no grupo entre as sessões",
    "Acesso ao método completo",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Investimento</h2>

        <Card className="border border-border/50 bg-card shadow-card">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-6xl md:text-7xl font-bold text-foreground mb-2">R$ 4.000</p>
              <p className="text-lg text-muted-foreground">ou 12x no cartão</p>
            </div>

            <div className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <RainbowButton
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="text-lg px-8 py-6 bg-slate-50 text-zinc-950 w-full"
            >
              <span className="flex items-center justify-center gap-2">
                Quero uma vaga →
                <ExternalLink className="h-5 w-5" />
              </span>
            </RainbowButton>

            <p className="text-sm text-muted-foreground mt-6">
              Vagas limitadas por ciclo — o atendimento individual exige isso.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Investment;
