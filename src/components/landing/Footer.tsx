const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)', padding: '64px 0 48px 0' }}>
      <div className="ds-container">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <img 
            src="/logo-dark.svg" 
            alt="IA Society" 
            className="h-10 w-auto opacity-90"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />

          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#52525b' }}
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#52525b' }}
            >
              Política de Privacidade
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-sm" style={{ color: '#52525b' }}>
              © {currentYear} Felipe — Mentoria IA & Automações. Todos os direitos reservados.
            </div>

            <div className="text-xs max-w-2xl mx-auto" style={{ color: '#a1a1aa' }}>
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de
              uma estratégia não deve ser interpretada como uma garantia de resultados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
