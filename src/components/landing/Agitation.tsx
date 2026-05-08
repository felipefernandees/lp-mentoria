import { useEffect, useRef, useState } from 'react';
import BlurFade from "@/components/ui/blur-fade";

const tools = [
  { name: 'n8n',     icon: '/icons/n8n.svg',     glow: '#EA4B71', top: 0,   left: 16,  rotate: -8 },
  { name: 'Make',    icon: '/icons/make.png',     glow: '#6D00CC', top: 74,  left: 118, rotate:  5 },
  { name: 'Claude',  icon: '/icons/claude.png',   glow: '#CF7C4E', top: 150, left: 8,   rotate: -4 },
  { name: 'Cursor',  icon: '/icons/cursor.png',   glow: '#18181b', top: 222, left: 114, rotate:  7 },
  { name: 'Typebot', icon: '/icons/typebot.png',  glow: '#3B82F6', top: 296, left: 14,  rotate: -5 },
  { name: 'Lovable', icon: '/icons/lovable.svg',  glow: '#E11D48', top: 368, left: 110, rotate:  4 },
];

const Agitation = () => {
  const clusterRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tools.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (clusterRef.current) observer.observe(clusterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-light overflow-hidden" style={{ paddingTop: '120px' }}>
      <div className="ds-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Texto */}
          <div className="flex-1">
            <BlurFade delay={0.1} inView>
              <p className="section-label" style={{ color: '#00E3A5' }}>&#123; O Problema &#125;</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0a0a0a', letterSpacing: '-0.02em' }}>
                Eu sei exatamente onde você está.
              </h2>
            </BlurFade>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#52525b' }}>
              <p>
                Você comprou curso. Assistiu tutorial. Tentou montar um agente, um workflow no N8n,
                alguma automação.
              </p>
              <p>
                Mas na hora de{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>transformar isso em dinheiro</span>
                , travou.
              </p>
              <p>
                Não sabia como abordar empresas. Não sabia o que oferecer. Não sabia precificar. E
                continuou vendo outras pessoas faturando com as mesmas ferramentas que você usa.
              </p>
              <p>
                O problema não é falta de conhecimento.{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>É falta de direção.</span>
              </p>
              <p className="font-semibold" style={{ color: '#0a0a0a' }}>
                Você estava aprendendo a ferramenta sem saber qual problema ia resolver com ela. No
                mercado, ninguém paga por ferramenta.{' '}
                <span style={{ color: '#00E3A5' }}>Pagam por solução.</span>
              </p>
            </div>
          </div>

          {/* Cluster de ferramentas — apenas desktop */}
          <div
            ref={clusterRef}
            className="relative w-[300px] h-[430px] flex-shrink-0 hidden lg:block"
          >
            {/* Blobs de glow */}
            <div
              className="absolute -top-8 -left-4 w-52 h-52 rounded-full blur-3xl opacity-[0.15] pointer-events-none"
              style={{ background: '#EA4B71' }}
            />
            <div
              className="absolute top-32 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.12] pointer-events-none"
              style={{ background: '#6D00CC' }}
            />
            <div
              className="absolute bottom-8 left-4 w-48 h-48 rounded-full blur-3xl opacity-[0.12] pointer-events-none"
              style={{ background: '#3B82F6' }}
            />

            {/* Cards */}
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="absolute bg-white rounded-2xl px-4 py-3 border border-zinc-100"
                style={{
                  top: tool.top,
                  left: tool.left,
                  transform: `rotate(${tool.rotate}deg) translateY(${i < visibleCount ? 0 : 18}px)`,
                  opacity: i < visibleCount ? 1 : 0,
                  transition: 'opacity 0.55s ease, transform 0.55s ease',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  style={{ height: '28px', maxWidth: '110px', objectFit: 'contain', display: 'block' }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Agitation;
