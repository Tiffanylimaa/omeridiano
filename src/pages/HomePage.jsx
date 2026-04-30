import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, HelpCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizSection from '@/components/QuizSection.jsx';
import { languagePages, productLines, products } from '@/data/catalog.js';

const expectedLanguageSlugs = ['ingles', 'frances', 'mandarim', 'russo', 'italiano', 'projeto-poliglota'];

const languageFallbackBySlug = {
  ingles: {
    slug: 'ingles',
    name: 'Inglês',
    href: '/idiomas/ingles',
    description: 'Se você quer aprender inglês com método, aqui encontra direção prática para estudar com consistência.'
  },
  frances: {
    slug: 'frances',
    name: 'Francês',
    href: '/idiomas/frances',
    description: 'Se você quer começar francês com clareza, aqui encontra um caminho prático para avançar sem confusão.'
  },
  mandarim: {
    slug: 'mandarim',
    name: 'Mandarim',
    href: '/idiomas/mandarim',
    description: 'Se você quer aprender mandarim, aqui encontra uma progressão mais clara para estudar com constância.'
  },
  russo: {
    slug: 'russo',
    name: 'Russo',
    href: '/idiomas/russo',
    description: 'Se você quer aprender russo, aqui encontra direção para começar com método.'
  },
  italiano: {
    slug: 'italiano',
    name: 'Italiano',
    href: '/idiomas/italiano',
    description: 'Se você quer aprender italiano, aqui encontra uma base prática para evoluir com clareza.'
  },
  'projeto-poliglota': {
    slug: 'projeto-poliglota',
    name: 'Projeto Poliglota',
    href: '/idiomas/projeto-poliglota',
    description: 'Se você aprende um ou mais idiomas, aqui encontra um método para estudar melhor em qualquer língua.'
  }
};

