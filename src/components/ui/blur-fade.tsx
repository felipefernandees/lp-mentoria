import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: { hidden: { y: number }; visible: { y: number } };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isVisible = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      [direction === "up" || direction === "down" ? "y" : "x"]:
        direction === "down" || direction === "right" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "up" || direction === "down" ? "y" : "x"]: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
