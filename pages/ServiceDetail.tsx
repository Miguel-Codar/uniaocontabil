import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight, BarChart3, PieChart, FileCheck, Users, Building2, TrendingUp, LucideIcon } from 'lucide-react';
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

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/404" />;
  }

  const Icon = iconMap[service.icon] || BarChart3;

  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="bg-primary text-white pt-32 pb-20 md:pb-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/5 hidden lg:block skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                <Link to="/servicos" className="hover:underline">Serviços</Link> <ArrowRight size={14} /> {service.title}
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                {service.description}
              </p>
              <Button href={WHATSAPP_LINK} variant="primary" icon>
                Solicitar cotação via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Navigation */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-light p-8 sticky top-28">
                <h3 className="font-heading font-bold text-xl text-primary mb-6">Outros Serviços</h3>
                <nav className="space-y-4">
                  {SERVICES.filter(s => s.id !== serviceId).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/servicos/${s.id}`}
                      className="block text-slate-600 hover:text-accent transition-colors border-b border-slate-200 pb-3"
                    >
                      {s.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h4 className="font-heading font-bold text-lg text-primary mb-2">Precisa de ajuda?</h4>
                  <p className="text-slate-500 text-sm mb-4">Fale diretamente com nossa equipe técnica.</p>
                  <Button href={WHATSAPP_LINK} variant="outline" className="w-full">Fale no WhatsApp</Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              
              {/* Para quem é */}
              <div className="mb-16">
                <h2 className="font-heading font-bold text-3xl text-primary mb-8">Para quem é este serviço</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.target.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-light border-l-4 border-accent">
                      <span className="font-medium text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* O que entregamos */}
              <div className="mb-16">
                <h2 className="font-heading font-bold text-3xl text-primary mb-8">O que entregamos</h2>
                <ul className="space-y-4">
                  {service.details.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-accent" />
                      </div>
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Como funciona */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-primary mb-8">Como funciona</h2>
                <div className="space-y-8">
                  {service.details.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-none font-bold text-lg">
                          {idx + 1}
                        </div>
                        {idx !== service.details.steps.length - 1 && <div className="w-px h-full bg-slate-200 my-2"></div>}
                      </div>
                      <div className="pb-8">
                        <h4 className="font-heading font-bold text-xl text-primary mb-2">Passo {idx + 1}</h4>
                        <p className="text-slate-600 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;