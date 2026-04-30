import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Send } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';

const AboutPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    preferredContact: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.subject.trim() &&
    formData.preferredContact.trim() &&
    formData.message.trim();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.hash]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        preferredContact: '',
        message: ''
      });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Não foi possível enviar sua mensagem agora. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre | O Meridiano</title>
        <meta
          name="description"
          content="Conheça o Meridiano: direção acadêmica e profissional com base em formação sólida, experiência real e leitura estratégica."
        />
      </Helmet>

      <section className="pt-24 pb-14 bg-secondary border-b-thick relative overflow-hidden">
        <div className="absolute top-8 right-8 w-20 h-20 bg-primary border-thick rounded-full neo-shadow animate-float" />
        <div className="absolute bottom-8 left-8 w-14 h-14 bg-background border-thick rotate-45 neo-shadow" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black font-heading mb-5"
          >
            Sobre O Meridiano
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg font-bold bg-background border-thick p-4 rounded-2xl neo-shadow inline-block mb-5"
          >
            Um guia prático construído a partir de formação sólida, experiência real e leitura estratégica para orientar decisões acadêmicas e profissionais.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Por trás do Meridiano, uma equipe de internacionalistas com formação avançada e experiência real em diferentes áreas das Relações Internacionais.{' '}
            <a href="#equipe" className="font-bold underline underline-offset-2">
              Conheça quem está por trás
            </a>
            .
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black font-heading mb-4 relative inline-block">
                Por que o Meridiano existe
                <div className="absolute -bottom-2 left-0 w-full h-2.5 bg-primary -z-10 -rotate-1" />
              </h2>

              <p className="text-sm font-medium leading-relaxed mb-4 text-muted-foreground">
                O Meridiano nasceu a partir de uma constatação prática: mesmo com acesso a mais informação do que nunca, a maioria das pessoas continua sem direção clara para tomar decisões importantes na formação acadêmica e na trajetória profissional.
              </p>

              <p className="text-sm font-medium leading-relaxed mb-4 text-muted-foreground">
                Seja na graduação, na pós-graduação, na preparação para processos seletivos ou na construção de uma carreira com mais método, muita gente se perde entre excesso de informação e pouca orientação aplicável.
              </p>

              <p className="text-sm font-medium leading-relaxed">
                A partir da experiência da equipe em diferentes frentes das Relações Internacionais — incluindo pesquisa acadêmica, recrutamento internacional, gestão de projetos, análise de dados e inteligência aplicada — ficou evidente que o problema não é falta de conteúdo, mas falta de método.
              </p>

              <p className="text-sm font-medium leading-relaxed mt-4">
                <span className="bg-primary px-1.5 py-0.5 border-2 border-black rounded-lg inline-block font-bold">
                  Por isso, a proposta do Meridiano é simples:
                </span>{' '}
                transformar complexidade em caminho — reunindo formação sólida, experiência aplicada e leitura estratégica para ajudar você a decidir melhor e avançar com mais segurança.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary border-thick rounded-2xl p-7 neo-shadow-lg"
            >
              <h3 className="text-xl font-black font-heading mb-4">O que você encontra aqui</h3>

              <ul className="space-y-3 text-sm font-bold">
                {[
                  'Direção para decisões acadêmicas e profissionais',
                  'Orientação para processos seletivos e pós-graduação',
                  'Ferramentas para melhorar sua forma de aprender',
                  'Apoio para estruturar sua trajetória com mais clareza',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lg leading-none">*</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="equipe" className="py-16 bg-secondary border-y-thick">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground block mb-2">
              Quem constrói o Meridiano
            </span>

            <h2 className="text-3xl md:text-4xl font-black font-heading mb-5">
              Experiência aplicada para orientar decisões reais
            </h2>

            <p className="text-sm md:text-base font-medium leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-6">
              Por trás do Meridiano, há uma equipe de internacionalistas com formação avançada e atuação prática em diferentes frentes das Relações Internacionais.
            </p>

            <p className="text-sm md:text-base font-medium leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8">
              Reunimos trajetórias em pesquisa acadêmica, comércio exterior, mobilidade internacional, recrutamento, gestão de projetos, análise de dados, inteligência artificial e áreas complementares para transformar conhecimento em direção prática.
            </p>

            <div className="bg-background border-thick rounded-2xl neo-shadow p-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-black leading-snug">
                Não reunimos apenas formação. Reunimos experiência aplicada para ajudar você a decidir melhor, estudar com mais método e avançar com mais clareza.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contato" className="py-5 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-primary border-thick rounded-2xl p-4 md:p-5 neo-shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-black font-heading mb-2 text-center">
              Falar com a equipe
            </h2>

            <p className="text-xs md:text-sm font-bold mb-3 text-center">
              Se você ainda não sabe qual é o melhor próximo passo, me conte seu momento.
            </p>

            {status === 'success' ? (
              <div className="bg-background border-thick rounded-2xl p-6 text-center neo-shadow flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl md:text-2xl font-black font-heading mb-2">Mensagem enviada</h3>
                <p className="text-sm md:text-base font-bold mb-5">Recebi seu contato e vou responder no seu e-mail assim que puder.</p>
                <Button
                  onClick={() => setStatus('idle')}
                  className="bg-black text-primary border-thick rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-sm h-10 px-6"
                >
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-background border-thick rounded-2xl p-4 neo-shadow">
                {status === 'error' && (
                  <div className="md:col-span-2 bg-destructive/10 text-destructive border-[3px] border-destructive rounded-xl p-3 font-bold text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-1">
                  <Label htmlFor="name" className="font-bold text-xs md:text-sm">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Como posso te chamar?"
                    className="h-9 border-thick rounded-xl text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="font-bold text-xs md:text-sm">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="h-9 border-thick rounded-xl text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="font-bold text-xs md:text-sm">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="h-9 border-thick rounded-xl text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="subject" className="font-bold text-xs md:text-sm">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Qual é sua principal dúvida?"
                    className="h-9 border-thick rounded-xl text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="font-bold text-sm">Prefere comunicação por</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 bg-secondary border-thick rounded-xl px-3 h-9 font-bold text-black cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        required
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="h-4 w-4 accent-black"
                      />
                      E-mail
                    </label>
                    <label className="flex items-center gap-2 bg-secondary border-thick rounded-xl px-3 h-9 font-bold text-black cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleChange}
                        className="h-4 w-4 accent-black"
                      />
                      WhatsApp
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="font-bold text-sm">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Me conte do que você precisa hoje."
                    className="min-h-[70px] resize-none border-thick rounded-xl text-sm font-medium text-black focus-visible:ring-primary focus-visible:ring-offset-2 p-3"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading' || !isFormValid}
                  className="md:col-span-2 w-full h-9 bg-black text-primary border-thick rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-sm"
                >
                  {status === 'loading' ? 'Enviando...' : (
                    <>
                      Enviar mensagem <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <div className="flex justify-center mt-3">
              <Button
                asChild
                className="w-full sm:w-auto bg-black text-primary border-thick rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-sm h-9 px-5"
              >
                <a href="/#quiz">Fazer o quiz agora →</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
