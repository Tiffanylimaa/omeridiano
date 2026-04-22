
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.passwordConfirm) {
      return setError('As senhas não coincidem.');
    }

    if (formData.password.length < 8) {
      return setError('A senha deve ter pelo menos 8 caracteres.');
    }

    setIsLoading(true);

    try {
      await signup(formData);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Erro ao criar conta. O e-mail pode já estar em uso.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-12">
      <Helmet>
        <title>Cadastro - O Meridiano</title>
      </Helmet>

      <div className="w-full max-w-md bg-card border-[3px] border-black rounded-3xl p-8 md:p-10 neo-shadow relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary border-[3px] border-black rounded-full neo-shadow"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-black font-heading mb-2">Cadastro</h1>
          <p className="text-muted-foreground font-bold mb-8">Junte-se à nossa comunidade global.</p>

          {error && (
            <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-4 font-bold mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-lg">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-lg">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold text-lg">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 8 caracteres"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passwordConfirm" className="font-bold text-lg">Confirmar Senha</Label>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder="Repita a senha"
                className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-xl mt-6"
            >
              {isLoading ? 'Criando Conta...' : 'Criar Conta'}
            </Button>
          </form>

          <div className="mt-8 text-center font-bold text-lg">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-primary hover:underline decoration-[3px] underline-offset-4 text-black">
              Fazer Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
