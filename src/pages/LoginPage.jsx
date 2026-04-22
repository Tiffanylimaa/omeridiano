
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError('Credenciais inválidas. Verifique seu e-mail e senha.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-12">
      <Helmet>
        <title>Login - O Meridiano</title>
      </Helmet>

      <div className="w-full max-w-md bg-secondary border-[3px] border-black rounded-3xl p-8 md:p-10 neo-shadow relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary border-[3px] border-black rounded-full neo-shadow"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-black font-heading mb-2">Entrar</h1>
          <p className="text-foreground/80 font-bold mb-8">Acesse sua conta para continuar.</p>

          {error && (
            <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-4 font-bold mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-lg">E-mail</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold text-lg">Senha</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-xl mt-4"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <div className="mt-8 text-center font-bold text-lg">
            Não tem uma conta?{' '}
            <Link to="/signup" className="text-primary-foreground hover:underline decoration-[3px] underline-offset-4">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
