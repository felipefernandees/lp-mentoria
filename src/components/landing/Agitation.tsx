const Agitation = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Eu sei exatamente onde você está.
        </h2>

        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Você comprou curso. Assistiu tutorial. Tentou montar um agente, um workflow no N8n,
            alguma automação.
          </p>
          <p>
            Mas na hora de transformar isso em dinheiro, travou.
          </p>
          <p>
            Não sabia como abordar empresas. Não sabia o que oferecer. Não sabia precificar. E
            continuou vendo outras pessoas faturando com as mesmas ferramentas que você usa.
          </p>
          <p>
            O problema não é falta de conhecimento. É falta de direção.
          </p>
          <p className="text-foreground font-medium">
            Você estava aprendendo a ferramenta sem saber qual problema ia resolver com ela. No
            mercado, ninguém paga por ferramenta. Pagam por solução.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agitation;
