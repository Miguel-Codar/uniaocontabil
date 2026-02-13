import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BlogPost, BlogCategory } from '../types/blog';
import { INITIAL_POSTS } from '../data/blogPosts';

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  getPostBySlug: (slug: string) => BlogPost | undefined;
  getRelatedPosts: (currentId: string, category: string, limit?: number) => BlogPost[];
  categories: BlogCategory[];
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [isAdmin, setIsAdmin] = useState(false);

  const categories: BlogCategory[] = ['Todos', 'Tributário', 'Fiscal', 'Abertura de Empresa', 'Planejamento', 'Gestão Financeira', 'Notícias'];

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts]);
  };

  const getPostBySlug = (slug: string) => {
    return posts.find(p => p.slug === slug);
  };

  const getRelatedPosts = (currentId: string, category: string, limit = 3) => {
    return posts
      .filter(p => p.id !== currentId && p.category === category)
      .slice(0, limit);
  };

  const login = (password: string) => {
    // Simple mock authentication
    if (password === 'admin123' || password === 'uniao2024') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      addPost, 
      getPostBySlug, 
      getRelatedPosts, 
      categories,
      isAdmin,
      login,
      logout
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
