import { useState } from "react";
import BlurFade from "@/components/ui/blur-fade";

interface FeaturesProps {
  onOpenForm?: () => void;
}

const modules = [
  {
    num: "01",
    title: "Protocolo R.O.T.A. aplicado ao seu nicho",
    tag: "Método proprietário",
    description: "As 4 etapas (Reconhecer, Oportunidades, Traçar, Ativar) aplicadas ao seu perfil específico — para identificar os 3 clientes mais prováveis dentro dos próximos 30 dias. Não a receita genérica do mercado.",
  },
  {
    num: "02",
    title: "Acompanhamento 1×1 direto comigo",
    tag: "Semanal",
    description: "Uma call individual por semana direto comigo. Sem suporte de assistente, sem template de resposta — você tem acesso a mim de verdade, focado em destravar o que está entre você e o próximo contrato.",
  },
  {
    num: "03",
    title: "Primeiro cliente em 30 dias ou suporte estendido",
    tag: "Resultado garantido",
    description: "Se em 30 dias você não tiver ao menos uma proposta enviada para um cliente real, a próxima sessão é minha obrigação — não a sua. O resultado é responsabilidade compartilhada.",
  },
  {
    num: "04",
    title: "Script de prospecção e fechamento",
    tag: "Vendas B2B",
    description: "Como abordar empresas, montar proposta comercial, conduzir a call de fechamento e precificar seus projetos. Você aprende vendendo — não estudando sobre venda.",
  },
  {
    num: "05",
    title: "Acesso à rede de projetos e parcerias",
    tag: "Rede do mentor",
    description: "Oportunidades reais que chegam pela comunidade. Alunos já fecharam projetos diretamente através da rede — sem precisar prospectar do zero.",
  },
  {
    num: "06",
    title: "Modelo de entrega da IA4Business",
    tag: "Como Felipe opera",
    description: "Você aprende exatamente como estruturo, entrego e preciso projetos na minha própria empresa hoje — o mesmo modelo que gerou R$220k em 12 meses.",
  },
  {
    num: "07",
    title: "Conteúdo como canal de prospecção",
    tag: "Autoridade & captação",
    description: "Como usar conteúdo para atrair clientes e construir autoridade no nicho que você escolheu — expandindo suas fontes de receita sem depender só de indicação.",
  },
];

const Features = ({ onOpenForm }: FeaturesProps) => {
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
              onClick={onOpenForm}
            >
              Aplicar para a Mentoria
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Features;
