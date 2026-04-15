import { motion } from 'framer-motion';
import { 
  Zap, ShieldCheck, Search, TrendingUp, CheckCircle2, 
  ArrowRight, MessageSquare, Star, Award, BarChart3, 
  Smartphone, Globe, CreditCard, HelpCircle, ChevronDown,
  Sparkles, User
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://curtindosc.com.br/#software",
        "name": "Curtindo SC SaaS",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description": "O melhor SaaS de Reservas Diretas para Santa Catarina. Aumente seu lucro eliminando as taxas do Airbnb.",
        "offers": {
          "@type": "Offer",
          "price": "97.00",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "Service",
        "serviceType": "SaaS de Reservas Diretas",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Curtindo SC",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "SC",
            "addressCountry": "BR"
          }
        },
        "areaServed": {
          "@type": "State",
          "name": "Santa Catarina"
        },
        "description": "Plataforma especializada em automação de reservas para pousadas e cabanas em SC."
      }
    ]
  };

  const faqs = [
    {
      q: "Como funciona a integração com o VeloPay?",
      a: "O VeloPay é nativo. Você recebe via Pix ou Cartão de Crédito diretamente na sua conta, com taxas reduzidas e liberação rápida."
    },
    {
      q: "Preciso de conhecimento técnico para configurar?",
      a: "Nenhum. Nossa IA configura seu anúncio, otimiza as fotos e gera o SEO automaticamente. Você só precisa preencher os dados básicos."
    },
    {
      q: "Posso importar meus anúncios do Airbnb?",
      a: "Sim! Nossa ferramenta de importação traz fotos, descrições e avaliações em menos de 2 minutos."
    },
    {
      q: "O que é o SEO & AEO Nativo?",
      a: "Sua página é construída para ser encontrada não só no Google, mas também por IAs como ChatGPT e Perplexity (Answer Engine Optimization)."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      {/* SEO & AEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,180,180,0.4)]">
              <Zap className="text-brand-dark w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter">CURTINDO<span className="text-brand-primary">SC</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white/60">
            <a href="#beneficios" className="hover:text-brand-primary transition-colors">Benefícios</a>
            <a href="#precos" className="hover:text-brand-primary transition-colors">Planos</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
          </div>
          <button className="bg-brand-primary text-brand-dark px-6 py-2.5 rounded-full font-black text-sm hover:shadow-[0_0_20px_rgba(0,180,180,0.4)] transition-all active:scale-95">
            Começar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-brand-primary/20">
              <Sparkles className="w-3 h-3" /> Exclusivo para Santa Catarina
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Pare de pagar 18% de comissão para o Airbnb.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tenha sua própria plataforma de <span className="text-white font-bold">Reservas Diretas</span> com IA integrada, pagamentos nativos e SEO de alta performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-primary text-brand-dark px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,180,180,0.5)] transition-all group">
                Criar minha plataforma <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-card flex items-center justify-center">
                      <User className="w-4 h-4 text-brand-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white/50">+450 Anfitriões em SC</span>
              </div>
            </div>
          </motion.div>

          {/* Social Proof Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
          >
            <div>
              <p className="text-3xl font-black text-brand-primary mb-1">R$ 2.4M+</p>
              <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Processados</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand-primary mb-1">15k+</p>
              <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Reservas Diretas</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand-primary mb-1">98%</p>
              <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Satisfação</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-500/20 mb-1">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-[10px] font-black uppercase">Safe</span>
              </div>
              <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Curtindo SC Safe</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Tecnologia de Ponta para sua Pousada</h2>
            <p className="text-white/50 max-w-xl mx-auto">Tudo o que você precisa para gerenciar, vender e escalar suas reservas sem depender de terceiros.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "VeloPay Integrado",
                desc: "Receba via Pix com confirmação instantânea ou Cartão de Crédito em até 12x. Sem burocracia.",
                tag: "Pagamentos"
              },
              {
                icon: Sparkles,
                title: "IA Copywriter",
                desc: "Nossa inteligência artificial escreve anúncios magnéticos que convertem visitantes em hóspedes.",
                tag: "Inteligência"
              },
              {
                icon: Globe,
                title: "Google SEO & AEO Nativo",
                desc: "Sua plataforma já nasce otimizada para o Google e para as novas buscas por IA (Perplexity/Gemini).",
                tag: "Visibilidade"
              },
              {
                icon: BarChart3,
                title: "Dashboard de Performance",
                desc: "Acompanhe suas métricas, origem das reservas e faturamento em um painel intuitivo.",
                tag: "Gestão"
              },
              {
                icon: Smartphone,
                title: "Mobile First Premium",
                desc: "90% das reservas são feitas pelo celular. Sua vitrine é ultra-veloz e otimizada para mobile.",
                tag: "Design"
              },
              {
                icon: MessageSquare,
                title: "CRM WhatsApp",
                desc: "Integração direta para você fechar vendas e tirar dúvidas pelo WhatsApp com um clique.",
                tag: "Vendas"
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-brand-card p-8 rounded-[32px] border border-white/5 hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                  <benefit.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-dark transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-2 block">{benefit.tag}</span>
                <h3 className="text-xl font-black mb-4">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Planos que crescem com você</h2>
            <p className="text-white/50">Escolha o plano ideal para o seu momento.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-brand-card p-10 rounded-[40px] border border-white/5 flex flex-col">
              <h3 className="text-xl font-black mb-2">Starter</h3>
              <p className="text-xs text-white/40 mb-8 font-bold uppercase tracking-widest">Para 1 Imóvel</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">R$ 97</span>
                <span className="text-white/40 font-bold text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Vitrine Exclusiva', 'VeloPay Pix/Cartão', 'IA Copywriter (Básico)', 'Suporte via Chat'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border border-white/10 font-black text-sm hover:bg-white/5 transition-all">Selecionar Starter</button>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-brand-card p-10 rounded-[40px] border-2 border-brand-primary relative flex flex-col shadow-[0_0_40px_rgba(0,180,180,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Mais Popular</div>
              <h3 className="text-xl font-black mb-2">Professional</h3>
              <p className="text-xs text-white/40 mb-8 font-bold uppercase tracking-widest">Até 5 Imóveis</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">R$ 197</span>
                <span className="text-white/40 font-bold text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Tudo do Starter', 'SEO & AEO Avançado', 'IA Copywriter Ilimitado', 'Dashboard de Métricas', 'Suporte Prioritário'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-brand-primary text-brand-dark font-black text-sm hover:shadow-[0_0_20px_rgba(0,180,180,0.4)] transition-all">Selecionar Professional</button>
            </div>

            {/* Plan 3 */}
            <div className="bg-brand-card p-10 rounded-[40px] border border-white/5 flex flex-col">
              <h3 className="text-xl font-black mb-2">Business</h3>
              <p className="text-xs text-white/40 mb-8 font-bold uppercase tracking-widest">Imóveis Ilimitados</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">R$ 497</span>
                <span className="text-white/40 font-bold text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Tudo do Professional', 'Multi-usuários', 'API de Integração', 'Gerente de Conta', 'Customização White-label'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border border-white/10 font-black text-sm hover:bg-white/5 transition-all">Selecionar Business</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-brand-primary w-8 h-8" /> Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-card border border-white/5 rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <span className="font-bold text-lg group-hover:text-brand-primary transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/30 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5 mt-0">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 text-center relative">
        <div className="absolute inset-0 bg-brand-primary/5 -z-10 blur-[100px]" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-8">Pronto para assumir o controle das suas reservas?</h2>
          <p className="text-xl text-white/50 mb-12">Junte-se a centenas de proprietários em Santa Catarina que já estão lucrando mais.</p>
          <button className="bg-brand-primary text-brand-dark px-12 py-6 rounded-[32px] font-black text-xl hover:shadow-[0_0_40px_rgba(0,180,180,0.6)] transition-all active:scale-95">
            Começar meu teste grátis
          </button>
          <p className="mt-6 text-sm text-white/30 font-bold uppercase tracking-widest">Sem cartão de crédito necessário</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Zap className="text-brand-dark w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-black tracking-tighter">CURTINDO<span className="text-brand-primary">SC</span></span>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <p className="text-xs text-white/20 font-medium">
            © 2026 Curtindo SC. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
