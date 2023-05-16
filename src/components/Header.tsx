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
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
            <Link href="/">Inicio</Link>
          </li>
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
            <Link href="/">Productos</Link>
          </li>
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
            <Link href="/">Dormitorio</Link>
          </li>
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
            <Link href="/">Cocina</Link>
          </li>
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
            <Link href="/">Living</Link>
          </li>
          <li className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-black after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300">
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
            <Link href="/">Iniciar sesión</Link>
          </li>
          <li onClick={handleMenu}>
            <Link href="/">Registrarme</Link>
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
        <span className="hidden md:block">
          <UserIcon />
        </span>
        <span className="block md:hidden" onClick={handleMenu}>
          <BurgerMenuIcon />
        </span>
      </div>
    </header>
  );
}
