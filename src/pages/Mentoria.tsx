import { useEffect, useState } from "react";
import Hero from "@/components/landing/Hero";
import Agitation from "@/components/landing/Agitation";
import Insight from "@/components/landing/Insight";
import ROTA from "@/components/landing/ROTA";
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
import ApplicationForm from "@/components/landing/ApplicationForm";
import CaseStudy from "@/components/landing/CaseStudy";

const WHATSAPP_NUMBER = "5528999339279";

const Mentoria = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    document.title = "Mentoria Individual — IA & Automações com Felipe Tâmbara";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "De estagiário a R$220k em 12 meses com IA. Aplique para a mentoria individual 1x1 com Felipe Tâmbara e feche seu primeiro contrato."
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

    addMetaTag("og:title", "Mentoria Individual — IA & Automações com Felipe Tâmbara");
    addMetaTag(
      "og:description",
      "De estagiário a R$220k em 12 meses com IA. Aplique para a mentoria individual 1x1 com Felipe Tâmbara e feche seu primeiro contrato."
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
    addTwitterTag("twitter:title", "Mentoria Individual — IA & Automações com Felipe Tâmbara");
    addTwitterTag(
      "twitter:description",
      "De estagiário a R$220k em 12 meses com IA. Aplique para a mentoria individual 1x1 com Felipe Tâmbara e feche seu primeiro contrato."
    );
    addTwitterTag("twitter:image", "/felipe.jpg");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Mentoria Individual 1x1 — IA e Automações",
      description:
        "Mentoria individual para encontrar problemas reais e faturar com IA e automações",
      provider: {
        "@type": "Person",
        name: "Felipe Tâmbara",
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
    <div className="overflow-x-hidden">
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={closeForm}
        whatsappNumber={WHATSAPP_NUMBER}
      />
      <Hero onOpenForm={openForm} logoUrl="/logo.svg" />
      <Agitation />
      <Insight />
      <ROTA />
      <SocialProof onOpenForm={openForm} />
      <CaseStudy onOpenForm={openForm} />
      <Features onOpenForm={openForm} />
      <Roadmap onOpenForm={openForm} />
      <IsForYou />
      <Investment onOpenForm={openForm} />
      <Guarantee />
      <About photoUrl="/felipe.jpg" />
      <FAQ onOpenForm={openForm} />
      <FinalCTA onOpenForm={openForm} />
      <Footer />
    </div>
  );
};

export default Mentoria;
