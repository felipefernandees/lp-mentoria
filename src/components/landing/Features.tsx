import { Users, Target, MessageCircle, TrendingUp, Network, BookOpen } from "lucide-react";
import { ElementType } from "react";

interface FeaturesProps {
  whatsappUrl?: string;
}

type ModuleItem = {
  icon: ElementType;
  num: string;
  title: string;
  description: string;
};

const Features = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FeaturesProps) => {
  const modules: ModuleItem[] = [
    {
      icon: Users,
      num: "01",
      title: "Acompanhamento 1x1",
      description:
        "Uma call individual por semana direto comigo. Sem suporte genérico — você tem acesso a mim de verdade.",
    },
    {
      icon: Target,
      num: "02",
      title: "Plano de ação personalizado",
      description:
        "Não existe receita única. Seu plano é construído com base na sua situação, seu nicho e seus objetivos.",
    },
    {
      icon: MessageCircle,
      num: "03",
      title: "Suporte entre as sessões",
      description:
        "Grupo de mentorados para tirar dúvidas e não ficar travado entre uma call e outra.",
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "Método de vendas",
      description:
        "Como prospectar, montar proposta comercial, conduzir o fechamento e precificar seus projetos.",
    },
    {
      icon: Network,
      num: "05",
      title: "Indicação para projetos e parcerias",
      description:
        "Oportunidades reais que chegam pela rede. Alunos já fecharam projetos através da comunidade.",
    },
    {
      icon: BookOpen,
      num: "06",
      title: "Acesso ao meu modelo de operação",
      description:
        "Você aprende exatamente como estruturo e entrego projetos na minha própria empresa hoje.",
    },
  ];

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-top-left absolute inset-0 w-full h-full" />
      <div className="bg-glow-top-left absolute inset-0 w-full h-full" />
      <div className="ds-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            O que você vai receber
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map(({ icon: Icon, num, title, description }) => (
            <div
              key={num}
              className="rounded-xl p-8 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,227,165,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>
                {num}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5" style={{ color: '#00E3A5' }} />
                <p className="text-lg font-semibold text-white">{title}</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="btn-ds"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Quero uma vaga →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
