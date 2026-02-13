import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import { BlogPost, BlogCategory } from '../../types/blog';
import Button from '../../components/Button';
import { ArrowLeft, Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { isAdmin, addPost, categories, posts, logout } = useBlog();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Notícias',
    content: '',
    excerpt: '',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    author: 'Equipe União Contábil',
    readTime: '5 min'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const post: BlogPost = {
      id: Date.now().toString(),
      slug: generateSlug(newPost.title!),
      title: newPost.title!,
      excerpt: newPost.excerpt || '',
      content: newPost.content!,
      coverImage: newPost.coverImage!,
      category: newPost.category || 'Notícias',
      date: new Date().toISOString(),
      author: newPost.author || 'Equipe União',
      readTime: newPost.readTime || '5 min'
    };

    addPost(post);
    alert('Post publicado com sucesso!');
    setNewPost({
        title: '',
        category: 'Notícias',
        content: '',
        excerpt: '',
        coverImage: '',
        author: 'Equipe União Contábil',
        readTime: '5 min'
    });
  };

  return (
    <div className="min-h-screen bg-light pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="font-heading font-bold text-3xl text-primary">Painel Administrativo</h1>
                <p className="text-slate-500">Gerenciamento de conteúdo do blog</p>
            </div>
            <div className="flex gap-4">
                <Button onClick={() => navigate('/blog')} variant="outline" className="py-2 px-4 text-sm">Ver Blog</Button>
                <button onClick={() => { logout(); navigate('/admin'); }} className="text-red-500 font-medium hover:underline text-sm">Sair</button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 border border-slate-200 shadow-sm">
                <h2 className="font-heading font-bold text-xl text-primary mb-6 flex items-center gap-2">
                    <Plus size={20} className="text-accent" /> Novo Artigo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                        <input name="title" value={newPost.title} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none" placeholder="Ex: Mudanças no IR 2024" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Categoria</label>
                            <select name="category" value={newPost.category} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none bg-white">
                                {categories.filter(c => c !== 'Todos').map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Tempo de Leitura</label>
                            <input name="readTime" value={newPost.readTime} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none" placeholder="Ex: 5 min" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Resumo (Excerpt)</label>
                        <textarea name="excerpt" value={newPost.excerpt} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none h-24" placeholder="Breve descrição para a listagem..." required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Conteúdo (HTML Aceito)</label>
                        <textarea name="content" value={newPost.content} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none h-64 font-mono text-sm" placeholder="<p>Escreva seu texto aqui...</p>" required />
                        <p className="text-xs text-slate-400 mt-1">Use tags HTML como &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt; para formatar.</p>
                    </div>

                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">URL da Imagem de Capa</label>
                        <input name="coverImage" value={newPost.coverImage} onChange={handleChange} className="w-full p-3 border border-slate-300 focus:border-accent outline-none" placeholder="https://..." />
                    </div>

                    <Button variant="primary" className="w-full">Publicar Artigo</Button>
                </form>
            </div>

            {/* List */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm h-fit">
                 <h2 className="font-heading font-bold text-xl text-primary mb-6">Artigos Publicados</h2>
                 <ul className="space-y-4">
                     {posts.map(post => (
                         <li key={post.id} className="border-b border-slate-100 pb-2 last:border-0">
                             <p className="font-semibold text-primary text-sm line-clamp-1">{post.title}</p>
                             <div className="flex justify-between text-xs text-slate-500 mt-1">
                                 <span>{post.category}</span>
                                 <span>{new Date(post.date).toLocaleDateString()}</span>
                             </div>
                         </li>
                     ))}
                 </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
