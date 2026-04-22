import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Header from './components/Header.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';

import ChecklistCapturePage from './pages/recursos/ChecklistCapturePage.jsx';
import ChecklistMestradoCapturePage from './pages/recursos/ChecklistMestradoCapturePage.jsx';
import MiniCursoMandarimCapturePage from './pages/recursos/MiniCursoMandarimCapturePage.jsx';
import ChecklistDocumentosCapturePage from './pages/recursos/ChecklistDocumentosCapturePage.jsx';
import ChecklistMudancaCapturePage from './pages/recursos/ChecklistMudancaCapturePage.jsx';

import LineHubPage from './pages/catalog/LineHubPage.jsx';
import LanguageHubPage from './pages/catalog/LanguageHubPage.jsx';
import ProductLandingPage from './pages/catalog/ProductLandingPage.jsx';

const legacyRedirects = [
  { from: '/carreira-internacional', to: '/carreira' },
  { from: '/carreira/ebook-cv-ingles', to: '/carreira/cv-em-ingles-ats' },
  { from: '/carreira/pack-prompts-carreira', to: '/carreira/pack-de-prompts-para-carreira' },
  { from: '/carreira/consultoria-linkedin-curriculo', to: '/carreira/consultoria-de-linkedin' },
  { from: '/carreira/mentoria-individual-carreira', to: '/carreira/mentoria-de-carreira-internacional' },
  { from: '/academico/pack-templates-academicos', to: '/academico/templates-academicos-abnt' },
  { from: '/academico/pack-prompts-escrita', to: '/academico/prompts-para-escrita-academica' },
  { from: '/academico/checklist-mestrado-completo', to: '/academico/checklist-de-aprovacao-no-mestrado' },
  { from: '/academico/mentoria-escrita-cientifica', to: '/academico/mentoria-de-escrita-cientifica' },
  { from: '/idiomas/imersao-profissional', to: '/idiomas/ingles/ingles-profissional-imersao' },
  { from: '/idiomas/guia-poliglota', to: '/idiomas/multilingue/guia-do-poliglota' },
  { from: '/idiomas/cursos-mandarim-hsk', to: '/idiomas/mandarim/mandarim-hsk-1-2-3' },
  { from: '/viagens/guia-entrevista-consular', to: '/viagens/guia-de-entrevista-consular' },
  { from: '/viagens/consultoria-mobilidade-global', to: '/viagens/consultoria-de-mobilidade-global' },
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
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/sobre" element={<AboutPage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
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
              <Route path="/recursos/checklist-documentos-pais" element={<ChecklistDocumentosCapturePage />} />
              <Route path="/recursos/checklist-mudanca" element={<ChecklistMudancaCapturePage />} />

              {legacyRedirects.map((redirect) => (
                <Route
                  key={redirect.from}
                  path={redirect.from}
                  element={<Navigate to={redirect.to} replace />}
                />
              ))}

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
