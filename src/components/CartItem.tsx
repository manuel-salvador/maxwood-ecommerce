import Image from 'next/image';

import { ICartItem } from '@/types';
import { useProductsContext } from '@/context/ProductsContext';

import { TrashIcon } from './shared/Icons';

export default function CartItem({ product, quantity }: ICartItem) {
  const { updateCartItemQuantity, removeFromCart } = useProductsContext();

  const subQuantity = () => {
    if (quantity - 1 <= 0) return;
    updateCartItemQuantity({ productId: product.id, quantity: quantity - 1 });
  };

  const sumQuantity = () => {
    if (quantity + 1 > product.stock) return;
    updateCartItemQuantity({ productId: product.id, quantity: quantity + 1 });
  };

  return (
    <div className="p-4 flex justify-between flex-col xs:flex-row border-b-2 gap-3">
      <div className="w-full xs:w-2/3 flex gap-4">
        <figure className="relative min-w-[7rem]  aspect-square border border-gray-400 rounded-md overflow-hidden">
          <Image src={product.imagen} fill alt={'producto-' + product.nombre} />
        </figure>
        <div className="w-1/2 flex flex-col justify-between">
          <span className="text-lg font-medium">{product.nombre}</span>
          <div
            id="quantity"
            className="flex justify-between items-center border border-light-gray rounded-sm text-lg font-semibold w-[6rem]"
          >
            <span
              className="cursor-pointer block flex-1 text-center py-1 select-none"
              onClick={subQuantity}
            >
              -
            </span>
            <input
              type="number"
              className="px-1 cursor-default w-9 outline-none text-center bg-white"
              value={quantity}
              disabled
            />
            <span
              className="cursor-pointer block flex-1 py-1 text-center select-none"
              onClick={sumQuantity}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="mt-auto ml-auto xs:ml-0 flex items-center gap-4">
        <span>${(product.precio * quantity).toLocaleString('es-AR')}</span>
        <span onClick={() => removeFromCart(product.id)} className="cursor-pointer">
          <TrashIcon />
        </span>
      </div>
    </div>
  );
}
