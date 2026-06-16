import BlurFade from "@/components/ui/blur-fade";

interface RoadmapProps {
  onOpenForm?: () => void;
}

const phases = [
  {
    num: "01",
    title: "Fundação",
    description: "Você entende onde estão os problemas que empresas pagam pra resolver. Sai dessa fase com nicho definido e primeira proposta pronta.",
  },
  {
    num: "02",
    title: "Construção",
    description: "Você desenvolve e entrega seu primeiro projeto real. N8n, agentes de IA, automações — o que fizer sentido pro seu nicho.",
  },
  {
    num: "03",
    title: "Vendas",
    description: "Como prospectar, conduzir a call comercial, precificar e fechar. Você aprende vendendo, não estudando sobre venda.",
  },
  {
    num: "04",
    title: "Recorrência",
    description: "Modelo de entrega, segundo cliente, crescimento. Você sai com um negócio funcionando, não só com um projeto entregue.",
  },
];

const Roadmap = ({ onOpenForm }: RoadmapProps) => {
  return (
    <section className="section-light section-light-fade" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="ds-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left column */}
          <BlurFade delay={0.1} inView className="lg:w-5/12 flex-shrink-0">
            <p className="section-label" style={{ color: '#00E3A5' }}>&#123; Sua Jornada &#125;</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              Sua Jornada Nos 3 Meses
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: '#545454', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal', lineHeight: 1.7 }}
            >
              Do primeiro projeto ao primeiro cliente.
            </p>

          </BlurFade>

          {/* Right column: vertical timeline */}
          <div className="flex-1">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-4 top-3 bottom-3 w-px"
                style={{ background: 'linear-gradient(to bottom, #00E3A5 0%, rgba(0,227,165,0.15) 100%)' }}
              />

              <div className="space-y-0">
                {phases.map((phase, i) => (
                  <BlurFade key={phase.num} delay={0.2 + i * 0.1} inView>
                    <div className="relative flex gap-8 pb-10">
                      {/* Circle */}
                      <div
                        className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#FCFCFC', border: '2px solid #00E3A5', marginTop: '2px' }}
                      >
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 300,
                            color: '#00E3A5',
                            textTransform: 'none',
                            letterSpacing: 0,
                          }}
                        >
                          {phase.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h3
                          className="text-xl md:text-2xl font-bold mb-2"
                          style={{ color: '#0A0A0A', letterSpacing: '-0.01em' }}
                        >
                          {phase.title}
                        </h3>
                        <p
                          style={{ color: '#545454', fontSize: '15px', lineHeight: 1.7, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}
                        >
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>

            <BlurFade delay={0.65} inView>
              <div className="ml-16 mt-2">
                <button
                  className="btn-ds-outline"
                  onClick={onOpenForm}
                >
                  Aplicar para a Mentoria
                </button>
              </div>
            </BlurFade>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Roadmap;
