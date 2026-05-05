import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface SocialProofProps {
  whatsappUrl?: string;
}

const row1Testimonials = [
  {
    image: "/depoimentos/gabriel-martins.jpg",
    highlight: "R$15.200 recebido",
    legend: "Gabriel vendeu seguindo a metodologia ensinada na primeira aula",
    name: "Gabriel Martins",
  },
  {
    image: "/depoimentos/gui-vilas-9k.jpg",
    highlight: "R$9.000 + R$3.600/mês",
    legend: "Guilherme fechou implementação + contrato de 12 meses de recorrência",
    name: "Guilherme Vilas",
  },
  {
    image: "/depoimentos/lucas-camelo.jpg",
    highlight: "Saiu da CLT",
    legend: "Lucas vendeu automação de R$6k no primeiro mês",
    name: "Lucas Camelo",
  },
  {
    image: "/depoimentos/meu-10k.jpg",
    highlight: "R$10.000",
    legend: "Projeto entregue no modelo ensinado na mentoria",
    name: "Felipe",
  },
];

const row2Testimonials = [
  {
    image: "/depoimentos/gui-vilas-4k.jpg",
    highlight: "R$4.000",
    legend: "Segundo projeto de Guilherme usando o método",
    name: "Guilherme Vilas",
  },
  {
    image: "/depoimentos/gustavo-piramo.jpg",
    highlight: "Primeiros projetos de IA",
    legend: "Gustavo começou 2026 recebendo dos primeiros projetos",
    name: "Gustavo Píramo",
  },
  {
    image: "/depoimentos/meu-6k.jpg",
    highlight: "R$6.000",
    legend: "Mais um projeto fechado pelo método",
    name: "Felipe",
  },
  {
    image: "/depoimentos/meu-5k.jpg",
    highlight: "R$5.500",
    legend: "Recorrência gerada com o mesmo cliente",
    name: "Felipe",
  },
  {
    image: "/depoimentos/primeira-automacao.jpg",
    highlight: "Primeira automação vendida",
    legend: "Primeiro projeto fechado seguindo o método da mentoria",
    name: "Aluno",
  },
];

function TestimonialCard({
  image,
  highlight,
  legend,
  name,
}: (typeof row1Testimonials)[0]) {
  return (
    <div
      className="rounded-xl overflow-hidden flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-auto snap-center"
      style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#ffffff" }}
    >
      <div className="overflow-hidden" style={{ background: "#f4f4f5", aspectRatio: "3/4" }}>
        <img
          src={image}
          alt={`Resultado ${name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23e4e4e7'/%3E%3Ctext x='100' y='125' text-anchor='middle' fill='%2352525b' font-size='12'%3EResultado%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-bold mb-0.5" style={{ color: "#00E3A5" }}>
          {highlight}
        </p>
        <p className="text-xs leading-snug" style={{ color: "#52525b" }}>
          {legend}
        </p>
      </div>
    </div>
  );
}

function VideoCard() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-auto snap-center"
      style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#ffffff" }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#0a0a0a" }}>
        <video
          ref={videoRef}
          src="/depoimentos/leticia-video.mov#t=0.001"
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center transition-colors"
            style={{ background: "rgba(0,0,0,0.4)" }}
            aria-label="Reproduzir vídeo"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <Play className="w-6 h-6 ml-1" style={{ color: "#0a0a0a" }} />
            </div>
          </button>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-bold mb-0.5" style={{ color: "#00E3A5" }}>
          R$33.000 no primeiro projeto
        </p>
        <p className="leading-snug" style={{ color: "#52525b", fontSize: "0.7rem" }}>
          Letícia faz parte da mentoria individual e em grupo e graças a ela, fez sua primeira venda para a maior empresa de turismo do Brasil.
        </p>
      </div>
    </div>
  );
}

const SocialProof = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: SocialProofProps) => {
  return (
    <section className="section-light section-light-fade">
      {/* Header com container padrão */}
      <div className="ds-container">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#0a0a0a" }}
          >
            Resultados reais. Sem SaaS. Sem promessa.
          </h2>
          <p className="text-xl" style={{ color: "#52525b" }}>
            Quem entrou na mentoria e o que construiu.
          </p>
        </div>
      </div>

      {/* Container mais largo para os cards */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        {/* Fileira 1: Letícia + 4 depoimentos */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 mb-2 lg:mb-4 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          <VideoCard />
          {row1Testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Fileira 2: 5 depoimentos */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 mb-10 lg:mb-14 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {row2Testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="ds-container">
        <div className="text-center">
          <button
            className="btn-ds"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Quero esse resultado também →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
