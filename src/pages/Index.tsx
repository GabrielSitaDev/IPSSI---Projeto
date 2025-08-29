import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopicsSection from "@/components/TopicsSection";
import TopicDetailSection from "@/components/TopicDetailSection";
import Footer from "@/components/Footer";
import { 
  History, 
  Shield, 
  Brain, 
  Smartphone, 
  Users 
} from "lucide-react";

const Index = () => {
  const topics = [
    {
      id: "fundamentals",
      title: "Fundamentos e História",
      description: "Compreenda as origens da internet e a evolução das ameaças digitais",
      icon: <History className="w-8 h-8" />,
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
      icon: <Shield className="w-8 h-8" />,
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
      icon: <Brain className="w-8 h-8" />,
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
      icon: <Smartphone className="w-8 h-8" />,
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
      icon: <Users className="w-8 h-8" />,
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TopicsSection />
        {topics.map((topic) => (
          <TopicDetailSection
            key={topic.id}
            id={topic.id}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            color={topic.color}
            iconColor={topic.iconColor}
            subtopics={topic.subtopics}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
