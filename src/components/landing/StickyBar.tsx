import { ShinyButton } from "@/components/ui/shiny-button";
import { ExternalLink, X } from "lucide-react";
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-2xl animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Mentoria 1x1 — IA & Automações com Felipe
            </p>
            <p className="text-xs text-muted-foreground">Vagas limitadas por ciclo</p>
          </div>

          <div className="flex items-center gap-3">
            <ShinyButton
              className="px-6 py-2 text-sm whitespace-nowrap"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <span className="flex items-center gap-1">
                Quero uma vaga
                <ExternalLink className="h-3 w-3" />
              </span>
            </ShinyButton>

            <button
              onClick={handleClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Fechar"
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
