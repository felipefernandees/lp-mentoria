import React from 'react';
import BlurFade from "@/components/ui/blur-fade";

const yesItems: React.ReactNode[] = [
  <>Você já estudou IA ou automação mas não fechou <span style={{ color: '#00E3A5', fontWeight: 600 }}>o primeiro cliente</span> ainda</>,
  <>Quer acompanhamento individual, não mais um curso gravado</>,
  <>Consegue dedicar pelo menos 5 horas por semana</>,
  <>Quer faturar resolvendo <span style={{ color: '#00E3A5', fontWeight: 600 }}>problemas reais</span>, sem promessa de enriquecimento rápido</>,
];

const noItems = [
  "Espera resultado sem implementar",
  "Não tem tempo para as sessões semanais",
  "Está buscando fórmula mágica sem esforço",
];

const IsForYou = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-dark absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10">
        <BlurFade delay={0.1} inView>
          <p className="section-label text-center">&#123; Para Quem É &#125;</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-14 text-center text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            Isso é pra você se...
          </h2>
        </BlurFade>

        {/* Two-column grid with vertical divider */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-0">

          {/* YES column */}
          <BlurFade delay={0.2} inView>
            <div className="md:pr-10 lg:pr-16">
              {/* Column header */}
              <p
                className="text-xs font-semibold uppercase tracking-widest pb-5 mb-0"
                style={{ color: '#00E3A5', letterSpacing: '0.12em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                É pra você se
              </p>

              {yesItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ border: '1px solid rgba(0,227,165,0.4)', color: '#00E3A5', fontSize: '10px' }}
                  >
                    ✓
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: '#e4e4e7', textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* NO column */}
          <BlurFade delay={0.3} inView>
            <div className="md:pl-10 lg:pl-16 mt-8 md:mt-0">
              {/* Column header */}
              <p
                className="text-xs font-semibold uppercase tracking-widest pb-5 mb-0"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.12em',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                Não é pra você se
              </p>

              {noItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ border: '1px solid rgba(239,68,68,0.3)', color: 'rgba(239,68,68,0.5)', fontSize: '10px' }}
                  >
                    ✕
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'rgba(228,228,231,0.45)', textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
