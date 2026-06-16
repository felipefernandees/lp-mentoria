import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroProps {
  onOpenForm?: () => void;
  logoUrl?: string;
}

function AnimatedHero({
  onOpenForm,
  logoUrl = "/logo.svg"
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["N8N", "Lovable", "Claude", "Make", "Cursor"], []);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber(prev => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Grid + glow */}
      <div className="bg-grid-dark absolute inset-0 w-full h-full" />
      <div className="bg-glow-top absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10 w-full">
        <div className="flex gap-4 py-16 lg:py-40 items-center justify-center flex-col">

          {/* Logo */}
          {logoUrl && (
            <div className="mb-2">
              <img
                src={logoUrl}
                alt="IA Society"
                className="h-12 w-auto opacity-80"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          )}

          {/* Section label */}
          <p className="section-label">&#123; Mentoria Individual &#125;</p>

          {/* Headline */}
          <div className="flex gap-3 flex-col items-center">
            <h1
              className="max-w-4xl text-center leading-[0.95]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(38px, 10vw, 96px)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              <span>Você já tentou</span>

              {/* Rotating word */}
              <span
                className="relative flex w-full justify-center overflow-hidden"
                style={{ height: '1.08em' }}
              >
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-gradient italic"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 45, damping: 14 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>

              <span>Por que ainda não faturou?</span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mt-4"
              style={{ color: '#A1A1AA', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}
            >
              O problema não é que você não sabe o suficiente. É que ninguém te ensinou a encontrar
              problemas reais que empresas pagam pra resolver.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 mt-2">
            <button
              onClick={onOpenForm}
              className="btn-ds"
              style={{ whiteSpace: 'nowrap' }}
            >
              Aplicar para a Mentoria
            </button>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em', textTransform: 'none' }}>
              Vagas limitadas por ciclo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
