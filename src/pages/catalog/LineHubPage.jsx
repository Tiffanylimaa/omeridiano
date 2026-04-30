import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard.jsx';
import { Button } from '@/components/ui/button';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import { getLineBySlug, getProductsForLine, languagePages } from '@/data/catalog.js';
import { fixPt } from '@/lib/copy.js';

const lineCtaMap = {
  carreira: 'Encontrar meu próximo passo profissional',
  academico: 'Organizar meu próximo passo acadêmico',
  idiomas: 'Aprender idiomas com método',
  'vida-adulta': 'Melhorar minha organização e produtividade'
};

const LineHubPage = () => {
  const { lineSlug } = useParams();
  const line = getLineBySlug(lineSlug);

  if (!line) {
    return <NotFoundPage />;
  }

  const products = getProductsForLine(line.slug);
  const serviceProducts = products.filter((product) => product.type === 'service');
  const digitalProducts = products.filter((product) => product.type !== 'service');

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>{`${fixPt(line.title)} | O Meridiano`}</title>
        <meta name="description" content={fixPt(line.description)} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center bg-primary border-[3px] border-black px-4 py-2 text-sm font-black uppercase tracking-[0.2em] mb-6">
            Clareza para decidir com método
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">{fixPt(line.title)}</h1>
          <p className="text-xl md:text-2xl font-bold max-w-4xl bg-secondary border-[3px] border-black p-6 rounded-2xl neo-shadow">
            {fixPt(line.description)}
          </p>
          <p className="text-lg font-medium text-muted-foreground max-w-4xl mt-6">
            {fixPt(line.promise)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow">
            <p className="text-sm font-black uppercase tracking-[0.18em] mb-2">Por onde você pode começar</p>
            <p className="text-5xl font-black font-heading">{products.length}</p>
          </div>
          <div className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow">
            <p className="text-sm font-black uppercase tracking-[0.18em] mb-2">Materiais prontos</p>
            <p className="text-5xl font-black font-heading">{digitalProducts.length}</p>
          </div>
          <div className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow">
            <p className="text-sm font-black uppercase tracking-[0.18em] mb-2">Apoio individual</p>
            <p className="text-5xl font-black font-heading">{serviceProducts.length}</p>
          </div>
        </div>

        <div className="bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow mb-16">
          <h2 className="text-3xl font-black font-heading mb-8 text-center">O que você consegue destravar aqui</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {line.benefits.map((benefit) => (
              <div key={benefit} className="bg-secondary border-[3px] border-black rounded-2xl p-6">
                <p className="text-lg font-bold">{fixPt(benefit)}</p>
              </div>
            ))}
          </div>
        </div>

        {line.slug === 'idiomas' && (
          <div className="mb-16">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-heading">Aprenda idiomas com direção e constância</h2>
                <p className="text-lg font-medium text-muted-foreground">Escolha o idioma que faz sentido para o seu momento e avance com um plano claro.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {languagePages.map((language) => (
                <Link
                  key={language.slug}
                  to={language.href}
                  className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow hover:-translate-y-1 transition-all"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground mb-3">Escolha por onde começar</p>
                  <h3 className="text-3xl font-black font-heading mb-3">{fixPt(language.name)}</h3>
                  <p className="font-medium">{fixPt(language.description)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {digitalProducts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-heading">Comece pelo que está te travando hoje</h2>
                <p className="text-lg font-medium text-muted-foreground">Materiais diretos para você aplicar com mais segurança e avançar de verdade.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {digitalProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.summary}
                  price={product.checkoutLabel}
                  href={product.href}
                  delay={index * 0.06}
                />
              ))}
            </div>
          </div>
        )}

        {serviceProducts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black font-heading">Receba apoio para avançar com mais segurança</h2>
                <p className="text-lg font-medium text-muted-foreground">Se você quer parar de travar nas mesmas dúvidas, aqui encontra orientação prática para decidir melhor e agir com clareza.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {serviceProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.summary}
                  price={product.checkoutLabel}
                  href={product.href}
                  delay={index * 0.06}
                  ctaLabel="Ver se esse apoio faz sentido"
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-muted-foreground mb-6">
            Se você ainda não sabe qual caminho faz mais sentido para o seu momento, eu te ajudo a escolher o próximo passo com clareza.
          </p>
          <Button asChild className="bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 transition-all font-black h-14 px-8 text-lg">
            <Link to="/contato">
              {lineCtaMap[line.slug] || 'Tirar dúvidas'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LineHubPage;
