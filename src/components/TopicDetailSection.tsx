import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

import internet from "@/assets/internet.jpg";
import ameacas from "@/assets/ameacas.avif";
import ameacas2 from "@/assets/ameacas2.avif";

interface TopicDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
  subtopics: string[];
}

const getTopicContent = (id: string) => {
  switch (id) {
    case "fundamentals":
      return {
        introduction: `A Internet é uma rede global de computadores interligados que permite a troca de informações e a comunicação entre dispositivos no mundo inteiro. Ela funciona por meio de um conjunto de protocolos de comunicação, sendo o principal o TCP/IP, que permite que dados sejam transmitidos de forma eficiente e segura entre diferentes sistemas.`,
        concepts: `A origem da Internet remonta aos anos 1960, durante a Guerra Fria. O governo dos EUA, por meio da agência ARPA (Advanced Research Projects Agency), criou a ARPANET, uma rede experimental com o objetivo de manter a comunicação mesmo em caso de ataques nucleares. Com o tempo, a ARPANET cresceu, conectando universidades e centros de pesquisa. Nos anos 1990, Tim Berners-Lee criou a World Wide Web, que popularizou o uso comercial da Internet.`,
        details: {
          "O que é a internet e como surgiu": {
            overview:
              "A Internet nasceu nos anos 1960 como ARPANET, um projeto militar americano durante a Guerra Fria para manter comunicações mesmo sob ataque nuclear.",
            points: [
              "ARPA (Advanced Research Projects Agency) criou a primeira rede",
              "Conexão inicial entre universidades e centros de pesquisa",
              "Protocolo TCP/IP permitiu a expansão global",
            ],
            examples:
              "A primeira mensagem enviada foi 'LO' em 1969 entre UCLA e Stanford. Nos anos 1990, Tim Berners-Lee criou a World Wide Web, popularizando o uso comercial da Internet.",
            security:
              "A Internet foi projetada inicialmente como um ambiente confiável entre pesquisadores, sem foco em segurança, o que explica muitas vulnerabilidades atuais.",
            image: internet,
          },
          "História das ameaças digitais": {
            overview:
              "Com o crescimento da Internet, surgiram ameaças que colocaram em risco a integridade, privacidade e confiabilidade das informações transmitidas online.",
            points: [
              "Abertura da rede criou vulnerabilidades imprevistas",
              "Troca de informações sensíveis aumentou os riscos",
              "Uso comercial e governamental trouxe novos desafios",
            ],
            examples:
              "Vazamentos massivos como os do Facebook e Yahoo expuseram dados de bilhões de usuários. O ransomware WannaCry (2017) afetou hospitais e governos em mais de 150 países.",
            security:
              "A evolução das ameaças exige constante atualização das defesas e conscientização dos usuários sobre boas práticas de segurança.",
            image: ameacas,
          },
          "Dos primeiros vírus aos ransomwares": {
            overview:
              "A evolução das ameaças digitais acompanhou o crescimento da Internet, desde os primeiros vírus até os sofisticados ransomwares atuais.",
            points: [
              "Fraudes bancárias e phishing se tornaram comuns",
              "Espionagem digital revelada por casos como Edward Snowden",
              "Ataques a infraestruturas críticas colocam vidas em risco",
            ],
            examples:
              "Hackers já atacaram sistemas de energia, transporte e abastecimento de água. E-mails falsos se passam por bancos para roubar dados financeiros.",
            security:
              "É essencial manter-se informado sobre as ameaças atuais e implementar múltiplas camadas de proteção em dispositivos e redes.",
            image: ameacas2,
          },
        },
      };
    case "security":
      return {
        introduction: `A segurança digital abrange desde a compreensão de espaços ocultos da internet até a proteção contra ataques sofisticados. É fundamental entender essas ameaças para se proteger adequadamente no ambiente digital.`,
        concepts: `Este tema explora as principais ameaças e vulnerabilidades do ambiente digital, desde os mitos sobre a dark web até as técnicas de engenharia social usadas por criminosos virtuais.`,
        details: {
          "Dark web e deep web": {
            overview:
              "A deep web refere-se a páginas não indexadas por buscadores, como bancos de dados, sistemas acadêmicos e intranets empresariais. Já a dark web é uma parte específica da deep web acessada via softwares como o Tor, oferecendo anonimato.",
            points: [
              "A deep web é majoritariamente legítima (universidades, bancos, empresas).",
              "A dark web não é apenas mercado ilegal — também abriga jornalismo investigativo e ativismo.",
              "A principal característica é o anonimato e a dificuldade de rastreamento.",
            ],
            examples:
              "Registros acadêmicos e bancários fazem parte da deep web. Na dark web, existem fóruns sobre política e direitos humanos, mas também mercados ilegais de drogas e dados roubados.",
            security:
              "Evite downloads suspeitos e nunca forneça informações pessoais em sites desconhecidos. Use navegadores confiáveis e, se possível, conexões seguras via VPN.",
            image: "https://images.unsplash.com/photo-1603791445824-0050bd436b6d"
          },
          "Ataques DDoS": {
            overview:
              "Ataques de negação de serviço distribuído (DDoS) ocorrem quando criminosos usam milhares de dispositivos comprometidos (botnets) para sobrecarregar servidores e torná-los inacessíveis.",
            points: [
              "Inundação de tráfego impede acessos legítimos.",
              "Exploração de vulnerabilidades de rede e sistemas.",
              "Afeta serviços públicos, bancários e até redes sociais.",
            ],
            examples:
              "Em 2016, o ataque DDoS ao provedor Dyn derrubou grandes sites como Twitter, Spotify e Netflix. Plataformas como Cloudflare oferecem mitigação especializada.",
            security:
              "É essencial usar firewalls de aplicação (WAF), monitoramento de tráfego e infraestrutura escalável em nuvem para reduzir o impacto.",
            image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
          },
          "Phishing e engenharia social": {
            overview:
              "Phishing é a prática de enganar usuários com mensagens falsas para roubar credenciais. Engenharia social vai além, explorando vulnerabilidades psicológicas.",
            points: [
              "E-mails falsos imitam bancos e empresas para capturar senhas.",
              "Spear phishing utiliza dados pessoais para ataques direcionados.",
              "Pharming redireciona o usuário a sites falsos sem que perceba.",
            ],
            examples:
              "Um dos casos mais famosos foi o phishing do PayPal nos anos 2000. Hoje, mensagens fraudulentas também chegam via SMS e WhatsApp.",
            security:
              "Nunca clique em links suspeitos, confirme sempre remetentes por canais oficiais e use autenticação de dois fatores (2FA).",
            image: "https://images.unsplash.com/photo-1549921296-3b4a2a5b5b37"
          },
          "Cibersegurança para leigos": {
            overview:
              "A segurança digital não é apenas para especialistas: qualquer pessoa conectada deve adotar medidas simples para evitar problemas.",
            points: [
              "Senhas fortes e únicas para cada serviço.",
              "Ativar autenticação de dois fatores sempre que disponível.",
              "Evitar redes Wi-Fi públicas sem VPN.",
            ],
            examples:
              "Gerenciadores como 1Password ajudam a manter senhas seguras. Apps como Google Authenticator fornecem códigos 2FA. VPNs criam uma camada extra de privacidade.",
            security:
              "Mantenha dispositivos atualizados, use antivírus de confiança e faça backups frequentes de arquivos importantes.",
            image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
          },
        },
      };
    case "technology":
      return {
        introduction: `As tecnologias emergentes estão transformando a segurança digital. Inteligência artificial, blockchain e a Web 3.0 trazem novas formas de proteção, mas também abrem portas para riscos e desafios inéditos.`,
        concepts: `Este tema explora como IA, blockchain e Web 3.0 moldam o futuro da privacidade e da cibersegurança, mostrando aplicações práticas e dilemas que acompanham essas inovações.`,
        details: {
          "IA na segurança digital": {
            overview:
              "A inteligência artificial (IA) está revolucionando a segurança ao permitir detecção de ameaças em tempo real, automação de respostas e análise preditiva. Porém, também é usada por criminosos para ataques sofisticados.",
            points: [
              "IA consegue identificar comportamentos suspeitos em grandes volumes de dados.",
              "Soluções preditivas antecipam possíveis ataques antes de acontecerem.",
              "Algoritmos reduzem a necessidade de intervenção humana em respostas a incidentes.",
            ],
            examples:
              "Bancos usam IA para detectar transações fraudulentas. Empresas de segurança analisam logs para prever ataques. Hackers já exploram IA para criar deepfakes e phishing realistas.",
            security:
              "A mesma IA que protege pode ser usada para atacar. É necessário manter controles humanos, monitoramento constante e atualizar modelos para evitar manipulação.",
            image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2"
          },
          "Blockchain para autenticação": {
            overview:
              "O blockchain oferece registros imutáveis e descentralizados, garantindo mais confiança em processos de autenticação e armazenamento de dados.",
            points: [
              "Evita fraudes em identidades digitais com registros descentralizados.",
              "Transações são transparentes e praticamente impossíveis de alterar.",
              "Smart contracts executam ações de forma automática e confiável.",
            ],
            examples:
              "Carteiras digitais baseadas em blockchain garantem segurança contra fraudes. Projetos como Sovrin propõem identidades digitais descentralizadas. Smart contracts já automatizam processos jurídicos e financeiros.",
            security:
              "Apesar da robustez, o elo fraco continua sendo a proteção das chaves privadas. Armazenamento seguro em carteiras físicas (hardware wallets) é fundamental.",
            image: "https://images.unsplash.com/photo-1647427018425-8e5e985d8dfe"
          },
          "Web 3.0 e privacidade descentralizada": {
            overview:
              "A Web 3.0 visa devolver o controle de dados ao usuário, criando uma internet descentralizada baseada em blockchain, peer-to-peer e protocolos de privacidade.",
            points: [
              "Remove o monopólio de grandes corporações sobre dados pessoais.",
              "Oferece propriedade digital e novas formas de interação online.",
              "Protocolos são desenvolvidos já com privacidade por padrão.",
            ],
            examples:
              "NFTs permitem comprovar propriedade de ativos digitais. DAOs (Organizações Autônomas Descentralizadas) tomam decisões sem intermediários. Protocolos como IPFS distribuem arquivos de forma descentralizada.",
            security:
              "Apesar das vantagens, o usuário precisa entender riscos de contratos inteligentes, golpes com NFTs e manipulação de tokens. Educação é chave para evitar perdas.",
            image: "https://images.unsplash.com/photo-1622079400973-df39d12f84b6"
          },
        },
      };
    case "practices":
      return {
        introduction: `A segurança digital se aplica em diferentes contextos da vida moderna, desde casas inteligentes até plataformas de entretenimento e aplicativos de comunicação. Pequenas práticas podem reduzir grandes riscos.`,
        concepts: `Este tema aborda como aplicar a cibersegurança no cotidiano: proteger dispositivos IoT em smart homes, evitar golpes em streaming e manter a privacidade em apps de mensagens e chamadas.`,
        details: {
          "Smart home security": {
            overview:
              "Dispositivos conectados como câmeras, assistentes de voz e eletrodomésticos inteligentes oferecem conveniência, mas podem ser explorados por invasores se não forem configurados corretamente.",
            points: [
              "Trocar senhas padrão imediatamente por senhas fortes e únicas.",
              "Atualizar sempre o firmware de câmeras, roteadores e outros dispositivos.",
              "Configurar uma rede Wi-Fi separada (guest) para IoT, isolando da rede principal.",
            ],
            examples:
              "Hackers já invadiram babás eletrônicas e câmeras IP sem senha. Redes separadas reduzem impacto em caso de invasão. Marcas que oferecem suporte contínuo de segurança são mais confiáveis.",
            security:
              "Revise permissões regularmente, desative recursos não utilizados (como microfones) e monitore tráfego da rede para identificar atividades suspeitas.",
            image: "https://images.unsplash.com/photo-1616047006789-5e85b6c9f2f2"
          },
          "Segurança em streaming": {
            overview:
              "Plataformas de streaming de filmes, músicas e jogos online estão entre os principais alvos de ataques, desde roubo de contas até ataques DDoS contra gamers.",
            points: [
              "Ativar autenticação em duas etapas (2FA) nas contas de streaming e gaming.",
              "Manter consoles e Smart TVs atualizados contra vulnerabilidades.",
              "Desconfiar de links e promoções enviados em chats de jogos e transmissões ao vivo.",
            ],
            examples:
              "Contas do Netflix e Spotify frequentemente são revendidas em mercados ilegais. Em campeonatos de eSports, jogadores sofrem ataques DDoS para prejudicar partidas.",
            security:
              "Monitore acessos suspeitos, evite compartilhar senhas e limite dados pessoais exibidos em perfis de jogos e lives.",
            image: "https://images.unsplash.com/photo-1606813908981-9e3e55d3c1f3"
          },
          "VoIP seguro (WhatsApp, Signal)": {
            overview:
              "Aplicativos de mensagens e chamadas baseados em VoIP oferecem criptografia ponta a ponta, mas ainda exigem configurações adicionais para máxima segurança.",
            points: [
              "Ativar a verificação em duas etapas para proteger contas.",
              "Confirmar códigos de verificação com contatos próximos para evitar clonagem.",
              "Revisar permissões de backup em nuvem, que podem não ser criptografados.",
            ],
            examples:
              "O WhatsApp e o Signal oferecem criptografia ponta a ponta por padrão. Já o Telegram requer ativação manual em 'chats secretos'. Muitos ataques ainda ocorrem via engenharia social (SIM swap).",
            security:
              "Nunca compartilhe códigos de verificação recebidos por SMS. Mantenha os apps sempre atualizados e configure bloqueio por biometria quando disponível.",
            image: "https://images.unsplash.com/photo-1611171711790-3cbbf31e2a8b"
          },
        },
      };
    case "social":
      return {
        introduction: `A segurança digital não é apenas técnica: ela impacta liberdade de expressão, direitos fundamentais e inclusão social. Questões como censura, divisão digital e propriedade intelectual moldam o futuro da sociedade conectada.`,
        concepts: `Este tema explora como segurança e privacidade na era digital afetam diretamente a democracia, a igualdade de acesso e os direitos dos criadores de conteúdo.`,
        details: {
          "Censura na internet": {
            overview:
              "O debate sobre censura envolve o equilíbrio entre combater crimes digitais e preservar a liberdade de expressão. Plataformas e governos enfrentam dilemas sobre o que pode ou não ser publicado.",
            points: [
              "Proteção contra crimes não deve justificar remoção excessiva de conteúdo.",
              "Plataformas privadas adotam políticas próprias de moderação.",
              "Decisões judiciais influenciam limites da liberdade online.",
            ],
            examples:
              "Casos no Brasil discutem a remoção de postagens sem ordem judicial. Em países autoritários, redes sociais foram bloqueadas para controle político.",
            security:
              "É fundamental criar mecanismos que combatam desinformação sem comprometer a liberdade democrática.",
            image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
          },
          "Divisão digital e segurança": {
            overview:
              "A desigualdade no acesso à internet segura expõe populações vulneráveis a riscos maiores. A exclusão digital amplia desigualdades sociais e econômicas.",
            points: [
              "Regiões rurais e periféricas têm acesso limitado à internet.",
              "Falta de educação digital aumenta vulnerabilidade a golpes.",
              "Comunidades tradicionais e indígenas enfrentam riscos específicos.",
            ],
            examples:
              "Estudos mostram que populações de baixa renda são mais suscetíveis a phishing e fraudes online, pela falta de informação e recursos de proteção.",
            security:
              "Investir em inclusão digital e educação tecnológica é essencial para reduzir riscos e democratizar a segurança online.",
            image: "https://images.unsplash.com/photo-1581091870622-1e7c8a3f7a02"
          },
          "Direitos autorais e pirataria": {
            overview:
              "A facilidade de copiar e distribuir conteúdos digitais desafia a proteção da propriedade intelectual, afetando artistas, empresas e consumidores.",
            points: [
              "A internet facilita criação, mas também pirataria de conteúdo.",
              "Criadores precisam registrar obras e conhecer seus direitos.",
              "Plataformas seguras para distribuição reduzem riscos de cópia ilegal.",
            ],
            examples:
              "Indústrias como música, cinema e software perdem bilhões com pirataria. Criadores independentes recorrem a marcas d’água, DRM e plataformas oficiais para proteger suas obras.",
            security:
              "Use sempre serviços oficiais para consumir conteúdo, registre obras criativas e promova a valorização da propriedade intelectual.",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
          },
        },
      };
    default:
      return {
        introduction: `Conteúdo específico para ${id}`,
        concepts: `Conceitos principais do tema`,
        details: {},
      };
  }
};

