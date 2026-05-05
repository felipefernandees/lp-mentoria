import React from 'react';

const IsForYou = () => {
  const yesItems = [
    <>Você já estudou IA ou automação mas não fechou <span style={{ color: '#00E3A5', fontWeight: 600 }}>o primeiro cliente</span> ainda</>,
    <>Quer acompanhamento individual, não mais um curso gravado</>,
    <>Consegue dedicar pelo menos 5 horas por semana</>,
    <>Quer faturar resolvendo <span style={{ color: '#00E3A5', fontWeight: 600 }}>problemas reais</span>, sem promessa de enriquecimento rápido</>,
  ] as React.ReactNode[];

  const noItems = [
    "Espera resultado sem implementar",
    "Não tem tempo para as sessões semanais",
    "Está buscando fórmula mágica sem esforço",
  ];

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-dark absolute inset-0 w-full h-full" />
      <div className="ds-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Isso é pra você se...
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* YES block */}
          <div
            className="rounded-xl p-6"
            style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#22c55e' }}>
              É pra você se
            </p>
            <div className="space-y-4">
              {yesItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }}>✓</span>
                  <p className="text-base leading-relaxed" style={{ color: '#e4e4e7' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NO block */}
          <div
            className="rounded-xl p-6"
            style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#ef4444' }}>
              Não é pra você se
            </p>
            <div className="space-y-4">
              {noItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }}>✕</span>
                  <p className="text-base leading-relaxed" style={{ color: '#e4e4e7' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
