import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { SEGMENTS, WHATSAPP_LINK } from '../constants';

const Segments: React.FC = () => {
  return (
    <div className="animate-fade-in">
       <section className="bg-primary text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Segmentos Atendidos</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Soluções personalizadas para diferentes modelos de negócio e regimes tributários.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {SEGMENTS.map((segment, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 border border-slate-100 hover:border-accent transition-colors hover:shadow-sm">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="text-accent" />
                </div>
                <span className="font-heading font-semibold text-xl text-primary">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-12 md:p-16 shadow-sm border-l-4 border-accent">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-6">Como escolhemos o melhor enquadramento?</h2>
            <div className="prose text-slate-600 max-w-none space-y-4">
              <p>
                A escolha do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) não é uma aposta, é matemática e estratégia.
              </p>
              <p>
                Na União Contábil, analisamos seu faturamento, folha de pagamento, margem de lucro e localização para identificar onde você paga menos impostos de forma legal.
              </p>
              <p>
                Não enquadramos sua empresa no "padrão". Enquadramos no "ideal".
              </p>
            </div>
            <div className="mt-8">
               <Button href={WHATSAPP_LINK} variant="primary" icon>Agendar diagnóstico gratuito</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segments;