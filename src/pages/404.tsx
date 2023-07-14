import Link from 'next/link';
import Image from 'next/image';

import PageLayout from '@/layouts/PageLayout';
import brokenChair from '@/assets/broken-chair.avif';

export default function Custom404() {
  return (
    <PageLayout title="Página no encontrada" footer={false}>
      <div className="h-[calc(100vh-12rem)] flex flex-col justify-center items-center text-center">
        <figure className="w-44 md:w-52 relative flex justify-center items-center">
          <span className="text-[10rem] md:text-[14rem] font-extrabold text-gray-200 leading-none -z-20">
            404
          </span>
          <Image
            src={brokenChair}
            alt="404 broken chair image"
            className="w-4/4 absolute -bottom-1/2 md:-bottom-1/4"
          />
        </figure>
        <p className="font-bold text-2xl mt-14 md:mt-8">PÁGINA NO ENCONTRADA</p>
        <p>Perdón, pero la página a la que se intenta acceder no existe</p>
        <Link href="/" className="button-primary bg-secondary mt-4 text-white">
          Volver a Inicio
        </Link>
      </div>
    </PageLayout>
  );
}
