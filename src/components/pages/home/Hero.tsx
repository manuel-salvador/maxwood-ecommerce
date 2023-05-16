import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '/public/img/hero.png';

export default function Hero() {
  return (
    <section>
      <figure className="relative w-full h-44">
        <Image src={HeroImage} alt="Hero Image" fill className="object-cover" priority />
      </figure>
      <div className="bg-gray-200 text-center p-4 flex flex-col gap-3">
        <h3 className="text-xl font-bold">Nuevo Set Living</h3>
        <p className="text-wrap text-sm">
          Este conjunto de muebles flotantes de estilo moderno está hecho de madera de alta calidad
          e incluye tres repisas y un estante para la televisión con cajones. La apariencia elegante
          y contemporánea es perfecta para cualquier espacio y la opción de almacenamiento abierto y
          cerrado lo hace práctico y funcional.
        </p>
        <Link href="/" className="button-primary bg-primary text-white self-center">
          Ver más
        </Link>
      </div>
    </section>
  );
}
