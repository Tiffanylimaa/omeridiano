
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre O Meridiano - Nossa História e Missão</title>
        <meta name="description" content="Conheça a história de O Meridiano, nossa missão de conectar pessoas a oportunidades globais e os valores que guiam nossa comunidade." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary border-b-thick relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary border-thick rounded-full neo-shadow animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-background border-thick rotate-45 neo-shadow"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black font-heading mb-6"
          >
            Sobre O Meridiano
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold bg-background border-thick p-6 rounded-2xl neo-shadow inline-block"
          >
            Conectando pessoas a oportunidades globais através de experiência real e comunidade ativa.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-black font-heading mb-6 relative inline-block">
                Nossa Missão
                <div className="absolute -bottom-3 left-0 w-full h-3 bg-primary -z-10 -rotate-1"></div>
              </h2>
              <p className="text-xl font-medium leading-relaxed mb-6">
                O Meridiano nasceu da necessidade de democratizar o acesso a oportunidades internacionais. Sabemos que o caminho para vagas globais, mestrados no exterior e domínio de idiomas pode parecer impossível quando você não tem um mapa.
              </p>
              <p className="text-xl font-medium leading-relaxed">
                Nossa missão é simples: <span className="bg-primary px-2 py-1 border-2 border-black rounded-lg inline-block font-bold">eliminar a tentativa e erro</span> fornecendo templates, guias e mentorias criados por quem já percorreu esse caminho recentemente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary border-thick rounded-3xl p-12 neo-shadow-lg"
            >
              <h3 className="text-4xl font-black font-heading mb-8">Por que O Meridiano?</h3>
              <ul className="space-y-4 text-lg font-bold">
                <li className="flex items-start gap-3">
                  <span className="text-3xl">🌍</span>
                  <span>Experiência validada no mercado internacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">⚡</span>
                  <span>Métodos atualizados para o cenário de 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">🎯</span>
                  <span>Foco em resultados práticos, não teoria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">🤝</span>
                  <span>Comunidade de pessoas com objetivos similares</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary border-y-thick">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black font-heading text-center mb-16">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border-thick rounded-2xl p-8 neo-shadow"
            >
              <Target className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
              <h3 className="text-3xl font-black font-heading mb-4">Prático e Direto</h3>
              <p className="text-lg font-medium">Sem enrolação. Cada material é criado para ser aplicado imediatamente, com checklists, templates e guias passo a passo.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border-thick rounded-2xl p-8 neo-shadow"
            >
              <Users className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
              <h3 className="text-3xl font-black font-heading mb-4">Comunidade Real</h3>
              <p className="text-lg font-medium">Networking com pessoas que compartilham seus objetivos globais. Troca de experiências, suporte mútuo e conexões autênticas.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border-thick rounded-2xl p-8 neo-shadow"
            >
              <Zap className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
              <h3 className="text-3xl font-black font-heading mb-4">Atualização Constante</h3>
              <p className="text-lg font-medium">O mercado muda rápido. Nossos materiais refletem as exigências atuais de 2026, não estratégias ultrapassadas de anos atrás.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border-thick rounded-2xl p-8 neo-shadow"
            >
              <Heart className="w-12 h-12 mb-4 text-primary" strokeWidth={3} />
              <h3 className="text-3xl font-black font-heading mb-4">Transparência Total</h3>
              <p className="text-lg font-medium">Sem promessas vazias. Mostramos exatamente o que você vai receber, como funciona e quem criou cada material.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary border-thick rounded-3xl p-12 md:p-16 neo-shadow-lg"
          >
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-6">Pronto para começar?</h2>
            <p className="text-2xl font-bold mb-10">Junte-se a centenas de pessoas que já estão transformando suas carreiras e vidas.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/comunidade">
                <Button className="w-full sm:w-auto bg-black text-primary border-thick rounded-xl neo-shadow hover:bg-black/90 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#C7CEEA] transition-all font-black text-xl h-16 px-10">
                  Explorar Comunidade
                </Button>
              </Link>
              <Link to="/produtos">
                <Button className="w-full sm:w-auto bg-secondary text-secondary-foreground border-thick rounded-xl neo-shadow hover:bg-secondary/90 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] transition-all font-black text-xl h-16 px-10">
                  Ver Produtos
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
