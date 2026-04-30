import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard.jsx';
import { Button } from '@/components/ui/button';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import { getLanguageBySlug, getProductsForLanguage } from '@/data/catalog.js';
import { fixPt } from '@/lib/copy.js';

const LanguageHubPage = () => {
  const { languageSlug } = useParams();
  const language = getLanguageBySlug(languageSlug);

  if (!language) {
    return <NotFoundPage />;
  }

  const products = getProductsForLanguage(language.slug);
  const multilingualProducts = language.slug === 'projeto-poliglota' ? [] : getProductsForLanguage('projeto-poliglota');

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>{`${fixPt(language.name)} | O Meridiano`}</title>
        <meta name="description" content={fixPt(language.description)} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Button
            asChild
            variant="secondary"
            className="bg-background text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-secondary h-12 px-5 font-black mb-8"
          >
            <Link to="/idiomas">
              <ArrowLeft className="w-4 h-4" />
              Voltar para idiomas
            </Link>
          </Button>

          <span className="inline-flex items-center bg-primary border-[3px] border-black px-4 py-2 text-sm font-black uppercase tracking-[0.2em] mb-6">
            Aprenda com mais confiança
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">{fixPt(language.name)}</h1>
          <p className="text-xl md:text-2xl font-bold max-w-4xl bg-secondary border-[3px] border-black p-6 rounded-2xl neo-shadow">
            {fixPt(language.description)}
          </p>
          <p className="text-lg font-medium text-muted-foreground max-w-4xl mt-6">
            {fixPt(language.focus)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {language.highlights.map((highlight) => (
            <div key={highlight} className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow">
              <p className="text-lg font-bold">{fixPt(highlight)}</p>
            </div>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-heading mb-8">Escolha o que vai te fazer avançar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.summary}
                  price={product.checkoutLabel}
                  href={product.href}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow text-center">
            <h2 className="text-3xl font-black font-heading mb-4">Em breve, mais ajuda para você aprender este idioma</h2>
            <p className="text-lg font-medium max-w-3xl mx-auto">
              Se você quer aprender {fixPt(language.name.toLowerCase())}, mas ainda não encontrou um caminho que faça sentido, esta página vai reunir materiais práticos para estudar com mais clareza.
            </p>
          </div>
        )}

        {multilingualProducts.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-heading mb-8">Também pode destravar seu estudo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {multilingualProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.summary}
                  price={product.checkoutLabel}
                  href={product.href}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageHubPage;
