import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, LogOut, Menu, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { getNavigationCollections } from '@/data/catalog.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const collections = getNavigationCollections();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
    setExpandedCategory(null);
  };

  const toggleCategory = (category) => {
    setExpandedCategory((previous) => (previous === category ? null : category));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedCategory(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-black transition-all duration-300 shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-black font-heading tracking-tight hover:-translate-y-0.5 transition-transform flex items-center"
              onClick={() => setExpandedCategory(null)}
            >
              O <span className="bg-primary px-2 py-0.5 border-[3px] border-black rounded-none neo-shadow ml-2 inline-block -rotate-2 text-black">MERIDIANO</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              onClick={() => setExpandedCategory(null)}
              className="text-base font-bold text-foreground hover:bg-primary px-3 py-2 rounded-none border-[3px] border-transparent hover:border-black transition-all duration-200"
            >
              Home
            </Link>

            {collections.map((collection) => (
              <div key={collection.slug} className="relative">
                <button
                  onClick={() => toggleCategory(collection.slug)}
                  className={`flex items-center gap-1 text-base font-bold px-3 py-2 rounded-none border-[3px] transition-all duration-200 ${
                    expandedCategory === collection.slug
                      ? 'bg-primary border-black'
                      : 'border-transparent hover:bg-primary hover:border-black'
                  }`}
                >
                  {collection.title}
                  <ChevronDown
                    className={`w-4 h-4 chevron-rotate ${expandedCategory === collection.slug ? 'chevron-expanded' : ''}`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-[340px] bg-background border-[3px] border-black rounded-none neo-shadow collapsible-content ${
                    expandedCategory === collection.slug ? 'collapsible-open' : 'collapsible-closed'
                  }`}
                >
                  <div className="p-4 space-y-2">
                    <Link
                      to={collection.href}
                      onClick={() => setExpandedCategory(null)}
                      className="block rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary font-bold border-[3px] border-transparent hover:border-black text-black"
                    >
                      Ver a linha
                    </Link>

                    {collection.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setExpandedCategory(null)}
                        className="block rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary font-medium border-[3px] border-transparent hover:border-black text-black"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/contato"
              onClick={() => setExpandedCategory(null)}
              className="text-base font-bold text-foreground hover:bg-primary px-3 py-2 rounded-none border-[3px] border-transparent hover:border-black transition-all duration-200"
            >
              Contato
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l-[3px] border-black">
                <Link to="/perfil" onClick={() => setExpandedCategory(null)} className="flex items-center gap-2 font-bold hover:text-primary transition-colors">
                  <UserIcon className="w-5 h-5" />
                  <span className="max-w-[120px] truncate">{currentUser?.name || 'Perfil'}</span>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-destructive hover:text-destructive-foreground rounded-none border-[3px] border-transparent hover:border-black transition-all"
                  aria-label="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setExpandedCategory(null)} className="ml-2">
                <Button className="bg-primary text-black border-[3px] border-black rounded-none neo-shadow hover:bg-primary/90 hover:-translate-y-1 transition-all font-bold h-12 px-6">
                  Login
                </Button>
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={(open) => {
                setIsOpen(open);
                if (!open) {
                  setExpandedCategory(null);
                }
              }}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border-[3px] border-black rounded-none neo-shadow bg-background hover:bg-secondary">
                  <Menu className="h-6 w-6 text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-[3px] border-black sm:max-w-xs overflow-y-auto">
                <div className="flex flex-col space-y-4 mt-12">
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold font-heading text-left p-4 rounded-none hover:bg-secondary border-[3px] border-transparent hover:border-black transition-all"
                  >
                    Home
                  </Link>

                  {collections.map((collection) => (
                    <div key={collection.slug} className="border-[3px] border-black rounded-none overflow-hidden">
                      <button
                        onClick={() => toggleCategory(collection.slug)}
                        className={`w-full flex items-center justify-between text-xl font-bold font-heading p-4 transition-all ${
                          expandedCategory === collection.slug ? 'bg-primary' : 'bg-card hover:bg-primary/90'
                        }`}
                      >
                        {collection.title}
                        <ChevronDown
                          className={`w-5 h-5 chevron-rotate ${expandedCategory === collection.slug ? 'chevron-expanded' : ''}`}
                        />
                      </button>
                      <div className={`bg-card collapsible-content ${
                        expandedCategory === collection.slug ? 'collapsible-open' : 'collapsible-closed'
                      }`}>
                        <Link
                          to={collection.href}
                          onClick={closeMenu}
                          className="block text-lg font-bold p-3 pl-6 hover:bg-secondary transition-all border-t-[3px] border-black text-black"
                        >
                          Ver a linha
                        </Link>
                        {collection.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={closeMenu}
                            className="block text-lg font-medium p-3 pl-6 hover:bg-secondary transition-all border-t-[3px] border-black text-black"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <Link
                    to="/contato"
                    onClick={closeMenu}
                    className="text-2xl font-bold font-heading text-left p-4 rounded-none hover:bg-secondary border-[3px] border-transparent hover:border-black transition-all"
                  >
                    Contato
                  </Link>

                  <div className="pt-8 border-t-[3px] border-black flex flex-col gap-4">
                    {isAuthenticated ? (
                      <>
                        <Link
                          to="/perfil"
                          onClick={closeMenu}
                          className="text-2xl font-bold font-heading text-left p-4 rounded-none bg-secondary border-[3px] border-black neo-shadow"
                        >
                          Meu Perfil
                        </Link>
                        <Button
                          onClick={handleLogout}
                          className="w-full bg-destructive text-destructive-foreground border-[3px] border-black rounded-none neo-shadow font-bold h-14 text-lg"
                        >
                          <LogOut className="w-5 h-5 mr-2" />
                          Sair
                        </Button>
                      </>
                    ) : (
                      <Link to="/login" onClick={closeMenu}>
                        <Button className="w-full bg-primary text-black border-[3px] border-black rounded-none neo-shadow font-bold h-14 text-lg">
                          Login
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
