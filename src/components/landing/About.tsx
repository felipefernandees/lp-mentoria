import { Youtube } from "lucide-react";

interface AboutProps {
  photoUrl?: string;
}

const About = ({
  photoUrl = "/felipe.jpg",
}: AboutProps) => {
  return (
    <section className="section-light section-light-fade">
      <div className="ds-container">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center pt-4 pb-8">
          
          {/* Foto Maior (Esquerda) */}
          <div className="w-full md:w-5/12 relative z-0">
            <img
              src={photoUrl}
              alt="Felipe"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Cartão de Texto Sobrepondo (Direita) */}
          <div className="w-full md:w-8/12 relative z-10 md:-ml-12 lg:-ml-20 mt-[-40px] md:mt-0">
            <div 
              className="p-8 md:p-12 rounded-2xl"
              style={{ 
                background: '#ffffff', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0a0a0a' }}>
                Quem vai te acompanhar
              </h2>

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold" style={{ color: '#0a0a0a' }}>Felipe</p>
                  <p className="text-sm font-bold uppercase tracking-wider mt-1" style={{ color: '#00E3A5' }}>IA & Automações</p>
                </div>
                <a
                  href="https://www.youtube.com/@FelipeFernandesT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg"
                  style={{ color: '#ef4444' }}
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </div>

              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#52525b' }}
              >
                De estagiário de infraestrutura de TI ganhando R$1.000 por mês a{' '}
                <span style={{ color: '#00E3A5', fontWeight: 700 }}>R$220.000 em 12 meses</span>{' '}
                resolvendo problemas reais com IA. Não com SaaS. Não lançando infoproduto.
                Encontrando empresas com problemas, construindo a solução, cobrando por isso.
              </p>
              
              <p
                className="text-base leading-relaxed"
                style={{ color: '#52525b' }}
              >
                Hoje ensino exatamente o caminho que percorri — sem os erros que levei meses pra
                corrigir. E faço questão de estar presente de verdade: quando você entra na
                mentoria, você tem acesso{' '}
                <span style={{ color: '#00E3A5', fontWeight: 600 }}>a mim, não a um suporte genérico</span>
                .
              </p>

              <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl" style={{ background: 'rgba(0,227,165,0.08)', border: '1px solid rgba(0,227,165,0.15)' }}>
                <span className="text-sm font-bold" style={{ color: '#00E3A5' }}>De estagiário → R$220k em 12 meses</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
