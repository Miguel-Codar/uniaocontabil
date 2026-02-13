import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import Button from '../../components/Button';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Senha incorreta. Tente "uniao2024".');
    }
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-6">
      <div className="bg-white p-8 md:p-12 shadow-xl border border-slate-200 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={20} />
          </div>
          <h1 className="font-heading font-bold text-2xl text-primary">Acesso Restrito</h1>
          <p className="text-slate-500 text-sm mt-2">Área administrativa do blog.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 focus:border-accent outline-none"
              placeholder="Digite a senha..."
            />
          </div>
          {error && <p className="text-accent text-sm font-medium">{error}</p>}
          <Button variant="primary" className="w-full">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
