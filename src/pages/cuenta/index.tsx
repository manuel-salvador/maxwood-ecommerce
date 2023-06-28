import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import PageLayout from '@/layouts/PageLayout';

export default function CuentaPage() {
  const { data, status } = useSession();

  const name = data ? data.user?.name?.split(' ')[0] : '';

  return (
    <PageLayout title="Cuenta" className="py-8 flex flex-col justify-center items-center gap-2">
      <h2
        className={`text-center mb-4 font-bold text-2xl transition-opacity duration-500 ${
          status === 'loading' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        ¡Hola {name}!
      </h2>
      <ul className="flex flex-wrap justify-center text-center max-w-xs gap-4 mx-auto [&>li>a]:block [&>li>a]:w-32 [&>li>a]:p-4 [&>li>a]:border-2 [&>li>a]:border-secondary [&>li>a]:text-lg [&>li>a]:rounded-md hover:[&>li>a]:bg-secondary hover:[&>li>a]:text-white [&>li>a]:transition-all">
        <li>
          <Link href="/cuenta/perfil">Perfil</Link>
        </li>
        <li>
          <Link href="/cuenta/pedidos">Pedidos</Link>
        </li>
        <li>
          <Link href="/cuenta/favoritos">Favoritos</Link>
        </li>
      </ul>
    </PageLayout>
  );
}
