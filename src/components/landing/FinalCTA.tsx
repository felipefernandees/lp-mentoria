interface FinalCTAProps {
  whatsappUrl?: string;
}

const FinalCTA = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FinalCTAProps) => {
  return (
    <section className="section-light relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="ds-container relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#0a0a0a' }}>
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
          onClick={() => window.open(whatsappUrl, "_blank")}
        >
          Quero uma vaga agora →
        </button>

        <div className="mt-8 text-sm" style={{ color: '#71717a' }}>
          Vagas limitadas por ciclo • Início imediato
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
