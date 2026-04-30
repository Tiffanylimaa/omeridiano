import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import pb from '@/lib/pocketbaseClient.js';

const ChecklistCapturePage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const checklistItems = [
    'CV em inglês otimizado para ATS',
    'Perfil do LinkedIn completo e atualizado',
    'Portfólio online ou GitHub ativo',
    'Carta de apresentação personalizada',
    'Referências profissionais preparadas',
    'Certificações relevantes para a área',
    'Nível de inglês comprovado, quando necessário',
    'Pesquisa sobre a empresa, vaga ou instituição',
    'Preparação para entrevistas técnicas',
    'Conhecimento sobre requisitos da vaga ou processo',
    'Rede de contatos na sua área de interesse',
    'Presença em comunidades profissionais',
    'Exemplos de projetos e conquistas',
    'Planejamento para prazos, etapas e entrevistas',
    'Estratégia de aplicação definida'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await pb.collection('leads').create(
        {
          name: formData.name,
          email: formData.email,
          lead_magnet_id: 'checklist-vagas'
        },
        { $autoCancel: false }
      );

      setStatus('success');
    } catch (err) {
      console.error('Lead capture error:', err);
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <Helmet>
        <title>Checklist de Processos Seletivos | O Meridiano</title>
        <meta
          name="description"
          content="Veja se você está preparado para processos seletivos com um checklist gratuito de itens essenciais para candidatura, entrevistas e organização."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black font-heading mb-6"
          >
            Você está preparado para processos seletivos mais competitivos?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold max-w-3xl mx-auto bg-secondary border-[3px] border-black p-6 rounded-2xl neo-shadow"
          >
            Use este checklist gratuito para revisar candidatura, materiais, prazos e preparação.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-[3px] border-black rounded-3xl p-10 neo-shadow"
          >
            <h2 className="text-3xl font-black font-heading mb-8">
              15 pontos para revisar antes de aplicar
            </h2>

            <ul className="space-y-4">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 border-[3px] border-black rounded-md shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary border-[3px] border-black rounded-3xl p-10 neo-shadow-lg sticky top-24"
          >
            {status === 'success' ? (
              <div className="text-center">
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-black font-heading mb-4">
                  Checklist enviado!
                </h2>
                <p className="text-lg font-bold mb-6">
                  Verifique seu e-mail para acessar o checklist completo em PDF.
                </p>

                <div className="bg-card border-[3px] border-black p-6 rounded-2xl neo-shadow">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-medium">
                    Enviamos para: <span className="font-black">{formData.email}</span>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black font-heading mb-6">
                  Receba o checklist completo
                </h2>

                <p className="text-lg font-bold mb-8">
                  Preencha seus dados e receba o PDF por e-mail.
                </p>

                {status === 'error' && (
                  <div className="bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-4 font-bold mb-6">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-bold text-lg">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold text-lg">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-14 border-[3px] border-black rounded-xl text-lg font-medium text-black focus-visible:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-16 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-xl"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Receber checklist por e-mail'}
                  </Button>

                  <p className="text-sm font-medium text-center">
                    Ao enviar, você concorda em receber e-mails com conteúdos sobre carreira, estudos e processos seletivos.
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

export default ChecklistCapturePage;