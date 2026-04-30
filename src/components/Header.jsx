import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, LogOut, Menu, User as UserIcon, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { getNavigationCollections } from '@/data/catalog.js';
import { fixPt } from '@/lib/copy.js';

const lineEntryLabel = {
  carreira: 'Avançar com estratégia profissional',
  academico: 'Organizar minha trajetória acadêmica',
  idiomas: 'Aprender idiomas com método',
  'vida-adulta': 'Organizar estudos e rotina'
};

const NAV_ORDER = ['academico', 'carreira', 'idiomas', 'vida-adulta'];

export function MeridianoLogo({ size = 'md' }) {
  const sizes = { sm: 'px-2 py-1 text-sm', md: 'px-4 py-1.5 text-xl', lg: 'px-5 py-2 text-2xl' };
  return (
    <div className={`logo-gradient-box border-2 border-black font-black tracking-[0.18em] text-black ${sizes[size]} -rotate-2 shadow-[4px_4px_0_0_#000] transition-all duration-200 hover:-rotate-1 hover:shadow-[6px_6px_0_0_#000]`}>
      MERIDIANO
    </div>
  );
}

const Header = () => {
  const [expandedCategory,      setExpandedCategory]      = useState(null);
  const [drawerOpen,            setDrawerOpen]            = useState(false);
  const [drawerExpandedCategory,setDrawerExpandedCategory]= useState(null);
  const [showLogoutModal,       setShowLogoutModal]       = useState(false);

  const desktopNavRef = useRef(null);
  const drawerRef     = useRef(null);

  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const allCollections = getNavigationCollections();
  const collections    = NAV_ORDER.map((slug) => allCollections.find((c) => c.slug === slug)).filter(Boolean);

  useEffect(() => {
    if (!expandedCategory) return undefined;
    const out = (e) => { if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) setExpandedCategory(null); };
    const esc = (e) => { if (e.key === 'Escape') setExpandedCategory(null); };
    document.addEventListener('mousedown', out);
    document.addEventListener('touchstart', out);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', out); document.removeEventListener('touchstart', out); document.removeEventListener('keydown', esc); };
  }, [expandedCategory]);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const out = (e) => { if (drawerRef.current && !drawerRef.current.contains(e.target)) { setDrawerOpen(false); setDrawerExpandedCategory(null); } };
    const esc = (e) => { if (e.key === 'Escape') { setDrawerOpen(false); setDrawerExpandedCategory(null); } };
    const t = setTimeout(() => { document.addEventListener('mousedown', out); document.addEventListener('touchstart', out); document.addEventListener('keydown', esc); }, 50);
    return () => { clearTimeout(t); document.removeEventListener('mousedown', out); document.removeEventListener('touchstart', out); document.removeEventListener('keydown', esc); };
  }, [drawerOpen]);

  const handleLogoutConfirm = () => {
    logout();
    navigate('/');
    setShowLogoutModal(false);
    setDrawerOpen(false);
    setExpandedCategory(null);
    setDrawerExpandedCategory(null);
  };

  const toggleCategory       = (slug) => setExpandedCategory((p) => (p === slug ? null : slug));
  const toggleDrawerCategory = (slug) => setDrawerExpandedCategory((p) => (p === slug ? null : slug));
  const closeAll             = () => { setDrawerOpen(false); setExpandedCategory(null); setDrawerExpandedCategory(null); };

  return (
    <>
      {/* Modal logout com AlertDialog (porta Radix, funciona em iframe) */}
      <AlertDialog open={showLogoutModal} onOpenChange={(o) => { if (!o) setShowLogoutModal(false); }}>
        <AlertDialogContent className="border-[3px] border-black rounded-3xl neo-shadow">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-black font-heading">Encerrar sessão?</AlertDialogTitle>
            <AlertDialogDescription className="text-sm font-medium">
              Você precisará fazer login novamente para acessar seus dados.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-3">
            <AlertDialogCancel onClick={() => setShowLogoutModal(false)} className="flex-1 h-10 border-[3px] border-black rounded-xl font-black text-sm">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLogoutConfirm} className="flex-1 h-10 bg-destructive text-destructive-foreground border-[3px] border-black rounded-xl neo-shadow font-black text-sm">
              <LogOut className="w-4 h-4 mr-2" />Encerrar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="group flex items-center gap-2 text-2xl font-black font-heading tracking-tight" onClick={() => setExpandedCategory(null)}>
                <span className="mr-1.5 text-3xl leading-none translate-y-[3px]">O</span>
                <div className="transition-transform duration-200 group-hover:-translate-y-1.5"><MeridianoLogo size="lg" /></div>
              </Link>
            </div>

            {/* Nav desktop — visível apenas em lg+, sem hambúrguer duplicado */}
            <nav ref={desktopNavRef} className="hidden lg:flex items-center gap-2">
              <Link to="/" onClick={() => setExpandedCategory(null)} className="text-[17px] font-bold hover:bg-secondary px-4 py-2.5 rounded-full border border-transparent transition-all duration-200">
                Início
              </Link>

              {collections.map((collection) => (
                <div key={collection.slug} className="relative">
                  <button
                    onClick={() => toggleCategory(collection.slug)}
                    aria-expanded={expandedCategory === collection.slug}
                    aria-haspopup="menu"
                    className={`flex items-center gap-1.5 text-[17px] font-bold px-4 py-2.5 rounded-full border transition-all duration-200 ${expandedCategory === collection.slug ? 'bg-primary border-black text-black shadow-[2px_2px_0_0_#000]' : 'border-transparent hover:bg-secondary hover:border-black/70'}`}
                  >
                    {collection.shortTitle || fixPt(collection.title)}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedCategory === collection.slug ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute top-full left-0 mt-3 w-[380px] overflow-hidden bg-background border-2 border-black shadow-[6px_6px_0_0_#000] transition-all duration-200 ${expandedCategory === collection.slug ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}>
                    <div className="p-3">
                      <Link to={collection.href} onClick={() => setExpandedCategory(null)} className="block rounded-xl px-4 py-3 text-sm font-bold text-black border border-transparent hover:bg-primary/40 hover:border-black transition-all">
                        {lineEntryLabel[collection.slug] || 'Encontrar meu caminho'}
                      </Link>
                      <div className="mt-1 space-y-1">
                        {collection.items.map((item) => (
                          <Link key={item.name} to={item.href} onClick={() => setExpandedCategory(null)} className="block rounded-xl px-4 py-3 text-sm font-medium text-black border border-transparent hover:bg-secondary hover:border-black/70 transition-all">
                            {fixPt(item.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Conta visível no desktop */}
              {isAuthenticated ? (
                <Link to="/perfil" onClick={() => setExpandedCategory(null)} className="flex items-center gap-1.5 text-[17px] font-bold px-4 py-2.5 rounded-full border border-transparent hover:bg-secondary hover:border-black/70 transition-all duration-200">
                  <UserIcon className="w-4 h-4" />
                  {currentUser?.name?.split(' ')[0] || 'Perfil'}
                </Link>
              ) : (
                <Link to="/login" onClick={() => setExpandedCategory(null)} className="text-[17px] font-bold px-4 py-2.5 rounded-full border border-transparent hover:bg-secondary hover:border-black/70 transition-all duration-200">
                  Entrar
                </Link>
              )}
            </nav>

            {/* Hambúrguer — apenas mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex lg:hidden items-center justify-center w-11 h-11 rounded-full border-2 border-black bg-background hover:bg-secondary transition-all shadow-[2px_2px_0_0_#000]"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      {drawerOpen && <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] lg:hidden" />}

      {/* Drawer mobile */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full z-[70] w-80 max-w-[90vw] bg-black border-l-2 border-black shadow-[-8px_0_0_0_#000] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <Link to="/" onClick={closeAll} className="flex items-center gap-2 text-white font-black text-lg">
            O <span className="bg-primary border-2 border-primary text-black px-3 py-0.5 font-black -rotate-2 inline-block shadow-[2px_2px_0_0_rgba(255,255,255,0.2)]">MERIDIANO</span>
          </Link>
          <button onClick={() => { setDrawerOpen(false); setDrawerExpandedCategory(null); }} className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 px-2">Áreas</p>
            {collections.map((collection) => (
              <div key={collection.slug}>
                <button
                  onClick={() => toggleDrawerCategory(collection.slug)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-white transition-colors ${drawerExpandedCategory === collection.slug ? 'bg-white/10' : 'hover:bg-white/8'}`}
                >
                  {fixPt(collection.title)}
                  <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-200 ${drawerExpandedCategory === collection.slug ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${drawerExpandedCategory === collection.slug ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-3 pb-1">
                    <Link to={collection.href} onClick={closeAll} className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold text-primary hover:bg-white/10 transition-colors">
                      {lineEntryLabel[collection.slug] || 'Ver área completa'}<ArrowRight className="w-3 h-3" />
                    </Link>
                    {collection.items.map((item) => (
                      <Link key={item.name} to={item.href} onClick={closeAll} className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        {fixPt(item.name)}<ArrowRight className="w-3 h-3 opacity-40" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10 mx-4 my-3" />

          <div className="px-4 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 px-2">O Meridiano</p>
            <Link to="/sobre" onClick={closeAll} className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-white hover:bg-white/8 transition-colors">
              Sobre nós <ArrowRight className="w-3.5 h-3.5 text-white/40" />
            </Link>
            <Link to="/sobre#contato" onClick={closeAll} className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-white hover:bg-white/8 transition-colors">
              Contato <ArrowRight className="w-3.5 h-3.5 text-white/40" />
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/perfil" onClick={closeAll} className="flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-bold text-white hover:bg-white/8 transition-colors">
                  <UserIcon className="w-4 h-4 text-white/50" />{currentUser?.name || 'Meu perfil'}
                </Link>
                {/* Fecha drawer antes de abrir o modal para evitar conflito de z-index */}
                <button
                  onClick={() => { setDrawerOpen(false); setTimeout(() => setShowLogoutModal(true), 300); }}
                  className="w-full flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/8 transition-colors"
                >
                  <LogOut className="w-4 h-4" />Sair
                </button>
              </>
            ) : (
              <Link to="/login" onClick={closeAll} className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-white hover:bg-white/8 transition-colors">
                Entrar na conta <ArrowRight className="w-3.5 h-3.5 text-white/40" />
              </Link>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-white/10">
          <Link to="/#quiz" onClick={closeAll} className="flex items-center justify-between w-full bg-primary border-2 border-primary rounded-xl px-4 py-3.5 font-black text-sm text-black hover:-translate-y-0.5 transition-transform">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" strokeWidth={2.5} />Fazer o quiz agora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
