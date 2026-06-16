import { CheckCircle } from "lucide-react";

interface InvestmentProps {
  onOpenForm?: () => void;
}

const VAGAS_TOTAL = 5;
const VAGAS_OCUPADAS = 3;

const Investment = ({ onOpenForm }: InvestmentProps) => {
  const includes = [
    "3 meses de acompanhamento individual",
    "1 call por semana direto com Felipe",
    "Suporte no grupo entre as sessões",
    "Acesso ao método completo",
    "Acesso à comunidade durante 1 ano",
  ];

  return (
    <section className="section-light section-light-fade">
      <div className="ds-container">
        <p className="section-label text-center" style={{ color: '#00E3A5' }}>&#123; Investimento &#125;</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#0a0a0a', letterSpacing: '-0.02em' }}>
          O que você recebe
        </h2>

        <div className="max-w-md mx-auto">
          {/* Contador de vagas */}
          <div
            className="mb-6 rounded-xl p-5"
            style={{ border: '1px solid rgba(0,0,0,0.07)', background: '#ffffff' }}
          >
            <div className="flex items-center justify-between mb-3">
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  margin: 0,
                }}
              >
                Vagas de junho
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: VAGAS_OCUPADAS >= VAGAS_TOTAL ? "#f43f5e" : "#52525b",
                  margin: 0,
                }}
              >
                {VAGAS_OCUPADAS} de {VAGAS_TOTAL} ocupadas
              </p>
            </div>
            <div
              style={{
                height: "6px",
                borderRadius: "99px",
                background: "rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(VAGAS_OCUPADAS / VAGAS_TOTAL) * 100}%`,
                  borderRadius: "99px",
                  background: VAGAS_OCUPADAS >= VAGAS_TOTAL ? "#f43f5e" : "#4F46E5",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
            <p style={{ fontSize: "12px", color: "#a1a1aa", marginTop: "8px" }}>
              {VAGAS_TOTAL - VAGAS_OCUPADAS}{" "}
              {VAGAS_TOTAL - VAGAS_OCUPADAS === 1 ? "vaga disponível" : "vagas disponíveis"} neste ciclo
            </p>
          </div>

          {/* Card de incluso */}
          <div
            className="rounded-xl p-8 md:p-12"
            style={{ border: '1px solid rgba(0,0,0,0.07)', background: '#ffffff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
          >
            <div className="space-y-3 mb-10 max-w-sm mx-auto">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#00E3A5' }} />
                  <p style={{ color: '#0a0a0a' }}>{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenForm}
              className="btn-ds w-full justify-center text-base"
              style={{ width: '100%' }}
            >
              Aplicar para a Mentoria
            </button>

            <p className="text-sm mt-6 text-center" style={{ color: '#a1a1aa' }}>
              Vagas limitadas por ciclo — o atendimento individual exige isso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
