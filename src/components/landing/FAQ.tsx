import { RainbowButton } from "@/components/ui/rainbow-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

interface FAQProps {
  whatsappUrl?: string;
}

const FAQ = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: FAQProps) => {
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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Tire suas dúvidas sobre a mentoria
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-8 px-8">
            <RainbowButton
              className="text-lg px-8 py-6"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <span className="flex items-center gap-2">
                Quero uma vaga
                <ExternalLink className="h-5 w-5" />
              </span>
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
