const Insight = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          A maioria aprende IA do jeito errado.
        </h2>

        <div className="space-y-8">
          <div className="border border-border/50 rounded-xl p-6 bg-card/50">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              O caminho da maioria
            </p>
            <p className="text-lg text-muted-foreground">
              aprende a ferramenta → tenta criar um produto → ninguém compra.
            </p>
          </div>

          <div className="border border-primary/30 rounded-xl p-6 bg-primary/5">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              O caminho que funciona
            </p>
            <p className="text-lg text-foreground font-medium">
              encontra o problema que empresa tem → constrói a solução → cobra por isso.
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Essa virada de mentalidade é o que separa quem fatura de quem acumula curso. E é o
            primeiro ajuste que eu faço com todo mentorado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insight;
