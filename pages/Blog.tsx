import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { useBlog } from '../context/BlogContext';
import { BlogCategory } from '../types/blog';
import { WHATSAPP_LINK } from '../constants';

const Blog: React.FC = () => {
  const { posts, categories } = useBlog();
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured Post (First one)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const listPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="animate-fade-in">
      {/* Editorial Hero */}
      <section className="bg-primary text-white pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Conteúdo Estratégico</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Insights Contábeis & <br/>Atualizações
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl">
              Informação técnica traduzida para a linguagem dos negócios. Mantenha sua empresa em conformidade e competitiva.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search Bar */}
      <section className="border-b border-slate-200 sticky top-20 z-30 bg-white/95 backdrop-blur-sm transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-6 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat ? 'text-accent border-b-2 border-accent' : 'text-slate-500 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Buscar artigo..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-light border border-slate-200 focus:border-accent focus:ring-0 outline-none text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            
            {/* Featured Post */}
            {activeCategory === 'Todos' && !searchQuery && featuredPost && (
              <div className="mb-16 group cursor-pointer">
                <Link to={`/blog/${featuredPost.slug}`}>
                  <div className="overflow-hidden mb-6 bg-slate-100">
                    <img 
                      src={featuredPost.coverImage} 
                      alt={featuredPost.title} 
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      <span className="text-accent">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary group-hover:text-accent transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-2 inline-flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                      Ler artigo completo <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* List Divider */}
            <div className="border-t border-slate-200 mb-12"></div>

            {/* Post List */}
            <div className="flex flex-col gap-12">
              {listPosts.length > 0 ? (
                listPosts.map((post) => (
                  <article key={post.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 order-2 md:order-1 overflow-hidden bg-slate-100">
                       <Link to={`/blog/${post.slug}`}>
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2 flex flex-col h-full justify-center">
                      <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                        <span className="text-accent">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime} leitura</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed text-sm md:text-base">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center">
                        Ler mais <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="py-12 text-center text-slate-500">
                  Nenhum artigo encontrado para esta busca.
                </div>
              )}
            </div>
            
            {/* Pagination Placeholder */}
            {listPosts.length > 0 && (
               <div className="mt-16 pt-8 border-t border-slate-200 flex justify-center">
                 <button className="px-6 py-2 border border-slate-300 text-slate-600 hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                   Carregar mais artigos
                 </button>
               </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 pl-0 lg:pl-12 border-l border-slate-100 hidden lg:block">
            <div className="sticky top-40 space-y-12">
              
              {/* About Block */}
              <div>
                <h4 className="font-heading font-bold text-lg text-primary mb-4 border-b border-accent pb-2 inline-block">União Contábil</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Assessoria contábil especializada em crescimento sustentável e inteligência tributária para o seu negócio.
                </p>
                <Link to="/sobre" className="text-xs font-bold text-accent uppercase tracking-wider hover:underline">
                  Conheça nossa história
                </Link>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-heading font-bold text-lg text-primary mb-4">Categorias</h4>
                <ul className="space-y-3">
                  {categories.filter(c => c !== 'Todos').map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className="text-slate-600 hover:text-accent transition-colors text-sm flex justify-between w-full"
                      >
                        {cat}
                        <span className="text-slate-300 text-xs">
                          {posts.filter(p => p.category === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Widget */}
              <div className="bg-primary p-8 text-white text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-heading font-bold text-xl mb-3">Dúvidas Fiscais?</h4>
                  <p className="text-slate-300 text-sm mb-6">Converse com um de nossos especialistas agora mesmo.</p>
                  <Button href={WHATSAPP_LINK} variant="primary" className="w-full text-sm py-3" icon>
                    WhatsApp
                  </Button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;