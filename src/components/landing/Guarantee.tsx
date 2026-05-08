import { useState, useRef } from "react";
import BlurFade from "@/components/ui/blur-fade";

const checks = [
  "Aplique tudo que eu te mostrar",
  "Execute as atividades combinadas",
  "Comprove que seguiu o processo",
];

const Guarantee = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-dark absolute inset-0 w-full h-full" />
      <div className="bg-glow-top absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10">
        <BlurFade delay={0.1} inView>
          <p className="section-label text-center">&#123; Garantia &#125;</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: '#ffffff', letterSpacing: '-0.02em' }}
          >
            Garantia de resultado
          </h2>
          <p className="text-lg text-center mb-12" style={{ color: '#A1A1AA' }}>
            Eu assumo o risco por você.
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Magnetic glow */}
            <div
              className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,227,165,0.05), transparent 40%)`,
              }}
            />

            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

              {/* LEFT: número tipográfico + checklist */}
              <div>
                {/* Elemento tipográfico premium em vez do glass icon */}
                <div className="flex items-end gap-3 mb-8">
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 300,
                      fontSize: 'clamp(64px, 8vw, 96px)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: '#ffffff',
                    }}
                  >
                    0
                  </span>
                  <div className="mb-2">
                    <p
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 600,
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#00E3A5',
                        lineHeight: 1.4,
                      }}
                    >
                      Risco
                    </p>
                    <p
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 400,
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'rgba(255,255,255,0.3)',
                        lineHeight: 1.4,
                      }}
                    >
                      para você
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '20px' }} />

                {/* Checklist */}
                <div className="space-y-0">
                  {checks.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 py-4"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ border: '1px solid rgba(0,227,165,0.4)', color: '#00E3A5', fontSize: '10px' }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          color: '#A1A1AA',
                          fontSize: '14px',
                          fontWeight: 400,
                          textTransform: 'none',
                          letterSpacing: 'normal',
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: promessa */}
              <div>
                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    color: '#ffffff',
                    fontWeight: 400,
                    textTransform: 'none',
                    letterSpacing: 'normal',
                    lineHeight: 1.6,
                  }}
                >
                  Se você aplicar tudo que eu te mostrar, executar as atividades combinadas e
                  comprovar que seguiu o processo — e mesmo assim não tiver resultado —{" "}
                  <span className="font-bold text-gradient">
                    eu te coloco pra trabalhar comigo.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Guarantee;