const HomePage = () => {
  const location = useLocation();

  const fallbackLanguagesFromProducts = Array.from(
    new Map(
      products
        .filter((product) => product.lineSlug === 'idiomas' && product.language)
        .map((product) => [product.language.slug, product.language])
    ).values()
  );

  const languageSource = languagePages.length > 0 ? languagePages : fallbackLanguagesFromProducts;
  const languageBySlug = new Map(languageSource.map((language) => [language.slug, language]));

  const languagesToRender = expectedLanguageSlugs
    .map((slug) => languageBySlug.get(slug) || languageFallbackBySlug[slug])
    .filter(Boolean);

  const featuredLanguage =
    languagesToRender.find((language) => language.slug === 'projeto-poliglota') || null;

  const standardLanguages = languagesToRender.filter(
    (language) => language.slug !== 'projeto-poliglota'
  );

  const starterProducts = [
    products.find((product) => product.id === 'cv-em-ingles-ats'),
    products.find((product) => product.id === 'checklist-para-aplicacao-de-mestrado'),
    products.find((product) => product.id === 'guia-do-poliglota')
  ].filter(Boolean);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);

      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const scrollToSection = (sectionId, offset = 88) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>O Meridiano | Tome decisões melhores sobre estudos, carreira e idiomas</title>
        <meta
          name="description"
          content="Se você está perdido sobre o que fazer na graduação, na pós ou na carreira, aqui você encontra direção clara e prática para avançar sem confusão."
        />
      </Helmet>

      <section className="relative flex items-center justify-center bg-background border-b-[3px] border-black py-8 md:py-8 min-h-[70vh]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-darken bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-primary border-[3px] border-black px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            Clareza para sair da dúvida e entrar em ação
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-4 text-foreground tracking-tighter"
          >
            Tome decisões melhores sobre seus estudos, carreira e idiomas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg font-bold mb-8 text-foreground max-w-3xl mx-auto leading-snug"
          >
            Se você está perdido sobre o que fazer na graduação, na pós ou na carreira, aqui você encontra
            direção clara e prática para avançar sem confusão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('comece-aqui', 88)}
              className="bg-background text-black border-[3px] border-black rounded-none neo-shadow hover-lift font-black h-12 px-7 text-base"
            >
              Conhecer os produtos
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection('quiz')}
              className="bg-primary text-black border-[3px] border-black rounded-none neo-shadow hover-lift font-black h-12 px-7 text-base"
            >
              <HelpCircle className="w-4 h-4 mr-2" strokeWidth={2.5} />
              Encontrar meu próximo passo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <div className="mt-7 w-full max-w-4xl mx-auto">
            <div className="hidden md:block relative min-h-[120px]">
              <motion.img
                src="/gold-seal.svg"
                alt="Selo de credencial O Meridiano"
                width={200}
                height={200}
                className="absolute -left-20 bottom-4 shrink-0 -rotate-10"
                initial={{ opacity: 0, scale: 1.4, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{ duration: 0.45, delay: 0.55, type: 'spring', bounce: 0.45 }}
              />

              <motion.p
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.85 }}
                className="absolute left-[132px] right-0 top-[30px] text-xs font-medium text-muted-foreground leading-snug text-left"
              >
                <strong className="font-black text-foreground">PUC-Rio, ECEME, PUC Minas</strong> - recrutamento,
                pesquisa, comércio exterior, dados e IA aplicada.{' '}
                <Link to="/sobre" className="font-black text-foreground underline underline-offset-4 whitespace-nowrap">
                  Conheça a equipe →
                </Link>
              </motion.p>
            </div>

            <div className="md:hidden flex items-center justify-center gap-3">
              <motion.img
                src="/gold-seal.svg"
                alt="Selo de credencial O Meridiano"
                width={64}
                height={64}
                className="shrink-0"
                initial={{ opacity: 0, scale: 1.4, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.45, delay: 0.55, type: 'spring', bounce: 0.45 }}
              />

              <motion.p
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.85 }}
                className="text-[11px] font-medium text-muted-foreground leading-snug text-left"
              >
                <strong className="font-black text-foreground">PUC-Rio, ECEME, PUC Minas</strong> - recrutamento,
                pesquisa, comércio exterior, dados e IA aplicada.{' '}
                <Link to="/sobre" className="font-black text-foreground underline underline-offset-4 whitespace-nowrap">
                  Conheça a equipe →
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        id="prompts-home"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Link
          to="/prompts"
          className="group flex items-center gap-4 bg-black border-b-[3px] border-black px-5 py-3.5 hover:bg-zinc-900 transition-colors duration-200 flex-wrap sm:flex-nowrap"
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary/70 leading-none mb-0.5">
                Novo · Acesso imediato
              </p>
              <p className="text-sm font-black text-white leading-snug truncate">
                Prompts prontos para usar com IA - estudos, carreira e escrita acadêmica
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-black text-primary border border-primary/40 rounded px-2.5 py-1 hidden sm:block">
              A partir de R$&nbsp;27
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary text-black font-black text-xs uppercase tracking-[0.08em] px-3.5 py-2 rounded-lg group-hover:-translate-y-0.5 transition-transform duration-200">
              Ver packs
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      </motion.div>

      <section id="comece-aqui" className="py-7 md:py-9 bg-background border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-black font-heading mb-1">
              Comece por aqui
            </h2>
            <p className="text-sm font-bold max-w-2xl text-muted-foreground">
              Estes são os primeiros caminhos do Meridiano para sair da dúvida e transformar intenção em ação prática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {starterProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-card border-[3px] border-black rounded-2xl p-4 neo-shadow flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex-1">
                  <p className="inline-flex bg-primary border-[3px] border-black rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] mb-3">
                    {product.checkoutLabel}
                  </p>
                  <h3 className="text-lg md:text-xl font-black font-heading mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground leading-snug">
                    {product.summary}
                  </p>
                </div>

                <Button
                  asChild
                  className="mt-4 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 font-black h-9 text-sm"
                >
                  <Link to={product.href}>
                    {product.ctaLabel || 'Ver caminho'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="linhas" className="py-7 md:py-9 bg-background border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-black font-heading mb-1">
              Comece pelo que está te travando hoje
            </h2>
            <p className="text-sm font-bold max-w-xl text-muted-foreground">
              Se você quer avançar, mas está sem direção, aqui encontra opções práticas para sair da dúvida.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {productLines.map((line, index) => (
              <motion.div
                key={line.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-card border-[3px] border-black rounded-2xl p-3.5 neo-shadow flex flex-col transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="text-base font-black font-heading mb-1.5">{line.shortTitle}</h3>
                <p className="font-medium text-xs flex-1 text-muted-foreground leading-snug">{line.description}</p>

                <Button
                  asChild
                  className="mt-3 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 font-black h-8 text-xs"
                >
                  <Link to={line.href}>
                    Ver opções
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-7 md:py-9 bg-background border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-black font-heading mb-1">
              Escolha um idioma para avançar com método
            </h2>
            <p className="text-sm font-bold max-w-xl text-muted-foreground">
              Se você quer aprender melhor, aqui encontra caminhos práticos para estudar com consistência.
            </p>
          </div>

          {featuredLanguage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-3"
            >
              <Link
                to={featuredLanguage.href}
                className="group block bg-primary border-[3px] border-black rounded-2xl p-3.5 neo-shadow hover:-translate-y-1 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                  <div className="lg:w-14 shrink-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-black/60 mb-1.5 leading-tight">
                      Para estudar melhor em qualquer idioma
                    </p>
                    <div className="w-2.5 h-8 bg-black rounded-full" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-black font-heading mb-0.5">
                      {featuredLanguage.name}
                    </h3>
                    <p className="text-xs font-medium max-w-4xl text-black/70 leading-snug">
                      {featuredLanguage.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center bg-black text-primary border-[3px] border-black rounded-xl px-3.5 h-9 font-black text-xs">
                      Ver método completo
                      <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {standardLanguages.map((language, index) => (
              <motion.div
                key={language.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-secondary border-[3px] border-black rounded-2xl p-3.5 neo-shadow flex flex-col"
              >
                <h3 className="text-base font-black font-heading mb-1">{language.name}</h3>
                <p className="font-medium text-xs flex-1 text-muted-foreground leading-snug">
                  {language.description}
                </p>

                <Button
                  asChild
                  className="mt-3 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 font-black h-8 text-xs"
                >
                  <Link to={language.href}>
                    Ver por onde começar
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuizSection id="quiz" />
    </>
  );
};

export default HomePage;
