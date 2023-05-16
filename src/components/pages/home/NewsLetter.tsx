import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function NewsLetter() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }

    console.info(email);
    setSuccess(true);
  };

  return (
    <section className="relative flex flex-col items-center mt-8 px-4 pt-8 pb-10 gap-4 text-center text-white">
      <Image
        src="/img/newsletter.jpg"
        alt="Newsletter background of a coach"
        fill
        className="object-cover object-center -z-10 brightness-[0.35]"
      />
      <h6 className="font-bold text-lg">Sigamos en contacto</h6>
      <p className="text-sm">
        Dejanos tu mail, participas todos los meses de nuestros sorteos y obtenes descuentos
        exclusivos
      </p>
      {success ? (
        <p className="text font-bold">
          Ya estas participado 🥳 <br /> ¡Gracias por suscribirte!
        </p>
      ) : (
        <form className="relative flex w-full max-w-xl text-sm" onSubmit={handleSumbit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-black outline-none p-2"
            placeholder="Ingrese su email"
          />
          <span
            className={`block px-2 absolute -bottom-7 border text-red-600 bg-white border-red-500 transition-all ${
              error ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Email no válido
          </span>
          <button
            className="px-8 bg-secondary hover:brightness-110 transition-all duration-200"
            type="submit"
          >
            Participar
          </button>
        </form>
      )}
    </section>
  );
}
