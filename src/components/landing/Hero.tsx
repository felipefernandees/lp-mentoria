import { AnimatedHero } from "@/components/ui/animated-hero";

interface HeroProps {
  whatsappUrl?: string;
  logoUrl?: string;
}

const Hero = ({ whatsappUrl, logoUrl }: HeroProps) => {
  return <AnimatedHero whatsappUrl={whatsappUrl} logoUrl={logoUrl} />;
};

export default Hero;
