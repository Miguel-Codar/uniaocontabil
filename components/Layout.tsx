import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, COMPANY_INFO } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Pages that have a dark hero section (white text is visible)
  const isDarkHeroPage = 
    location.pathname === '/' || 
    location.pathname === '/servicos' || 
    location.pathname.startsWith('/servicos/') || 
    location.pathname === '/segmentos' || 
    location.pathname === '/faq' || 
    location.pathname === '/contato' || 
    location.pathname === '/privacidade' || 
    location.pathname === '/termos' || 
    location.pathname === '/blog';

  // If scrolled OR on a page with light background, use the solid/light header style
  const useSolidHeader = scrolled || !isDarkHeroPage;

  const navLinks = [
    { name: 'Serviços', path: '/servicos' },
    { name: 'Segmentos', path: '/segmentos' },
    { name: 'Blog', path: '/blog', isSpecial: true },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        useSolidHeader 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50 relative">
          <img 
            src="/logo-uniaocontabilrj.png" 
            alt="União Contábil" 
            className={`h-10 md:h-12 w-auto transition-all duration-300 ${!useSolidHeader ? 'brightness-0 invert' : ''}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10 shadow-lg shadow-black/5">
           {/* If scrolled, we remove the background container style to fit the white header, or adapt it */}
        </nav>
        
        {/* Alternative Nav Design */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`
                relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full group
                ${link.isSpecial 
                  ? (useSolidHeader ? 'text-accent hover:bg-accent/10' : 'text-white bg-white/10 hover:bg-white/20') 
                  : (useSolidHeader ? 'text-slate-600 hover:text-primary hover:bg-slate-50' : 'text-white/80 hover:text-white hover:bg-white/10')
                }
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
           {/* WhatsApp Button */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-6 py-2.5 font-semibold text-sm transition-all duration-300 rounded-none
              ${useSolidHeader 
                ? 'bg-primary text-white hover:bg-secondary' 
                : 'bg-white text-primary hover:bg-slate-100 shadow-lg shadow-black/10'
              }
            `}
          >
            Falar no WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`lg:hidden z-50 p-2 transition-colors ${useSolidHeader || isOpen ? 'text-primary' : 'text-white'}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 gap-8 transition-transform duration-500 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-heading font-bold transition-colors ${link.isSpecial ? 'text-accent' : 'text-primary hover:text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
               to="/faq"
               onClick={() => setIsOpen(false)}
               className="text-3xl font-heading font-bold text-primary hover:text-secondary"
            >
              FAQ
            </Link>
          </div>
          
          <div className="mt-auto mb-12 space-y-4">
            <a 
              href={WHATSAPP_LINK}
              className="flex items-center justify-center gap-2 w-full bg-accent text-white px-8 py-4 font-semibold text-lg hover:bg-accent-hover transition-colors"
            >
              Falar no WhatsApp <ArrowRight />
            </a>
            <div className="flex justify-center gap-6 text-slate-400">
               <Instagram /> <Linkedin /> <Facebook />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src="/logo-uniaocontabilrj.png" alt="União Contábil" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Transformamos números em estratégia. Assessoria contábil completa para empresas que buscam segurança e crescimento.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 rounded-sm"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 rounded-sm"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 rounded-sm"><Facebook size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2 text-white">
            Navegação <span className="w-1 h-1 rounded-full bg-accent"></span>
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/servicos" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-px bg-gray-600"></span> Nossos Serviços</Link></li>
            <li><Link to="/segmentos" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-px bg-gray-600"></span> Segmentos</Link></li>
            <li><Link to="/sobre" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-px bg-gray-600"></span> Sobre a Empresa</Link></li>
            <li><Link to="/blog" className="text-accent hover:text-white transition-colors flex items-center gap-2 font-medium"><span className="w-1 h-px bg-accent"></span> Blog & Notícias</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-px bg-gray-600"></span> Dúvidas Frequentes</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2 text-white">
            Especialidades <span className="w-1 h-1 rounded-full bg-accent"></span>
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/servicos/assessoria-contabil" className="hover:text-accent transition-colors">Contabilidade Consultiva</Link></li>
            <li><Link to="/servicos/planejamento-tributario" className="hover:text-accent transition-colors">Planejamento Tributário</Link></li>
            <li><Link to="/servicos/abertura-regularizacao" className="hover:text-accent transition-colors">Abertura e Legalização</Link></li>
            <li><Link to="/servicos/consultoria-financeira" className="hover:text-accent transition-colors">BPO Financeiro</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2 text-white">
            Fale Conosco <span className="w-1 h-1 rounded-full bg-accent"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3 group cursor-pointer">
              <Phone className="text-accent shrink-0 group-hover:text-white transition-colors" size={18} />
              <span className="group-hover:text-white transition-colors">{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex items-start gap-3 group cursor-pointer">
              <Mail className="text-accent shrink-0 group-hover:text-white transition-colors" size={18} />
              <span className="group-hover:text-white transition-colors">{COMPANY_INFO.email}</span>
            </li>
            <li className="flex items-start gap-3 group cursor-pointer">
              <MapPin className="text-accent shrink-0 group-hover:text-white transition-colors" size={18} />
              <span className="group-hover:text-white transition-colors leading-relaxed">{COMPANY_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} União Contábil. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link to="/admin" className="hover:text-accent transition-colors opacity-50 hover:opacity-100">Área do Cliente</Link>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;