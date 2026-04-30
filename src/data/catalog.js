const rawLines = [
  {
    slug: 'carreira',
    title: 'Carreira com Direção',
    shortTitle: 'Carreira',
    description: 'Se você quer crescer na carreira, mas está sem direção para currículo, LinkedIn e processos seletivos, aqui encontra o que fazer para avançar com clareza.',
    promise: 'Se você quer resultados melhores na carreira, mas sente que está se esforçando sem método, aqui encontra estratégia prática para se posicionar com mais segurança.',
    benefits: [
      'Entenda por onde começar sem se perder em informações soltas.',
      'Monte currículo, LinkedIn e estratégia de candidatura com mais clareza.',
      'Escolha entre materiais práticos e apoio mais próximo, de acordo com seu momento.',
      'Avance com mais segurança em processos seletivos e decisões de carreira.'
    ]
  },
  {
    slug: 'idiomas',
    title: 'Idiomas com Método',
    shortTitle: 'Idiomas',
    description: 'Se você quer aprender idiomas, mas estuda e não sai do lugar, aqui encontra método para transformar estudo em uso real.',
    promise: 'Se você quer parar de estudar sem direção, aqui encontra uma rotina prática para evoluir com constância e usar o idioma de verdade.',
    benefits: [
      'Escolha o idioma ou método que faz mais sentido para você agora.',
      'Estude com mais clareza, sem acumular conteúdo que não vira resultado.',
      'Ganhe confiança para provas, entrevistas e situações reais.',
      'Avance com uma rotina mais simples, aplicável e consistente.'
    ]
  },
  {
    slug: 'academico',
    title: 'Acadêmico com Direção',
    shortTitle: 'Acadêmico',
    description: 'Se você quer avançar na graduação ou pós, mas está perdido com prazos, escrita e processos seletivos, aqui encontra direção para organizar cada etapa.',
    promise: 'Se você quer evoluir na trajetória acadêmica sem sobrecarga, aqui encontra um caminho claro para decidir melhor e executar com mais segurança.',
    benefits: [
      'Saiba o que priorizar em candidatura, pesquisa e escrita acadêmica.',
      'Reduza retrabalho com checklists, guias e apoio focado no que importa.',
      'Organize documentos, argumentos e prazos sem se perder.',
      'Caminhe com mais método no seu próximo passo acadêmico.'
    ]
  },
  {
    slug: 'vida-adulta',
    title: 'Ferramentas e Organização',
    shortTitle: 'Ferramentas',
    description: 'Ferramentas práticas para organizar rotina, dinheiro, prioridades e decisões do dia a dia com mais clareza.',
    promise: 'Uma linha pensada para transformar caos em organização aplicável, com planners, templates, prompts e sistemas simples de acompanhamento.',
    benefits: [
      'Organização prática para rotina, finanças e prioridades.',
      'Produtos simples de aplicar no dia a dia.',
      'Boa base para planners, templates, dashboards e prompts.',
      'Caminho claro para transformar intenção em ação.'
    ]
  }
];

