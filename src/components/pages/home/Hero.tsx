import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '/public/products/mueble-tv-moderno-gris.avif';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row h-min">
      <figure className="relative w-full h-40 lg:h-auto">
        <Image src={HeroImage} alt="Set living Ink" fill className="object-cover" priority />
      </figure>
      <div className="bg-gray-200 text-center p-4 flex flex-col gap-3 lg:w-2/5 lg:text-right lg:justify-center lg:p-8 lg:gap-8 lg:bg-opacity-90 lg:bg-white">
        <h3 className="text-xl font-bold lg:text-3xl">Mueble TV Rack Moderno</h3>
        <p className="text-wrap text-sm lg:text-lg">
          Integra estilo y funcionalidad en tu espacio de entretenimiento. Diseñada con elegancia y
          durabilidad en mente, este versátil mueble modular ofrece amplio espacio para tu televisor
          y dispositivos multimedia, manteniendo todo organizado y en su lugar. ¡Eleva tus momentos
          de entretenimiento con este moderno y práctico mueble de TV!
        </p>
        <Link
          href={`/productos/detalles/${encodeURIComponent('Mueble TV Rack Moderno').replace(
            '%20',
            '-',
          )}/21`}
          className="button-primary bg-primary text-white self-center lg:self-end"
        >
          Ver más
        </Link>
      </div>
    </section>
  );
}
