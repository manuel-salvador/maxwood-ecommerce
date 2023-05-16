import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="py-8 px-4">
        <div className="flex flex-col gap-8">
          <div className="max-w-xs">
            <div className="mb-4">
              <p className="font-bold text-2xl">MaxWood</p>
              <span>20 años construyendo junto a vos.</span>
            </div>
            <p>Tenemos todos los muebles para tu hogar, oficina o negocio.</p>
          </div>

          <div className="flex gap-3 self-center">
            <figure className="relative w-16 h-16">
              <Image src="/footer/cace.png" alt="Credencial CACE" fill className="object-cover" />
            </figure>
            <figure className="relative w-16 h-16">
              <Image src="/footer/ssl.png" alt="Credencial SSL" fill className="object-cover" />
            </figure>
            <figure className="relative w-16 h-16">
              <Image src="/footer/afip.png" alt="Credencial AFIP" fill className="object-cover" />
            </figure>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-8 ">
          <div>
            <h6 className="font-bold">Información</h6>
            <ul>
              <li>Términos y condiciones</li>
              <li>Pago seguro</li>
              <li>Polítco de envio</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Empresa</h6>
            <ul>
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>Maps</li>
            </ul>
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
