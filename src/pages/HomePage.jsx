import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard.jsx';
import { Button } from '@/components/ui/button';
import { languagePages, productLines, products } from '@/data/catalog.js';

const HomePage = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>O Meridiano | Produtos, cursos e serviços por linha</title>
        <meta
          name="description"
          content="Estrutura escalável com cinco linhas principais, páginas individuais por produto e navegação de idiomas organizada por idioma."
        />
      </Helmet>

      <section className="relative min-h-[82vh] flex items-center justify-center bg-background border-b-[3px] border-black py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-darken bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-primary border-[3px] border-black px-4 py-2 text-sm font-black uppercase tracking-[0.2em] mb-6"
          >
            Estrutura escalável de produto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black font-heading mb-6 text-foreground tracking-tighter"
          >
            Cinco linhas principais.
            <br />
            Páginas prontas para crescer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl font-bold mb-12 text-foreground max-w-4xl mx-auto leading-tight"
          >
            O site agora está organizado para vender até {products.length} ofertas com landing pages individuais, botões prontos para Hotmart e navegação por idioma em rotas como <span className="bg-secondary px-2 py-1 border-[3px] border-black">/idiomas/ingles</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-black border-[3px] border-black rounded-none neo-shadow hover-lift font-black h-14 px-8 text-lg">
              <Link to="/carreira">
                Explorar linhas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-background text-black border-[3px] border-black rounded-none neo-shadow hover-lift font-black h-14 px-8 text-lg">
              <Link to="/idiomas">
                Ver idiomas
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">As 5 linhas principais</h2>
            <p className="text-xl font-bold max-w-3xl">
              Cada linha tem seus próprios produtos, serviços e uma estrutura preparada para novos lançamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {productLines.map((line, index) => {
              const lineProducts = products.filter((product) => product.lineSlug === line.slug);

              return (
                <motion.div
                  key={line.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-card border-[3px] border-black rounded-2xl p-6 neo-shadow flex flex-col"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground mb-3">{lineProducts.length} páginas</p>
                  <h3 className="text-3xl font-black font-heading mb-3">{line.shortTitle}</h3>
                  <p className="font-medium flex-1">{line.description}</p>
                  <Button asChild className="mt-6 bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 font-black h-12">
                    <Link to={line.href}>
                      Abrir linha
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">Idiomas organizados por idioma</h2>
            <p className="text-xl font-bold max-w-3xl">
              O hub de idiomas foi separado em páginas próprias para inglês, mandarim, francês e ofertas multilíngues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {languagePages.map((language, index) => (
              <motion.div
                key={language.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-secondary border-[3px] border-black rounded-2xl p-6 neo-shadow flex flex-col"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] mb-3">/idiomas/{language.slug}</p>
                <h3 className="text-3xl font-black font-heading mb-3">{language.name}</h3>
                <p className="font-medium flex-1">{language.description}</p>
                <Button asChild className="mt-6 bg-black text-primary border-[3px] border-black rounded-xl neo-shadow hover:bg-black/90 font-black h-12">
                  <Link to={language.href}>
                    Ver página
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">Landing pages individuais</h2>
            <p className="text-xl font-bold max-w-3xl">
              Cada produto já tem uma página própria com copy, entregáveis, FAQ e botão preparado para integração com Hotmart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.summary}
                price={product.checkoutLabel}
                href={product.href}
                delay={index * 0.06}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 transition-all font-black h-14 px-8 text-lg">
              <Link to="/contato">
                Continuar a integração
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
