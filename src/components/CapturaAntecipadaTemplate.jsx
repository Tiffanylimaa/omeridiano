/**
 * CapturaAntecipadaTemplate.jsx
 * Template reutilizável para páginas de captura antecipada.
 * Cada recurso passa seus próprios dados — sem duplicar lógica.
 *
 * Uso:
 *   import CapturaAntecipadaTemplate from '@/components/CapturaAntecipadaTemplate.jsx';
 *   <CapturaAntecipadaTemplate {...dadosDoRecurso} leadMagnetId="meu-id" />
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import pb from '@/lib/pocketbaseClient.js';

const CapturaAntecipadaTemplate = ({
  // SEO
  metaTitle,
  metaDescription,
  // Hero
  eyebrow,
  headline,
  subheadline,
  // O que será entregue (preview do conteúdo)
  previewTitle,
  previewItems = [],
  // Formulário
  formTitle,
  formSubtitle,
  consentText,
  ctaLabel = 'Quero acesso assim que sair',
  // Rodapé do card de sucesso
  successMessage,
  // Dados técnicos
  leadMagnetId,
  // Link de volta
  backHref = '/',
  backLabel = 'Voltar ao início',
}) => {
  const [formData,     setFormData]     = useState({ name: '', email: '' });
  const [status,       setStatus]       = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await pb.collection('leads').create({
        name:          formData.name,
        email:         formData.email,
        lead_magnet_id: leadMagnetId,
      }, { $autoCancel: false });

      setStatus('success');
    } catch (err) {
      console.error('Lead capture error:', err);
      setStatus('error');
      setErrorMessage('Algo deu errado. Tente novamente em instantes.');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-12">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center bg-primary border-[3px] border-black px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] mb-5"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black font-heading mb-5"
          >
            {headline}
          </motion.h1>
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl font-bold max-w-3xl bg-secondary border-[3px] border-black p-5 rounded-2xl neo-shadow"
            >
              {subheadline}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Preview do conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-[3px] border-black rounded-3xl p-8 neo-shadow"
          >
            {/* Badge de captura antecipada */}
            <div className="inline-flex items-center gap-2 bg-black text-primary border-[2px] border-black rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              <span className="text-[10px] font-black uppercase tracking-wider">Em produção — acesso antecipado</span>
            </div>

            <h2 className="text-2xl font-black font-heading mb-5">{previewTitle}</h2>

            <ul className="space-y-3">
              {previewItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 border-[3px] border-black rounded-md shrink-0 mt-0.5 bg-primary/20" />
                  <span className="text-base font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-xs font-bold text-muted-foreground mt-6 border-t-[2px] border-black pt-4">
              Quem entrar na lista recebe acesso assim que o material for liberado — antes de qualquer divulgação pública.
            </p>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary border-[3px] border-black rounded-3xl p-8 neo-shadow-lg lg:sticky lg:top-24"
          >
            {status === 'success' ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-14 h-14 mx-auto mb-5" strokeWidth={2.5} />
                <h2 className="text-2xl font-black font-heading mb-3">Você está na lista.</h2>
                <p className="text-base font-bold mb-6 text-muted-foreground">
                  {successMessage || 'Assim que o material estiver pronto, você recebe no e-mail antes de todo mundo.'}
                </p>
                <div className="bg-card border-[3px] border-black p-4 rounded-2xl neo-shadow text-left">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <p className="text-sm font-medium">
                      Confirmação enviada para <span className="font-black">{formData.email}</span>
                    </p>
                  </div>
                </div>
                <Link to={backHref} className="inline-flex items-center gap-1.5 text-sm font-bold mt-6 underline underline-offset-4 hover:opacity-70 transition-opacity">
                  {backLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black font-heading mb-2">{formTitle}</h2>
                <p className="text-sm font-bold text-muted-foreground mb-6">{formSubtitle}</p>

                {status === 'error' && (
                  <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-4 font-bold mb-5 text-sm">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-bold text-sm">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Maria Silva"
                      className="h-12 border-[3px] border-black rounded-xl text-base font-medium text-black focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="font-bold text-sm">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-12 border-[3px] border-black rounded-xl text-base font-medium text-black focus-visible:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-14 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-base"
                  >
                    {status === 'loading' ? 'Salvando...' : ctaLabel}
                    {status !== 'loading' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>

                  <p className="text-xs font-medium text-muted-foreground text-center leading-snug">
                    {consentText}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CapturaAntecipadaTemplate;
