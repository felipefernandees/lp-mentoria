import { ShinyButton } from "@/components/ui/shiny-button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

interface SocialProofProps {
  whatsappUrl?: string;
}

const SocialProof = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: SocialProofProps) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const testimonials = [
    {
      image: "/depoimentos/gabriel-martins.jpg",
      name: "Gabriel Martins",
      highlight: "R$15.200 recebido",
      legend: "Gabriel vendeu seguindo a metodologia ensinada na primeira aula",
    },
    {
      image: "/depoimentos/gui-vilas-9k.jpg",
      name: "Guilherme Vilas",
      highlight: "R$9.000 + R$3.600/mês",
      legend: "Guilherme fechou implementação + contrato de 12 meses de recorrência",
    },
    {
      image: "/depoimentos/gui-vilas-4k.jpg",
      name: "Guilherme Vilas",
      highlight: "R$4.000",
      legend: "Segundo projeto de Guilherme usando o método",
    },
    {
      image: "/depoimentos/lucas-camelo.jpg",
      name: "Lucas Camelo",
      highlight: "Saiu da CLT",
      legend: "Lucas vendeu automação de R$6k no primeiro mês e já tem segundo cliente na mão",
    },
    {
      image: "/depoimentos/gustavo-piramo.jpg",
      name: "Gustavo Píramo",
      highlight: "Primeiros projetos de IA",
      legend: "Gustavo começou 2026 recebendo dos primeiros projetos de IA",
    },
    {
      image: "/depoimentos/meu-10k.jpg",
      name: "Felipe",
      highlight: "R$10.000",
      legend: "Projeto entregue no modelo ensinado na mentoria",
    },
    {
      image: "/depoimentos/meu-6k.jpg",
      name: "Felipe",
      highlight: "R$6.000",
      legend: "Mais um projeto fechado pelo método",
    },
    {
      image: "/depoimentos/meu-5k.jpg",
      name: "Felipe",
      highlight: "R$5.500",
      legend: "Recorrência gerada com o mesmo cliente",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados reais. Sem SaaS. Sem promessa.
          </h2>
          <p className="text-xl text-muted-foreground">
            Quem entrou na mentoria e o que construiu.
          </p>
        </div>

        {/* Featured video */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card">
            <video
              ref={videoRef}
              src="/depoimentos/leticia-video.mov"
              className="w-full aspect-video object-cover"
              controls={videoPlaying}
              playsInline
              onEnded={() => setVideoPlaying(false)}
            />
            {!videoPlaying && (
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-zinc-900 ml-1" />
                </div>
              </button>
            )}
            <div className="p-4 text-center">
              <p className="text-base font-semibold">Letícia — aluna da mentoria</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-card/50 overflow-hidden hover:shadow-card transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-muted overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.legend}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23374151'/%3E%3Ctext x='200' y='250' text-anchor='middle' fill='%23fff' font-size='16'%3EResultado de Aluno%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-primary mb-1">{t.highlight}</p>
                  <p className="text-xs text-muted-foreground">{t.legend}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Placeholder card */}
          <Card className="border border-border/50 bg-card/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/5] bg-muted/30 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Play className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Em breve</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">Novos resultados chegando</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ShinyButton
            className="px-8 py-4"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <span className="flex items-center gap-2">
              Quero esse resultado também →
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
