import { useState } from "react";
import BlurFade from "@/components/ui/blur-fade";

interface FeaturesProps {
  whatsappUrl?: string;
}

const modules = [
  {
    num: "01",
    title: "Acompanhamento 1×1",
    tag: "Semanal",
    description: "Uma call individual por semana direto comigo. Sem suporte genérico — você tem acesso a mim de verdade.",
  },
  {
    num: "02",
    title: "Plano de ação personalizado",
    tag: "Personalizado",
    description: "Não existe receita única. Seu plano é construído com base na sua situação, seu nicho e seus objetivos.",
  },
  {
    num: "03",
    title: "Suporte entre sessões",
    tag: "WhatsApp",
    description: "Grupo de mentorados para tirar dúvidas e não ficar travado entre uma call e outra.",
  },
  {
    num: "04",
    title: "Método de vendas",
    tag: "Fechar clientes",
    description: "Como prospectar, montar proposta comercial, conduzir o fechamento e precificar seus projetos.",
  },
  {
    num: "05",
    title: "Indicação para projetos",
    tag: "Rede do mentor",
    description: "Oportunidades reais que chegam pela rede. Alunos já fecharam projetos através da comunidade.",
  },
  {
    num: "06",
    title: "Modelo de operação",
    tag: "Como Felipe opera",
    description: "Você aprende exatamente como estruturo e entrego projetos na minha própria empresa hoje.",
  },
  {
    num: "07",
    title: "Criação de conteúdo",
    tag: "Autoridade & captação",
    description: "Como crio conteúdo para atrair clientes, construir autoridade e vender mentorias. Você aprende a usar conteúdo como canal de prospecção — expandindo suas fontes de renda sem depender só de indicação.",
  },
];

const Features = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FeaturesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-top-left absolute inset-0 w-full h-full" />
      <div className="bg-glow-top-left absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10">
        <BlurFade delay={0.1} inView>
          <p className="section-label">&#123; O Que Você Recebe &#125;</p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-14"
            style={{ color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            O Que Você Vai Receber
          </h2>
        </BlurFade>

        {/* Numbered accordion list — BrightEdge style */}
        <div>
          {modules.map((mod, i) => (
            <BlurFade key={mod.num} delay={0.12 + i * 0.06} inView>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-6 md:py-7 group"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Sequence number */}
                    <span
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: '13px',
                        fontWeight: 300,
                        color: '#00E3A5',
                        minWidth: '26px',
                        flexShrink: 0,
                        letterSpacing: '0.06em',
                        textTransform: 'none',
                      }}
                    >
                      {mod.num}
                    </span>

                    {/* Module title — oversized */}
                    <h3
                      className="flex-1 transition-colors duration-200 group-hover:text-[#00E3A5]"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(26px, 3.5vw, 52px)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        color: '#ffffff',
                        textTransform: 'uppercase',
                      }}
                    >
                      {mod.title}
                    </h3>

                    {/* Tag — desktop only */}
                    <span
                      className="hidden md:block text-sm flex-shrink-0 mr-4"
                      style={{
                        color: '#A1A1AA',
                        fontWeight: 400,
                        textTransform: 'none',
                        letterSpacing: 'normal',
                        fontSize: '14px',
                      }}
                    >
                      {mod.tag}
                    </span>

                    {/* Toggle */}
                    <span
                      className="flex-shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-300"
                      style={{
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        color: '#00E3A5',
                        fontSize: '18px',
                        fontWeight: 300,
                        lineHeight: 1,
                        transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </div>

                  {/* Description — CSS grid trick (fluido, sem jank) */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.28s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div className="mt-3 ml-10 md:ml-14 pb-4 max-w-2xl">
                        <p
                          style={{
                            color: '#A1A1AA',
                            fontSize: '15px',
                            lineHeight: 1.75,
                            fontWeight: 400,
                            textTransform: 'none',
                            letterSpacing: 'normal',
                          }}
                        >
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </BlurFade>
          ))}

          {/* Bottom divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
        </div>

        <BlurFade delay={0.55} inView>
          <div className="text-center mt-12">
            <button
              className="btn-ds"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Quero uma vaga
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Features;
