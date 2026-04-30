import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  ArrowRight, BookOpen, Calendar, CheckCircle2, Clock,
  ExternalLink, Heart, LifeBuoy, LogOut, Mail, Pencil,
  RotateCcw, Star, User, X,
} from 'lucide-react';
import { useQuizResult, usePageHistory, useFavorites } from '@/hooks/use-user-storage.js';
import { products } from '@/data/catalog.js';

// ─── Mapeamento quiz → produto recomendado ────
// Ajuste os IDs conforme o catálogo crescer
const QUIZ_RECOMMENDATION = {
  start:       { productId: 'checklist-para-aplicacao-de-mestrado', reason: 'Para quem quer um caminho estruturado para começar.' },
  accelerate:  { productId: 'cv-em-ingles-ats',                     reason: 'Para quem já começou e quer ajustar a estratégia.'  },
  mentor:      { productId: 'linkedin-estrategico',                  reason: 'Para quem precisa de direção mais individual.'       },
};

// ─── Dados mock — substituir por dados reais do backend ──
const MODEL_PROFILE   = { name: 'Perfil Modelo', email: 'perfil.modelo@omeridiano.com', created: '2026-01-01T00:00:00.000Z' };
const MOCK_MATERIALS  = [
  // { id: '1', title: 'CV em Inglês + ATS Kit', line: 'Carreira', href: '/carreira/cv-em-ingles-ats', productHref: '/carreira/cv-em-ingles-ats', status: 'Disponível' },
];
const MOCK_INTERESTS  = [];

// ─── Abas ────────────────────────────────────
const TABS = [
  { id: 'materiais',  label: 'Materiais', icon: BookOpen },
  { id: 'favoritos',  label: 'Favoritos', icon: Heart    },
  { id: 'historico',  label: 'Histórico', icon: Clock    },
  { id: 'interesses', label: 'Interesses',icon: Star     },
  { id: 'conta',      label: 'Conta',     icon: User     },
];

// ─── Modal logout ─────────────────────────────
const LogoutModal = ({ open, onConfirm, onCancel }) => (
  <AlertDialog open={open} onOpenChange={(o) => { if (!o) onCancel(); }}>
    <AlertDialogContent className="border-[3px] border-black rounded-3xl neo-shadow">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-xl font-black font-heading">Encerrar sessão?</AlertDialogTitle>
        <AlertDialogDescription className="text-sm font-medium">
          Você precisará fazer login novamente para acessar seus dados.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="gap-3">
        <AlertDialogCancel onClick={onCancel} className="flex-1 h-10 border-[3px] border-black rounded-xl font-black text-sm">Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm} className="flex-1 h-10 bg-destructive text-destructive-foreground border-[3px] border-black rounded-xl neo-shadow font-black text-sm">
          <LogOut className="w-4 h-4 mr-2" />Encerrar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// ─── Campo editável ───────────────────────────
const EditableField = ({ value, onSave, icon: Icon, label }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);
  const [saved, setSaved]     = useState(false);
  const inputRef = useRef(null);
  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);
  const commit = () => {
    const t = draft.trim();
    if (t && t !== value) { onSave(t); setSaved(true); setTimeout(() => setSaved(false), 2000); }
    setEditing(false);
  };
  const handleKey = (e) => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') { setDraft(value); setEditing(false); } };
  return (
    <div className="flex items-center gap-3 bg-muted border-[3px] border-black p-3 rounded-2xl">
      <Icon className="w-4 h-4 text-black shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
        {editing
          ? <input ref={inputRef} value={draft} onChange={e => setDraft(e.target.value)} onBlur={commit} onKeyDown={handleKey} className="w-full text-sm font-black bg-transparent border-b-2 border-black outline-none py-0.5" />
          : <p className="text-sm font-black truncate">{saved ? '✓ Salvo!' : (value || 'Não informado')}</p>
        }
      </div>
      {!editing && (
        <button onClick={() => { setDraft(value); setEditing(true); }} aria-label={`Editar ${label.toLowerCase()}`} className="w-6 h-6 flex items-center justify-center rounded-lg border-[2px] border-black bg-background hover:-translate-y-0.5 transition-all shrink-0">
          <Pencil className="w-2.5 h-2.5" />
        </button>
      )}
    </div>
  );
};

