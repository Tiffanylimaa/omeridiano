import React from 'react';
import CapturaAntecipadaTemplate from '@/components/CapturaAntecipadaTemplate.jsx';

const ChecklistMestradoCapturePage = () => (
  <CapturaAntecipadaTemplate
    metaTitle="Checklist de Submissão para Mestrado — Em breve | O Meridiano"
    metaDescription="Entre na lista de acesso antecipado e receba o checklist de submissão para mestrado assim que ele estiver disponível."

    eyebrow="Acadêmico com Direção · Em produção"
    headline="Você tem tudo para submeter ao mestrado?"
    subheadline="Um checklist direto para organizar cada etapa da candidatura — do projeto de pesquisa até a submissão — sem perder prazo nem deixar nada para trás."

    previewTitle="O que o checklist vai cobrir"
    previewItems={[
      'Projeto de pesquisa: estrutura, argumentação e recorte temático',
      'Carta de intenção — o que incluir e o que evitar',
      'Currículo Lattes atualizado e organizado para avaliação',
      'Documentação exigida por cada tipo de programa',
      'Como identificar e abordar potenciais orientadores',
      'Preparação para entrevista ou prova de seleção',
      'Timeline de submissão para não perder prazos críticos',
    ]}

    formTitle="Entre na lista de acesso antecipado"
    formSubtitle="Assim que o checklist estiver pronto, você recebe antes de qualquer divulgação pública."
    ctaLabel="Quero acesso assim que sair"
    consentText="Seus dados ficam com a equipe do Meridiano. Você não receberá spam — só aviso quando o material estiver pronto."
    successMessage="Quando o checklist estiver finalizado, você recebe no e-mail antes de todo mundo."

    leadMagnetId="checklist-mestrado-submissao"
    backHref="/academico"
    backLabel="Voltar para Acadêmico"
  />
);

export default ChecklistMestradoCapturePage;
