import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Globe } from "lucide-react";
import heroImage from "@/assets/cyber-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cyber-dark/80"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyber-accent rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Icon Group */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-primary/20 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="p-3 bg-cyber-cyan/20 rounded-full">
              <Lock className="w-8 h-8 text-cyber-cyan" />
            </div>
            <div className="p-3 bg-cyber-accent/20 rounded-full">
              <Globe className="w-8 h-8 text-cyber-accent" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-cyber-cyan bg-clip-text text-transparent leading-tight">
            Segurança e Privacidade na Era Digital
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore o mundo da cibersegurança, desde fundamentos históricos até tecnologias emergentes. 
            Proteja-se na era digital com conhecimento especializado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg animate-glow"
              onClick={() => document.getElementById('topics-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Exploração
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
              Aprender Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Temas Principais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-cyan">15+</div>
              <div className="text-muted-foreground">Subtópicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-accent">100%</div>
              <div className="text-muted-foreground">Educativo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2024</div>
              <div className="text-muted-foreground">Atualizado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;