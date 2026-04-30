import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>Privacidade | O Meridiano</title>
        <meta
          name="description"
          content="Saiba como o O Meridiano trata seus dados e protege sua privacidade."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">Privacidade</h1>
        <div className="bg-card border-[3px] border-black rounded-2xl p-6 md:p-8 neo-shadow space-y-4">
          <p className="font-medium">
            O Meridiano coleta apenas os dados necessários para responder contato, entregar materiais e melhorar a
            experiência do site.
          </p>
          <p className="font-medium">
            Seus dados não são vendidos para terceiros. Quando você quiser atualizar ou remover informações, é só
            entrar em contato pela página de contato.
          </p>
          <p className="font-medium">
            Esta página pode ser atualizada com ajustes legais e operacionais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
