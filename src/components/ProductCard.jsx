import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fixPt } from '@/lib/copy.js';

const ProductCard = ({
  name,
  description,
  price,
  href,
  delay = 0,
  ctaLabel = 'Ver como isso pode me ajudar',
  featured = false,
}) => {
  const safeName = fixPt(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`relative bg-card border-[3px] border-black rounded-2xl p-8 neo-shadow hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full ${
        featured ? 'ring-2 ring-black ring-offset-2' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-6 flex items-center gap-1.5 bg-black text-primary border-[2px] border-black rounded-full px-3 py-1">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-[10px] font-black uppercase tracking-[0.14em]">Mais escolhido</span>
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-3xl font-black font-heading mb-4">{safeName}</h3>
        <p className="text-lg font-medium text-muted-foreground mb-6">{fixPt(description)}</p>
        <div className="inline-block bg-primary border-[3px] border-black px-4 py-2 rounded-xl neo-shadow mb-6">
          <span className="text-2xl font-black">{fixPt(price)}</span>
        </div>
      </div>

      <Button
        asChild
        className="mt-auto w-full bg-primary text-black border-[3px] border-black rounded-xl neo-shadow hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-black text-lg h-14"
      >
        <Link to={href} aria-label={`Abrir produto ${safeName}`}>
          {ctaLabel} <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ProductCard;
