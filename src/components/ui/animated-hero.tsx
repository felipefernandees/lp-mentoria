import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface AnimatedHeroProps {
  whatsappUrl?: string;
  logoUrl?: string;
}

function AnimatedHero({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
  logoUrl = "/logo.svg"
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["N8n", "Lovable", "Claude", "Make", "UGC com IA", "Cursor"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center gradient-hero">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Logo */}
          {logoUrl && (
            <div className="mb-4">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Animated Title */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-foreground">Você já tentou</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-gradient"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-foreground">Por que ainda não faturou?</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              O problema não é que você não sabe o suficiente. É que ninguém te ensinou a encontrar
              problemas reais que empresas pagam pra resolver. É exatamente isso que eu faço na mentoria.
            </p>
          </div>

          {/* Single WhatsApp CTA */}
          <RainbowButton
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="text-lg px-8 py-6 bg-slate-50 text-zinc-950"
          >
            <span className="flex items-center gap-2">
              Quero entender onde estou travando →
            </span>
          </RainbowButton>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
