import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-black font-heading mb-6 border-[3px] border-black p-6 bg-primary rounded-none neo-shadow">
        404
      </h1>
      <p className="text-2xl font-bold mb-8">Página não encontrada.</p>
      <Link to="/" className="font-bold text-xl hover:text-primary transition-colors border-b-[3px] border-black pb-1">
        Voltar para o início
      </Link>
    </div>
  );
};

export default NotFoundPage;
