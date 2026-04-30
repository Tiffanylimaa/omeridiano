import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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

      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-primary border-thick rounded-2xl p-8 neo-shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-black font-heading mb-3">
              Chega de tentar adivinhar o próximo passo.
            </h2>

            <p className="text-sm font-bold mb-7">
              O quiz identifica onde você está travado e te mostra por onde sair.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
  <Button
    asChild
    className="w-full sm:w-auto bg-black text-primary border-thick rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 transition-all font-black text-sm h-11 px-7"
  >
    <a href="/#quiz">Fazer o quiz agora →</a>
  </Button>

  <Link to="/contato">
    <Button className="w-full sm:w-auto bg-secondary text-secondary-foreground border-thick rounded-xl neo-shadow hover:bg-secondary/90 hover:-translate-y-1 transition-all font-black text-sm h-11 px-7">
      Falar com a equipe
    </Button>
  </Link>
</div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
