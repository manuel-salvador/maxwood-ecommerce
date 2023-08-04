import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import brokenChair from '@/assets/broken-chair.avif';
import LoadingPage from '@/components/pages/LoadingPage';
import PageLayout from '@/layouts/PageLayout';

export default function RecuperarContraseñaPage() {
  const [loading, setLoading] = useState(true);

  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && status === 'unauthenticated') {
      setLoading(false);
    }
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, loading]);

  if (loading) return <LoadingPage />;

  return (
    <PageLayout title="Página no encontrada" footer={false}>
      <div className="h-[calc(100vh-12rem)] flex flex-col justify-center items-center text-center">
        <figure className="w-44 md:w-52 relative flex justify-center items-center">
          <span className="text-[10rem] md:text-[17rem] font-extrabold text-secondary/40 leading-none z-0">
            404
          </span>
          <Image
            src={brokenChair}
            alt="404 broken chair image"
            className="w-4/4 absolute -bottom-1/2 md:-bottom-1/4"
          />
        </figure>
        <p className="font-bold text-2xl mt-14 md:mt-12">PÁGINA NO ENCONTRADA</p>
        <p>La página a la que se intenta acceder no existe</p>
        <Link href="/" className="button-primary bg-secondary mt-4 text-white">
          Volver a Inicio
        </Link>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session && session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
