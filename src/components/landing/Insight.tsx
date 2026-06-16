import BlurFade from "@/components/ui/blur-fade";

const Insight = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-bottom-right absolute inset-0 w-full h-full" />
      <div className="bg-glow-bottom-right absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <BlurFade delay={0.1} inView>
            <p className="section-label text-center">&#123; A Virada &#125;</p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-14 text-center"
              style={{ color: '#ffffff', letterSpacing: '-0.02em' }}
            >
              A maioria aprende IA do jeito errado.
            </h2>
          </BlurFade>

          {/* Caminho errado */}
          <BlurFade delay={0.2} inView>
            <div className="flex items-start gap-5 py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Ícone */}
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-1"
                style={{
                  border: '1px solid rgba(239,68,68,0.3)',
                  color: '#ef4444',
                  opacity: 0.5,
                  fontSize: '12px',
                }}
              >
                ✕
              </span>

              {/* Fluxo */}
              <div className="flex-1">
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}
                >
                  O caminho da maioria
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {["Aprende a ferramenta", "Tenta criar um produto", "Ninguém compra"].map((step, i, arr) => (
                    <span key={i} className="flex items-center gap-2 md:gap-3">
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontSize: 'clamp(16px, 2vw, 22px)',
                          fontWeight: 700,
                          color: 'rgba(255,255,255,0.22)',
                          textDecoration: 'line-through',
                          textDecorationColor: 'rgba(255,255,255,0.12)',
                          textTransform: 'uppercase',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '18px', fontWeight: 300 }}>→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Caminho certo */}
          <BlurFade delay={0.32} inView>
            <div className="flex items-start gap-5 py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Ícone */}
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-1"
                style={{
                  border: '1px solid rgba(0,227,165,0.4)',
                  color: '#00E3A5',
                  fontSize: '12px',
                }}
              >
                ✓
              </span>

              {/* Fluxo */}
              <div className="flex-1">
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: '#00E3A5', letterSpacing: '0.1em' }}
                >
                  O caminho que funciona
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {["Encontra o problema", "Constrói a solução", "Cobra por isso"].map((step, i, arr) => (
                    <span key={i} className="flex items-center gap-2 md:gap-3">
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontSize: 'clamp(16px, 2vw, 22px)',
                          fontWeight: 700,
                          color: '#ffffff',
                          textTransform: 'uppercase',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span style={{ color: '#00E3A5', fontSize: '18px', fontWeight: 300 }}>→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Fechamento */}
          <BlurFade delay={0.42} inView>
            <div
              className="pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p
                className="text-base md:text-lg leading-relaxed text-center mb-6"
                style={{ color: '#A1A1AA', textTransform: 'none', letterSpacing: 'normal' }}
              >
                Essa virada de mentalidade é o que{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>separa quem fatura de quem acumula curso</span>
                . E é o primeiro ajuste que eu faço com todo mentorado — através do Protocolo R.O.T.A.
              </p>
              <p
                className="text-sm text-center"
                style={{ color: 'rgba(161,161,170,0.6)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                A pessoa que sai da mentoria não é mais "alguém que sabe IA". É um{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>Arquiteto de Negócios com IA</span>
                {' '}— alguém que projeta soluções reais para empresas reais e cobra por isso.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Insight;
