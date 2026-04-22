const rawLines = [
  {
    slug: 'carreira',
    title: 'Carreira Internacional',
    shortTitle: 'Carreira',
    description: 'Produtos e serviços para posicionar sua experiência, melhorar seus materiais e acelerar candidaturas para vagas globais.',
    promise: 'Uma linha pensada para transformar currículo, LinkedIn, narrativa profissional e tomada de decisão em uma operação replicável.',
    benefits: [
      'Estrutura clara do self-service até a mentoria premium.',
      'Materiais prontos para rotinas de aplicação internacional.',
      'Espaço para crescer com novos packs, workshops e consultorias.',
      'Rotas simples para futuras integrações com Hotmart.'
    ]
  },
  {
    slug: 'idiomas',
    title: 'Idiomas',
    shortTitle: 'Idiomas',
    description: 'Uma arquitetura por idioma para acomodar novos cursos, trilhas, packs e imersões sem refazer o site.',
    promise: 'A navegação fica organizada por idioma e também comporta produtos multilíngues que servem para mais de uma jornada.',
    benefits: [
      'Hubs separados por idioma: inglês, mandarim, francês e multilingue.',
      'Ideal para crescer com novas páginas sem confundir o usuário.',
      'Permite combinar produtos digitais, aulas, imersões e bundles.',
      'Facilita SEO com URLs claras e expansíveis.'
    ]
  },
  {
    slug: 'academico',
    title: 'Acadêmico',
    shortTitle: 'Acadêmico',
    description: 'Recursos práticos para quem quer passar em processos seletivos, escrever melhor e organizar a produção acadêmica.',
    promise: 'A linha acadêmica foi estruturada para converter tanto estudantes em início de jornada quanto pessoas que já produzem pesquisa.',
    benefits: [
      'Produtos digitais fáceis de escalar.',
      'Oferta consultiva para tickets mais altos.',
      'Páginas específicas para dores muito claras.',
      'Base pronta para novos produtos como workshops e clubes de escrita.'
    ]
  },
  {
    slug: 'viagens',
    title: 'Viagens e Documentação',
    shortTitle: 'Viagens',
    description: 'Guias, checklists e consultorias para reduzir risco em processos consulares, vistos e mobilidade internacional.',
    promise: 'A estrutura combina produtos de rápida decisão com serviços mais estratégicos para quem precisa de suporte individual.',
    benefits: [
      'Organização por dor concreta: entrevista, visto e mobilidade.',
      'Bom encaixe para bundles por país ou por objetivo.',
      'Páginas prontas para captar leads e vender soluções completas.',
      'Facilidade para criar novas ofertas por destino no futuro.'
    ]
  },
  {
    slug: 'vida-adulta',
    title: 'Vida Adulta',
    shortTitle: 'Vida Adulta',
    description: 'Produtos para rotina, organização, finanças e autonomia, com espaço para expandir o ecossistema de templates e planners.',
    promise: 'A linha foi pensada para funcionar como um stack de organização pessoal: um produto resolve hoje, outro aprofunda amanhã.',
    benefits: [
      'Ofertas com alto potencial de recorrência e bundle.',
      'Boa base para Notion, Excel, planners e mini cursos.',
      'Clareza de navegação para quem quer praticidade.',
      'Escalável para lançamentos novos sem retrabalho de IA ou layout.'
    ]
  }
];

const rawLanguages = [
  {
    slug: 'ingles',
    name: 'Inglês',
    description: 'Uma página própria para programas de fluência profissional, preparação para entrevistas e comunicação de carreira.',
    focus: 'Para quem quer usar o idioma como ferramenta real de trabalho, candidatura e networking.',
    highlights: [
      'Estrutura pronta para imersões, workshops e pacotes intensivos.',
      'Boa navegação para ofertas voltadas a carreira internacional.',
      'Escalável para versões corporate ou 1:1.'
    ]
  },
  {
    slug: 'mandarim',
    name: 'Mandarim',
    description: 'Um hub para organizar níveis, trilhas e materiais complementares da jornada HSK sem misturar públicos.',
    focus: 'Ideal para apresentar progressão por nível e novas ofertas futuras como aulas, flashcards e revisões.',
    highlights: [
      'Página pronta para trilhas HSK por nível.',
      'Escala bem com bônus e materiais extras.',
      'Ajuda o usuário a entender a progressão da aprendizagem.'
    ]
  },
  {
    slug: 'frances',
    name: 'Francês',
    description: 'Estrutura já preparada para receber novos produtos assim que a linha for publicada.',
    focus: 'Hoje funciona como uma página de pré-lançamento elegante, sem necessidade de refazer a arquitetura depois.',
    highlights: [
      'URL estratégica pronta para SEO.',
      'Espaço reservado para novos cursos ou imersões.',
      'Mantém a linha de idiomas consistente desde já.'
    ]
  },
  {
    slug: 'multilingue',
    name: 'Multilingue',
    description: 'Produtos que ajudam em qualquer idioma e fazem sentido para estudantes de inglês, mandarim, francês e outras línguas.',
    focus: 'Perfeito para guias, sistemas de estudo, packs de prompts e recursos aplicáveis a várias rotinas de aprendizagem.',
    highlights: [
      'Bom lugar para produtos evergreen.',
      'Ajuda a vender antes de a pessoa escolher um idioma específico.',
      'Base flexível para bundles e kits cross-sell.'
    ]
  }
];

