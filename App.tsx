import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Segments from './pages/Segments';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './pages/NotFound';
import { BlogProvider } from './context/BlogContext';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BlogProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/servicos" element={<Layout><Services /></Layout>} />
          <Route path="/servicos/:serviceId" element={<Layout><ServiceDetail /></Layout>} />
          <Route path="/segmentos" element={<Layout><Segments /></Layout>} />
          <Route path="/sobre" element={<Layout><About /></Layout>} />
          <Route path="/faq" element={<Layout><Faq /></Layout>} />
          <Route path="/contato" element={<Layout><Contact /></Layout>} />
          <Route path="/privacidade" element={<Layout><Legal type="privacy" /></Layout>} />
          <Route path="/termos" element={<Layout><Legal type="terms" /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
          
          {/* Admin Routes (No Layout or distinct layout) */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </HashRouter>
    </BlogProvider>
  );
};

export default App;