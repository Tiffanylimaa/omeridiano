import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Header from './components/Header.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';

import ChecklistCapturePage from './pages/recursos/ChecklistCapturePage.jsx';
import ChecklistMestradoCapturePage from './pages/recursos/ChecklistMestradoCapturePage.jsx';
import MiniCursoMandarimCapturePage from './pages/recursos/MiniCursoMandarimCapturePage.jsx';

import LineHubPage from './pages/catalog/LineHubPage.jsx';
import PromptsHubPage from './pages/PromptsHubPage.jsx';
import LanguageHubPage from './pages/catalog/LanguageHubPage.jsx';
import ProductLandingPage from './pages/catalog/ProductLandingPage.jsx';

const legacyRedirects = [
  { from: '/carreira-internacional', to: '/carreira' },
  { from: '/carreira/ebook-cv-ingles', to: '/carreira/cv-em-ingles-ats' },
  { from: '/carreira/pack-prompts-carreira', to: '/carreira/pack-de-prompts-para-carreira' },
  { from: '/carreira/consultoria-linkedin-curriculo', to: '/carreira/consultoria-de-linkedin' },
  { from: '/carreira/mentoria-individual-carreira', to: '/carreira/mentoria-de-direcao-profissional' },
  { from: '/carreira/mentoria-de-carreira-internacional', to: '/carreira/mentoria-de-direcao-profissional' },
  { from: '/academico/pack-templates-academicos', to: '/academico/templates-academicos-abnt' },
  { from: '/academico/pack-prompts-escrita', to: '/academico/prompts-para-escrita-academica' },
  { from: '/academico/checklist-mestrado-completo', to: '/academico/checklist-para-aplicacao-de-mestrado' },
  { from: '/academico/mentoria-escrita-cientifica', to: '/academico/mentoria-de-escrita-cientifica' },
  { from: '/idiomas/imersao-profissional', to: '/idiomas/ingles/ingles-profissional-imersao' },
  { from: '/idiomas/guia-poliglota', to: '/idiomas/projeto-poliglota/guia-do-poliglota' },
  { from: '/idiomas/multilingue', to: '/idiomas/projeto-poliglota' },
  { from: '/idiomas/multilingue/guia-do-poliglota', to: '/idiomas/projeto-poliglota/guia-do-poliglota' },
  { from: '/idiomas/multilingue/pack-de-prompts-para-idiomas', to: '/idiomas/projeto-poliglota/pack-de-prompts-para-idiomas' },
  { from: '/idiomas/cursos-mandarim-hsk', to: '/idiomas/mandarim/mandarim-hsk-1-2-3' },
  { from: '/vida-adulta/planner-financeiro-fx', to: '/vida-adulta/planner-financeiro' },
  { from: '/vida-adulta/hub-vida-completa-notion', to: '/vida-adulta/templates-de-organizacao' }
];

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
          <Header />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contato" element={<Navigate to="/sobre#contato" replace />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/privacidade" element={<PrivacyPage />} />
              <Route path="/termos" element={<TermsPage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/perfil"
                element={
                  <ProtectedRoute>
                    <UserProfilePage />
                  </ProtectedRoute>
                }
              />

              <Route path="/recursos/checklist-vagas-internacionais" element={<ChecklistCapturePage />} />
              <Route path="/recursos/checklist-mestrado-submissao" element={<ChecklistMestradoCapturePage />} />
              <Route path="/recursos/mini-curso-mandarim" element={<MiniCursoMandarimCapturePage />} />

              {legacyRedirects.map((redirect) => (
                <Route
                  key={redirect.from}
                  path={redirect.from}
                  element={<Navigate to={redirect.to} replace />}
                />
              ))}

              <Route path="/prompts" element={<PromptsHubPage />} />

              <Route path="/idiomas/:languageSlug/:productSlug" element={<ProductLandingPage />} />
              <Route path="/idiomas/:languageSlug" element={<LanguageHubPage />} />
              <Route path="/:lineSlug/:productSlug" element={<ProductLandingPage />} />
              <Route path="/:lineSlug" element={<LineHubPage />} />

              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