const lineMap = new Map(rawLines.map((line) => [line.slug, { ...line, href: `/${line.slug}` }]));
const languageMap = new Map(
  rawLanguages.map((language) => [language.slug, { ...language, href: `/idiomas/${language.slug}` }])
);

const rawProducts = [
  {
    id: 'cv-ingles-ats',
    lineSlug: 'carreira',
    slug: 'cv-em-ingles-ats',
    name: 'CV em Inglês (ATS)',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Template + guia prático',
    deliveryLabel: 'Entrega imediata após checkout',
    summary: 'Template de currículo em inglês com estrutura ATS-friendly, instruções de adaptação e lógica pensada para recrutamento internacional.',
    promise: 'Uma landing page focada em mostrar valor rápido para quem quer aplicar melhor e reduzir erros de posicionamento.',
    benefits: [
      'Modelo claro para candidaturas internacionais.',
      'Estrutura compatível com leitura automatizada.',
      'Explica o que manter, cortar e priorizar.',
      'Ajuda a adaptar experiência brasileira para mercados globais.'
    ],
    deliverables: [
      'Template editável de CV.',
      'Checklist de revisão antes da candidatura.',
      'Guia de personalização por vaga.',
      'Exemplos de bullets orientados a impacto.'
    ],
    idealFor: [
      'Profissionais aplicando para vagas fora do país.',
      'Pessoas que já têm experiência, mas não conseguem traduzi-la bem.',
      'Quem quer uma base reaproveitável para várias candidaturas.'
    ],
    faqs: [
      {
        question: 'Serve para qualquer área?',
        answer: 'Sim. A estrutura é flexível e foi pensada para acomodar diferentes áreas com foco em clareza, impacto e leitura por ATS.'
      },
      {
        question: 'Preciso ter experiência internacional prévia?',
        answer: 'Não. A proposta é justamente organizar sua experiência atual de modo competitivo para contextos internacionais.'
      }
    ]
  },
  {
    id: 'consultoria-linkedin',
    lineSlug: 'carreira',
    slug: 'consultoria-de-linkedin',
    name: 'Consultoria de LinkedIn',
    type: 'service',
    statusLabel: 'Serviço premium',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Consultoria 1:1',
    deliveryLabel: 'Agendamento após confirmação',
    summary: 'Página individual para vender diagnóstico, posicionamento e otimização completa de perfil com foco em visibilidade internacional.',
    promise: 'A copy sustenta uma oferta consultiva mais premium sem parecer genérica ou improvisada.',
    benefits: [
      'Reposiciona headline, resumo e provas de autoridade.',
      'Ajuda a atrair oportunidades alinhadas com seu objetivo.',
      'Cria consistência entre LinkedIn, currículo e narrativa.',
      'Permite evoluir a oferta para pacotes distintos no futuro.'
    ],
    deliverables: [
      'Diagnóstico do perfil atual.',
      'Ajustes estratégicos de posicionamento.',
      'Orientações para conteúdo e networking.',
      'Checklist final de otimização.'
    ],
    idealFor: [
      'Profissionais buscando maior visibilidade com recrutadores.',
      'Quem vai reposicionar área, senioridade ou mercado-alvo.',
      'Pessoas que querem transformar perfil em ativo de carreira.'
    ],
    faqs: [
      {
        question: 'É só revisão de texto?',
        answer: 'Não. A proposta é estratégica: clareza de posicionamento, narrativa e estrutura do perfil, não apenas correção pontual.'
      },
      {
        question: 'Posso vender diferentes níveis depois?',
        answer: 'Sim. A página já foi pensada para comportar versão express, completa ou VIP sem trocar a base visual.'
      }
    ]
  },
  {
    id: 'mentoria-carreira',
    lineSlug: 'carreira',
    slug: 'mentoria-de-carreira-internacional',
    name: 'Mentoria de Carreira Internacional',
    type: 'service',
    statusLabel: 'Alta conversão para ticket alto',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Mentoria com acompanhamento',
    deliveryLabel: 'Entrada por agenda e disponibilidade',
    summary: 'Landing page para vender acompanhamento mais profundo, com clareza sobre transformação, escopo e posicionamento premium.',
    promise: 'Uma página preparada para sustentar valor percebido alto sem depender só de preço ou urgência artificial.',
    benefits: [
      'Organiza estratégia de candidatura e tomada de decisão.',
      'Ajuda a priorizar mercados, vagas e materiais.',
      'Transforma conteúdo solto em plano de ação consistente.',
      'Cria espaço para uma oferta principal escalável e lucrativa.'
    ],
    deliverables: [
      'Diagnóstico inicial de carreira.',
      'Plano de aplicação e posicionamento.',
      'Acompanhamento ao longo da jornada.',
      'Orientações sobre currículo, LinkedIn e entrevistas.'
    ],
    idealFor: [
      'Profissionais que querem acelerar a migração de carreira.',
      'Pessoas com muitas dúvidas e pouca clareza de direção.',
      'Quem procura suporte mais próximo e estratégico.'
    ],
    faqs: [
      {
        question: 'A mentoria é individual?',
        answer: 'A estrutura atual da página foi desenhada para formato individual, mas pode ser desdobrada depois para grupo ou intensivo.'
      },
      {
        question: 'Posso adicionar aplicação e bônus depois?',
        answer: 'Sim. A arquitetura já suporta novos blocos de prova, bônus, upgrades e planos.'
      }
    ]
  },
  {
    id: 'prompts-carreira',
    lineSlug: 'carreira',
    slug: 'pack-de-prompts-para-carreira',
    name: 'Pack de Prompts para Carreira',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Pack evergreen',
    deliveryLabel: 'Liberação automática',
    summary: 'Produto de entrada com foco em agilidade, clareza e reutilização para currículo, LinkedIn, entrevistas e networking.',
    promise: 'Uma página pensada para comunicar velocidade de implementação e excelente custo-benefício.',
    benefits: [
      'Facilita tarefas repetitivas de carreira.',
      'Ajuda a extrair melhor resultado com IA.',
      'Conversa bem com cross-sell para CV, LinkedIn e mentoria.',
      'Escala com facilidade para futuras versões e bônus.'
    ],
    deliverables: [
      'Prompts organizados por situação de uso.',
      'Orientações rápidas para personalização.',
      'Sugestões de fluxo para currículo e LinkedIn.',
      'Atualizações futuras fáceis de incorporar.'
    ],
    idealFor: [
      'Quem quer começar com uma oferta de menor barreira.',
      'Pessoas que usam IA no dia a dia e querem mais direção.',
      'Usuários que ainda não estão prontos para um serviço 1:1.'
    ],
    faqs: [
      {
        question: 'Os prompts funcionam em diferentes ferramentas?',
        answer: 'Sim. A lógica é adaptável para diferentes modelos de IA e também para rotinas manuais de revisão e escrita.'
      },
      {
        question: 'Esse produto substitui mentoria?',
        answer: 'Não. Ele resolve execução tática. A mentoria continua sendo a oferta certa para decisões mais estratégicas.'
      }
    ]
  },
  {
    id: 'ingles-profissional',
    lineSlug: 'idiomas',
    languageSlug: 'ingles',
    slug: 'ingles-profissional-imersao',
    name: 'Inglês Profissional (Imersão)',
    type: 'service',
    statusLabel: 'Programa premium',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Imersão guiada',
    deliveryLabel: 'Entrada por agenda',
    summary: 'Página para vender uma oferta mais transformadora focada em comunicação profissional, entrevistas, networking e confiança real no idioma.',
    promise: 'A página foi desenhada para vender profundidade e aplicação prática, não só aulas soltas.',
    benefits: [
      'Posiciona a imersão como aceleração de carreira.',
      'Dá clareza de quem entra e por que entra.',
      'Abre espaço para versões individuais ou em grupo.',
      'Conecta idioma com objetivos concretos de trabalho.'
    ],
    deliverables: [
      'Sessões focadas em comunicação profissional.',
      'Plano de evolução por contexto de uso.',
      'Treino de entrevistas, apresentações e networking.',
      'Materiais de apoio para continuidade.'
    ],
    idealFor: [
      'Profissionais em transição para cenário internacional.',
      'Quem precisa falar com mais segurança em ambiente de trabalho.',
      'Pessoas que já estudaram inglês, mas travam na aplicação real.'
    ],
    faqs: [
      {
        question: 'É curso gravado ou acompanhamento?',
        answer: 'A página está configurada para vender uma experiência de imersão acompanhada, mas aceita expansões para bônus gravados no futuro.'
      },
      {
        question: 'Serve só para entrevistas?',
        answer: 'Não. O foco é comunicação profissional ampla: reuniões, networking, apresentações e posicionamento.'
      }
    ]
  },
  {
    id: 'guia-poliglota',
    lineSlug: 'idiomas',
    languageSlug: 'multilingue',
    slug: 'guia-do-poliglota',
    name: 'Guia do Poliglota',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Guia evergreen',
    deliveryLabel: 'Liberação após checkout',
    summary: 'Produto transversal para pessoas que querem estudar melhor, montar sistema próprio de aprendizagem e manter consistência em qualquer idioma.',
    promise: 'Uma landing page útil para capturar interesse amplo antes mesmo de o usuário escolher um idioma específico.',
    benefits: [
      'Serve para diferentes fases e idiomas.',
      'Excelente produto de entrada para a linha.',
      'Fácil de converter em bundle com prompts e templates.',
      'Ajuda a educar a audiência para ofertas futuras.'
    ],
    deliverables: [
      'Método de organização do estudo.',
      'Estrutura para metas e revisão.',
      'Orientações para manter constância.',
      'Modelos práticos de aplicação.'
    ],
    idealFor: [
      'Estudantes autodidatas.',
      'Quem estuda mais de um idioma.',
      'Pessoas que sentem que estudam muito e retêm pouco.'
    ],
    faqs: [
      {
        question: 'Preciso já falar mais de um idioma?',
        answer: 'Não. O produto serve tanto para quem está começando quanto para quem já tem uma rotina mais avançada de aprendizagem.'
      },
      {
        question: 'Ele substitui curso específico por idioma?',
        answer: 'Não. Ele organiza método e consistência, enquanto os cursos específicos aprofundam conteúdo.'
      }
    ]
  },
  {
    id: 'mandarim-hsk',
    lineSlug: 'idiomas',
    languageSlug: 'mandarim',
    slug: 'mandarim-hsk-1-2-3',
    name: 'Mandarim HSK 1, 2 e 3',
    type: 'digital',
    statusLabel: 'Trilha por níveis',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Curso escalonado',
    deliveryLabel: 'Acesso por nível ou bundle',
    summary: 'Uma página única para apresentar a família de produtos HSK com progressão clara de nível, facilitando vendas unitárias ou em combo.',
    promise: 'A estrutura vende uma jornada com degraus bem definidos, sem precisar criar uma arquitetura nova toda vez que um nível entra no ar.',
    benefits: [
      'Explica a progressão de aprendizagem com clareza.',
      'Permite vender cada nível ou um bundle completo.',
      'Deixa espaço para bônus, flashcards e revisões.',
      'Cria uma base sólida para crescer a linha de mandarim.'
    ],
    deliverables: [
      'Trilha organizada por nível HSK.',
      'Estrutura pronta para bônus por etapa.',
      'Página preparada para vender separado ou em combo.',
      'Lógica de navegação ideal para futuros módulos.'
    ],
    idealFor: [
      'Quem está começando mandarim e quer progressão clara.',
      'Alunos que preferem comprar por nível.',
      'Pessoas que querem uma trilha estruturada de estudo.'
    ],
    offers: [
      {
        name: 'HSK 1',
        summary: 'Base inicial, pinyin, vocabulário essencial e segurança para começar.'
      },
      {
        name: 'HSK 2',
        summary: 'Expansão de vocabulário, compreensão mais sólida e rotina de estudo consistente.'
      },
      {
        name: 'HSK 3',
        summary: 'Avanço de autonomia, leitura e preparação para uma nova etapa do idioma.'
      }
    ],
    faqs: [
      {
        question: 'Cada nível terá checkout próprio?',
        answer: 'A página foi estruturada para aceitar isso com facilidade. Você pode usar um botão por nível ou um checkout único com seleção posterior.'
      },
      {
        question: 'Posso adicionar HSK 4 depois?',
        answer: 'Sim. A estrutura foi pensada justamente para crescer sem refazer a navegação nem o template.'
      }
    ]
  },
  {
    id: 'prompts-idiomas',
    lineSlug: 'idiomas',
    languageSlug: 'multilingue',
    slug: 'pack-de-prompts-para-idiomas',
    name: 'Pack de Prompts para Idiomas',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Pack rápido de implementação',
    deliveryLabel: 'Liberação automática',
    summary: 'Prompts para organizar estudo, revisão, conversação, correção e uso diário de IA na rotina de idiomas.',
    promise: 'Uma boa página de entrada para quem quer praticidade, resultado rápido e um ticket mais acessível.',
    benefits: [
      'Resolve dúvidas comuns com pouca fricção.',
      'Conecta bem com o Guia do Poliglota.',
      'Permite upsell para produtos por idioma.',
      'É simples de atualizar e relançar.'
    ],
    deliverables: [
      'Prompts por objetivo de estudo.',
      'Sugestões de adaptação por idioma.',
      'Fluxos de revisão e prática.',
      'Organização pensada para uso recorrente.'
    ],
    idealFor: [
      'Pessoas que já usam IA nos estudos.',
      'Quem quer estudar com mais clareza e menos improviso.',
      'Alunos de diferentes idiomas e níveis.'
    ],
    faqs: [
      {
        question: 'Vale para inglês, mandarim e francês?',
        answer: 'Sim. A página foi pensada para apresentar o pack como um sistema multilingue, aplicável a diferentes rotinas.'
      },
      {
        question: 'É indicado para iniciantes?',
        answer: 'Sim. O material pode ser usado por iniciantes, intermediários e avançados com pequenas adaptações.'
      }
    ]
  },
  {
    id: 'templates-academicos-abnt',
    lineSlug: 'academico',
    slug: 'templates-academicos-abnt',
    name: 'Templates Acadêmicos (ABNT)',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Templates práticos',
    deliveryLabel: 'Acesso imediato',
    summary: 'Página focada em resolver a dor de formatar trabalhos, dissertações e documentos com mais segurança e menos retrabalho.',
    promise: 'A estrutura combina praticidade, economia de tempo e confiança para um público com dor muito clara.',
    benefits: [
      'Economiza horas de formatação manual.',
      'Reduz insegurança com normas.',
      'Conversa bem com outros produtos acadêmicos.',
      'Funciona como oferta de entrada forte.'
    ],
    deliverables: [
      'Templates editáveis.',
      'Orientações de uso rápido.',
      'Estrutura pronta para diferentes formatos de trabalho.',
      'Base fácil de atualizar futuramente.'
    ],
    idealFor: [
      'Graduandos, pós-graduandos e pesquisadores.',
      'Quem quer padronização sem começar do zero.',
      'Pessoas com prazo apertado de entrega.'
    ],
    faqs: [
      {
        question: 'Serve só para TCC?',
        answer: 'Não. A comunicação da página acomoda usos em artigos, projetos, relatórios e outros materiais acadêmicos.'
      },
      {
        question: 'Posso incluir versões Notion ou Google Docs depois?',
        answer: 'Sim. A página e a estrutura do catálogo já foram pensadas para upgrades e extensões.'
      }
    ]
  },
  {
    id: 'checklist-mestrado',
    lineSlug: 'academico',
    slug: 'checklist-de-aprovacao-no-mestrado',
    name: 'Checklist de Aprovação no Mestrado',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Checklist orientado à ação',
    deliveryLabel: 'Entrega imediata',
    summary: 'Produto de compra rápida para organizar documentos, cronograma, narrativa e preparação para processos seletivos.',
    promise: 'A página foi construída para comunicar alívio, organização e sensação de controle sobre uma etapa normalmente confusa.',
    benefits: [
      'Transforma a candidatura em etapas objetivas.',
      'Reduz esquecimentos e retrabalho.',
      'Serve como porta de entrada para ofertas maiores.',
      'Tem linguagem clara para alta intenção de compra.'
    ],
    deliverables: [
      'Checklist de preparação.',
      'Etapas de revisão antes do envio.',
      'Orientações sobre documentos e prazos.',
      'Base para adaptar a diferentes editais.'
    ],
    idealFor: [
      'Quem vai aplicar para mestrado.',
      'Pessoas com pouco tempo para organizar a candidatura.',
      'Quem quer clareza do que priorizar primeiro.'
    ],
    faqs: [
      {
        question: 'Serve para processos no Brasil e fora?',
        answer: 'Sim. A base foi escrita para ser adaptável e acomodar diferentes exigências, com foco em organização estratégica.'
      },
      {
        question: 'Substitui mentoria?',
        answer: 'Não. O checklist organiza execução. A mentoria entra quando a pessoa precisa de revisão, estratégia e acompanhamento.'
      }
    ]
  },
  {
    id: 'mentoria-escrita-cientifica',
    lineSlug: 'academico',
    slug: 'mentoria-de-escrita-cientifica',
    name: 'Mentoria de Escrita Científica',
    type: 'service',
    statusLabel: 'Serviço premium',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Mentoria com revisão e direção',
    deliveryLabel: 'Agendamento conforme disponibilidade',
    summary: 'Página individual para vender uma oferta consultiva focada em clareza argumentativa, produtividade e qualidade de texto.',
    promise: 'A estrutura sustenta bem ticket mais alto e comunica transformação além de simples revisão textual.',
    benefits: [
      'Ajuda a destravar produção acadêmica.',
      'Conecta clareza de escrita com avanço real de projeto.',
      'Permite criar desdobramentos em grupo no futuro.',
      'Reforça autoridade na linha acadêmica.'
    ],
    deliverables: [
      'Diagnóstico do estágio de escrita.',
      'Plano de revisão e evolução.',
      'Acompanhamento orientado ao objetivo.',
      'Diretrizes para organização do texto.'
    ],
    idealFor: [
      'Pesquisadores e pós-graduandos.',
      'Quem trava na hora de escrever ou revisar.',
      'Pessoas que querem acompanhamento mais profundo.'
    ],
    faqs: [
      {
        question: 'É revisão de texto pronta?',
        answer: 'Não. A proposta é mentoria: mais clareza de processo, tomada de decisão e desenvolvimento de autonomia na escrita.'
      },
      {
        question: 'Posso vender por pacotes depois?',
        answer: 'Sim. A página já aceita versões por encontro, sprint ou acompanhamento contínuo.'
      }
    ]
  },
  {
    id: 'guia-curriculo-lattes',
    lineSlug: 'academico',
    slug: 'guia-de-curriculo-lattes',
    name: 'Guia de Currículo Lattes',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Guia prático',
    deliveryLabel: 'Liberação imediata',
    summary: 'Página para vender um guia objetivo sobre estruturação, atualização e uso estratégico do Lattes em contextos acadêmicos.',
    promise: 'A copy ajuda a mostrar que currículo acadêmico também é posicionamento e não só preenchimento de plataforma.',
    benefits: [
      'Organiza melhor a apresentação da trajetória.',
      'Ajuda a reduzir dúvidas comuns sobre preenchimento.',
      'É um bom complemento para processos seletivos.',
      'Escala facilmente como produto evergreen.'
    ],
    deliverables: [
      'Guia passo a passo.',
      'Orientações sobre organização das informações.',
      'Boas práticas para atualização.',
      'Critérios para revisão final.'
    ],
    idealFor: [
      'Estudantes em iniciação científica ou pós.',
      'Quem precisa estruturar ou atualizar o Lattes.',
      'Pessoas que querem mais segurança em seleções acadêmicas.'
    ],
    faqs: [
      {
        question: 'É útil para quem ainda tem pouca experiência?',
        answer: 'Sim. O guia foi pensado para diferentes estágios de trajetória acadêmica, inclusive para quem ainda está começando.'
      },
      {
        question: 'Posso usar junto com templates acadêmicos?',
        answer: 'Sim. Os dois produtos se complementam bem e ajudam a criar um stack acadêmico mais robusto.'
      }
    ]
  },
  {
    id: 'prompts-escrita-academica',
    lineSlug: 'academico',
    slug: 'prompts-para-escrita-academica',
    name: 'Prompts para Escrita Acadêmica',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Pack tático',
    deliveryLabel: 'Entrega automática',
    summary: 'Prompts para brainstorming, estruturação, revisão e clareza de argumentos na produção acadêmica.',
    promise: 'A página foi pensada para comunicar agilidade sem soar superficial, posicionando o produto como apoio real de execução.',
    benefits: [
      'Agiliza tarefas de escrita e revisão.',
      'Conversa bem com mentoria e templates.',
      'Tem entrada acessível e alto potencial evergreen.',
      'Facilita atualizações e novas versões.'
    ],
    deliverables: [
      'Prompts organizados por etapa de escrita.',
      'Sugestões de adaptação por tipo de texto.',
      'Uso pensado para rotina acadêmica real.',
      'Estrutura fácil de expandir.'
    ],
    idealFor: [
      'Quem escreve artigos, projetos ou relatórios.',
      'Pessoas que querem ganhar velocidade sem perder qualidade.',
      'Usuários que já incorporaram IA à rotina.'
    ],
    faqs: [
      {
        question: 'Os prompts servem para diferentes áreas?',
        answer: 'Sim. A estrutura é transversal e pode ser adaptada a diferentes disciplinas e tipos de produção acadêmica.'
      },
      {
        question: 'Preciso saber prompt engineering?',
        answer: 'Não. O material foi pensado para uso prático, com pouca fricção e boa orientação inicial.'
      }
    ]
  },
  {
    id: 'guia-entrevista-consular',
    lineSlug: 'viagens',
    slug: 'guia-de-entrevista-consular',
    name: 'Guia de Entrevista Consular',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Guia orientado à preparação',
    deliveryLabel: 'Liberação imediata',
    summary: 'Página focada em reduzir ansiedade, organizar documentos e preparar a pessoa para respostas mais claras em entrevistas consulares.',
    promise: 'A estrutura trabalha medo, insegurança e necessidade de clareza, que são gatilhos fortes para esse tipo de oferta.',
    benefits: [
      'Ajuda a chegar mais preparado para a entrevista.',
      'Reduz improviso e insegurança.',
      'Conversa bem com consultoria de mobilidade.',
      'É fácil de posicionar como compra de decisão rápida.'
    ],
    deliverables: [
      'Orientações de preparação.',
      'Lista de pontos críticos para revisar.',
      'Estratégias de resposta e postura.',
      'Checklist final pré-entrevista.'
    ],
    idealFor: [
      'Quem vai enfrentar entrevista consular em breve.',
      'Pessoas com medo de errar na preparação.',
      'Usuários que querem uma revisão clara antes da data.'
    ],
    faqs: [
      {
        question: 'Substitui uma consultoria?',
        answer: 'Não. O guia atende muito bem quem quer autonomia; a consultoria entra quando há mais complexidade ou necessidade de personalização.'
      },
      {
        question: 'Serve para diferentes países?',
        answer: 'Sim. A base foi organizada para ser adaptável, com foco em preparação estratégica e documentação.'
      }
    ]
  },
  {
    id: 'checklists-visto',
    lineSlug: 'viagens',
    slug: 'checklists-de-visto',
    name: 'Checklists de Visto',
    type: 'digital',
    statusLabel: 'Bundle por país',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Produto modular',
    deliveryLabel: 'Compra por país ou em pacote',
    summary: 'Uma landing page modular para apresentar checklists de visto por destino sem perder clareza nem escalabilidade.',
    promise: 'Esse modelo ajuda a vender por país agora e também permite criar combos mais completos depois.',
    benefits: [
      'Explica rapidamente o valor do checklist.',
      'Permite escalar novos destinos depois.',
      'É fácil de conectar com o guia consular e a consultoria.',
      'Ajuda a transformar uma dor complexa em uma decisão simples.'
    ],
    deliverables: [
      'Checklists objetivos por país.',
      'Estrutura pronta para novos destinos.',
      'Página pensada para venda unitária ou bundle.',
      'Boa base para atualizações futuras.'
    ],
    idealFor: [
      'Quem precisa organizar documentação com segurança.',
      'Pessoas que não querem esquecer etapas importantes.',
      'Usuários buscando orientação prática e direta.'
    ],
    offers: [
      {
        name: 'EUA',
        summary: 'Checklist dedicado para organizar documentos, cronograma e revisão final.'
      },
      {
        name: 'Canadá',
        summary: 'Estrutura específica para preparação documental com foco em clareza.'
      },
      {
        name: 'China',
        summary: 'Checklist pensado para reduzir erros e acelerar a organização dos materiais.'
      },
      {
        name: 'Coreia',
        summary: 'Guia objetivo para revisar exigências, etapas e consistência da aplicação.'
      }
    ],
    faqs: [
      {
        question: 'Cada país pode ter botão próprio?',
        answer: 'Sim. A página foi preparada para aceitar um checkout por país ou um bundle único conforme sua estratégia de publicação.'
      },
      {
        question: 'Posso adicionar novos países depois?',
        answer: 'Sim. Esse é um dos principais objetivos desta estrutura modular.'
      }
    ]
  },
  {
    id: 'consultoria-mobilidade-global',
    lineSlug: 'viagens',
    slug: 'consultoria-de-mobilidade-global',
    name: 'Consultoria de Mobilidade Global',
    type: 'service',
    statusLabel: 'Serviço premium',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Consultoria estratégica',
    deliveryLabel: 'Atendimento por agenda',
    summary: 'Página para vender suporte mais completo em processos de mudança, documentação e tomada de decisão internacional.',
    promise: 'A copy foi pensada para justificar um ticket mais alto com mais clareza de escopo e valor percebido.',
    benefits: [
      'Ajuda a unir estratégia, documentação e planejamento.',
      'Conecta com usuários em momento de alto impacto.',
      'Permite oferecer diferentes níveis de suporte.',
      'Amplia a linha de viagens para além de produtos digitais.'
    ],
    deliverables: [
      'Diagnóstico do cenário atual.',
      'Orientações estratégicas por objetivo.',
      'Plano de próximos passos.',
      'Revisão do processo com mais segurança.'
    ],
    idealFor: [
      'Quem está organizando mudança ou mobilidade internacional.',
      'Pessoas com processos mais complexos.',
      'Usuários que querem apoio individual em decisões relevantes.'
    ],
    faqs: [
      {
        question: 'É atendimento genérico?',
        answer: 'Não. A proposta da página é justamente comunicar suporte mais individualizado e orientado ao cenário da pessoa.'
      },
      {
        question: 'Posso vender versões express e premium depois?',
        answer: 'Sim. A estrutura permite isso sem precisar recomeçar o layout.'
      }
    ]
  },
  {
    id: 'planner-financeiro',
    lineSlug: 'vida-adulta',
    slug: 'planner-financeiro',
    name: 'Planner Financeiro',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Planner prático',
    deliveryLabel: 'Acesso imediato',
    summary: 'Página para vender organização financeira com sensação de controle, simplicidade e aplicação imediata.',
    promise: 'O foco da copy é mostrar utilidade no cotidiano, sem complicar demais a proposta.',
    benefits: [
      'Ajuda a organizar metas e rotina financeira.',
      'Funciona bem como oferta evergreen.',
      'Tem forte potencial de bundle com templates.',
      'Fácil de replicar em novas versões ou edições.'
    ],
    deliverables: [
      'Planner com visão prática de uso.',
      'Estrutura para metas e acompanhamento.',
      'Sistema simples de revisão de rotina.',
      'Base para futuras expansões Notion ou Excel.'
    ],
    idealFor: [
      'Quem quer mais clareza sobre dinheiro no dia a dia.',
      'Pessoas começando a organizar finanças pessoais.',
      'Usuários que buscam uma solução simples e visual.'
    ],
    faqs: [
      {
        question: 'Posso vender versões em Notion e Excel depois?',
        answer: 'Sim. A arquitetura do produto e da página foi pensada justamente para esse tipo de expansão.'
      },
      {
        question: 'É um produto para iniciantes?',
        answer: 'Sim. A comunicação foi organizada para facilitar entrada sem afastar quem já tem alguma rotina.'
      }
    ]
  },
  {
    id: 'guia-morar-sozinho',
    lineSlug: 'vida-adulta',
    slug: 'guia-morar-sozinho',
    name: 'Guia Morar Sozinho',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Guia prático',
    deliveryLabel: 'Entrega imediata',
    summary: 'Página voltada para autonomia, organização e prevenção de erros comuns na mudança para a vida independente.',
    promise: 'A landing foi pensada para dialogar com um momento de transição real, com foco em praticidade e segurança.',
    benefits: [
      'Ajuda a organizar a mudança com mais clareza.',
      'Reduz sensação de improviso na nova rotina.',
      'Conecta bem com planner e templates.',
      'Tem ótima aderência para bundles de vida adulta.'
    ],
    deliverables: [
      'Guia com etapas e prioridades.',
      'Orientações para rotina e organização.',
      'Base prática para tomada de decisão.',
      'Material fácil de consumir e aplicar.'
    ],
    idealFor: [
      'Quem vai morar sozinho em breve.',
      'Pessoas que querem se sentir mais preparadas.',
      'Usuários buscando um passo a passo simples.'
    ],
    faqs: [
      {
        question: 'É só para mudança física?',
        answer: 'Não. A comunicação do produto inclui organização prática, emocional e financeira da nova fase.'
      },
      {
        question: 'Combina com outros produtos da linha?',
        answer: 'Sim. Ele faz muito sentido com planner financeiro e templates de organização.'
      }
    ]
  },
  {
    id: 'templates-organizacao',
    lineSlug: 'vida-adulta',
    slug: 'templates-de-organizacao',
    name: 'Templates de Organização (Notion/Excel)',
    type: 'digital',
    statusLabel: 'Produto digital',
    checkoutLabel: 'Checkout Hotmart em breve',
    formatLabel: 'Kit de templates',
    deliveryLabel: 'Liberação automática',
    summary: 'Kit flexível para rotina, metas, tarefas e gestão pessoal, preparado para crescer com novos módulos.',
    promise: 'A página foi pensada para posicionar o produto como sistema prático, não apenas um arquivo bonito.',
    benefits: [
      'Resolve organização pessoal com clareza visual.',
      'Funciona como stack com outros produtos da linha.',
      'Permite desdobrar por tema ou por plataforma.',
      'Excelente base para bundles e versões futuras.'
    ],
    deliverables: [
      'Templates organizados por rotina e uso.',
      'Versões pensadas para Notion e Excel.',
      'Estrutura modular para atualizações futuras.',
      'Página pronta para lançar novos templates sem refazer tudo.'
    ],
    idealFor: [
      'Quem gosta de ferramentas práticas de organização.',
      'Usuários que querem sistema pronto em vez de começar do zero.',
      'Pessoas que valorizam rotina visual e objetiva.'
    ],
    faqs: [
      {
        question: 'Posso vender templates avulsos depois?',
        answer: 'Sim. O catálogo foi desenhado para suportar produto principal, mini packs e bundles sem quebrar a navegação.'
      },
      {
        question: 'Serve para Notion e Excel ao mesmo tempo?',
        answer: 'A página foi estruturada para acomodar uma ou duas plataformas, conforme você decidir publicar.'
      }
    ]
  }
];

