import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="text-white px-4">
      <h2 className="font-bold text-2xl text-black text-center mb-8">Productos Destacados</h2>
      <div className=" h-80 grid gap-4 grid-cols-2 grid-rows-3">
        <Link href="/" className="relative rounded-sm group overflow-hidden row-span-2">
          <Image
            src="/products/destacado1.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
        </Link>
        <Link href="/" className="relative rounded-sm group overflow-hidden">
          <Image
            src="/products/destacado2.jpg"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
        </Link>
        <Link href="/" className="relative rounded-sm group overflow-hidden">
          <Image
            src="/products/destacado3.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
        </Link>
        <Link href="/" className="relative rounded-sm group overflow-hidden col-span-full">
          <Image
            src="/products/destacado4.webp"
            alt="Producto destacado 1"
            fill
            className="object-cover object-center -z-10 group-hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
    </section>
  );
}
