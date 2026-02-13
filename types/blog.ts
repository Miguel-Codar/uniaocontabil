export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  coverImage: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export type BlogCategory = 'Tributário' | 'Fiscal' | 'Abertura de Empresa' | 'Planejamento' | 'Gestão Financeira' | 'Notícias' | 'Todos';
