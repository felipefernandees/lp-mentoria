import { ShieldCheck, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

const Guarantee = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-dark absolute inset-0 w-full h-full" />
      <div className="bg-glow-top absolute inset-0 w-full h-full" />
      <div className="ds-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Garantia de resultado</h2>
          <p className="text-lg" style={{ color: '#a1a1aa' }}>
            Eu assumo o risco por você.
          </p>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 relative overflow-hidden group"
          style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Magnetic Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,227,165,0.08), transparent 40%)`,
            }}
          />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="text-center md:text-left">
              <div className="relative inline-flex items-center justify-center mb-8 group/icon">
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 bg-[#00E3A5] blur-[40px] opacity-20 group-hover/icon:opacity-40 transition-opacity duration-700 rounded-full"></div>
                
                {/* Premium Glass Container */}
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-[#00E3A5]/[0.05] to-transparent border border-white/[0.08] backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden transition-transform duration-500 group-hover/icon:scale-105 group-hover/icon:-translate-y-1">
                  {/* Top glowing edge */}
                  <div className="absolute top-0 inset-x-0 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00E3A5] to-transparent opacity-80"></div>
                  
                  {/* Icon with drop shadow */}
                  <ShieldCheck 
                    className="relative z-10 h-11 w-11 text-[#00E3A5] transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,227,165,0.3)] group-hover/icon:drop-shadow-[0_0_15px_rgba(0,227,165,0.6)]" 
                    strokeWidth={1.2}
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Sem risco:</h3>

              <div className="space-y-3">
                {[
                  "Aplique tudo que eu te mostrar",
                  "Execute as atividades combinadas",
                  "Comprove que seguiu o processo",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 transition-colors duration-300" style={{ color: '#00E3A5' }} />
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                Se você aplicar tudo que eu te mostrar, executar as atividades combinadas e
                comprovar que seguiu o processo — e mesmo assim não tiver resultado —{" "}
                <span className="font-bold text-gradient transition-all duration-300">
                  eu te coloco pra trabalhar comigo.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
