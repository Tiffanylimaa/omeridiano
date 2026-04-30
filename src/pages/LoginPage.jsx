
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TEST_PROFILE = {
  name: 'Perfil Modelo',
  email: 'perfil.modelo@omeridiano.com'
};

const LoginPage = () => {
  const [mode, setMode] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, signup, loginWithModelProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const isLoginMode = mode === 'login';

  const isLoginValid = loginData.email.trim() && loginData.password.trim();
  const isSignupValid =
    signupData.name.trim() &&
    signupData.email.trim() &&
    signupData.password.trim() &&
    signupData.passwordConfirm.trim() &&
    signupData.password.length >= 8 &&
    signupData.password === signupData.passwordConfirm;

  const openLogin = () => {
    setError('');
    setIsLoading(false);
    setMode('login');
  };

  const openSignup = () => {
    setError('');
    setIsLoading(false);
    setMode('signup');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(loginData.email, loginData.password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError('Credenciais inválidas. Verifique seu e-mail e senha.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!signupData.name.trim() || !signupData.email.trim() || !signupData.password.trim() || !signupData.passwordConfirm.trim()) {
      return setError('Preencha todos os campos para continuar.');
    }

    if (signupData.password !== signupData.passwordConfirm) {
      return setError('As senhas não coincidem.');
    }

    if (signupData.password.length < 8) {
      return setError('A senha deve ter pelo menos 8 caracteres.');
    }

    setIsLoading(true);

    try {
      await signup(signupData);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError('Erro ao criar conta. O e-mail pode já estar em uso.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleModelProfileAccess = () => {
    setError('');
    setIsLoading(true);

    try {
      loginWithModelProfile(TEST_PROFILE);
      navigate('/perfil', { replace: true });
    } catch (err) {
      console.error(err);
      setError('Não foi possível entrar com o perfil modelo agora. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-background px-3 sm:px-4 py-3 md:py-8">
      <Helmet>
        <title>{isLoginMode ? 'Login - O Meridiano' : 'Cadastro - O Meridiano'}</title>
        <meta
          name="description"
          content={isLoginMode
            ? 'Acesse sua conta do O Meridiano para continuar sua jornada.'
            : 'Crie sua conta no O Meridiano para acessar conteúdos e acompanhar seu progresso.'}
        />
      </Helmet>

      <div className="w-full max-w-md bg-secondary border-[3px] border-black rounded-3xl p-5 sm:p-6 md:p-8 neo-shadow relative overflow-hidden">
        {/* Decorative element */}
        <div className="hidden sm:block absolute -top-10 -right-10 w-32 h-32 bg-primary border-[3px] border-black rounded-full neo-shadow"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black font-heading mb-1">{isLoginMode ? 'Entrar' : 'Cadastro'}</h1>
          <p className="text-sm md:text-base text-foreground/80 font-bold mb-5 md:mb-7">
            {isLoginMode ? 'Acesse sua conta para continuar.' : 'Junte-se à nossa comunidade global.'}
          </p>

          {error && (
            <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-3 text-sm font-bold mb-4">
              {error}
            </div>
          )}

          {isLoginMode ? (
            <>
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail" className="font-bold text-sm md:text-base">E-mail</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="h-11 md:h-12 border-[3px] border-black rounded-xl text-sm md:text-base font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loginPassword" className="font-bold text-sm md:text-base">Senha</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="••••••••"
                    className="h-11 md:h-12 border-[3px] border-black rounded-xl text-sm md:text-base font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !isLoginValid}
                  className="w-full h-12 md:h-14 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-base md:text-xl mt-2"
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>

                <Button
                  type="button"
                  onClick={handleModelProfileAccess}
                  disabled={isLoading}
                  variant="secondary"
                  className="w-full h-11 md:h-12 bg-background text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-secondary/80 hover:-translate-y-1 transition-all font-black text-sm md:text-base"
                >
                  Testar com perfil modelo
                </Button>
              </form>

              <div className="mt-4 md:mt-6 text-center font-bold text-sm md:text-base">
                Não tem uma conta?{' '}
                <button
                  type="button"
                  onClick={openSignup}
                  className="text-primary-foreground hover:underline decoration-[3px] underline-offset-4"
                >
                  Cadastre-se
                </button>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="signupName" className="font-bold text-xs md:text-sm">Nome</Label>
                    <Input
                      id="signupName"
                      name="name"
                      type="text"
                      required
                      value={signupData.name}
                      onChange={(e) => setSignupData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Seu nome"
                      className="h-10 md:h-11 border-[3px] border-black rounded-xl text-xs md:text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="signupEmail" className="font-bold text-xs md:text-sm">E-mail</Label>
                    <Input
                      id="signupEmail"
                      name="email"
                      type="email"
                      required
                      value={signupData.email}
                      onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className="h-10 md:h-11 border-[3px] border-black rounded-xl text-xs md:text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="signupPassword" className="font-bold text-xs md:text-sm">Senha</Label>
                    <Input
                      id="signupPassword"
                      name="password"
                      type="password"
                      required
                      value={signupData.password}
                      onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
                      placeholder="Mínimo 8"
                      className="h-10 md:h-11 border-[3px] border-black rounded-xl text-xs md:text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="signupPasswordConfirm" className="font-bold text-xs md:text-sm">Confirmar</Label>
                    <Input
                      id="signupPasswordConfirm"
                      name="passwordConfirm"
                      type="password"
                      required
                      value={signupData.passwordConfirm}
                      onChange={(e) => setSignupData((prev) => ({ ...prev, passwordConfirm: e.target.value }))}
                      placeholder="Repita"
                      className="h-10 md:h-11 border-[3px] border-black rounded-xl text-xs md:text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-black"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !isSignupValid}
                  className="w-full h-12 md:h-14 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-base md:text-xl mt-2"
                >
                  {isLoading ? 'Criando Conta...' : 'Criar Conta'}
                </Button>
              </form>

              <div className="mt-4 md:mt-6 text-center font-bold text-sm md:text-base">
                Já tem uma conta?{' '}
                <button
                  type="button"
                  onClick={openLogin}
                  className="text-primary-foreground hover:underline decoration-[3px] underline-offset-4"
                >
                  Fazer Login
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
