import { RainbowButton } from "@/components/ui/rainbow-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Users, Target, MessageCircle, TrendingUp, Network, BookOpen } from "lucide-react";
import { ElementType } from "react";

interface FeaturesProps {
  whatsappUrl?: string;
}

type AccordionItemType = {
  icon: ElementType;
  value: string;
  title: string;
  description: string;
};

const Features = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FeaturesProps) => {
  const accordionItems: AccordionItemType[] = [
    {
      icon: Users,
      value: "item-1",
      title: "Acompanhamento 1x1",
      description:
        "Uma call individual por semana direto comigo. Sem suporte genérico — você tem acesso a mim de verdade.",
    },
    {
      icon: Target,
      value: "item-2",
      title: "Plano de ação personalizado",
      description:
        "Não existe receita única. Seu plano é construído com base na sua situação, seu nicho e seus objetivos.",
    },
    {
      icon: MessageCircle,
      value: "item-3",
      title: "Suporte entre as sessões",
      description:
        "Grupo de mentorados para tirar dúvidas e não ficar travado entre uma call e outra.",
    },
    {
      icon: TrendingUp,
      value: "item-4",
      title: "Método de vendas",
      description:
        "Como prospectar, montar proposta comercial, conduzir o fechamento e precificar seus projetos.",
    },
    {
      icon: Network,
      value: "item-5",
      title: "Indicação para projetos e parcerias",
      description:
        "Oportunidades reais que chegam pela rede. Alunos já fecharam projetos através da comunidade.",
    },
    {
      icon: BookOpen,
      value: "item-6",
      title: "Acesso ao meu modelo de operação",
      description:
        "Você aprende exatamente como estruturo e entrego projetos na minha própria empresa hoje.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            O que você vai receber
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {accordionItems.map(({ icon: Icon, value, title, description }) => (
              <AccordionItem
                key={value}
                value={value}
                className="group border border-border rounded-md overflow-hidden transition-all duration-300 bg-muted/30"
              >
                <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 bg-transparent text-left group-data-[state=open]:bg-muted/50 transition-colors hover:bg-muted/40">
                  <div className="flex items-center gap-3 flex-1">
                    <Icon className="w-5 h-5 transition-colors duration-300 text-muted-foreground group-data-[state=open]:text-foreground" />
                    <span className="text-base font-medium text-foreground">{title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground group-data-[state=open]:text-foreground">
                    {value.replace("item-", "").padStart(2, "0")}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="relative px-4 py-3 text-sm text-foreground border-t border-border bg-muted/20 before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary before:opacity-0 group-data-[state=open]:before:opacity-100 transition-all duration-300">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <RainbowButton
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="text-lg px-8 py-6 bg-slate-50"
          >
            <span className="flex items-center gap-2">
              Quero uma vaga
              <ExternalLink className="h-5 w-5" />
            </span>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default Features;
