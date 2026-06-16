import { useRef } from "react";
import { Youtube, Instagram } from "lucide-react";
import { useInView } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import BlurFade from "@/components/ui/blur-fade";

const stats = [
  { value: 220, prefix: "R$", suffix: "k+", label: "faturados em 12 meses" },
  { value: 35,  prefix: "",   suffix: "+",  label: "mentorados formados" },
  { value: 15,  prefix: "",   suffix: "+",  label: "projetos entregues" },
];

interface AboutProps {
  photoUrl?: string;
}

const About = ({ photoUrl = "/felipe.jpg" }: AboutProps) => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="ds-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* LEFT: conteúdo */}
          <div className="flex-1 order-2 lg:order-1">
            <BlurFade delay={0.1} inView>
              <p className="section-label">&#123; Sobre o Mentor &#125;</p>
              <h2
                className="text-3xl md:text-5xl font-bold mb-8"
                style={{ color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05 }}
              >
                O que você conquista nesses 3 meses
              </h2>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              {/* Nome + links sociais */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-lg font-bold" style={{ color: '#ffffff' }}>Felipe Tâmbara</p>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mt-1"
                    style={{ color: '#00E3A5', letterSpacing: '0.12em' }}
                  >
                    Arquiteto de Negócios com IA
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/@FelipeFernandesT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: '8px 14px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'none',
                    }}
                  >
                    <Youtube className="w-4 h-4" style={{ color: '#ef4444' }} />
                    YouTube
                  </a>

                  <a
                    href="https://www.instagram.com/felipetambara.ia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: '8px 14px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'none',
                    }}
                  >
                    <Instagram className="w-4 h-4" style={{ color: '#e1306c' }} />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Bio — empatia primeiro, autoridade depois (Donald Miller) */}
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: '#A1A1AA', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}
              >
                Já fui o cara que sabia tudo sobre IA e automação — e no fim do mês não entrava nada.
                Sabia fazer. Não sabia vender. Não sabia por onde começar a cobrar.
              </p>

              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: '#A1A1AA', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}
              >
                O que mudou não foi o conhecimento. Foi a ordem:{' '}
                <span style={{ color: '#ffffff', fontWeight: 600 }}>vender primeiro, aprender profundo durante a entrega.</span>{' '}
                Isso me levou de estagiário de TI ganhando R$1.000/mês a{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>R$220.000 em 12 meses</span>{' '}
                — sem SaaS, sem infoproduto.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ color: '#A1A1AA', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}
              >
                Hoje sistematizei esse caminho no Protocolo R.O.T.A. e aplico individualmente com cada mentorado.
                Não é suporte genérico. É{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>uma call por semana diretamente comigo</span>,
                focada no seu atalho específico — não na receita padrão do mercado.
              </p>
            </BlurFade>

            {/* Stats — estilo StatBar dentro do About */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-0 mt-10 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {stats.map((stat, i) => (
                <BlurFade key={i} delay={0.35 + i * 0.08} inView>
                  <div
                    className="pr-4 py-2"
                    style={{
                      borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      paddingLeft: i > 0 ? '16px' : 0,
                    }}
                  >
                    {/* Number */}
                    <div
                      className="flex items-baseline gap-0 leading-none mb-1"
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 300,
                        fontSize: 'clamp(28px, 3vw, 48px)',
                        color: '#ffffff',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {stat.prefix && (
                        <span style={{ fontSize: '0.55em', fontWeight: 300 }}>{stat.prefix}</span>
                      )}
                      {statsInView ? (
                        <NumberTicker
                          value={stat.value}
                          className="text-inherit"
                          style={{
                            fontFamily: "'Archivo', sans-serif",
                            fontWeight: 300,
                            fontSize: 'inherit',
                            letterSpacing: '-0.03em',
                            color: '#ffffff',
                          }}
                        />
                      ) : (
                        <span>0</span>
                      )}
                      <span style={{ color: '#00E3A5', fontWeight: 400, fontSize: '0.65em' }}>
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#A1A1AA',
                        lineHeight: 1.4,
                        textTransform: 'none',
                        letterSpacing: 'normal',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* RIGHT: foto — sem moldura */}
          <BlurFade delay={0.15} inView className="order-1 lg:order-2 w-full lg:w-5/12 flex-shrink-0">
            <img
              src={photoUrl}
              alt="Felipe"
              className="w-full object-cover rounded-2xl"
              style={{
                aspectRatio: '4/5',
                objectPosition: 'top',
                maxHeight: '560px',
              }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </BlurFade>

        </div>
      </div>
    </section>
  );
};

export default About;