// ─── Estado vazio ─────────────────────────────
const EmptyState = ({ icon: Icon, title, desc, ctaLabel, ctaHref, comingSoon = false }) => (
  <div className="flex flex-col items-center justify-center text-center py-10 px-4">
    <div className="w-12 h-12 bg-secondary border-[3px] border-black rounded-2xl flex items-center justify-center mb-3 neo-shadow">
      <Icon className="w-5 h-5 text-black" strokeWidth={2} />
    </div>
    <p className="text-sm font-black mb-1">{title}</p>
    <p className="text-xs font-medium text-muted-foreground max-w-xs mb-4">{desc}</p>
    {comingSoon && <span className="text-[10px] font-black uppercase tracking-widest border-[2px] border-black px-3 py-1 rounded-full">Em breve</span>}
    {ctaLabel && ctaHref && (
      <Button asChild className="h-9 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 transition-all font-black text-sm">
        <Link to={ctaHref}>{ctaLabel}<ArrowRight className="w-4 h-4 ml-1.5" /></Link>
      </Button>
    )}
  </div>
);

// ─── ABA: Materiais ───────────────────────────
const TabMateriais = ({ materials }) => {
  if (!materials.length) return <EmptyState icon={BookOpen} title="Nenhum material ainda" desc="Quando você adquirir um produto, ele aparecerá aqui para você acessar." ctaLabel="Explorar produtos" ctaHref="/" />;
  return (
    <div className="space-y-3">
      {materials.map((mat) => (
        <div key={mat.id} className="flex items-center justify-between gap-4 bg-card border-[3px] border-black rounded-2xl p-4 neo-shadow">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">{mat.line}</span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-primary border-[2px] border-black rounded-full px-2 py-0.5">{mat.status}</span>
            </div>
            <p className="text-sm font-black truncate">{mat.title}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild className="h-8 bg-black text-primary border-[2px] border-black rounded-lg neo-shadow hover:bg-black/90 font-black text-xs px-3">
              <a href={mat.href} target="_blank" rel="noreferrer">Acessar</a>
            </Button>
            <Link to={mat.productHref} className="w-8 h-8 flex items-center justify-center border-[2px] border-black rounded-lg bg-background hover:-translate-y-0.5 transition-all" aria-label="Ver página do produto">
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── ABA: Favoritos ───────────────────────────
const TabFavoritos = ({ favorites, onToggle }) => {
  if (!favorites.length) return <EmptyState icon={Heart} title="Nenhum favorito ainda" desc="Toque no coração em qualquer página de produto para salvar aqui." />;
  return (
    <div className="space-y-3">
      {favorites.map((fav) => (
        <div key={fav.id} className="flex items-center justify-between gap-3 bg-card border-[3px] border-black rounded-2xl p-4 neo-shadow">
          <div className="min-w-0">
            {fav.line && <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-0.5">{fav.line}</p>}
            <p className="text-sm font-black truncate">{fav.title}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild className="h-8 bg-primary text-black border-[2px] border-black rounded-lg neo-shadow hover:bg-primary/90 font-black text-xs px-3">
              <Link to={fav.href}>Ver produto<ArrowRight className="w-3 h-3 ml-1" /></Link>
            </Button>
            <button onClick={() => onToggle(fav)} aria-label="Remover dos favoritos" className="w-8 h-8 flex items-center justify-center border-[2px] border-black rounded-lg bg-background hover:bg-destructive/10 hover:-translate-y-0.5 transition-all">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── ABA: Histórico ───────────────────────────
const TabHistorico = ({ history, onClear }) => {
  const fmt = (iso) => { try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }); } catch { return ''; } };
  if (!history.length) return <EmptyState icon={Clock} title="Histórico vazio" desc="As últimas páginas de produto que você visitar aparecerão aqui." />;
  return (
    <div className="space-y-3">
      {history.map((item) => (
        <Link key={item.id} to={item.href} className="flex items-center justify-between gap-3 bg-card border-[3px] border-black rounded-2xl p-4 neo-shadow hover:-translate-y-0.5 hover:bg-primary/10 transition-all">
          <div className="min-w-0">
            {item.line && <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-0.5">{item.line}</p>}
            <p className="text-sm font-black truncate">{item.title}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.visitedAt && <span className="text-[10px] font-medium text-muted-foreground">{fmt(item.visitedAt)}</span>}
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </Link>
      ))}
      <button onClick={onClear} className="w-full text-xs font-bold text-muted-foreground hover:text-foreground transition-colors pt-2 flex items-center justify-center gap-1.5">
        <RotateCcw className="w-3 h-3" />Limpar histórico
      </button>
    </div>
  );
};

// ─── ABA: Interesses ──────────────────────────
const TabInteresses = ({ interests }) => {
  if (!interests.length) return <EmptyState icon={Star} title="Nenhum interesse registrado" desc='Quando você entrar em uma lista de interesse, ela aparecerá aqui.' comingSoon />;
  return (
    <div className="space-y-3">
      {interests.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-4 bg-card border-[3px] border-black rounded-2xl p-4 neo-shadow">
          <div className="min-w-0">
            <p className="text-sm font-black truncate">{item.title}</p>
            <p className="text-xs font-medium text-muted-foreground">{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── ABA: Conta ───────────────────────────────
const TabConta = ({ displayName, setDisplayName, profileEmail, formattedDate, onLogout }) => (
  <div className="space-y-3 max-w-md">
    <EditableField value={displayName} onSave={setDisplayName} icon={User} label="Nome" />
    <div className="flex items-center gap-3 bg-muted border-[3px] border-black p-3 rounded-2xl">
      <Mail className="w-4 h-4 text-black shrink-0" />
      <div className="min-w-0">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">E-mail</p>
        <p className="text-sm font-black break-all">{profileEmail}</p>
      </div>
    </div>
    <div className="flex items-center gap-3 bg-muted border-[3px] border-black p-3 rounded-2xl">
      <Calendar className="w-4 h-4 text-black shrink-0" />
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Membro desde</p>
        <p className="text-sm font-black">{formattedDate}</p>
      </div>
    </div>
    <div className="pt-2">
      <Button onClick={onLogout} variant="destructive" className="w-full h-10 bg-destructive text-destructive-foreground border-[3px] border-black rounded-xl neo-shadow hover:bg-destructive/90 hover:-translate-y-1 transition-all font-black text-sm">
        <LogOut className="w-4 h-4 mr-2" />Encerrar sessão
      </Button>
    </div>
  </div>
);

// ─── CARD: Resultado do quiz ──────────────────
const QuizResultCard = ({ quizResult, onClear }) => {
  const rec   = QUIZ_RECOMMENDATION[quizResult.type];
  const prod  = rec ? products.find((p) => p.id === rec.productId) : null;
  const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }); } catch { return ''; } };

  return (
    <div className="bg-primary border-[3px] border-black rounded-2xl p-5 neo-shadow mb-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/50 mb-1">
            Seu resultado do quiz {quizResult.date && `· ${fmtDate(quizResult.date)}`}
          </p>
          <p className="text-base font-black leading-snug">{quizResult.title}</p>
          <p className="text-xs font-medium text-black/70 mt-0.5">{quizResult.description}</p>
        </div>
        <button onClick={onClear} aria-label="Limpar resultado" className="w-7 h-7 flex items-center justify-center rounded-lg border-[2px] border-black/30 hover:bg-black/10 transition-colors shrink-0">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {prod && (
        <div className="bg-black/10 border-[2px] border-black/20 rounded-xl p-3">
          <p className="text-[10px] font-black uppercase tracking-wider text-black/50 mb-1">Recomendado para você</p>
          <p className="text-sm font-black mb-0.5">{prod.name}</p>
          <p className="text-xs font-medium text-black/70 mb-2">{rec.reason}</p>
          <Button asChild className="h-8 bg-black text-primary border-[2px] border-black rounded-lg neo-shadow hover:bg-black/90 font-black text-xs px-3">
            <Link to={prod.href}>Ver produto <ArrowRight className="w-3 h-3 ml-1" /></Link>
          </Button>
        </div>
      )}

      <Link to="/#quiz" className="mt-3 flex items-center gap-1.5 text-xs font-bold text-black/60 hover:text-black transition-colors">
        <RotateCcw className="w-3 h-3" />Refazer o quiz
      </Link>
    </div>
  );
};

// ─────────────────────────────────────────────
// PÁGINA PRINCIPAL
// ─────────────────────────────────────────────
const UserProfilePage = () => {
  const { currentUser, logout } = useAuth();

  const profileName    = currentUser?.name?.trim()  || MODEL_PROFILE.name;
  const profileEmail   = currentUser?.email?.trim() || MODEL_PROFILE.email;
  const profileCreated = currentUser?.created       || MODEL_PROFILE.created;
  const userId         = currentUser?.uid || currentUser?.id;

  const formattedDate = profileCreated ? new Date(profileCreated).toLocaleDateString('pt-BR') : 'Data desconhecida';

  const [displayName,     setDisplayName]     = useState(profileName);
  const [activeTab,       setActiveTab]       = useState('materiais');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Hooks de armazenamento
  const { quizResult, clearQuizResult }    = useQuizResult(userId);
  const { history,    clearHistory }       = usePageHistory();
  const { favorites,  toggleFavorite }     = useFavorites();

  // Badge "Histórico" quando há itens
  const tabBadge = { historico: history.length > 0 ? history.length : null, favoritos: favorites.length > 0 ? favorites.length : null };

  const userMaterials = MOCK_MATERIALS;
  const userInterests = MOCK_INTERESTS;

  return (
    <div className="min-h-[80vh] bg-background px-4 py-8 md:py-10">
      <Helmet>
        <title>Meu Perfil — O Meridiano</title>
        <meta name="description" content="Acesse seus materiais, favoritos e dados dentro do O Meridiano." />
      </Helmet>

      <LogoutModal
        open={showLogoutModal}
        onConfirm={() => { setShowLogoutModal(false); logout(); }}
        onCancel={() => setShowLogoutModal(false)}
      />

      <div className="w-full max-w-3xl mx-auto">

        {/* Header compacto */}
        <section className="mb-5 bg-secondary border-[3px] border-black rounded-3xl p-5 neo-shadow">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 bg-primary border-[3px] border-black rounded-full flex items-center justify-center neo-shadow shrink-0">
                <span className="text-lg font-black font-heading uppercase">{displayName?.charAt(0)?.toUpperCase() || 'M'}</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground mb-0.5">Olá 👋</p>
                <h1 className="text-xl font-black font-heading leading-tight truncate">{displayName}</h1>
                <p className="text-xs font-medium text-muted-foreground truncate">{profileEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-primary/20 border-[2px] border-black px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3 h-3" />Conta ativa
              </span>
              <button onClick={() => setShowLogoutModal(true)} className="w-9 h-9 flex items-center justify-center border-[3px] border-black rounded-xl bg-background neo-shadow hover:bg-destructive/10 hover:-translate-y-0.5 transition-all" aria-label="Encerrar sessão">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Card de resultado do quiz — aparece quando há resultado salvo */}
        {quizResult && (
          <QuizResultCard quizResult={quizResult} onClear={clearQuizResult} />
        )}

        {/* Abas */}
        <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
          {TABS.map((tab) => {
            const Icon   = tab.icon;
            const active = activeTab === tab.id;
            const badge  = tabBadge[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-[3px] border-black font-black text-sm whitespace-nowrap transition-all ${
                  active ? 'bg-black text-primary neo-shadow -translate-y-0.5' : 'bg-background hover:bg-secondary'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                {tab.label}
                {badge && (
                  <span className={`ml-0.5 text-[10px] font-black px-1.5 py-0.5 rounded-full border-[2px] border-black ${active ? 'bg-primary text-black' : 'bg-primary text-black'}`}>
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Conteúdo das abas */}
        <div className="bg-card border-[3px] border-black rounded-3xl neo-shadow overflow-hidden mb-5">
          <div className="p-5">
            {activeTab === 'materiais'  && <TabMateriais  materials={userMaterials} />}
            {activeTab === 'favoritos'  && <TabFavoritos  favorites={favorites} onToggle={toggleFavorite} />}
            {activeTab === 'historico'  && <TabHistorico  history={history} onClear={clearHistory} />}
            {activeTab === 'interesses' && <TabInteresses interests={userInterests} />}
            {activeTab === 'conta'      && (
              <TabConta displayName={displayName} setDisplayName={setDisplayName} profileEmail={profileEmail} formattedDate={formattedDate} onLogout={() => setShowLogoutModal(true)} />
            )}
          </div>
        </div>

        {/* Próximo passo + Suporte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-primary border-[3px] border-black rounded-2xl p-5 neo-shadow">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/60 mb-2">Próximo passo sugerido</p>
            <p className="text-base font-black leading-snug mb-4">Escolha uma linha para começar e avance com clareza.</p>
            <Button asChild className="w-full h-9 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-sm">
              <Link to="/">Ver caminhos do Meridiano<ArrowRight className="w-4 h-4 ml-1.5" /></Link>
            </Button>
          </div>
          <div className="bg-secondary border-[3px] border-black rounded-2xl p-5 neo-shadow">
            <div className="flex items-start gap-3 mb-4">
              <LifeBuoy className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
              <div>
                <p className="text-sm font-black leading-snug">Está em dúvida sobre qual material escolher?</p>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">A equipe pode te indicar o próximo passo.</p>
              </div>
            </div>
            <Button asChild className="w-full h-9 bg-background text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/20 hover:-translate-y-1 transition-all font-black text-sm">
              <Link to="/sobre#contato">Falar com a equipe<ArrowRight className="w-4 h-4 ml-1.5" /></Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfilePage;
