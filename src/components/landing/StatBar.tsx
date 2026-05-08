import { useRef } from "react";
import { useInView } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import BlurFade from "@/components/ui/blur-fade";

const stats = [
  { value: 220, prefix: "R$", suffix: "k+", label: "faturados em 12 meses" },
  { value: 15,  prefix: "",   suffix: "+",  label: "alunos formados" },
  { value: 3,   prefix: "",   suffix: " meses", label: "de duração por grupo" },
  { value: 1,   prefix: "",   suffix: " call/sem", label: "diretamente com Felipe" },
];

const StatBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-light"
      style={{ paddingTop: '64px', paddingBottom: '64px', borderBottom: '1px solid #E5E5E5' }}
    >
      <div className="ds-container" ref={ref}>
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start px-6 md:px-8 py-6 md:py-0"
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                {/* Number */}
                <div
                  className="flex items-baseline gap-0.5 leading-none mb-2"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 300,
                    fontSize: 'clamp(40px, 5vw, 72px)',
                    color: '#0A0A0A',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.prefix && (
                    <span style={{ fontSize: '0.55em', fontWeight: 300 }}>{stat.prefix}</span>
                  )}
                  {isInView ? (
                    <NumberTicker
                      value={stat.value}
                      className="text-inherit font-inherit"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 300,
                        fontSize: 'inherit',
                        letterSpacing: '-0.03em',
                        color: '#0A0A0A',
                      }}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span style={{ color: '#00E3A5', fontWeight: 400, fontSize: '0.7em' }}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#545454',
                    lineHeight: 1.5,
                    textTransform: 'none',
                    letterSpacing: 'normal',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default StatBar;
