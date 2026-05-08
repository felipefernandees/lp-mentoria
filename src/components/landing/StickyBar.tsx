import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyBarProps {
  whatsappUrl?: string;
}

const StickyBar = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: StickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight && !isHidden) {
        setIsVisible(true);
      } else if (scrollPosition <= windowHeight) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  const handleClose = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in"
      style={{
        background: 'rgba(10,10,10,0.96)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="ds-container py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              Mentoria 1x1 — IA & Automações com Felipe
            </p>
            <p className="text-xs" style={{ color: '#52525b' }}>Vagas limitadas por ciclo</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="btn-ds text-sm"
              style={{ padding: '10px 24px', fontSize: '0.875rem' }}
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Quero uma vaga
            </button>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg transition-colors hover:bg-white/10"
              aria-label="Fechar"
              style={{ color: '#a1a1aa' }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
