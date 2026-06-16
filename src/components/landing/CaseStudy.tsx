import BlurFade from "@/components/ui/blur-fade";

interface CaseStudyProps {
  onOpenForm?: () => void;
}

const CaseStudy = ({ onOpenForm }: CaseStudyProps) => {
  return (
    <section className="section-light" style={{ paddingTop: '40px' }}>
      <div className="ds-container">

        {/* Divisor sutil para separar da galeria */}
        <div
          style={{
            height: "1px",
            background: "rgba(0,0,0,0.07)",
            marginBottom: "56px",
          }}
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT: texto + CTA */}
          <BlurFade delay={0.1} inView className="flex-shrink-0 lg:w-5/12">
            <div className="flex flex-col gap-6">
              <div>
                <p className="section-label" style={{ color: '#00E3A5' }}>
                  &#123; Estudo de Caso &#125;
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#0a0a0a", letterSpacing: "-0.02em", lineHeight: 1.1 }}
                >
                  Entrevista com o Mentorado Crisnando
                </h2>
              </div>

              <p style={{ color: "#52525b", fontSize: "15px", lineHeight: 1.7 }}>
                Entrou na mentoria sem nunca ter vendido um projeto de IA. Aqui ele
                conta o que mudou, o que foi difícil e por que valeu a pena — na
                própria voz dele.
              </p>

              <div>
                <button
                  className="btn-ds"
                  onClick={onOpenForm}
                  style={{ fontSize: "0.8125rem", padding: "12px 24px" }}
                >
                  Aplicar para a Mentoria
                </button>
              </div>
            </div>
          </BlurFade>

          {/* RIGHT: vídeo maior */}
          <BlurFade delay={0.2} inView className="w-full lg:flex-1">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#000",
                boxShadow: "0 20px 56px rgba(0,0,0,0.14)",
              }}
            >
              <iframe
                id="panda-7284308b-8111-493f-ba36-aac130f1b862"
                src="https://player-vz-47bfa30d-f74.tv.pandavideo.com.br/embed/?v=7284308b-8111-493f-ba36-aac130f1b862"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
                fetchPriority="high"
              />
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
