import BlurFade from "@/components/ui/blur-fade";

const steps = [
  {
    letter: "R",
    num: "01",
    name: "Reconhecer",
    description:
      "Mapeamos onde você está: seu conhecimento atual, experiências, o que faz bem e o que evita. O caminho começa pelo diagnóstico individual — não por uma receita genérica que serve para qualquer um.",
  },
  {
    letter: "O",
    num: "02",
    name: "Oportunidades",
    description:
      "Identificamos o que já existe ao seu redor: contatos, nichos de entrada, contextos de acesso. Seu primeiro cliente provavelmente já está na sua rede — você só ainda não enxergou onde.",
  },
  {
    letter: "T",
    num: "03",
    name: "Traçar",
    description:
      "Definimos o caminho de menor resistência até o primeiro cliente. Não a rota padrão — o atalho específico para o seu perfil, suas habilidades e o que já está ao alcance.",
  },
  {
    letter: "A",
    num: "04",
    name: "Ativar",
    description:
      "Você vende primeiro, aprende profundo durante a entrega. O Ciclo de Reinício só quebra quando você tem um cliente pagando — não quando termina mais um curso.",
  },
];

const ROTA = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-top-left absolute inset-0 w-full h-full" />
      <div className="bg-glow-top-left absolute inset-0 w-full h-full" />

      <div className="ds-container relative z-10">
        <BlurFade delay={0.1} inView>
          <p className="section-label">&#123; O Método &#125;</p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            Protocolo R.O.T.A.
          </h2>
          <p
            className="text-base md:text-lg mb-14 max-w-2xl"
            style={{ color: "#A1A1AA", textTransform: "none", letterSpacing: "normal" }}
          >
            A maioria dos métodos começa em{" "}
            <strong style={{ color: "#ffffff" }}>T — Traçar</strong>: já te diz qual rota tomar sem te
            conhecer. O R.O.T.A. começa em <strong style={{ color: "#00E3A5" }}>R</strong> — o
            diagnóstico é o que determina o caminho certo para cada pessoa.
          </p>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <BlurFade key={step.letter} delay={0.15 + i * 0.08} inView>
              <div
                className="rounded-xl p-7"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid #00E3A5",
                  height: "100%",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(44px, 5vw, 68px)",
                      color: "#00E3A5",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      flexShrink: 0,
                    }}
                  >
                    {step.letter}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "4px",
                      }}
                    >
                      {step.num}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {step.name}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    color: "#A1A1AA",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    fontWeight: 400,
                    textTransform: "none",
                    letterSpacing: "normal",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROTA;
