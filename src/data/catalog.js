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
    description: 'Se você quer organizar estudos, rotina e produtividade, mas sente que está sempre apagando incêndio, aqui encontra ferramentas práticas para retomar o controle.',
    promise: 'Se você quer produzir melhor sem caos, aqui encontra apoio prático para organizar sua rotina com clareza e constância.',
    benefits: [
      'Organize tarefas, metas e entregas sem complicação.',
      'Use ferramentas para estudar e produzir melhor.',
      'Use materiais prontos que economizam tempo e energia mental.',
      'Ganhe mais clareza para manter uma rotina sustentável.'
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
  }
];

const lineMap = new Map(rawLines.map((line) => [line.slug, { ...line, href: `/${line.slug}` }]));
const languageMap = new Map(rawLanguages.map((language) => [language.slug, { ...language, href: `/idiomas/${language.slug}` }]));

export const products = [];

export const productLines = Array.from(lineMap.values());
export const languagePages = Array.from(languageMap.values());

export const getLineBySlug = (lineSlug) => lineMap.get(lineSlug) || null;
export const getLanguageBySlug = (languageSlug) => languageMap.get(languageSlug) || null;

export const getProductsForLine = () => [];
export const getProductsForLanguage = () => [];

export const getProductByRoute = () => null;
export const getRelatedProducts = () => [];

export const getNavigationCollections = () =>
  productLines.map((line) => ({
    ...line,
    items: []
  }));