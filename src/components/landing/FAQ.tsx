import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  whatsappUrl?: string;
}

const FAQ = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso saber programar?",
      answer:
        "Não. Trabalho com ferramentas no-code e low-code. O foco é resolver problemas, não escrever código.",
    },
    {
      question: "Já tentei N8n e não consegui evoluir. Funciona pra mim?",
      answer:
        "Esse é exatamente o perfil de quem mais evolui na mentoria. O problema não era você — era a falta de direção.",
    },
    {
      question: "E se eu tiver renda baixa agora?",
      answer:
        "A maioria dos mentorados estava na mesma situação. Por isso o parcelamento em 12x existe — pra quem quer investir no crescimento antes de ter a receita lá.",
    },
    {
      question: "Qual o formato exato?",
      answer:
        "1 call individual por semana, durante 3 meses. Mais acesso ao grupo e suporte entre as sessões.",
    },
    {
      question: "Quando começo?",
      answer:
        "Assim que o pagamento for confirmado, você já entra no grupo e marcamos o onboarding essa semana.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim. Se aplicar tudo e não tiver resultado, eu te coloco pra trabalhar comigo.",
    },
  ];

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="bg-grid-bottom absolute inset-0 w-full h-full" />
      <div className="bg-glow-bottom absolute inset-0 w-full h-full" />
      <div className="ds-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p style={{ color: '#a1a1aa' }}>Tire suas dúvidas sobre a mentoria</p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{ borderBottom: index < faqs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: '#00E3A5',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-base leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn-ds"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Quero uma vaga →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
