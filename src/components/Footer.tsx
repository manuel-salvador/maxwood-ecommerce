import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="py-8 px-4 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-start">
          <div className="max-w-xs text-center md:text-left">
            <div className="mb-4">
              <p className="font-bold text-2xl">MaxWood</p>
              <span>20 años construyendo junto a vos.</span>
            </div>
            <p>Tenemos todos los muebles para tu hogar, oficina o negocio.</p>
          </div>

          <div className="flex justify-center gap-8">
            <div>
              <h6 className="font-bold">Información</h6>
              <ul>
                <li>
                  <a href="/terminos-y-condiciones" target="_blank">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <Link href="/pago-seguro">Pago seguro</Link>
                </li>
                <li>
                  <Link href="/politica-de-envio">Polítca de envio</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold">Empresa</h6>
              <ul>
                <li>
                  <Link href="/sobre-nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                  <Link href="/ayuda">Ayuda</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 self-center">
            <figure className="relative w-16 h-16">
              <Image
                src="/footer/cace.png"
                alt="Credencial CACE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
            <figure className="relative w-16 h-16">
              <Image
                src="/footer/ssl.png"
                alt="Credencial SSL"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
            <figure className="relative w-16 h-16">
              <Image
                src="/footer/afip.png"
                alt="Credencial AFIP"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex justify-between text-gray-300">
        <span>Copyright ©2023</span>
        <div>
          <span>Made by</span> <span className="text-white">Manuel Salvador</span>
        </div>
      </div>
    </footer>
  );
}
