import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="text-white px-4 md:px-10">
      <h2 className="font-bold text-2xl text-black text-center mb-8">Productos Destacados</h2>
      <div className="h-[50rem] grid gap-4 grid-cols-1 grid-rows-4 auto-rows-auto md:h-[35rem] md:grid-cols-3 md:grid-rows-2 md:grid-flow-col md:gap-8">
        <div className="relative rounded-sm group overflow-hidden md:row-span-2">
          <Image
            src="/products/despensa-moderna.webp"
            alt="Producto destacado despensa moderna"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Despensa moderna</span>
            <Link
              href={`/productos/detalles/${encodeURIComponent('Despensa moderna').replace(
                '%20',
                '-',
              )}/22`}
              className="button-primary bg-secondary"
            >
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute right-0 h-full flex p-3 items-center bg-primary bg-opacity-80 py-3">
            <Link
              href={`/productos/detalles/${encodeURIComponent('Despensa moderna').replace(
                '%20',
                '-',
              )}/22`}
              className="button-primary bg-secondary text-sm"
            >
              Ver producto
            </Link>
          </div>
        </div>
        <div className="relative rounded-sm group overflow-hidden">
          <Image
            src="/products/destacado2.jpg"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Mueble de almacenamiento</span>
            <Link
              href={`/productos/detalles/${encodeURIComponent('Mueble de almacenamiento').replace(
                '%20',
                '-',
              )}/23`}
              className="button-primary bg-secondary"
            >
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute right-0 h-full flex p-3 items-center bg-primary bg-opacity-80 py-3">
            <Link
              href={`/productos/detalles/${encodeURIComponent('Mueble de almacenamiento').replace(
                '%20',
                '-',
              )}/23`}
              className="button-primary bg-secondary text-sm"
            >
              Ver producto
            </Link>
          </div>
        </div>
        <div className="relative rounded-sm group overflow-hidden">
          <Image
            src="/products/destacado3.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Set living DAF</span>
            <Link
              href={`/productos/detalles/${encodeURIComponent('Set living DAF').replace(
                '%20',
                '-',
              )}/24`}
              className="button-primary bg-secondary"
            >
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute right-0 h-full flex p-3 items-center bg-primary bg-opacity-80 py-3">
            <Link
              href={`/productos/detalles/${encodeURIComponent('Set living DAF').replace(
                '%20',
                '-',
              )}/24`}
              className="button-primary bg-secondary text-sm"
            >
              Ver producto
            </Link>
          </div>
        </div>
        <div className="relative rounded-sm group overflow-hidden flex md:col-span-1 md:row-span-2">
          <Image
            src="/products/destacado4.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Set exterior DOR</span>
            <Link
              href={`/productos/detalles/${encodeURIComponent('Set exterior DOR').replace(
                '%20',
                '-',
              )}/25`}
              className="button-primary bg-secondary"
            >
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute right-0 h-full flex p-3 items-center bg-primary bg-opacity-80 py-3">
            <Link
              href={`/productos/detalles/${encodeURIComponent('Set exterior DOR').replace(
                '%20',
                '-',
              )}/25`}
              className="button-primary bg-secondary text-sm"
            >
              Ver producto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
