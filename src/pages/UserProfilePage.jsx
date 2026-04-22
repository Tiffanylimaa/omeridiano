
import React from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { LogOut, User, Mail, Calendar } from 'lucide-react';

const UserProfilePage = () => {
  const { currentUser, logout } = useAuth();

  const formattedDate = currentUser?.created 
    ? new Date(currentUser.created).toLocaleDateString('pt-BR') 
    : 'Data desconhecida';

  return (
    <div className="min-h-[80vh] flex items-start justify-center bg-background px-4 py-16">
      <Helmet>
        <title>Meu Perfil - O Meridiano</title>
      </Helmet>

      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-black font-heading mb-10 text-center relative inline-block w-full">
          Meu Perfil
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-3 bg-primary -z-10 -rotate-2"></div>
        </h1>

        <div className="bg-card border-[3px] border-black rounded-3xl p-8 md:p-12 neo-shadow relative">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
            <div className="w-24 h-24 bg-secondary border-[3px] border-black rounded-full flex items-center justify-center neo-shadow shrink-0">
              <span className="text-4xl font-black font-heading uppercase">
                {currentUser?.name ? currentUser.name.charAt(0) : currentUser?.email.charAt(0)}
              </span>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black font-heading mb-2">{currentUser?.name || 'Usuário'}</h2>
              <div className="inline-block bg-primary/20 border-[3px] border-black px-4 py-1 rounded-full font-bold text-sm neo-shadow rotate-1">
                Membro O Meridiano
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 bg-muted border-[3px] border-black p-5 rounded-2xl">
              <User className="w-6 h-6 text-black" />
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Nome</p>
                <p className="text-xl font-bold">{currentUser?.name || 'Não informado'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-muted border-[3px] border-black p-5 rounded-2xl">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">E-mail</p>
                <p className="text-xl font-bold break-all">{currentUser?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-muted border-[3px] border-black p-5 rounded-2xl">
              <Calendar className="w-6 h-6 text-black" />
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Membro desde</p>
                <p className="text-xl font-bold">{formattedDate}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t-[3px] border-black flex justify-center md:justify-end">
            <Button
              onClick={logout}
              variant="destructive"
              className="bg-destructive text-destructive-foreground border-[3px] border-black rounded-xl neo-shadow hover:bg-destructive/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-lg h-14 px-8 w-full md:w-auto"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Encerrar Sessão
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
