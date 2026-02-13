import React from 'react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-light px-6 text-center pt-20">
      <h1 className="font-heading font-bold text-9xl text-slate-200 mb-4">404</h1>
      <h2 className="font-heading font-bold text-3xl text-primary mb-6">Página não encontrada</h2>
      <p className="text-slate-600 mb-10 max-w-md">
        A página que você está procurando pode ter sido removida ou o link pode estar incorreto.
      </p>
      <div className="flex gap-4">
        <Button to="/" variant="primary">Voltar para Home</Button>
        <Button to="/contato" variant="outline">Falar Conosco</Button>
      </div>
    </div>
  );
};

export default NotFound;