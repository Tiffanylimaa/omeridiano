/**
 * FavoriteButton.jsx
 * Botão de coração reutilizável — coloque em ProductLandingPage e ProductCard.
 *
 * Uso na ProductLandingPage, ao lado do ShareButton:
 *   import FavoriteButton from '@/components/FavoriteButton.jsx';
 *   import { useFavorites } from '@/hooks/use-user-storage.js';
 *
 *   const { toggleFavorite, isFavorite } = useFavorites();
 *   <FavoriteButton
 *     productId={product.id}
 *     product={{ id: product.id, title: product.name, href: product.href, line: product.line?.shortTitle }}
 *     isFavorite={isFavorite(product.id)}
 *     onToggle={toggleFavorite}
 *   />
 */

import React from 'react';
import { Heart } from 'lucide-react';

const FavoriteButton = ({ productId, product, isFavorite, onToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(product);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
      title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
      className={`inline-flex items-center gap-2 text-sm font-bold border-[2px] border-black rounded-xl px-4 py-2 transition-all neo-shadow hover:-translate-y-0.5 ${
        isFavorite
          ? 'bg-black text-primary'
          : 'bg-background hover:bg-secondary'
      }`}
    >
      <Heart
        className="w-4 h-4"
        strokeWidth={2.5}
        fill={isFavorite ? 'currentColor' : 'none'}
      />
      {isFavorite ? 'Salvo' : 'Salvar'}
    </button>
  );
};

export default FavoriteButton;
