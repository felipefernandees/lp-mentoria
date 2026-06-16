import { AnimatedHero } from "@/components/ui/animated-hero";

interface HeroProps {
  onOpenForm?: () => void;
  logoUrl?: string;
}

const Hero = ({ onOpenForm, logoUrl }: HeroProps) => {
  return <AnimatedHero onOpenForm={onOpenForm} logoUrl={logoUrl} />;
};

export default Hero;
