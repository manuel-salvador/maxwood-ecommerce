import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import { useProductsContext } from '@/context/ProductsContext';

import { CloseIcon } from './shared/Icons';
import CartItem from './CartItem';

export default function CartModal() {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [isFreeShip, setIsFreeShip] = useState(false);

  const { isCartModalOpen, closeCartModal, cartItems } = useProductsContext();

  useEffect(() => {
    const totalWithoutShip = cartItems
      .map((item) => item.product.precio * item.quantity)
      .reduce((acc, cur) => acc + cur, 0);

    setSubTotal(totalWithoutShip);
    setTotal(isFreeShip ? totalWithoutShip : totalWithoutShip + 5000);
  }, [cartItems, isFreeShip]);

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeCartModal();
    }
  };

  const handleChangeShip = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFreeShip(e.target.value === 'freeShip');
  };

  const goToCheckout = () => {
    console.log({ products: cartItems, total });
  };

  return (
    <div
      className={`z-30 absolute top-0 left-0 overflow-hidden transition-opacity duration-700 ${
        isCartModalOpen
          ? 'min-h-screen w-full backdrop-blur-sm backdrop-brightness-50 opacity-100'
          : 'h-0 w-0 backdrop-blur-none backdrop-brightness-100 opacity-0'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`absolute top-0 w-full max-w-lg ml-auto bg-white h-full transition-all duration-500 overflow-y-auto custom-scrollbar ${
          isCartModalOpen ? 'right-0' : '-right-full'
        }`}
      >
        <header className="bg-primary flex justify-between items-center px-4 py-3">
          <h4 className="text-white text-2xl">Carrito de compras</h4>
          <span onClick={closeCartModal} className="cursor-pointer">
            <CloseIcon color="white" size={24} />
          </span>
        </header>
        <section>
          {cartItems.length <= 0 ? (
            <div className="py-8 flex flex-col items-center gap-4">
              <span className="text-lg">El carrito de compras esta vacío.</span>
              <Link
                href="/productos"
                className="button-primary bg-secondary text-white"
                onClick={closeCartModal}
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.product.id + '-cart'}>
                    <CartItem product={item.product} quantity={item.quantity} />
                  </li>
                ))}
              </ul>
              <div className="p-4 flex justify-between border-b-2 h-fit">
                <p>Subtotal (sin envío):</p>
                <p>${subTotal.toLocaleString('es-AR')}</p>
              </div>
              <div className="p-4 border-b-2">
                <div className="border border-black rounded-md overflow-hidden">
                  <label
                    htmlFor="noFreeShip"
                    className="w-full cursor-pointer p-2 border-b-2 flex justify-between items-center gap-4"
                    onClick={() => setIsFreeShip(false)}
                  >
                    <div className="flex gap-2 items-center">
                      <div
                        className={`min-w-[1.25rem] h-5 bg-white border-2 border-secondary rounded-full relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] after:min-w-[0.75rem] after:min-h-[0.75rem] after:bg-secondary ${
                          !isFreeShip ? 'after:opacity-100' : 'after:opacity-0'
                        }`}
                      />
                      <div>
                        <p>Envío a CABA</p>
                        <p className="text-sm">
                          Coordinar dia y horario de entrega de lunes a viernes
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>$5.000</p>
                    </div>
                    <input
                      type="radio"
                      id="noFreeShip"
                      value="noFreeShip"
                      checked={!isFreeShip}
                      onChange={handleChangeShip}
                      hidden
                    />
                  </label>
                  <label
                    htmlFor="freeShip"
                    className="w-full cursor-pointer p-2 border-b-2 flex justify-between items-center gap-4"
                    onClick={() => setIsFreeShip(true)}
                  >
                    <div className="flex gap-2 items-center">
                      <div
                        className={`min-w-[1.25rem] h-5 bg-white border-2 border-secondary rounded-full relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] after:min-w-[0.75rem] after:min-h-[0.75rem] after:bg-secondary ${
                          isFreeShip ? 'after:opacity-100' : 'after:opacity-0'
                        }`}
                      />
                      <div>
                        <p>Retiro en sucursal</p>
                        <p className="text-sm">
                          Coordinar dia y horario de entrega de lunes a viernes
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>Gratis</p>
                    </div>
                    <input
                      type="radio"
                      id="freeShip"
                      value="freeShip"
                      checked={isFreeShip}
                      onChange={handleChangeShip}
                      hidden
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <p>Total:</p>
                <p>${total.toLocaleString('es-AR')}</p>
              </div>
              <div className="px-4">
                <button
                  className="button-primary bg-secondary text-white w-full max-w-sm mx-auto block"
                  onClick={goToCheckout}
                >
                  INICIAR COMPRA
                </button>
              </div>
              <div className="py-4">
                <span
                  className="text-center w-fit mx-auto block cursor-pointer link-animation"
                  onClick={closeCartModal}
                >
                  Seguir comprando
                </span>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
