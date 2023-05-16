import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="text-white px-4 md:px-10">
      <h2 className="font-bold text-2xl text-black text-center mb-8">Productos Destacados</h2>
      <div className="h-[35rem] grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col md:gap-8">
        <div className="relative rounded-sm group overflow-hidden row-span-2">
          <Image
            src="/products/destacado1.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Producto Living</span>
            <Link href="/" className="button-primary bg-secondary">
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute bottom-0 w-full bg-primary bg-opacity-80 py-3 flex justify-center">
            <Link href="/" className="button-primary bg-secondary text-sm">
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
            <span className="text-xl font-bold">Producto Living</span>
            <Link href="/" className="button-primary bg-secondary">
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute bottom-0 w-full bg-primary bg-opacity-80 py-3 flex justify-center">
            <Link href="/" className="button-primary bg-secondary text-sm">
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
            <span className="text-xl font-bold">Producto Living</span>
            <Link href="/" className="button-primary bg-secondary">
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute bottom-0 w-full bg-primary bg-opacity-80 py-3 flex justify-center">
            <Link href="/" className="button-primary bg-secondary text-sm">
              Ver producto
            </Link>
          </div>
        </div>
        <div className="relative rounded-sm group overflow-hidden col-span-full md:col-span-1 md:row-span-2">
          <Image
            src="/products/destacado4.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-brightness-50 transition-all duration-300 hidden md:flex flex-col justify-center items-center gap-4">
            <span className="text-xl font-bold">Producto Living</span>
            <Link href="/" className="button-primary bg-secondary">
              Ir al producto
            </Link>
          </div>
          <div className="md:hidden absolute right-0 h-full flex p-3 items-center bg-primary bg-opacity-80 py-3">
            <Link href="/" className="button-primary bg-secondary text-sm">
              Ver producto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
