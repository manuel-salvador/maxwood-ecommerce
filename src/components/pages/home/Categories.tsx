import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  return (
    <section className="mt-4 px-4 grid grid-rows-4 gap-4 text-center">
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md">
        <h5 className="font-bold text-xl">MUEBLES PARA DORMITORIO</h5>
        <p>
          Equipate para trabajar o estudiar <br /> desde tu hogar, oficina o negocio.
        </p>
        <Link href="/" className="button-primary self-center bg-secondary">
          Ver catálogo
        </Link>
        <Image
          src="/products/dormitorio.jpg"
          alt="Categoria dormitorio"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md">
        <h5 className="font-bold text-xl">MUEBLES PARA LIVING</h5>
        <p>
          Centros de entretenimiento, <br /> racks para TV y modulares
        </p>
        <Link href="/" className="button-primary self-center bg-secondary">
          Ver catálogo
        </Link>
        <Image
          src="/products/living.jpg"
          alt="Categoria living"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md">
        <h5 className="font-bold text-xl">MUEBLES PARA EXTERIOR</h5>
        <p>
          Comodidad y estilo al aire libre. <br /> Conjuntos de comedor, sofás modulares, tumbonas y
          más.
        </p>
        <Link href="/" className="button-primary self-center bg-secondary">
          Ver catálogo
        </Link>
        <Image
          src="/products/exterior.jpg"
          alt="Categoria exterior"
          fill
          className="-z-10 brightness-[0.4] object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="relative text-white p-6 flex flex-col justify-between gap-3 group overflow-hidden rounded-md">
        <h5 className="font-bold text-xl">MUEBLES PARA COCINA</h5>
        <p>
          Bajomesadas, alacenas, <br /> ordenadores y mesadas
        </p>
        <Link href="/" className="button-primary self-center bg-secondary">
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
