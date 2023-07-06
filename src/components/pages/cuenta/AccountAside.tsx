import Link from 'next/link';
import { signOut } from 'next-auth/react';

import {
  UserIcon,
  BagIcon,
  BorderedHeartIcon,
  ShutdownIcon,
  RightArrowIcon,
} from '@/components/shared/Icons';

type Props = {
  closeSubMenu: () => void;
};

export default function AccountAside({ closeSubMenu }: Props) {
  return (
    <aside className="h-full px-4 py-6 border-r-2 border-gray-200 flex flex-col gap-8 md:justify-between text-xl md:text-base">
      <ul
        className="
        flex flex-col md:gap-3
      [&>li>a>div]:flex [&>li>a>div]:items-center [&>li>a>div]:gap-4
      [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:items-center [&>li>a]:gap-5 [&>li>a]:py-4 md:[&>li>a]:py-0 [&>li>a]:border-b-2 md:[&>li>a]:border-none [&>li>a]:cursor-pointer"
      >
        <li onClick={closeSubMenu}>
          <Link href="/cuenta">
            <div>
              <span>
                <UserIcon />
              </span>
              <span>Perfil</span>
            </div>
            <span className="block md:hidden">
              <RightArrowIcon />
            </span>
          </Link>
        </li>
        <li onClick={closeSubMenu}>
          <Link href="/cuenta/pedidos">
            <div>
              <span>
                <BagIcon />
              </span>
              <span>Pedidos</span>
            </div>
            <span className="block md:hidden">
              <RightArrowIcon />
            </span>
          </Link>
        </li>
        <li onClick={closeSubMenu}>
          <Link href="/cuenta/favoritos">
            <div>
              <span>
                <BorderedHeartIcon />
              </span>
              <span>Favoritos</span>
            </div>
            <span className="block md:hidden">
              <RightArrowIcon />
            </span>
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 cursor-pointer">
        <span>
          <ShutdownIcon />
        </span>
        <span onClick={() => signOut()}>Cerrar sesión</span>
      </div>
    </aside>
  );
}
