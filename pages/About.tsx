import React from 'react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO, WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24">
      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Sobre nós</span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-8 leading-tight">
                Tradição, estratégia e soluções contábeis para empresas que querem crescer com segurança
              </h1>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  A <strong>União Contábil</strong> oferece assessoria contábil, fiscal, tributária e financeira para empresas que buscam organização, conformidade legal e decisões mais estratégicas.
                </p>
                <p>
                  Atendemos negócios em diferentes estágios, do MEI ao Lucro Real, sempre com foco em orientação clara, planejamento adequado e apoio contínuo ao empresário.
                </p>
                <p>
                  Nosso compromisso é atuar de forma próxima e consultiva, garantindo que cada cliente tenha uma contabilidade preparada para reduzir riscos, aproveitar oportunidades e sustentar o crescimento do negócio.
                </p>
              </div>
            </div>
             <div className="relative">
                <img src="https://picsum.photos/800/800?grayscale" alt="Equipe reunida" className="w-full h-auto object-cover shadow-2xl" />
                <div className="absolute -bottom-8 -left-8 bg-primary p-10 text-white max-w-xs hidden lg:block">
                  <p className="font-serif italic text-lg leading-relaxed">"Contabilidade não é só burocracia. É a linguagem dos negócios."</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4 pt-8 md:pt-0 text-center md:text-left">
              <div className="w-12 h-12 bg-accent flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
                <Target />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Fornecer inteligência contábil e segurança jurídica para que empreendedores possam focar no que sabem fazer de melhor: crescer seus negócios.
              </p>
            </div>
            <div className="px-4 pt-8 md:pt-0 text-center md:text-left">
              <div className="w-12 h-12 bg-accent flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
                <Eye />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser referência nacional em contabilidade consultiva, aliando tecnologia de ponta ao atendimento humanizado e estratégico.
              </p>
            </div>
            <div className="px-4 pt-8 md:pt-0 text-center md:text-left">
              <div className="w-12 h-12 bg-accent flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
                <Heart />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Valores</h3>
              <p className="text-gray-300 leading-relaxed">
                Ética inegociável, transparência total, proatividade na resolução de problemas e compromisso com o resultado do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-light">
         <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Por que escolher a União Contábil?</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               "Atendimento ágil via WhatsApp",
               "Tecnologia para envio de documentos",
               "Foco em redução legal de impostos",
               "Suporte consultivo real",
               "Transparência nas entregas",
               "Equipe constantemente atualizada"
             ].map((diff, idx) => (
               <div key={idx} className="bg-white p-8 flex items-start gap-4 border border-slate-100 hover:border-accent transition-all">
                 <CheckCircle2 className="text-accent shrink-0 mt-1" />
                 <span className="font-medium text-lg text-primary">{diff}</span>
               </div>
             ))}
           </div>
           <div className="mt-16 text-center">
             <Button href={WHATSAPP_LINK} variant="primary" icon>Falar com nossa equipe</Button>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;