export const productLines = Array.from(lineMap.values());
export const languagePages = Array.from(languageMap.values());

// Para publicar um produto, basta preencher hotmartUrl no objeto correspondente.
export const products = rawProducts.map((product) => {
  const line = lineMap.get(product.lineSlug);
  const language = product.languageSlug ? languageMap.get(product.languageSlug) : null;
  const href = product.lineSlug === 'idiomas'
    ? `/idiomas/${product.languageSlug}/${product.slug}`
    : `/${product.lineSlug}/${product.slug}`;

  return {
    ...product,
    hotmartUrl: product.hotmartUrl || '',
    line,
    language,
    href
  };
});

const productMap = new Map(products.map((product) => [product.id, product]));

export const getLineBySlug = (lineSlug) => lineMap.get(lineSlug) || null;

export const getLanguageBySlug = (languageSlug) => languageMap.get(languageSlug) || null;

export const getProductsForLine = (lineSlug) =>
  products.filter((product) => product.lineSlug === lineSlug);

export const getProductsForLanguage = (languageSlug) =>
  products.filter((product) => product.languageSlug === languageSlug);

export const getProductByRoute = ({ lineSlug, languageSlug, productSlug }) => {
  if (lineSlug === 'idiomas') {
    return (
      products.find(
        (product) =>
          product.lineSlug === 'idiomas' &&
          product.languageSlug === languageSlug &&
          product.slug === productSlug
      ) || null
    );
  }

  return (
    products.find(
      (product) =>
        product.lineSlug === lineSlug &&
        !product.languageSlug &&
        product.slug === productSlug
    ) || null
  );
};

export const getRelatedProducts = (productId, limit = 3) => {
  const currentProduct = productMap.get(productId);
  if (!currentProduct) {
    return [];
  }

  const sameBucket = products.filter((product) => {
    if (product.id === productId) {
      return false;
    }

    if (currentProduct.languageSlug) {
      return product.languageSlug === currentProduct.languageSlug || product.lineSlug === currentProduct.lineSlug;
    }

    return product.lineSlug === currentProduct.lineSlug;
  });

  return sameBucket.slice(0, limit);
};

export const getNavigationCollections = () =>
  productLines.map((line) => {
    if (line.slug === 'idiomas') {
      return {
        ...line,
        items: languagePages.map((language) => ({
          name: language.name,
          href: language.href
        }))
      };
    }

    return {
      ...line,
      items: getProductsForLine(line.slug).slice(0, 5).map((product) => ({
        name: product.name,
        href: product.href
      }))
    };
  });
