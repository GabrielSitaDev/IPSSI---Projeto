import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary animate-glow" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-cyan bg-clip-text text-transparent">
                CyberGuard
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Sua fonte confiável para educação em segurança e privacidade digital. 
              Protegendo você na era digital através do conhecimento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Temas</h3>
            <ul className="space-y-2">
              <li><a href="#fundamentals" className="text-muted-foreground hover:text-primary transition-colors">Fundamentos</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-primary transition-colors">Segurança</a></li>
              <li><a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Tecnologias</a></li>
              <li><a href="#practices" className="text-muted-foreground hover:text-primary transition-colors">Práticas</a></li>
              <li><a href="#social" className="text-muted-foreground hover:text-primary transition-colors">Impacto Social</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guias Práticos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ferramentas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Glossário</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Atualizações</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} CyberGuard. Educação em segurança digital.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;