const rawLanguages = [
  {
    slug: 'ingles',
    name: 'Inglês',
    description: 'Se você quer usar inglês para estudar e crescer profissionalmente, mas trava na prática, aqui encontra apoio para transformar estudo em resultado.',
    focus: 'Se você quer se comunicar com mais segurança em entrevistas, apresentações e escrita, aqui encontra direção prática para evoluir.',
    highlights: [
      'Aprenda com foco no que você precisa usar na vida real.',
      'Ganhe confiança para falar, se apresentar e participar de oportunidades.',
      'Estude com método para avançar sem confusão.'
    ]
  },
  {
    slug: 'frances',
    name: 'Francês',
    description: 'Se você quer começar francês com clareza, aqui encontra um caminho prático para criar base, ganhar constância e estudar sem se perder.',
    focus: 'Se você quer aprender francês, mas não sabe por onde começar ou como manter uma rotina, esta página reúne direcionamento para transformar vontade em prática.',
    highlights: [
      'Comece com uma base clara antes de acumular conteúdo solto.',
      'Organize uma rotina de estudo mais realista para o seu momento.',
      'Avance com menos confusão e mais constância.'
    ]
  },
  {
    slug: 'mandarim',
    name: 'Mandarim',
    description: 'Se você quer aprender mandarim, mas sente que o idioma parece distante ou difícil demais, aqui encontra direção para começar com mais segurança.',
    focus: 'Se você quer estudar mandarim sem se perder entre tons, caracteres e métodos soltos, esta página ajuda a enxergar um caminho mais simples para avançar.',
    highlights: [
      'Entenda por onde começar sem tentar aprender tudo ao mesmo tempo.',
      'Crie uma rotina prática para vocabulário, pronúncia e revisão.',
      'Ganhe confiança para continuar mesmo nos primeiros desafios.'
    ]
  },
  {
    slug: 'russo',
    name: 'Russo',
    description: 'Se você quer aprender russo, mas ainda não sabe como organizar o início, aqui encontra um caminho mais claro para estudar com método.',
    focus: 'Se você quer sair da curiosidade e começar a estudar russo de verdade, esta página te ajuda a dar os primeiros passos com mais direção.',
    highlights: [
      'Comece pelo essencial antes de avançar para conteúdos mais complexos.',
      'Organize alfabeto, vocabulário e prática em uma rotina possível.',
      'Estude com mais clareza para não abandonar no começo.'
    ]
  },
  {
    slug: 'italiano',
    name: 'Italiano',
    description: 'Se você quer aprender italiano para estudos, trabalho ou conexão pessoal, aqui encontra orientação para começar com mais clareza.',
    focus: 'Se você quer transformar interesse em prática, esta página reúne caminhos para estudar italiano com constância e sem excesso de informação.',
    highlights: [
      'Monte uma base inicial sem depender de tentativa e erro.',
      'Organize vocabulário, escuta e prática em passos simples.',
      'Avance com uma rotina leve, clara e aplicável.'
    ]
  },
  {
    slug: 'projeto-poliglota',
    name: 'Projeto Poliglota',
    description: 'Se você aprende um ou mais idiomas, aqui encontra um caminho prático para estudar melhor sem se perder em métodos soltos.',
    focus: 'Se você quer organizar seus estudos de idiomas com mais clareza, este caminho reúne materiais para transformar intenção em prática constante.',
    highlights: [
      'Organize uma rotina de estudo que cabe na sua vida real.',
      'Use prompts e guias para estudar com mais direção.',
      'Avance em idiomas sem depender de tentativa e erro.'
    ]
  }
];

