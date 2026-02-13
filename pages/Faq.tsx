import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import { FAQS, WHATSAPP_LINK } from '../constants';

const FaqItem: React.FC<{ q: string; a: string; isOpen: boolean; toggle: () => void }> = ({ q, a, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={toggle}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className={`font-heading font-semibold text-lg transition-colors ${isOpen ? 'text-accent' : 'text-primary group-hover:text-primary/80'}`}>
          {q}
        </span>
        <span className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-slate-400'}`}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pr-8">
          {a}
        </p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-300 font-light">
            Tire suas dúvidas sobre nossos serviços e processos contábeis.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16">
            {FAQS.map((faq, idx) => (
              <FaqItem 
                key={idx} 
                q={faq.q} 
                a={faq.a} 
                isOpen={openIndex === idx} 
                toggle={() => handleToggle(idx)} 
              />
            ))}
          </div>

          <div className="bg-light p-10 text-center border border-slate-200">
            <h3 className="font-heading font-bold text-xl text-primary mb-3">Sua dúvida não está aqui?</h3>
            <p className="text-slate-600 mb-6">Nossa equipe está pronta para te responder agora mesmo.</p>
            <Button href={WHATSAPP_LINK} variant="primary" icon>Falar no WhatsApp</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;