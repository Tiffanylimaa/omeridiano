import React from 'react';
import CapturaAntecipadaTemplate from '@/components/CapturaAntecipadaTemplate.jsx';

const ChecklistCapturePage = () => (
  <CapturaAntecipadaTemplate
    metaTitle="Checklist de Candidatura Internacional — Em breve | O Meridiano"
    metaDescription="Entre na lista de acesso antecipado e receba o checklist completo assim que ele estiver disponível."

    eyebrow="Carreira com Direção · Em produção"
    headline="Sua candidatura internacional tem o que precisa?"
    subheadline="Um checklist prático para revisar cada etapa — do currículo ao processo seletivo — antes de aplicar para vagas fora do Brasil."

    previewTitle="O que o checklist vai cobrir"
    previewItems={[
      'CV em inglês adaptado para filtros ATS e recrutadores internacionais',
      'LinkedIn posicionado para o mercado que você está mirando',
      'Carta de apresentação com a estrutura certa para cada contexto',
      'Preparação para entrevistas em inglês — o que praticar e como',
      'Documentação e certificações que recrutadores verificam',
      'Rotina de candidatura para não perder prazos nem energia',
      'Como pesquisar a empresa e adaptar a candidatura para cada vaga',
    ]}

    formTitle="Entre na lista de acesso antecipado"
    formSubtitle="Assim que o checklist estiver pronto, você recebe antes de qualquer divulgação pública."
    ctaLabel="Quero acesso assim que sair"
    consentText="Seus dados ficam com a equipe do Meridiano. Você não receberá spam — só aviso quando o material estiver pronto."
    successMessage="Quando o checklist estiver finalizado, você recebe no e-mail antes de todo mundo."

    leadMagnetId="checklist-vagas-internacionais"
    backHref="/carreira"
    backLabel="Voltar para Carreira"
  />
);

export default ChecklistCapturePage;