const rawProducts = [
  {
    id: 'cv-em-ingles-ats',
    slug: 'cv-em-ingles-ats',
    lineSlug: 'carreira',
    type: 'digital',
    name: 'CV em Inglês + ATS Kit',
    summary: 'Um kit direto para montar um currículo em inglês mais claro, profissional e preparado para filtros internacionais.',
    promise: 'Se você quer se candidatar para vagas internacionais, mas trava na hora de adaptar seu currículo, aqui encontra um passo a passo para apresentar sua experiência com mais segurança.',
    formatLabel: 'Guia prático, checklist e modelo de CV em inglês',
    deliveryLabel: 'Acesso digital após liberação do material',
    checkoutLabel: 'R$ 67–97',
    status: 'produto piloto',
    hotmartUrl: '',
    benefits: [
      'Entenda como organizar suas experiências para vagas internacionais.',
      'Evite erros comuns que deixam o currículo confuso ou pouco competitivo.',
      'Ajuste palavras-chave para melhorar a leitura por recrutadores e filtros ATS.',
      'Monte uma versão mais objetiva, clara e pronta para candidatura.'
    ],
    deliverables: [
      'Modelo de currículo em inglês para preencher com mais segurança.',
      'Checklist de revisão antes de enviar candidaturas.',
      'Orientações para adaptar experiências brasileiras ao contexto internacional.',
      'Sugestões de palavras e seções para deixar o CV mais estratégico.'
    ],
    idealFor: [
      'Quem quer aplicar para vagas fora do Brasil.',
      'Quem sente que o currículo atual não comunica bem sua experiência.',
      'Quem precisa de um modelo simples para sair da dúvida e começar.'
    ],
    offers: [
      {
        name: 'Lista de interesse',
        summary: 'Entre em contato para receber aviso quando o kit estiver disponível.'
      }
    ],
    faqs: [
      {
        question: 'Esse kit serve para quem ainda não tem experiência internacional?',
        answer: 'Sim. A ideia é ajudar você a apresentar melhor sua trajetória, mesmo que sua experiência tenha sido construída no Brasil.'
      },
      {
        question: 'O checkout já está disponível?',
        answer: 'Ainda não. Por enquanto, você pode falar com a equipe para entrar na lista de interesse.'
      }
    ]
  },
  {
    id: 'pack-de-prompts-para-carreira',
    slug: 'pack-de-prompts-para-carreira',
    lineSlug: 'carreira',
    type: 'digital',
    name: 'Prompts para Carreira',
    summary: 'Comandos prontos para usar IA na revisão de currículo, LinkedIn, entrevistas e decisões profissionais.',
    promise: 'Se você quer usar IA para avançar na carreira, mas não sabe como pedir respostas úteis, aqui encontra prompts claros para aplicar direto.',
    formatLabel: 'Pack de prompts prontos para carreira',
    deliveryLabel: 'Acesso digital após publicação',
    checkoutLabel: 'A partir de R$ 27',
    hotmartUrl: '',
    benefits: [
      'Pare de começar do zero toda vez que precisar escrever ou revisar algo.',
      'Use IA para melhorar currículo, LinkedIn e mensagens profissionais.',
      'Ganhe clareza para se preparar para entrevistas e processos seletivos.',
      'Transforme dúvidas soltas em próximos passos mais objetivos.'
    ],
    deliverables: [
      'Prompts para currículo e carta de apresentação.',
      'Prompts para LinkedIn e posicionamento profissional.',
      'Prompts para entrevistas, respostas e simulações.',
      'Orientações simples para adaptar cada comando ao seu caso.'
    ],
    idealFor: [
      'Quem quer usar IA sem depender de tentativa e erro.',
      'Quem está revisando materiais de candidatura.',
      'Quem precisa de clareza para decisões profissionais.'
    ],
    offers: [
      {
        name: 'Pack inicial',
        summary: 'Prompts essenciais para organizar seus próximos passos de carreira.'
      }
    ],
    faqs: [
      {
        question: 'Preciso saber usar IA para aproveitar os prompts?',
        answer: 'Não. Os comandos são escritos para você copiar, adaptar e aplicar com simplicidade.'
      }
    ]
  },
  {
    id: 'linkedin-estrategico',
    slug: 'linkedin-estrategico',
    lineSlug: 'carreira',
    type: 'digital',
    name: 'LinkedIn Estratégico',
    summary: 'Um material planejado para ajudar você a organizar seu perfil e se posicionar melhor para oportunidades.',
    promise: 'Se você quer ser encontrado por oportunidades melhores, mas não sabe como ajustar seu LinkedIn, este caminho vai te ajudar a comunicar sua experiência com mais direção.',
    formatLabel: 'Guia prático para perfil e posicionamento',
    deliveryLabel: 'Material planejado para uma próxima etapa',
    checkoutLabel: 'Em breve',
    status: 'planejado',
    hotmartUrl: '',
    benefits: [
      'Entenda quais partes do perfil merecem mais atenção.',
      'Comunique sua experiência de forma mais clara e estratégica.',
      'Melhore título, resumo e descrição de experiências.',
      'Prepare seu perfil para conversas e oportunidades profissionais.'
    ],
    deliverables: [
      'Checklist de perfil.',
      'Modelo de resumo profissional.',
      'Orientações para títulos, experiências e palavras-chave.'
    ],
    idealFor: [
      'Quem quer melhorar presença profissional online.',
      'Quem sente que o perfil não mostra bem seu valor.',
      'Quem busca oportunidades nacionais ou internacionais.'
    ],
    offers: [
      {
        name: 'Planejado',
        summary: 'Material em preparação para uma próxima fase do Meridiano.'
      }
    ],
    faqs: [
      {
        question: 'Já posso comprar?',
        answer: 'Ainda não. Este material está planejado e será liberado em uma próxima etapa.'
      }
    ]
  },
  {
    id: 'checklist-para-aplicacao-de-mestrado',
    slug: 'checklist-para-aplicacao-de-mestrado',
    lineSlug: 'academico',
    type: 'digital',
    name: 'Checklist para Aplicação de Mestrado',
    summary: 'Um checklist para organizar documentos, prazos e decisões antes de aplicar para um mestrado.',
    promise: 'Se você quer aplicar para mestrado, mas está perdido entre edital, documentos e escrita, aqui encontra um guia para enxergar o processo com mais clareza.',
    formatLabel: 'Checklist guiado para candidatura acadêmica',
    deliveryLabel: 'Acesso digital após publicação',
    checkoutLabel: 'R$ 47–77',
    hotmartUrl: '',
    benefits: [
      'Veja o que precisa preparar antes de começar a candidatura.',
      'Organize prazos, documentos e requisitos com menos ansiedade.',
      'Evite esquecer etapas importantes do processo.',
      'Ganhe clareza para decidir onde concentrar sua energia.'
    ],
    deliverables: [
      'Checklist de documentos e requisitos.',
      'Mapa de etapas da candidatura.',
      'Guia de revisão antes do envio.',
      'Lista de pontos de atenção para edital e seleção.'
    ],
    idealFor: [
      'Quem quer aplicar para mestrado no Brasil ou fora.',
      'Quem se sente perdido lendo editais.',
      'Quem precisa organizar candidatura com mais método.'
    ],
    offers: [
      {
        name: 'Checklist completo',
        summary: 'Um material direto para organizar sua aplicação sem se perder.'
      }
    ],
    faqs: [
      {
        question: 'Serve para qualquer área?',
        answer: 'Sim. O checklist ajuda na organização do processo, independentemente da área de estudo.'
      }
    ]
  },
  {
    id: 'prompts-para-escrita-academica',
    slug: 'prompts-para-escrita-academica',
    lineSlug: 'academico',
    type: 'digital',
    name: 'Prompts Acadêmicos',
    summary: 'Prompts para revisar ideias, organizar textos acadêmicos e destravar escrita com mais clareza.',
    promise: 'Se você quer escrever melhor, mas trava para estruturar ideias e revisar argumentos, aqui encontra comandos prontos para usar IA como apoio de escrita.',
    formatLabel: 'Pack de prompts para escrita acadêmica',
    deliveryLabel: 'Acesso digital após publicação',
    checkoutLabel: 'A partir de R$ 27',
    hotmartUrl: '',
    benefits: [
      'Organize ideias antes de escrever.',
      'Revise clareza, coerência e força dos argumentos.',
      'Use IA como apoio sem perder sua autoria.',
      'Reduza bloqueios na hora de começar ou melhorar um texto.'
    ],
    deliverables: [
      'Prompts para planejamento de texto.',
      'Prompts para revisão de parágrafos e argumentos.',
      'Prompts para resumo, introdução e conclusão.',
      'Orientações para usar IA com responsabilidade acadêmica.'
    ],
    idealFor: [
      'Quem escreve artigos, projetos ou trabalhos acadêmicos.',
      'Quem trava para transformar ideias em texto.',
      'Quem quer revisar melhor sem depender só de inspiração.'
    ],
    offers: [
      {
        name: 'Pack acadêmico',
        summary: 'Comandos práticos para escrever e revisar com mais direção.'
      }
    ],
    faqs: [
      {
        question: 'Os prompts escrevem o trabalho por mim?',
        answer: 'Não. Eles ajudam você a organizar, revisar e melhorar sua escrita mantendo sua autoria.'
      }
    ]
  },
  {
    id: 'templates-academicos-abnt',
    slug: 'templates-academicos-abnt',
    lineSlug: 'academico',
    type: 'digital',
    name: 'Kit Acadêmico ABNT',
    summary: 'Templates planejados para ajudar você a organizar trabalhos acadêmicos com menos retrabalho.',
    promise: 'Se você perde tempo ajustando formatação e organização, este kit vai ajudar a começar seus trabalhos com uma base mais clara.',
    formatLabel: 'Templates acadêmicos editáveis',
    deliveryLabel: 'Material planejado para uma próxima etapa',
    checkoutLabel: 'Em breve',
    status: 'planejado',
    hotmartUrl: '',
    benefits: [
      'Economize tempo na organização visual do trabalho.',
      'Comece com uma base mais clara para escrita acadêmica.',
      'Reduza retrabalho em formatação e estrutura de documentos.',
      'Tenha modelos prontos para adaptar ao seu contexto.'
    ],
    deliverables: [
      'Modelos editáveis para trabalhos acadêmicos.',
      'Checklist de revisão de formatação.',
      'Orientações de uso para adaptar os arquivos.'
    ],
    idealFor: [
      'Quem faz trabalhos acadêmicos com frequência.',
      'Quem perde tempo organizando documento do zero.',
      'Quem quer uma base pronta para escrever com mais foco.'
    ],
    offers: [
      {
        name: 'Planejado',
        summary: 'Kit em preparação para uma próxima fase do Meridiano.'
      }
    ],
    faqs: [
      {
        question: 'O kit já está disponível?',
        answer: 'Ainda não. Ele está planejado para uma próxima etapa.'
      }
    ]
  },
  {
    id: 'planner-financeiro',
    slug: 'planner-financeiro',
    lineSlug: 'vida-adulta',
    type: 'digital',
    name: 'Planner Financeiro',
    summary: 'Um planner simples para organizar gastos, metas e decisões financeiras com mais clareza.',
    promise: 'Se você quer se organizar melhor, mas sente que o dinheiro escapa sem controle, aqui encontra uma ferramenta para enxergar sua vida financeira com mais calma.',
    formatLabel: 'Planner digital para organização financeira',
    deliveryLabel: 'Acesso digital após publicação',
    checkoutLabel: 'R$ 27–57',
    hotmartUrl: '',
    benefits: [
      'Veja para onde seu dinheiro está indo.',
      'Organize contas, gastos e metas em um só lugar.',
      'Tome decisões com menos culpa e mais clareza.',
      'Crie uma rotina simples para acompanhar sua vida financeira.'
    ],
    deliverables: [
      'Planner de gastos mensais.',
      'Área para metas e prioridades.',
      'Checklist de revisão financeira.',
      'Orientações para usar o material sem complicação.'
    ],
    idealFor: [
      'Quem quer começar a se organizar financeiramente.',
      'Quem sente que perde controle da rotina de gastos.',
      'Quem precisa de uma ferramenta simples e aplicável.'
    ],
    offers: [
      {
        name: 'Planner inicial',
        summary: 'Um material direto para começar a organizar sua vida financeira.'
      }
    ],
    faqs: [
      {
        question: 'Preciso entender de finanças?',
        answer: 'Não. O planner foi pensado para organização básica e prática do dia a dia.'
      }
    ]
  },
  {
    id: 'prompts-de-organizacao',
    slug: 'prompts-de-organizacao',
    lineSlug: 'vida-adulta',
    type: 'digital',
    name: 'Prompts de Organização',
    summary: 'Prompts planejados para ajudar você a organizar rotina, tarefas, estudos e prioridades.',
    promise: 'Se você sente que tem muita coisa para fazer e pouca clareza para priorizar, este pack vai ajudar a transformar caos em próximos passos.',
    formatLabel: 'Pack de prompts para rotina e organização',
    deliveryLabel: 'Material planejado para uma próxima etapa',
    checkoutLabel: 'Em breve',
    status: 'planejado',
    hotmartUrl: '',
    benefits: [
      'Organize tarefas e prioridades com mais clareza.',
      'Use IA para criar planos simples de execução.',
      'Transforme excesso de demandas em ações menores.',
      'Ganhe apoio prático para rotina, estudos e planejamento.'
    ],
    deliverables: [
      'Prompts para planejamento semanal.',
      'Prompts para organizar tarefas e prioridades.',
      'Prompts para estudar, revisar e manter constância.'
    ],
    idealFor: [
      'Quem se sente sobrecarregado.',
      'Quem quer usar IA para se organizar melhor.',
      'Quem precisa transformar intenção em rotina prática.'
    ],
    offers: [
      {
        name: 'Planejado',
        summary: 'Pack em preparação para uma próxima etapa do Meridiano.'
      }
    ],
    faqs: [
      {
        question: 'Esse material já está à venda?',
        answer: 'Ainda não. Ele está planejado para uma próxima fase.'
      }
    ]
  },
  {
    id: 'guia-do-poliglota',
    slug: 'guia-do-poliglota',
    lineSlug: 'idiomas',
    languageSlug: 'projeto-poliglota',
    type: 'digital',
    name: 'Guia do Poliglota',
    summary: 'Um guia planejado para organizar estudos de idiomas com mais método e menos confusão.',
    promise: 'Se você quer aprender mais de um idioma, mas se perde entre aplicativos, métodos e metas, este guia vai ajudar a montar um caminho mais claro.',
    formatLabel: 'Guia prático para estudo de idiomas',
    deliveryLabel: 'Material planejado para uma próxima etapa',
    checkoutLabel: 'Em breve',
    status: 'planejado',
    hotmartUrl: '',
    benefits: [
      'Entenda como organizar idiomas por prioridade.',
      'Crie uma rotina de estudo mais realista.',
      'Evite trocar de método toda semana.',
      'Transforme estudo solto em prática consistente.'
    ],
    deliverables: [
      'Guia de organização de estudos.',
      'Modelo de rotina para idiomas.',
      'Checklist de revisão de metas e prática.'
    ],
    idealFor: [
      'Quem estuda mais de um idioma.',
      'Quem começa animado e perde constância.',
      'Quem quer aprender com mais direção.'
    ],
    offers: [
      {
        name: 'Planejado',
        summary: 'Guia em preparação para uma próxima etapa do Meridiano.'
      }
    ],
    faqs: [
      {
        question: 'Serve para qualquer idioma?',
        answer: 'Sim. O foco é método, organização e rotina de estudo.'
      }
    ]
  },
  {
    id: 'pack-de-prompts-para-idiomas',
    slug: 'pack-de-prompts-para-idiomas',
    lineSlug: 'idiomas',
    languageSlug: 'projeto-poliglota',
    type: 'digital',
    name: 'Prompts para Idiomas',
    summary: 'Prompts planejados para praticar vocabulário, conversação, escrita e revisão em qualquer idioma.',
    promise: 'Se você quer usar IA para estudar idiomas, mas não sabe como transformar isso em prática real, este pack vai te dar comandos prontos para começar.',
    formatLabel: 'Pack de prompts para estudo de idiomas',
    deliveryLabel: 'Material planejado para uma próxima etapa',
    checkoutLabel: 'Em breve',
    status: 'planejado',
    hotmartUrl: '',
    benefits: [
      'Pratique escrita, vocabulário e conversação com mais direção.',
      'Use IA como parceira de estudo sem ficar inventando comandos do zero.',
      'Adapte prompts para diferentes níveis e objetivos.',
      'Crie exercícios práticos para manter constância.'
    ],
    deliverables: [
      'Prompts para conversação simulada.',
      'Prompts para vocabulário e revisão.',
      'Prompts para escrita, correção e prática diária.'
    ],
    idealFor: [
      'Quem quer estudar idiomas com apoio de IA.',
      'Quem precisa praticar mais, mas não sabe como.',
      'Quem quer transformar estudo em uso real.'
    ],
    offers: [
      {
        name: 'Planejado',
        summary: 'Pack em preparação para uma próxima fase do Meridiano.'
      }
    ],
    faqs: [
      {
        question: 'Posso usar com qualquer idioma?',
        answer: 'Sim. Os prompts foram pensados para adaptação em diferentes línguas e níveis.'
      }
    ]
  }
];

