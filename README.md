Horizons Web Clean
Versao standalone e limpa do front-end, pronta para subir em um editor online que aceite projetos Vite/React.

O que ficou nesta versao
Estrutura principal com 4 linhas: carreira, idiomas, academico e vida adulta.
Landing pages individuais por produto.
Idiomas organizados por idioma:
/idiomas/ingles
/idiomas/mandarim
/idiomas/frances
/idiomas/russo
/idiomas/italiano
/idiomas/projeto-poliglota
Sitemap atualizado.
Redirecionamentos das URLs antigas mais importantes.
Onde colocar os links da Hotmart
Edite:

src/data/catalog.js
Cada produto aceita o campo:

hotmartUrl: 'https://checkout.hotmart.com/...'
Se o campo estiver vazio, o botao continua aparecendo como placeholder.

Arquivo principal do catalogo
Todo o conteudo estrutural desta versao esta centralizado em:

src/data/catalog.js
Para criar novos produtos depois, o caminho mais simples e:

Duplicar um objeto existente.
Ajustar lineSlug, languageSlug quando houver, slug, name e os blocos de copy.
Preencher hotmartUrl quando o checkout estiver publicado.
Rotas principais para visualizar
/
/carreira
/academico
/idiomas
/vida-adulta
Exemplos de landing pages:

/carreira/cv-em-ingles-ats
/carreira/consultoria-de-linkedin
/idiomas/ingles/ingles-profissional-imersao
/idiomas/mandarim/mandarim-hsk-1-2-3
/academico/templates-academicos-abnt
/vida-adulta/templates-de-organizacao
Observacao
Paginas de contato, login, signup e captacao continuam no pacote, mas dependem do endpoint PocketBase em /hcgi/platform.
Para visualizacao do design, as paginas publicas principais ja funcionam como referencia da estrutura final.