import { useState } from 'react';
import Image from 'next/image';

import { CartIcon, HeartIcon, PlusIcon } from '@/components/shared/Icons';
import { IProduct } from '@/types';

type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <article className="w-full max-w-sm mx-auto relative border-2 rounded-lg flex flex-col overflow-hidden">
      <div
        className={`absolute right-4 top-4 w-8 h-8 rounded-full flex justify-center items-center transition-colors cursor-pointer ${
          isFavourite ? 'bg-red-500' : 'bg-white'
        }`}
        onClick={handleFavourite}
      >
        <HeartIcon color={isFavourite ? 'white' : 'black'} />
      </div>
      <figure className="bg-gray-700 w-full aspect-square relative">
        <Image
          src={product.imagen}
          fill
          alt={`Producto ${product.nombre}`}
          className="text-white object-cover"
        />
      </figure>
      <div className="flex flex-col justify-between items-center gap-4 p-6 text-center flex-1 border-t">
        <h3 className="font-bold text-xl">{product.nombre}</h3>
        <span className="font-bold text-xl">${product.precio}</span>
        <button className="button-primary text-secondary border border-secondary w-full flex justify-center items-center gap-2 hover:text-white hover:bg-secondary group">
          <span className="group-hover:hidden">
            <CartIcon color="secondary" />
          </span>
          <span className="text-2xl leading-none hidden group-hover:block">
            <PlusIcon />
          </span>
          <span>Agregar al carrito</span>
        </button>
      </div>
    </article>
  );
}
