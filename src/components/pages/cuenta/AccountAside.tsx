import Link from 'next/link';

import { UserIcon, BagIcon, HeartIcon, ShutdownIcon } from '@/components/shared/Icons';

export default function AccountAside() {
  return (
    <aside className="hidden px-4 py-6 border-r-2 border-gray-200 md:flex flex-col justify-between">
      <ul className="[&>li>a]:flex [&>li>a]:gap-2 [&>li>a]:cursor-pointer flex flex-col gap-3">
        <li>
          <Link href="/cuenta/perfil">
            <span>
              <UserIcon />
            </span>
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link href="/cuenta/pedidos">
            <span>
              <BagIcon />
            </span>
            <span>Pedidos</span>
          </Link>
        </li>
        <li>
          <Link href="/cuenta/favoritos">
            <span>
              <HeartIcon />
            </span>
            <span>Favoritos</span>
          </Link>
        </li>
      </ul>
      <div className="flex gap-2 cursor-pointer">
        <span>
          <ShutdownIcon />
        </span>
        <span>Cerrar sesión</span>
      </div>
    </aside>
  );
}
