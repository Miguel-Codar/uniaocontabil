import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, Facebook, Linkedin, Twitter, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { useBlog } from '../context/BlogContext';
import { WHATSAPP_LINK } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, getRelatedPosts } = useBlog();
  
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="animate-fade-in pt-20">
      
      {/* Progress Bar (Optional simple scroll indicator could go here) */}

      {/* Article Header */}
      <header className="bg-light py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Voltar para o blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
            <span className="text-accent bg-accent/10 px-3 py-1 rounded-sm">{post.category}</span>
            <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime} de leitura</span>
            <span className="flex items-center gap-1"><Calendar size={12}/> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-slate-400">
                 <User size={20} />
               </div>
               <div>
                 <span className="block text-sm font-bold text-primary">{post.author}</span>
                 <span className="block text-xs text-slate-500 uppercase tracking-wider">Autor</span>
               </div>
             </div>
             <div className="flex gap-4 text-slate-400">
               <button className="hover:text-accent transition-colors"><Linkedin size={18} /></button>
               <button className="hover:text-accent transition-colors"><Facebook size={18} /></button>
               <button className="hover:text-accent transition-colors"><Share2 size={18} /></button>
             </div>
          </div>
        </div>
      </header>

      {/* Feature Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full aspect-[21/9] object-cover shadow-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Article Body */}
        <div className="lg:col-span-8 lg:col-start-3">
          <article className="prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-none max-w-none">
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* In-article CTA */}
          <div className="my-16 bg-light border-l-4 border-accent p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h4 className="font-heading font-bold text-xl text-primary mb-2">Precisa de ajuda com este tema?</h4>
              <p className="text-slate-600 text-sm">Nossa equipe de especialistas pode analisar o caso da sua empresa.</p>
            </div>
            <Button href={WHATSAPP_LINK} variant="primary" className="shrink-0" icon>Falar com Contador</Button>
          </div>

          {/* Tags / Share Bottom */}
          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
             <span className="text-sm font-semibold text-primary">Compartilhe este artigo:</span>
             <div className="flex gap-4">
               <button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                 <Linkedin size={16} /> LinkedIn
               </button>
               <button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-green-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                 <Share2 size={16} /> WhatsApp
               </button>
             </div>
          </div>

        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-light py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-heading font-bold text-2xl text-primary mb-12 text-center">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.slug}`} className="group bg-white border border-slate-200 hover:border-accent transition-all flex flex-col h-full">
                  <div className="h-48 overflow-hidden bg-slate-200">
                    <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                     <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{rel.category}</span>
                     <h4 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                       {rel.title}
                     </h4>
                     <span className="mt-auto text-sm font-medium text-slate-500 flex items-center pt-4">
                       Ler artigo <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default BlogPost;