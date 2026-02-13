import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO, WHATSAPP_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Quero minha análise contábil. Nome: ${formData.name}, WhatsApp: ${formData.whatsapp}, E-mail: ${formData.email}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Fale Conosco</h1>
          <p className="text-xl text-gray-300 font-light">
            Solicite uma análise contábil e descubra a melhor estrutura para a sua empresa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white" id="analise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <h2 className="font-heading font-bold text-2xl text-primary mb-2">Solicitar Análise</h2>
              <p className="text-slate-500 mb-8">Preencha os dados abaixo e fale com um especialista.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">WhatsApp (com DDD)</label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp" 
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50"
                    placeholder="seu@email.com.br"
                  />
                </div>
                <Button variant="primary" className="w-full">Quero minha análise contábil</Button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-6">Canais de Atendimento</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Prefere falar diretamente? Nossa equipe está disponível em horário comercial para tirar suas dúvidas.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-light flex items-center justify-center text-primary shrink-0">
                       <Phone />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-500 font-semibold uppercase tracking-wide">Telefone</span>
                      <span className="text-xl font-medium text-primary">{COMPANY_INFO.phone}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-light flex items-center justify-center text-primary shrink-0">
                       <Mail />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-500 font-semibold uppercase tracking-wide">E-mail</span>
                      <span className="text-xl font-medium text-primary">{COMPANY_INFO.email}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-light flex items-center justify-center text-primary shrink-0">
                       <MapPin />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-500 font-semibold uppercase tracking-wide">Endereço</span>
                      <span className="text-lg font-medium text-primary leading-snug">{COMPANY_INFO.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-200">
                <Button href={WHATSAPP_LINK} variant="secondary" className="w-full md:w-auto" icon>
                  Falar agora no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;