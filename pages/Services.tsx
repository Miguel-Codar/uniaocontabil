import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, PieChart, FileCheck, Users, Building2, TrendingUp, LucideIcon } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  BookOpen: BarChart3,
  PieChart: PieChart,
  FileCheck: FileCheck,
  Users: Users,
  Building2: Building2,
  TrendingUp: TrendingUp,
};

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary text-white pt-32 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Contabilidade completa para empresas de diferentes perfis</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Atendemos empresas que precisam de uma contabilidade organizada, atualizada e preparada para lidar com diferentes níveis de complexidade.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || BarChart3;
              return (
                <div key={service.id} className="group border-b border-slate-200 pb-12 last:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1 text-slate-300 font-heading font-bold text-4xl opacity-50">
                      0{index + 1}
                    </div>
                    <div className="md:col-span-1">
                      <div className="w-12 h-12 bg-light text-primary flex items-center justify-center rounded-none group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <h3 className="font-heading font-bold text-2xl text-primary mb-4 group-hover:text-accent transition-colors">
                        <Link to={`/servicos/${service.id}`}>{service.title}</Link>
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                        {service.details.deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-3 md:text-right flex md:justify-end items-center h-full">
                       <Button to={`/servicos/${service.id}`} variant="outline" className="w-full md:w-auto">
                         Ver detalhes
                       </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">Não encontrou o que precisa?</h2>
          <p className="text-slate-600 mb-8">
            Entre em contato para uma consultoria personalizada. Podemos adaptar nossas soluções para a realidade do seu negócio.
          </p>
          <Button href={WHATSAPP_LINK} variant="primary" icon>Falar com especialista</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;