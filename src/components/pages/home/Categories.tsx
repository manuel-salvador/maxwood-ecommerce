import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  return (
    <section className="mt-4 px-4 grid grid-rows-4 gap-4 text-center md:px-8 md:mt-8 md:gap-6 md:grid-rows-2 md:grid-cols-6 lg:px-10 lg:mt-10 md:text-left">
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md md:col-span-3 md:gap-8 md:items-start lg:p-10">
        <h5 className="font-bold text-xl lg:text-2xl">MUEBLES PARA DORMITORIO</h5>
        <p className="text-xl">
          Equipate para trabajar o estudiar <br /> desde tu hogar, oficina o negocio.
        </p>
        <Link
          href="/productos/categoria/dormitorio"
          className="button-primary self-center bg-secondary md:self-start"
        >
          Ver catálogo
        </Link>
        <Image
          src="/products/dormitorio.jpg"
          alt="Categoria dormitorio"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md md:col-span-3 md:gap-8 md:items-start lg:p-10">
        <h5 className="font-bold text-xl lg:text-2xl">MUEBLES PARA LIVING</h5>
        <p className="text-xl">
          Centros de entretenimiento, <br /> racks para TV y modulares
        </p>
        <Link
          href="/productos/categoria/living"
          className="button-primary self-center bg-secondary md:self-start"
        >
          Ver catálogo
        </Link>
        <Image
          src="/products/living.jpg"
          alt="Categoria living"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md md:col-span-4 md:gap-8 md:items-start lg:p-10">
        <h5 className="font-bold text-xl lg:text-2xl">MUEBLES PARA EXTERIOR</h5>
        <p className="text-xl">
          Comodidad y estilo al aire libre. <br /> Conjuntos de comedor, sofás modulares, tumbonas y
          más.
        </p>
        <Link
          href="/productos/categoria/exterior"
          className="button-primary self-center bg-secondary md:self-start"
        >
          Ver catálogo
        </Link>
        <Image
          src="/products/exterior.jpg"
          alt="Categoria exterior"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md md:col-span-2 md:gap-8 md:items-start lg:p-10">
        <h5 className="font-bold text-xl lg:text-2xl">MUEBLES PARA COCINA</h5>
        <p className="text-xl">
          Bajomesadas, alacenas, <br /> ordenadores y mesadas
        </p>
        <Link
          href="/productos/categoria/cocina"
          className="button-primary self-center bg-secondary md:self-start"
        >
          Ver catálogo
        </Link>
        <Image
          src="/products/cocina.jpg"
          alt="Categoria cocina"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
    </section>
  );
}
