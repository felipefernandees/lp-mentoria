interface RoadmapProps {
  whatsappUrl?: string;
}

const Roadmap = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: RoadmapProps) => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Fundação",
      description:
        "Você entende onde estão os problemas que empresas pagam pra resolver. Sai dessa fase com nicho definido e primeira proposta pronta.",
    },
    {
      phase: "Fase 2",
      title: "Construção",
      description:
        "Você desenvolve e entrega seu primeiro projeto real. N8n, agentes de IA, automações — o que fizer sentido pro seu nicho.",
    },
    {
      phase: "Fase 3",
      title: "Vendas",
      description:
        "Como prospectar, conduzir a call comercial, precificar e fechar. Você aprende vendendo, não estudando sobre venda.",
    },
    {
      phase: "Fase 4",
      title: "Recorrência",
      description:
        "Modelo de entrega, segundo cliente, crescimento. Você sai com um negócio funcionando, não só com um projeto entregue.",
    },
  ];

  return (
    <section className="section-light section-light-fade">
      <div className="ds-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0a0a0a' }}>
            Sua jornada nos 3 meses
          </h2>
          <p className="text-xl" style={{ color: '#52525b' }}>
            Do primeiro projeto ao primeiro cliente.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {phases.map((item, index) => (
            <div
              key={item.phase}
              className="flex gap-6 items-start py-6"
              style={{
                borderBottom: index < phases.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded"
                  style={{
                    color: '#00E3A5',
                    background: 'rgba(0,227,165,0.1)',
                  }}
                >
                  {item.phase}
                </span>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2" style={{ color: '#0a0a0a' }}>
                  {item.title}
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#52525b' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="btn-ds-outline"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Quero uma vaga →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
