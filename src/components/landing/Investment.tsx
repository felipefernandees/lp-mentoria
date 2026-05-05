import { CheckCircle } from "lucide-react";

interface InvestmentProps {
  whatsappUrl?: string;
}

const Investment = ({
  whatsappUrl = "https://wa.me/5528999339279?text=Oi%20Felipe%2C%20vi%20sua%20mentoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim",
}: InvestmentProps) => {
  const includes = [
    "3 meses de acompanhamento individual",
    "1 call por semana direto com Felipe",
    "Suporte no grupo entre as sessões",
    "Acesso ao método completo",
  ];

  return (
    <section className="section-light section-light-fade">
      <div className="ds-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#0a0a0a' }}>
          Investimento
        </h2>

        <div className="max-w-md mx-auto">
          <div
            className="rounded-xl p-8 md:p-12 text-center"
            style={{ border: '1px solid rgba(0,0,0,0.1)', background: '#ffffff' }}
          >
            <div className="mb-8">
              {/* Preço principal — parcelamento em destaque */}
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#a1a1aa' }}>
                a partir de
              </p>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-2xl font-semibold" style={{ color: '#52525b', lineHeight: 1.6 }}>12x</span>
                <span className="text-6xl md:text-7xl font-bold leading-none" style={{ color: '#0a0a0a' }}>R$400</span>
              </div>
              <p className="text-sm" style={{ color: '#a1a1aa' }}>no cartão de crédito</p>

              {/* Divisor */}
              <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
                <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
                <span className="text-xs font-medium" style={{ color: '#a1a1aa' }}>ou</span>
                <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
              </div>

              {/* À vista */}
              <p className="text-3xl font-bold" style={{ color: '#0a0a0a' }}>R$4.000 <span className="text-lg font-medium" style={{ color: '#52525b' }}>à vista</span></p>
            </div>

            <div className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#00E3A5' }} />
                  <p style={{ color: '#0a0a0a' }}>{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="btn-ds w-full justify-center text-base"
              style={{ width: '100%' }}
            >
              Quero uma vaga →
            </button>

            <p className="text-sm mt-6" style={{ color: '#a1a1aa' }}>
              Vagas limitadas por ciclo — o atendimento individual exige isso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
