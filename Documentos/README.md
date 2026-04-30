# O MERIDIANO — README MASTER

## Visão geral

O Meridiano é um ecossistema digital de orientação prática voltado para pessoas que precisam tomar decisões melhores em carreira, estudos, idiomas, uso de IA e organização da vida.

Este projeto não é apenas um site institucional ou catálogo de produtos.
Ele é uma experiência guiada de decisão.

A função principal do site é levar o usuário de:

**confusão → clareza → decisão → ação**

Toda alteração técnica, visual ou textual deve preservar:

* clareza de navegação;
* coerência de marca;
* direcionamento para próximo passo;
* conversão sem estética genérica de infoproduto.

---

# POSICIONAMENTO ATUAL

O Meridiano já passou por uma reestruturação.

Não é mais centrado em “vida internacional”.

Hoje o eixo central é:

> clareza para decidir o próximo passo nos estudos, na carreira, nos idiomas e na rotina.

A marca deve soar:

* clara;
* direta;
* humana;
* estratégica;
* útil;
* orientada à ação.

Evitar:

* marketing vazio;
* linguagem técnica para cliente final;
* aparência de catálogo frio;
* estética padrão infoproduto.

Princípios:

**Clareza > Motivação**
**Direção > Inspiração**
**Prática > Promessa abstrata**

---

# STACK TÉCNICA

* React
* Vite
* Tailwind CSS
* React Router DOM
* Framer Motion
* Lucide React
* shadcn/ui (quando aplicável)
* PocketBase (auth, leads e formulários)

---

# ESTRUTURA PRINCIPAL

```txt id="c9vbd6"
src/
 ├── components/
 ├── data/
 ├── pages/
 │    ├── catalog/
 │    ├── recursos/
 │    └── ...
 ├── services/
 ├── App.jsx
 └── main.jsx
```

Arquivos mais importantes:

* `src/App.jsx`
* `src/data/catalog.js`
* `src/pages/HomePage.jsx`
* `src/pages/catalog/LineHubPage.jsx`
* `src/pages/catalog/LanguageHubPage.jsx`
* `src/pages/catalog/ProductLandingPage.jsx`
* `src/components/Header.jsx`
* `src/components/Footer.jsx`
* `src/components/ProductCard.jsx`
* `src/components/ConversionPageTemplate.jsx`

---

# LÓGICA DE NAVEGAÇÃO

Fluxo principal:

**Home → Linha → Produto → Conversão**

Fluxo alternativo:

**Conteúdo/Anúncio → Produto → Conversão**

Toda página deve responder:

> qual é o próximo passo do usuário?

Nenhuma página pode terminar sem CTA claro.

---

# ROTAS PRINCIPAIS

* `/`
* `/sobre`
* `/contato`
* `/login`
* `/signup` (se ainda estiver ativo)
* `/perfil`
* `/prompts`
* `/recursos/*`
* `/carreira`
* `/academico`
* `/idiomas`
* `/idiomas/:languageSlug`
* `/idiomas/:languageSlug/:productSlug`
* `/vida-adulta`
* `/:lineSlug`
* `/:lineSlug/:productSlug`

Não remover rotas legadas ou redirects sem revisar impacto.

---

# LINHAS ESTRATÉGICAS

## 1. Carreira

Posicionamento profissional, candidatura, currículo, LinkedIn, decisões de carreira.

## 2. Acadêmico

Pesquisa, escrita, mestrado, Lattes, organização acadêmica.

## 3. Idiomas

Método de estudo, constância, inglês profissional, mandarim, poliglota.

## 4. Ferramentas e Organização

Linha ainda pode existir tecnicamente como `/vida-adulta`, mas a comunicação pública deve usar Ferramentas e Organização.

## 5. Prompts com IA

Linha de entrada, captação e apoio prático para estudo, escrita, revisão e organização.

---

# PADRÕES DE COPY

Sempre:

* começar pela dor, objetivo ou próximo passo;
* falar em clareza, método e prática;
* usar linguagem humana.

Nunca:

* começar descrevendo estrutura do produto;
* usar termos técnicos para cliente final;
* soar como developer.

---

# PADRÕES DE UX

Objetivo:

**reduzir carga mental + orientar próximo passo**

Princípios:

* uma decisão por vez;
* CTA claro em toda página;
* cards de leitura rápida;
* nenhuma página sem continuação;
* mobile first.

---

# DESIGN SYSTEM

Base visual: neo-brutalist.

Preservar:

* `border-thick`
* `neo-shadow`
* `font-black`
* `rounded-xl`
* `hover:-translate-y-1`
* fundo claro
* cores vibrantes

---

# PADRÕES DE CÓDIGO

* usar Tailwind;
* usar `<Link to="">` em navegação interna;
* preservar imports e rotas;
* manter fallback para dados vazios;
* evitar lógica excessiva no JSX;
* garantir responsividade;
* validar PocketBase.

---

# PONTOS SENSÍVEIS

Nunca alterar sem revisão:

* `/perfil`
* auth/login/signup
* redirects antigos
* `catalog.js`
* links de CTA
* `/vida-adulta` sem redirect

---

# MISSÃO

Não reinventar o Meridiano.

A missão é:

> evoluir a base atual com mais clareza, mais coerência e mais conversão.

Sempre priorizar:

**clareza para o usuário + coerência da marca + segurança técnica**

