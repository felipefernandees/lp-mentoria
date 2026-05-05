const IsForYou = () => {
  const yesItems = [
    "Você já estudou IA ou automação mas não fechou o primeiro cliente ainda",
    "Quer acompanhamento individual, não mais um curso gravado",
    "Consegue dedicar pelo menos 5 horas por semana",
    "Quer faturar resolvendo problemas reais, sem promessa de enriquecimento rápido",
  ];

  const noItems = [
    "Espera resultado sem implementar",
    "Não tem tempo para as sessões semanais",
    "Está buscando fórmula mágica sem esforço",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Isso é pra você se...
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* YES block */}
          <div className="border border-green-500/30 rounded-xl p-6 bg-green-500/5">
            <div className="space-y-4">
              {yesItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0 mt-0.5">✅</span>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NO block */}
          <div className="border border-red-500/30 rounded-xl p-6 bg-red-500/5">
            <div className="space-y-4">
              {noItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0 mt-0.5">❌</span>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
