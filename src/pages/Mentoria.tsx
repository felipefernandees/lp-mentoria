import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import Agitation from "@/components/landing/Agitation";
import Insight from "@/components/landing/Insight";
import SocialProof from "@/components/landing/SocialProof";
import Features from "@/components/landing/Features";
import Roadmap from "@/components/landing/Roadmap";
import IsForYou from "@/components/landing/IsForYou";
import Investment from "@/components/landing/Investment";
import Guarantee from "@/components/landing/Guarantee";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const WHATSAPP_URL =
  "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim";

const Mentoria = () => {
  useEffect(() => {
    document.title = "Mentoria 1x1 de IA e Automações — com Felipe";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "De estagiário a R$220k em 12 meses. Mentoria 1x1 com Felipe: encontre problemas que empresas pagam pra resolver e feche seu primeiro cliente."
      );
    }

    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    addMetaTag("og:title", "Mentoria 1x1 de IA e Automações — com Felipe");
    addMetaTag(
      "og:description",
      "De estagiário a R$220k em 12 meses. Mentoria 1x1 com Felipe: encontre problemas que empresas pagam pra resolver e feche seu primeiro cliente."
    );
    addMetaTag("og:type", "website");
    addMetaTag("og:image", "/felipe.jpg");

    const addTwitterTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    addTwitterTag("twitter:card", "summary_large_image");
    addTwitterTag("twitter:title", "Mentoria 1x1 de IA e Automações — com Felipe");
    addTwitterTag(
      "twitter:description",
      "De estagiário a R$220k em 12 meses. Mentoria 1x1 com Felipe: encontre problemas que empresas pagam pra resolver e feche seu primeiro cliente."
    );
    addTwitterTag("twitter:image", "/felipe.jpg");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Mentoria 1x1 de IA e Automações",
      description:
        "Mentoria individual para encontrar problemas reais e faturar com IA e automações",
      provider: {
        "@type": "Person",
        name: "Felipe",
        image: "/felipe.jpg",
      },
      courseMode: "online",
      educationalLevel: "Beginner to Advanced",
      teaches: ["Inteligência Artificial", "Automações", "N8n", "Vendas B2B"],
      timeRequired: "P3M",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 z-0 fill-muted-foreground/10 stroke-muted-foreground/10"
      />

      <div className="relative z-10">
        <Hero whatsappUrl={WHATSAPP_URL} logoUrl="/logo.svg" />

        <Agitation />

        <Insight />

        <SocialProof whatsappUrl={WHATSAPP_URL} />

        <Features whatsappUrl={WHATSAPP_URL} />

        <Roadmap whatsappUrl={WHATSAPP_URL} />

        <IsForYou />

        <Investment whatsappUrl={WHATSAPP_URL} />

        <Guarantee />

        <About photoUrl="/felipe.jpg" />

        <FAQ whatsappUrl={WHATSAPP_URL} />

        <FinalCTA whatsappUrl={WHATSAPP_URL} />

        <Footer />
      </div>

      <StickyBar whatsappUrl={WHATSAPP_URL} />
    </div>
  );
};

export default Mentoria;
