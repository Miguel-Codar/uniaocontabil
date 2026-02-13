import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, BarChart3, ShieldCheck, Users } from 'lucide-react';
import Button from '../components/Button';
import { WHATSAPP_LINK, SERVICES, SEGMENTS, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10"></div>
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Escritório de contabilidade" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Soluções contábeis estratégicas para empresas em todas as fases do negócio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-light">
              Assessoria contábil completa do MEI ao Lucro Real, com foco em segurança fiscal, organização e crescimento sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={WHATSAPP_LINK} variant="primary" icon>
                Falar com um contador
              </Button>
              <Button to="/contato" variant="outline">
                Solicitar análise contábil
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Nossos Serviços</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Contabilidade estratégica para o seu negócio</h2>
            </div>
            <Link to="/servicos" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2 group">
              Ver todos os serviços <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="border-r border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-none flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <BarChart3 />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to={`/servicos/${service.id}`} className="inline-flex items-center text-sm font-semibold text-accent hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Para quem é</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Segmentos que atendemos</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Temos expertise para atender desde o pequeno empreendedor até grandes indústrias, adaptando nossa linguagem e entregas para a realidade de cada setor.
              </p>
              <Button to="/segmentos" variant="secondary">Ver detalhes por setor</Button>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {SEGMENTS.map((segment, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border-b border-slate-200">
                    <Check className="text-accent shrink-0 mt-1" size={20} />
                    <span className="font-medium text-slate-800 text-lg">{segment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-800 overflow-hidden relative">
                <img src="https://picsum.photos/800/600?grayscale" alt="Equipe União Contábil" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 md:p-12 text-white max-w-xs hidden md:block">
                <p className="font-heading font-bold text-4xl mb-2">+{COMPANY_INFO.years}</p>
                <p className="font-medium text-sm uppercase tracking-wider">Anos de experiência no mercado</p>
              </div>
            </div>
            <div>
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Quem somos</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Tradição e estratégia lado a lado</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                A União Contábil oferece muito mais que guias de impostos. Somos parceiros estratégicos para empresas que buscam organização, conformidade legal e decisões baseadas em dados.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-200">
                  <ShieldCheck className="text-accent" /> Conformidade e segurança fiscal total
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <Users className="text-accent" /> Atendimento consultivo e humanizado
                </li>
              </ul>
              <Link to="/sobre" className="text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                Conheça nossa história
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS (PROOF) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            <div className="text-center px-4">
              <span className="block font-heading font-bold text-4xl text-primary mb-2">+{COMPANY_INFO.years}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wide">Anos de Mercado</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-heading font-bold text-4xl text-primary mb-2">+{COMPANY_INFO.clients}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wide">Clientes Ativos</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-heading font-bold text-4xl text-primary mb-2">{COMPANY_INFO.satisfaction}%</span>
              <span className="text-sm text-slate-500 uppercase tracking-wide">Satisfação</span>
            </div>
            <div className="text-center px-4">
              <span className="block font-heading font-bold text-4xl text-primary mb-2">24h</span>
              <span className="text-sm text-slate-500 uppercase tracking-wide">Suporte Ágil</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW & FINAL CTA */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Ainda tem dúvidas?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Preparamos uma seção completa com as principais perguntas sobre migração, abertura de empresa e regimes tributários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="/faq" variant="outline">Ver perguntas frequentes</Button>
          </div>
          
          <div className="bg-primary rounded-none p-12 md:p-16 text-white text-left relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Pronto para organizar sua empresa?</h3>
                <p className="text-blue-100 max-w-md">Fale agora com nosso time e descubra como podemos ajudar no crescimento do seu negócio.</p>
              </div>
              <Button href={WHATSAPP_LINK} variant="primary" icon>Falar no WhatsApp</Button>
            </div>
            {/* Abstract bg element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;