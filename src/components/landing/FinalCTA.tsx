interface FinalCTAProps {
  onOpenForm?: () => void;
}

const FinalCTA = ({ onOpenForm }: FinalCTAProps) => {
  return (
    <section className="section-light relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="ds-container relative z-10 text-center">
        <p className="section-label text-center" style={{ color: '#00E3A5' }}>&#123; Próximo Passo &#125;</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#0a0a0a', letterSpacing: '-0.02em' }}>
          Pare de ficar pra trás com{" "}
          <span className="text-gradient">IA.</span>
        </h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#52525b' }}>
          Você já sabe o suficiente pra começar.{' '}
          <span style={{ color: '#00E3A5', fontWeight: 600 }}>O que falta é direção.</span>{' '}
          É isso que eu ofereço.
        </p>

        <button
          className="btn-ds text-lg"
          style={{ padding: '18px 48px', fontSize: '1.125rem' }}
          onClick={onOpenForm}
        >
          Aplicar para a Mentoria
        </button>

        <div className="mt-8 text-sm" style={{ color: '#71717a' }}>
          Vagas limitadas por ciclo • Início imediato
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