const TopicDetailSection = ({
  id,
  title,
  description,
  icon,
  color,
  iconColor,
  subtopics,
}: TopicDetailProps) => {
  const content = getTopicContent(id);

  return (
    <section
      id={`section-${id}`}
      className="py-20 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${color} ${iconColor}`}>
              {icon}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Content Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Introdução */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`w-2 h-8 rounded-full bg-primary`}></div>
                Introdução
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm text-muted-foreground">
                <p>{content.introduction}</p>
              </div>
            </CardContent>
          </Card>

          {/* Conceitos Principais */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`w-2 h-8 rounded-full bg-primary`}></div>
                Conceitos Principais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{content.concepts}</p>
                <ul className="space-y-2">
                  {subtopics.map((subtopic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-0.5">
                        {index + 1}
                      </Badge>
                      <span className="text-sm">{subtopic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Conteúdo Detalhado */}
        <div className="space-y-8">
          {subtopics.map((subtopic, index) => {
            const detail = content.details[subtopic];
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`${color}`}>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary">{index + 1}</Badge>
                    {subtopic}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {detail?.overview}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="prose prose-sm text-muted-foreground max-w-none">
                    <h4>Visão Geral</h4>
                    <p>{detail?.overview}</p>
                  </div>

                  <div>
                    <h4>Principais Pontos</h4>
                    <ul className="list-disc pl-6">
                      {detail?.points?.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Imagem ilustrativa */}
                  {detail?.image && (
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img
                        src={detail.image}
                        alt={subtopic}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <h4>Exemplos Práticos</h4>
                    <p>{detail?.examples}</p>
                  </div>

                  <div>
                    <h4>Dicas de Segurança</h4>
                    <p>{detail?.security}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Botão de Voltar */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("topics-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="gap-2"
          >
            <ChevronUp className="w-4 h-4" />
            Voltar aos Temas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopicDetailSection;
