import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '/public/products/set-living-ink.jpg';

export default function Hero() {
  return (
    <section className="relative">
      <figure className="relative w-full h-44 lg:h-[30rem]">
        <Image src={HeroImage} alt="Set living Ink" fill className="object-cover" priority />
      </figure>
      <div className="bg-gray-200 text-center p-4 flex flex-col gap-3 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-2/6 lg:text-right lg:justify-center lg:p-8 lg:gap-8 lg:bg-opacity-90 lg:bg-white">
        <h3 className="text-xl font-bold lg:text-3xl">Nuevo Set Living</h3>
        <p className="text-wrap text-sm lg:text-lg">
          Este conjunto de muebles flotantes de estilo moderno está hecho de madera de alta calidad
          e incluye tres repisas y un estante para la televisión con cajones. La apariencia elegante
          y contemporánea es perfecta para cualquier espacio y la opción de almacenamiento abierto y
          cerrado lo hace práctico y funcional.
        </p>
        <Link href="/" className="button-primary bg-primary text-white self-center lg:self-end">
          Ver más
        </Link>
      </div>
    </section>
  );
}
