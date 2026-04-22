
import React from 'react';
import { Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          <div className="relative inline-block">
            <Sparkles className="absolute -top-5 -left-5 w-6 h-6 text-primary fill-primary animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              O Meridiano
            </h2>
            <p className="text-lg font-medium mt-2 bg-secondary inline-block px-3 py-1 border-thick rounded-xl neo-shadow rotate-1">
              Comunidade de Pessoas
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-sm md:text-base">
            <Link to="/sobre" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Sobre Nós</Link>
            <Link to="/contato" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Contato</Link>
            <a href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Termos</a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow">
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow">
              <Linkedin className="w-5 h-5 text-foreground fill-foreground" />
            </a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow">
              <Twitter className="w-5 h-5 text-foreground fill-foreground" />
            </a>
          </div>

          <p className="font-medium text-sm text-foreground/70 mt-6">
            © {new Date().getFullYear()} O Meridiano. O mapa já existe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
