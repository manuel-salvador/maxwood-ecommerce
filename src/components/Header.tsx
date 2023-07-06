import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import {
  BorderedHeartIcon,
  BurgerMenuIcon,
  CartIcon,
  CloseIcon,
  UserIcon,
} from '@/components/shared/Icons';
import { useProductsContext } from '@/context/ProductsContext';

import Search from './Search';
import CartModal from './CartModal';

export default function Header() {
  const { openCartModal, cartItems } = useProductsContext();
  const { status } = useSession();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  const isPreviewEnv = process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';

  return (
    <header className="bg-white z-40 h-16 shadow-md px-6 fixed w-full flex items-center justify-between">
      <div className="md:flex-1">
        <Link href="/" className="block w-fit">
          {isPreviewEnv ? (
            <h1 className="font-bold text-xl">MaxWood QA</h1>
          ) : (
            <h1 className="font-bold text-2xl">MaxWood</h1>
          )}
        </Link>
      </div>
      <nav>
        <ul className="hidden md:flex gap-4">
          <li className="link-animation">
            <Link href="/">Inicio</Link>
          </li>
          <li className="link-animation">
            <Link href="/productos">Productos</Link>
          </li>
          <li className="link-animation">
            <Link href="/productos/categoria/dormitorio">Dormitorio</Link>
          </li>
          <li className="link-animation">
            <Link href="/productos/categoria/cocina">Cocina</Link>
          </li>
          <li className="link-animation">
            <Link href="/productos/categoria/living">Living</Link>
          </li>
          <li className="link-animation">
            <Link href="/productos/categoria/exterior">Exterior</Link>
          </li>
        </ul>

        <ul
          id="menuMobile"
          className={`z-20 absolute bg-white text-xl w-screen h-screen flex flex-col items-center gap-6 py-6 px-8 top-0 transition-all duration-300 ${
            menuOpen ? 'opacity-100 right-0' : 'opacity-0 -right-full'
          } `}
        >
          <li onClick={handleMenu} className="self-end">
            <CloseIcon size={24} />
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Inicio</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/productos">Productos</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/productos/categoria/dormitorio">Dormitorio</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/productos/categoria/cocina">Cocina</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/productos/categoria/living">Living</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/productos/categoria/exterior">Exterior</Link>
          </li>
          <div className="w-1/2 h-[2px] bg-gray-500" />
          {status === 'authenticated' ? (
            <>
              <li onClick={handleMenu}>
                <Link href="/cuenta" className="link-animation">
                  Mi cuenta
                </Link>
              </li>
              <li onClick={handleMenu}>
                <button type="button" onClick={handleSignOut} className="link-animation">
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li onClick={handleMenu}>
                <Link href="/login">Iniciar sesión</Link>
              </li>
              <li onClick={handleMenu}>
                <Link href="/register">Registrarme</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-4 md:flex-1 md:justify-end">
        <Search />
        <Link href="/cuenta/favoritos">
          <BorderedHeartIcon />
        </Link>
        <span className="cursor-pointer relative" onClick={openCartModal}>
          <CartIcon />
          {cartItems.length > 0 && (
            <span className="absolute -top-1/3 -right-1/3 rounded-full h-4 w-4 flex items-center justify-center bg-secondary text-xs text-white">
              {cartItems.length}
            </span>
          )}
        </span>
        <span className="hidden md:block relative group">
          <UserIcon />
          {status === 'authenticated' ? (
            <div className="opacity-0 top-full absolute -right-36 bg-gray-50 rounded-md shadow-md py-2 px-4 w-32 items-end gap-1 flex flex-col group-hover:-right-4 group-hover:opacity-100 transition-all duration-300">
              <Link href="/cuenta" className="link-animation">
                Mi cuenta
              </Link>
              <button type="button" onClick={handleSignOut} className="link-animation">
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="opacity-0 top-full absolute -right-36 bg-gray-50 rounded-md shadow-md py-2 px-4 w-32 items-end gap-1 flex flex-col group-hover:-right-4 group-hover:opacity-100 transition-all duration-300">
              <Link href="/login" className="link-animation">
                Iniciar sesión
              </Link>
              <Link href="/register" className="link-animation">
                Registrarme
              </Link>
            </div>
          )}
        </span>
        <span className="block md:hidden" onClick={handleMenu}>
          <BurgerMenuIcon />
        </span>
      </div>
      <CartModal />
    </header>
  );
}
