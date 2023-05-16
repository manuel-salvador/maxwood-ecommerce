import { useState } from 'react';
import Link from 'next/link';

import {
  BurgerMenuIcon,
  CartIcon,
  CloseIcon,
  SearchIcon,
  UserIcon,
} from '@/components/shared/Icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white z-10 h-16 shadow-md px-6 fixed w-full flex items-center justify-between">
      <p className="font-bold text-2xl md:flex-1">MaxWood</p>
      <nav>
        <ul className="hidden md:flex gap-4">
          <li className="link-animation">
            <Link href="/">Inicio</Link>
          </li>
          <li className="link-animation">
            <Link href="/">Productos</Link>
          </li>
          <li className="link-animation">
            <Link href="/">Dormitorio</Link>
          </li>
          <li className="link-animation">
            <Link href="/">Cocina</Link>
          </li>
          <li className="link-animation">
            <Link href="/">Living</Link>
          </li>
          <li className="link-animation">
            <Link href="/">Exterior</Link>
          </li>
        </ul>

        <ul
          className={`absolute bg-white text-xl w-screen h-screen flex flex-col items-center gap-6 py-6 px-8 top-0 transition-all duration-300 ${
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
            <Link href="/">Productos</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Dormitorio</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Cocina</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Living</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Exterior</Link>
          </li>
          <div className="w-1/2 h-[2px] bg-gray-500" />
          <li onClick={handleMenu}>
            <Link href="/login">Iniciar sesión</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/register">Registrarme</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4 md:flex-1 md:justify-end">
        <div>
          <span className="block lg:hidden">
            <SearchIcon />
          </span>
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="¿Qué estas buscando?"
              className="border border-gray-300 px-2 py-1 rounded-md"
            />
          </div>
        </div>
        <CartIcon />
        <span className="hidden md:block relative group">
          <UserIcon />
          <div className="hidden absolute bg-gray-50 rounded-md top-full -right-4 shadow-md py-2 px-4 w-32 group-hover:flex flex-col items-end gap-1">
            <Link href="/login" className="link-animation">
              Iniciar sesión
            </Link>
            <Link href="/register" className="link-animation">
              Registrarme
            </Link>
          </div>
        </span>
        <span className="block md:hidden" onClick={handleMenu}>
          <BurgerMenuIcon />
        </span>
      </div>
    </header>
  );
}
