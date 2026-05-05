const Insight = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-bottom-right absolute inset-0 w-full h-full" />
      <div className="bg-glow-bottom-right absolute inset-0 w-full h-full" />
      <div className="ds-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            A maioria aprende IA do jeito errado.
          </h2>

          <div className="space-y-8">
            <div className="rounded-xl p-6" style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#a1a1aa' }}>
                O caminho da maioria
              </p>
              <p className="text-lg" style={{ color: '#a1a1aa' }}>
                aprende a ferramenta → tenta criar um produto → ninguém compra.
              </p>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'rgba(0,227,165,0.06)', border: '1px solid rgba(0,227,165,0.25)' }}>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#00E3A5' }}>
                O caminho que funciona
              </p>
              <p className="text-lg font-semibold text-white">
                encontra o problema que empresa tem → constrói a solução → cobra por isso.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-center" style={{ color: '#a1a1aa' }}>
              Essa virada de mentalidade é o que{' '}
              <span style={{ color: '#00E3A5', fontWeight: 600 }}>separa quem fatura de quem acumula curso</span>
              . E é o primeiro ajuste que eu faço com todo mentorado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
