import React from 'react';
import { Instagram, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.52 3.48A11.79 11.79 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.12.56 4.2 1.62 6.04L0 24l6.17-1.6A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.82c-1.85 0-3.66-.5-5.25-1.44l-.38-.23-3.66.95.98-3.57-.25-.37A9.77 9.77 0 0 1 2.18 12c0-5.41 4.41-9.82 9.82-9.82S21.82 6.59 21.82 12 17.41 21.82 12 21.82zm5.43-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  </svg>
);

const WHATSAPP_URL = 'https://wa.me/00000000000';

const Footer = () => {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a equipe no WhatsApp"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-[#25D366] text-white border-thick rounded-full flex items-center justify-center neo-shadow hover:-translate-y-1 transition-all"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      <footer className="bg-background border-t-[3px] border-secondary py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-2.5">
            <div className="relative inline-block">
              <Sparkles className="absolute -top-5 -left-5 w-6 h-6 text-primary fill-primary animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold font-heading">O Meridiano</h2>
              <p className="text-md font-medium mt-0.75 bg-secondary inline-block px-3 py-0.75 border-thick rounded-xl neo-shadow rotate-1">
                Clareza para dar o próximo passo
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-sm md:text-base">
              <Link to="/sobre" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">
                Sobre
              </Link>
              <Link to="/sobre#contato" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">
                Contato
              </Link>
              <Link to="/prompts" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">
                Prompts com IA
              </Link>
              <Link to="/privacidade" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="hover:text-primary hover:underline underline-offset-4 decoration-4 transition-colors">
                Termos
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-0.5">
              <a
                href="https://instagram.com/projeto.meridiano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @projeto.meridiano"
                className="w-12 h-12 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
              >
                <Instagram className="w-5 h-5" strokeWidth={2.5} />
              </a>

              <a
                href="https://tiktok.com/@projeto.meridiano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok — @projeto.meridiano"
                className="w-12 h-12 bg-black text-white border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp — falar com a equipe"
                className="w-12 h-12 bg-[#25D366] text-white border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:equipe@omeridiano.com.br"
                aria-label="E-mail — equipe@omeridiano.com.br"
                className="w-12 h-12 bg-[#EA4335] text-white border-thick rounded-full flex items-center justify-center hover-lift neo-shadow"
              >
                <Mail className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-foreground/60">
              <span>@projeto.meridiano</span>
              <span>equipe@omeridiano.com.br</span>
              <span>WhatsApp em breve</span>
            </div>

            <p className="font-medium text-sm text-foreground/70">
              © {new Date().getFullYear()} O Meridiano. O caminho fica mais claro quando você sabe por onde começar.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
