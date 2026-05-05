import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantia de resultado</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eu assumo o risco por você.
          </p>
        </div>

        <Card className="border border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-3xl mb-6 border border-primary/20">
                  <Shield className="h-12 w-12 text-primary" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">Sem risco:</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Aplique tudo que eu te mostrar
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Execute as atividades combinadas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Comprove que seguiu o processo
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  Se você aplicar tudo que eu te mostrar, executar as atividades combinadas e
                  comprovar que seguiu o processo — e mesmo assim não tiver resultado —{" "}
                  <span className="font-bold text-indigo-600">
                    eu te coloco pra trabalhar comigo.
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Guarantee;
