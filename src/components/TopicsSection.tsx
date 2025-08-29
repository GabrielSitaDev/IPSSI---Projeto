import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Shield, 
  Brain, 
  Smartphone, 
  Users,
  History,
  Globe,
  Zap,
  Home,
  Gamepad2
} from "lucide-react";

const TopicsSection = () => {
  const topics = [
    {
      id: "fundamentals",
      title: "Fundamentos e História",
      description: "Compreenda as origens da internet e a evolução das ameaças digitais",
      icon: <History className="w-6 h-6" />,
      color: "bg-primary/10 border-primary/30",
      iconColor: "text-primary",
      subtopics: [
        "O que é a internet e como surgiu",
        "História das ameaças digitais",
        "Dos primeiros vírus aos ransomwares"
      ]
    },
    {
      id: "security",
      title: "Segurança e Privacidade",
      description: "Núcleo da proteção digital: ataques, defesas e melhores práticas",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-cyber-cyan/10 border-cyber-cyan/30",
      iconColor: "text-cyber-cyan",
      subtopics: [
        "Dark web e deep web",
        "Ataques DDoS",
        "Phishing e engenharia social",
        "Cibersegurança para leigos"
      ]
    },
    {
      id: "technology",
      title: "Tecnologias Atuais e Futuras",
      description: "IA, blockchain e Web 3.0: o futuro da segurança digital",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-cyber-accent/10 border-cyber-accent/30",
      iconColor: "text-cyber-accent",
      subtopics: [
        "IA na segurança digital",
        "Blockchain para autenticação",
        "Web 3.0 e privacidade descentralizada"
      ]
    },
    {
      id: "practices",
      title: "Aplicações Práticas",
      description: "Proteção real em dispositivos, jogos e comunicações do dia a dia",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-green-500/10 border-green-500/30",
      iconColor: "text-green-500",
      subtopics: [
        "Smart home security",
        "Segurança em streaming",
        "VoIP seguro (WhatsApp, Signal)"
      ]
    },
    {
      id: "social",
      title: "Impacto Social e Ética",
      description: "Censura, divisão digital e direitos na era conectada",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500/10 border-orange-500/30",
      iconColor: "text-orange-500",
      subtopics: [
        "Censura na internet",
        "Divisão digital e segurança",
        "Direitos autorais e pirataria"
      ]
    }
  ];

  return (
    <section id="topics-section" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Explore os Temas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navegue pelos principais tópicos de segurança e privacidade digital, 
            organizados para um aprendizado progressivo e abrangente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card 
              key={topic.id}
              className={`${topic.color} hover:scale-105 transition-all duration-300 animate-slide-up cursor-pointer group`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => document.getElementById(`section-${topic.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg bg-background/50 ${topic.iconColor}`}>
                    {topic.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {topic.subtopics.length} tópicos
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{subtopic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Topics Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Tópicos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-cyber-cyan/20 p-6 rounded-lg border border-primary/30">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Dark Web Explicada</h4>
              <p className="text-sm text-muted-foreground">Desmistificando mitos e realidades sobre a internet profunda</p>
            </div>
            <div className="bg-gradient-to-br from-cyber-cyan/20 to-cyber-accent/20 p-6 rounded-lg border border-cyber-cyan/30">
              <Home className="w-8 h-8 text-cyber-cyan mb-4" />
              <h4 className="text-lg font-semibold mb-2">Smart Home Segura</h4>
              <p className="text-sm text-muted-foreground">Protegendo dispositivos inteligentes domésticos</p>
            </div>
            <div className="bg-gradient-to-br from-cyber-accent/20 to-primary/20 p-6 rounded-lg border border-cyber-accent/30">
              <Gamepad2 className="w-8 h-8 text-cyber-accent mb-4" />
              <h4 className="text-lg font-semibold mb-2">Gaming Seguro</h4>
              <p className="text-sm text-muted-foreground">Proteção em jogos online e streaming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;