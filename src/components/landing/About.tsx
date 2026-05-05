import { ProfileCard } from "@/components/ui/profile-card";

interface AboutProps {
  photoUrl?: string;
}

const About = ({
  photoUrl = "/felipe.jpg",
}: AboutProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem vai te acompanhar</h2>
        </div>

        <ProfileCard
          name="Felipe"
          title="IA & Automações"
          description="De estagiário de infraestrutura de TI ganhando R$1.000 por mês a R$220.000 em 12 meses resolvendo problemas reais com IA. Não com SaaS. Não lançando infoproduto. Encontrando empresas com problemas, construindo a solução, cobrando por isso. Hoje ensino exatamente o caminho que percorri — sem os erros que levei meses pra corrigir. E faço questão de estar presente de verdade: quando você entra na mentoria, você tem acesso a mim, não a um suporte genérico."
          imageUrl={photoUrl}
          youtubeUrl="https://www.youtube.com/@FelipeFernandesT"
        />
      </div>
    </section>
  );
};

export default About;
