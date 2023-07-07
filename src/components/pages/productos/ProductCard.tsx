import { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { CartIcon, BorderedHeartIcon, PlusIcon, FilledHeartIcon } from '@/components/shared/Icons';
import { IProduct } from '@/types';
import { useProductsContext } from '@/context/ProductsContext';

type Props = {
  product: IProduct;
  showAddCartButton?: boolean;
};

export default function ProductCard({ product, showAddCartButton = true }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { addToCart, openCartModal, favoriteProducts, handleFavorite } = useProductsContext();

  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;
    const checkFavorite = favoriteProducts.find((p) => p.id === product.id);
    setIsFavorite(Boolean(checkFavorite));
  }, [favoriteProducts, status]);

  const handleOnClickHeart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFavorite(product.id);
  };

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart({ productId: product.id });
    openCartModal();
  };

  return (
    <article className="w-full max-w-xs mx-auto">
      <Link
        href={`/productos/detalles/${encodeURIComponent(product.nombre).replace('%20', '-')}/${
          product.id
        }`}
        className="w-full h-full max-w-sm mx-auto relative border-2 rounded-lg flex flex-col overflow-hidden"
      >
        <div
          className="z-10 absolute right-4 top-4 w-8 h-8 rounded-full flex justify-center items-center transition-colors cursor-pointer bg-white"
          onClick={handleOnClickHeart}
        >
          {isFavorite ? <FilledHeartIcon /> : <BorderedHeartIcon />}
        </div>
        <figure className="bg-gray-700 w-full aspect-square relative">
          <Image
            src={product.imagen}
            fill
            alt={`Producto ${product.nombre}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="text-white object-cover"
          />
        </figure>
        <div className="flex flex-col justify-between items-center gap-4 p-6 text-center flex-1 border-t">
          <h3 className="font-bold text-xl">{product.nombre}</h3>
          <span className="font-bold text-xl">${product.precio.toLocaleString('es-AR')}</span>
          {showAddCartButton && (
            <button
              onClick={handleAddToCart}
              className="button-primary text-secondary border border-secondary w-full flex justify-center items-center gap-2 hover:text-white hover:bg-secondary group"
            >
              <span className="group-hover:hidden">
                <CartIcon color="secondary" />
              </span>
              <span className="text-2xl leading-none hidden group-hover:block">
                <PlusIcon />
              </span>
              <span>Agregar al carrito</span>
            </button>
          )}
        </div>
      </Link>
    </article>
  );
}
