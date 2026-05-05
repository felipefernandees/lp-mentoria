import { ShinyButton } from "@/components/ui/shiny-button";
import { RoadmapCard } from "@/components/ui/roadmap-card";
import { ExternalLink } from "lucide-react";

interface RoadmapProps {
  whatsappUrl?: string;
}

const Roadmap = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: RoadmapProps) => {
  const roadmapItems = [
    {
      quarter: "Fase 1",
      title: "Fundação",
      description:
        "Você entende onde estão os problemas que empresas pagam pra resolver. Sai dessa fase com nicho definido e primeira proposta pronta.",
      status: "done" as const,
    },
    {
      quarter: "Fase 2",
      title: "Construção",
      description:
        "Você desenvolve e entrega seu primeiro projeto real. N8n, agentes de IA, automações — o que fizer sentido pro seu nicho.",
      status: "in-progress" as const,
    },
    {
      quarter: "Fase 3",
      title: "Vendas",
      description:
        "Como prospectar, conduzir a call comercial, precificar e fechar. Você aprende vendendo, não estudando sobre venda.",
      status: "upcoming" as const,
    },
    {
      quarter: "Fase 4",
      title: "Recorrência",
      description:
        "Modelo de entrega, segundo cliente, crescimento. Você sai com um negócio funcionando, não só com um projeto entregue.",
      status: "upcoming" as const,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua jornada nos 3 meses
          </h2>
          <p className="text-xl text-muted-foreground">Do primeiro projeto ao primeiro cliente.</p>
        </div>

        {/* Roadmap Timeline */}
        <div className="flex justify-center mb-12">
          <RoadmapCard
            title="Sua jornada nos 3 meses"
            description="Do primeiro projeto ao primeiro cliente."
            items={roadmapItems}
          />
        </div>

        {/* Central CTA */}
        <div className="text-center">
          <ShinyButton
            className="text-xl px-10 py-8"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <span className="flex items-center gap-2">
              Quero uma vaga
              <ExternalLink className="h-6 w-6" />
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
