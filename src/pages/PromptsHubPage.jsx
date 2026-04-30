import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard.jsx';
import { products } from '@/data/catalog.js';

const promptProducts = products.filter((p) => p.type === 'digital' && p.name.toLowerCase().includes('prompt'));

const PromptsHubPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <title>Prompts com IA | O Meridiano</title>
        <meta
          name="description"
          content="Use inteligência artificial com direção. Prompts prontos para estudos, carreira, idiomas e escrita acadêmica."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary border-[3px] border-black px-4 py-2 text-sm font-black uppercase tracking-[0.2em] mb-6">
            <Zap className="w-4 h-4" />
            · Acesso imediato após pagamento
          </span>

          <h1 className="text-5xl md:text-6xl font-black font-heading mb-4 tracking-tighter">
            Use IA com mais direção nos estudos, na carreira e na escrita
          </h1>

          <p className="text-xl font-bold max-w-3xl bg-secondary border-[3px] border-black p-5 rounded-2xl neo-shadow">
            Você não precisa criar prompts do zero. Aqui estão comandos prontos para estudar melhor, organizar ideias, melhorar materiais profissionais e destravar a escrita acadêmica.
          </p>

          <p className="text-base font-medium text-muted-foreground mt-4 max-w-3xl">
            Cada pack foi pensado para transformar IA em ferramenta prática — sem perder tempo testando comandos aleatórios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {promptProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ProductCard
                name={product.name}
                description={product.summary}
                price={product.checkoutLabel}
                href={product.href}
                delay={0}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border-[3px] border-black rounded-3xl p-8 neo-shadow mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black font-heading mb-6">
            Por que prompts prontos fazem diferença?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Menos tentativa e erro',
                body: 'Você parte de comandos estruturados para conseguir respostas mais úteis, sem ficar testando até funcionar.'
              },
              {
                title: 'Mais clareza na execução',
                body: 'Os prompts ajudam a organizar tarefas, revisar ideias, montar materiais e transformar dúvidas em próximos passos.'
              },
              {
                title: 'Aplicação imediata',
                body: 'É só copiar, adaptar e usar. Não precisa dominar IA para começar a ter apoio real na rotina.'
              },
            ].map((item) => (
              <div key={item.title} className="bg-secondary border-[3px] border-black rounded-2xl p-5">
                <h3 className="text-lg font-black mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-snug">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary border-[3px] border-black rounded-3xl p-8 neo-shadow text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black font-heading mb-3">
            Quer continuar por uma área específica?
          </h2>

          <p className="text-base font-bold mb-6 max-w-xl mx-auto">
            Escolha a linha que mais combina com o seu momento e encontre materiais mais direcionados.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Carreira com Direção', href: '/carreira' },
              { label: 'Idiomas com Método', href: '/idiomas' },
              { label: 'Acadêmico com Direção', href: '/academico' },
            ].map((item) => (
              <Button
                key={item.href}
                asChild
                className="bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 font-black h-10"
              >
                <Link to={item.href}>
                  {item.label}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromptsHubPage;