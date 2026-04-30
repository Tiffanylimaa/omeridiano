import React from 'react';
import { Instagram, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">

          {/* Logo */}
          <div className="relative inline-block">
            <Sparkles className="absolute -top-5 -left-5 w-6 h-6 text-primary fill-primary animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold font-heading">O Meridiano</h2>
            <p className="text-lg font-medium mt-2 bg-secondary inline-block px-3 py-1 border-thick rounded-xl neo-shadow rotate-1">
              Clareza para dar o próximo passo
            </p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-sm md:text-base">
            <Link to="/sobre" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Sobre</Link>
            <Link to="/contato" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Contato</Link>
            <Link to="/prompts" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Prompts com IA</Link>
            <a href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">Termos</a>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://instagram.com/projeto.meridiano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @projeto.meridiano"
              className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
            >
              <Instagram className="w-5 h-5 text-foreground" strokeWidth={2.5} />
            </a>

            <a
              href="https://tiktok.com/@projeto.meridiano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok — @projeto.meridiano"
              className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
            >
              <TikTokIcon className="w-5 h-5 text-foreground" />
            </a>

            <a
              href="mailto:equipe@omeridiano.com.br"
              aria-label="E-mail — equipe@omeridiano.com.br"
              className="w-12 h-12 bg-primary border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
            >
              <Mail className="w-5 h-5 text-foreground" strokeWidth={2.5} />
            </a>
          </div>

          {/* Handles visíveis */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-foreground/60">
            <span>@projeto.meridiano</span>
            <span>equipe@omeridiano.com.br</span>
          </div>

          <p className="font-medium text-sm text-foreground/70">
            © {new Date().getFullYear()} O Meridiano. O caminho fica mais claro quando você sabe por onde começar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
