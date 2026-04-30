import React from 'react';
import CapturaAntecipadaTemplate from '@/components/CapturaAntecipadaTemplate.jsx';

const MiniCursoMandarimCapturePage = () => (
  <CapturaAntecipadaTemplate
    metaTitle="Mini Curso de Mandarim — Em breve | O Meridiano"
    metaDescription="Entre na lista de acesso antecipado e receba o mini curso de mandarim assim que ele estiver disponível."

    eyebrow="Idiomas com Método · Em produção"
    headline="Comece a estudar mandarim com direção."
    subheadline="Um mini curso para quem quer entender como funciona o mandarim de verdade — e montar uma rotina de estudo que dá resultado desde o começo."

    previewTitle="O que o mini curso vai cobrir"
    previewItems={[
      'Como o mandarim funciona: lógica da língua e o que isso muda no aprendizado',
      'Pinyin — o sistema de romanização que você precisa dominar primeiro',
      'Os erros mais comuns de quem começa e como evitá-los',
      'Como montar uma rotina de estudo que cabe na sua semana',
      'Recursos e ferramentas para avançar com consistência',
      'O que estudar primeiro para ter resultado mais rápido',
    ]}

    formTitle="Entre na lista de acesso antecipado"
    formSubtitle="Assim que o mini curso estiver pronto, você recebe antes de qualquer divulgação pública."
    ctaLabel="Quero acesso assim que sair"
    consentText="Seus dados ficam com a equipe do Meridiano. Você não receberá spam — só aviso quando o material estiver pronto."
    successMessage="Quando o mini curso estiver finalizado, você recebe no e-mail antes de todo mundo."

    leadMagnetId="mini-curso-mandarim"
    backHref="/idiomas/mandarim"
    backLabel="Voltar para Mandarim"
  />
);

export default MiniCursoMandarimCapturePage;
