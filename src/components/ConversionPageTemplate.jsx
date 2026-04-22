import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConversionPageTemplate = ({
  lineName,
  languageName,
  title,
  price,
  description,
  metaDescription,
  promise,
  formatLabel = 'Produto digital',
  deliveryLabel = 'Entrega após a compra',
  checkoutLabel,
  benefits = [],
  deliverables = [],
  idealFor = [],
  offers = [],
  faqs = [],
  ctaLabel = 'Comprar na Hotmart',
  ctaHref,
  ctaNote,
  secondaryCtaLabel = 'Falar comigo',
  secondaryCtaHref = '/contato',
  backHref,
  backLabel = 'Voltar'
}) => {
  const availabilityCopy = checkoutLabel || (ctaHref ? 'Checkout ativo' : 'Link Hotmart em configuração');
  const helperCopy = ctaNote || (
    ctaHref
      ? 'Pagamento seguro e acesso liberado após a compra.'
      : 'Esta página já está pronta para receber o link do Hotmart assim que o produto for publicado.'
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <Helmet>
        <title>{`${title} - O Meridiano`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {lineName && (
              <span className="bg-secondary border-[3px] border-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-[0.18em]">
                {lineName}
              </span>
            )}
            {languageName && (
              <span className="bg-primary border-[3px] border-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-[0.18em]">
                {languageName}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">{title}</h1>
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto bg-secondary border-[3px] border-black p-6 rounded-2xl neo-shadow">
            {description}
          </p>

          {promise && (
            <p className="mt-6 max-w-3xl mx-auto text-lg font-medium text-muted-foreground">
              {promise}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow"
          >
            <h2 className="text-3xl font-black font-heading mb-8">O que você vai receber</h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary border-[3px] border-black rounded-3xl p-10 neo-shadow-lg sticky top-24"
          >
            <div className="space-y-4 mb-8">
              {price && (
                <div className="text-center">
                  <div className="text-6xl font-black font-heading mb-2">{price}</div>
                  <p className="text-xl font-bold">Pagamento único</p>
                </div>
              )}

              <div className="bg-black text-primary border-[3px] border-black rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Formato</p>
                <p className="text-xl font-bold">{formatLabel}</p>
              </div>

              <div className="bg-background border-[3px] border-black rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Entrega</p>
                <p className="text-lg font-bold">{deliveryLabel}</p>
              </div>

              <div className="bg-background border-[3px] border-black rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Checkout</p>
                <p className="text-lg font-bold">{availabilityCopy}</p>
              </div>
            </div>

            {ctaHref ? (
              <Button
                asChild
                className="w-full h-16 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#C7CEEA] transition-all font-black text-xl mb-4"
              >
                <a href={ctaHref} target="_blank" rel="noreferrer">
                  <ShoppingCart className="mr-2 w-6 h-6" />
                  {ctaLabel}
                </a>
              </Button>
            ) : (
              <Button
                disabled
                className="w-full h-16 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow font-black text-xl mb-4"
              >
                <ShoppingCart className="mr-2 w-6 h-6" />
                {ctaLabel}
              </Button>
            )}

            <Button
              asChild
              variant="secondary"
              className="w-full h-14 bg-background text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-background/90 hover:-translate-y-1 transition-all font-black text-lg"
            >
              <Link to={secondaryCtaHref}>
                {secondaryCtaLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <p className="text-center font-bold text-sm mt-4">{helperCopy}</p>

            {backHref && (
              <div className="text-center mt-6">
                <Link to={backHref} className="inline-flex items-center gap-2 font-black border-b-[3px] border-black">
                  {backLabel}
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {offers.length > 0 && (
          <div className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow">
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Estrutura de oferta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {offers.map((offer) => (
                <div key={offer.name} className="bg-secondary border-[3px] border-black rounded-2xl p-6">
                  <h3 className="text-2xl font-black font-heading mb-3">{offer.name}</h3>
                  <p className="font-medium text-base">{offer.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {deliverables.length > 0 && (
          <div className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow">
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Entregáveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {idealFor.length > 0 && (
          <div className="mt-16 bg-secondary border-[3px] border-black rounded-3xl p-10 neo-shadow">
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Ideal para</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idealFor.map((item) => (
                <div key={item} className="bg-background border-[3px] border-black rounded-2xl p-6">
                  <p className="text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {faqs.length > 0 && (
          <div className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow">
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Perguntas frequentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-black mb-2">{faq.question}</h3>
                  <p className="text-lg font-medium text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversionPageTemplate;
