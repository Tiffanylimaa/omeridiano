import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUp, Check, ChevronDown, Link2, MessageCircle, Share2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { fixPt } from '@/lib/copy.js';

// ─── Barra de progresso de leitura ───────────
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-primary transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// ─── Botão voltar ao topo ─────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={scrollTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black text-primary border-[3px] border-black rounded-full neo-shadow hover:-translate-y-1 transition-all flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ─── Botão compartilhar ───────────────────────
const ShareButton = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-sm font-bold border-[2px] border-black rounded-xl px-4 py-2 bg-background hover:bg-secondary transition-all neo-shadow hover:-translate-y-0.5"
    >
      {copied ? (
        <><Check className="w-4 h-4" />Link copiado!</>
      ) : (
        <><Share2 className="w-4 h-4" />Compartilhar</>
      )}
    </button>
  );
};

// ─── FAQ com accordion ────────────────────────
const FaqAccordion = ({ faqs }) => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={faq.question} className="border-[3px] border-black rounded-2xl overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-card hover:bg-secondary transition-colors"
            aria-expanded={open === i}
          >
            <span className="text-lg font-black pr-4">{fixPt(faq.question)}</span>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t-[3px] border-black bg-secondary">
                  <p className="text-lg font-medium text-muted-foreground">{fixPt(faq.answer)}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// ─── Template principal ───────────────────────
const ConversionPageTemplate = ({
  lineName,
  languageName,
  title,
  description,
  metaDescription,
  promise,
  formatLabel,
  deliveryLabel,
  checkoutLabel,
  benefits = [],
  deliverables = [],
  idealFor = [],
  offers = [],
  faqs = [],
  ctaHref,
  ctaLabel = 'Quero começar por aqui',
  secondaryCtaLabel = 'Tirar minhas dúvidas',
  secondaryCtaHref = '/sobre#contato',
  backHref,
  backLabel,
  favoriteSlot = null,
}) => {
  const availabilityCopy = checkoutLabel || 'Disponível em breve';
  const helperCopy = ctaHref
    ? 'Pagamento seguro e acesso liberado logo após a compra.'
    : 'Este material ainda não está disponível. Entre em contato para saber mais.';

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <ReadingProgressBar />
      <BackToTop />

      <Helmet>
        <title>{`${fixPt(title)} - O Meridiano`}</title>
        <meta name="description" content={fixPt(metaDescription)} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        {backHref && (
          <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
            <Link
              to={backHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              {fixPt(backLabel)}
            </Link>
            <div className="flex items-center gap-2">
              {favoriteSlot}
              <ShareButton title={fixPt(title)} />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {lineName && (
              <span className="bg-secondary border-[3px] border-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-[0.18em]">
                {fixPt(lineName)}
              </span>
            )}
            {languageName && (
              <span className="bg-primary border-[3px] border-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-[0.18em]">
                {fixPt(languageName)}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">{fixPt(title)}</h1>
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto bg-secondary border-[3px] border-black p-6 rounded-2xl neo-shadow">
            {fixPt(description)}
          </p>
          {promise && (
            <p className="mt-6 max-w-3xl mx-auto text-lg font-medium text-muted-foreground">
              {fixPt(promise)}
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
            <h2 className="text-3xl font-black font-heading mb-8">O que isso muda para você</h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-lg font-medium">{fixPt(benefit)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary border-[3px] border-black rounded-3xl p-10 neo-shadow-lg lg:sticky lg:top-24"
          >
            <div className="space-y-4 mb-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black font-heading mb-2">{fixPt(availabilityCopy)}</div>
                <p className="text-xl font-bold">O próximo passo para você sair do lugar</p>
              </div>
              <div className="bg-black text-primary border-[3px] border-black rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">O que você vai receber</p>
                <p className="text-xl font-bold">{fixPt(formatLabel)}</p>
              </div>
              <div className="bg-background border-[3px] border-black rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Como você acessa</p>
                <p className="text-lg font-bold">{fixPt(deliveryLabel)}</p>
              </div>
            </div>

            {ctaHref ? (
              <Button asChild className="w-full h-16 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-xl mb-4">
                <a href={ctaHref} target="_blank" rel="noreferrer">
                  <ShoppingCart className="mr-2 w-6 h-6" />
                  {fixPt(ctaLabel)}
                </a>
              </Button>
            ) : (
              <Button asChild className="w-full h-16 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-xl mb-4">
                <Link to={secondaryCtaHref}>
                  <MessageCircle className="mr-2 w-6 h-6" />
                  {fixPt(ctaLabel)}
                </Link>
              </Button>
            )}

            <Button asChild variant="secondary" className="w-full h-14 bg-background text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-background/90 hover:-translate-y-1 transition-all font-black text-lg">
              <Link to={secondaryCtaHref}>
                {fixPt(secondaryCtaLabel)}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <p className="text-center font-bold text-sm mt-4">{helperCopy}</p>
          </motion.div>
        </div>

        {deliverables.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow"
          >
            <h2 className="text-3xl font-black font-heading mb-8 text-center">O que você recebe para aplicar sem dúvida</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-lg font-medium">{fixPt(item)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {idealFor.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-secondary border-[3px] border-black rounded-3xl p-10 neo-shadow"
          >
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Isso é para você se...</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idealFor.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-background border-[3px] border-black rounded-2xl p-6"
                >
                  <p className="text-lg font-bold">{fixPt(item)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {offers.length > 0 && (
          <div className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow">
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Escolha a melhor forma de começar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {offers.map((offer) => (
                <div key={offer.name} className="bg-secondary border-[3px] border-black rounded-2xl p-6">
                  <h3 className="text-2xl font-black font-heading mb-3">{fixPt(offer.name)}</h3>
                  <p className="font-medium text-base">{fixPt(offer.summary)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ com accordion */}
        {faqs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow"
          >
            <h2 className="text-3xl font-black font-heading mb-8 text-center">Perguntas frequentes</h2>
            <FaqAccordion faqs={faqs} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ConversionPageTemplate;