const lineMap = new Map(rawLines.map((line) => [line.slug, { ...line, href: `/${line.slug}` }]));
const languageMap = new Map(rawLanguages.map((language) => [language.slug, { ...language, href: `/idiomas/${language.slug}` }]));

const enrichProduct = (product) => {
  const line = lineMap.get(product.lineSlug) || null;
  const language = product.languageSlug ? languageMap.get(product.languageSlug) || null : null;
  const href = language
    ? `/idiomas/${language.slug}/${product.slug}`
    : `/${product.lineSlug}/${product.slug}`;

  return {
    ...product,
    href,
    line,
    language
  };
};

export const products = rawProducts.map(enrichProduct);

export const productLines = Array.from(lineMap.values());
export const languagePages = Array.from(languageMap.values());

export const getLineBySlug = (lineSlug) => lineMap.get(lineSlug) || null;
export const getLanguageBySlug = (languageSlug) => languageMap.get(languageSlug) || null;

export const getProductsForLine = (lineSlug) =>
  products.filter((product) => product.lineSlug === lineSlug);

export const getProductsForLanguage = (languageSlug) =>
  products.filter((product) => product.languageSlug === languageSlug);

export const getProductByRoute = ({ lineSlug, languageSlug, productSlug } = {}) =>
  products.find((product) => {
    if (languageSlug) {
      return product.languageSlug === languageSlug && product.slug === productSlug;
    }

    return product.lineSlug === lineSlug && product.slug === productSlug;
  }) || null;

export const getRelatedProducts = (productId, limit = 3) => {
  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) return [];

  return products
    .filter((product) => product.id !== productId && product.lineSlug === currentProduct.lineSlug)
    .slice(0, limit);
};

export const getNavigationCollections = () =>
  productLines.map((line) => ({
    ...line,
    items: getProductsForLine(line.slug)
  }));

