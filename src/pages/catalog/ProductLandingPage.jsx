import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard.jsx';
import ConversionPageTemplate from '@/components/ConversionPageTemplate.jsx';
import FavoriteButton from '@/components/FavoriteButton.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import { getProductByRoute, getRelatedProducts } from '@/data/catalog.js';
import { usePageHistory, useFavorites } from '@/hooks/use-user-storage.js';

const ProductLandingPage = () => {
  const params   = useParams();
  const product  = getProductByRoute(params);

  const { trackPageVisit }         = usePageHistory();
  const { toggleFavorite, isFavorite } = useFavorites();

  // Registra visita ao montar a página
  useEffect(() => {
    if (!product) return;
    trackPageVisit({
      id:    product.id,
      title: product.name,
      href:  product.href,
      line:  product.line?.shortTitle || '',
    });
  }, [product?.id]);

  if (!product) return <NotFoundPage />;

  const relatedProducts = getRelatedProducts(product.id, 3);
  const backHref  = product.language ? product.language.href : product.line.href;
  const backLabel = product.language ? `Voltar para ${product.language.name}` : `Voltar para ${product.line.title}`;

  const favoriteProduct = {
    id:    product.id,
    title: product.name,
    href:  product.href,
    line:  product.line?.shortTitle || '',
  };

  return (
    <>
      <ConversionPageTemplate
        lineName={product.line.shortTitle}
        languageName={product.language?.name}
        title={product.name}
        description={product.summary}
        metaDescription={product.summary}
        promise={product.promise}
        formatLabel={product.formatLabel}
        deliveryLabel={product.deliveryLabel}
        checkoutLabel={product.checkoutLabel}
        benefits={product.benefits}
        deliverables={product.deliverables}
        idealFor={product.idealFor}
        offers={product.offers}
        faqs={product.faqs}
        ctaHref={product.hotmartUrl}
        ctaLabel={product.type === 'service' ? 'Quero conversar sobre isso' : 'Quero começar por aqui'}
        secondaryCtaLabel="Tirar minhas dúvidas"
        secondaryCtaHref="/sobre#contato"
        backHref={backHref}
        backLabel={backLabel}
        /* Passa o botão de favoritar para o template renderizar ao lado do breadcrumb */
        favoriteSlot={
          <FavoriteButton
            productId={product.id}
            product={favoriteProduct}
            isFavorite={isFavorite(product.id)}
            onToggle={toggleFavorite}
          />
        }
      />

      {relatedProducts.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                Se isso faz sentido para você, comece por aqui também
              </h2>
              <p className="text-lg font-medium text-muted-foreground">
                Outros materiais e apoios que podem ajudar no seu próximo passo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  name={relatedProduct.name}
                  description={relatedProduct.summary}
                  price={relatedProduct.checkoutLabel}
                  href={relatedProduct.href}
                  delay={index * 0.06}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductLandingPage;
