// src/pages/TermsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>Termos de Uso | O Meridiano</title>
        <meta
          name="description"
          content="Leia os termos de uso do site O Meridiano."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">Termos de Uso</h1>
        <div className="bg-card border-[3px] border-black rounded-2xl p-6 md:p-8 neo-shadow space-y-4">
          <p className="font-medium">
            Ao usar o site O Meridiano, você concorda com o uso dos conteúdos para fins pessoais e educacionais,
            respeitando direitos autorais e propriedade intelectual.
          </p>
          <p className="font-medium">
            Produtos e serviços podem ter regras específicas de acesso, prazo e suporte, descritas em cada página.
          </p>
          <p className="font-medium">
            Em caso de dúvidas sobre uso do conteúdo, fale com a equipe pela página de contato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
