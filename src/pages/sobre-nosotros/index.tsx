import Image from 'next/image';

import CarpinteroTrabajando from '@/assets/carpintero-trabajando.avif';
import AbueloYNieto from '@/assets/abuelo-y-nieto.avif';
import Forest from '@/assets/forest.avif';
import PersonasTrabajando from '@/assets/personas-trabajando.avif';
import AtencionCliente from '@/assets/chica-atencion-al-cliente.avif';
import AprentonManos from '@/assets/apreton-de-manos.avif';
import PageLayout from '@/layouts/PageLayout';

export default function AboutUsPage() {
  return (
    <PageLayout title="Sobre nosotros">
      <div className="flex flex-col-reverse md:flex-row w-full gap-8">
        <div className="w-full p-6 flex justify-center items-center">
          <p className="font-semibold text-2xl">
            En MaxWood nos enorgullece ofrecer una amplia selección de muebles de madera
            cuidadosamente elaborados por expertos. Nuestra pasión por la madera y el amor por el
            diseño se reflejan en cada pieza que ofrecemos.
          </p>
        </div>
        <figure className="block h-80 w-full bg-blue-800 md:clip-left-point aspect-square relative">
          <Image
            src={CarpinteroTrabajando}
            alt="Carpintero trabajando"
            fill
            className="object-cover"
          />
        </figure>
      </div>
      <div className="my-32 px-8 sm:px-16 flex flex-col items-center md:flex-row gap-12 lg:gap-32 md:max-w-6xl mx-auto">
        <figure className="relative overflow-hidden w-full md:w-1/2 max-h-96 md:max-h-full aspect-square">
          <Image
            src={AbueloYNieto}
            alt="Abuelo y nieto"
            fill
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="md:w-1/2">
          <h2 className="font-bold text-4xl mb-8">Nuestra historia</h2>
          <p className="text-xl">
            En un pequeño taller de carpintería, nació nuestra pasión por los muebles de madera.
            <br />
            Hace dos décadas, el querido abuelo Max empezó con un objetivo claro: crear piezas
            únicas y hermosas que elevaran los espacios de nuestros clientes. <br /> Con cada mesa
            tallada a mano, cada silla meticulosamente ensamblada y cada cama elaborada con esmero,
            nos convertimos en un referente en el mundo de los muebles.
          </p>
        </div>
      </div>
      <div className="my-32 px-8 sm:px-16 flex flex-col-reverse items-center md:flex-row gap-12 lg:gap-32 md:max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="font-bold text-4xl mb-8">Nuestro compromiso con la sostenibilidad</h2>
          <p className="text-xl">
            Nos preocupamos profundamente por el medio ambiente y nos esforzamos por ser una empresa
            responsable y sostenible. Trabajamos en estrecha colaboración con proveedores que
            comparten nuestros valores, obteniendo la madera de fuentes responsables y sostenibles.
            Además, implementamos prácticas de fabricación que minimizan nuestro impacto ambiental,
            utilizando materiales ecológicos y reduciendo residuos. Nuestro compromiso con la
            sostenibilidad es una parte integral de nuestra identidad como empresa.
          </p>
        </div>
        <figure className="relative overflow-hidden w-full md:w-1/2 max-h-96 md:max-h-full aspect-square">
          <Image src={Forest} alt="Bosque" fill className="object-cover w-full h-full" />
        </figure>
      </div>

      <div className="max-w-6xl mx-auto mb-32 px-8 sm:px-16">
        <h2 className="font-bold text-4xl mb-8">Más de nosotros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="w-full">
            <figure>
              <Image src={PersonasTrabajando} alt="Personas trabajando" />
            </figure>
            <h3 className="text-2xl sm:text-xl font-semibold my-4">Nuestra filosofía</h3>
            <p>
              En nuestro corazón, valoramos la artesanía de calidad y el diseño excepcional. Creemos
              en la creación de muebles que superen las expectativas de nuestros clientes en
              términos de belleza, durabilidad y funcionalidad. Cada pieza que sale de nuestro
              taller es el resultado de un compromiso inquebrantable con la perfección y el amor por
              la madera. Nos esforzamos por ofrecer una experiencia única y excepcional a cada
              persona que elige nuestros muebles.
            </p>
          </div>
          <div className="w-full">
            <figure>
              <Image src={AtencionCliente} alt="Chica atención al cliente" />
            </figure>
            <h3 className="text-2xl sm:text-xl font-semibold my-4">
              Experiencia de cliente excepcional
            </h3>
            <p>
              Nos enorgullece ofrecer una experiencia de cliente excepcional en cada paso del
              camino. Desde el momento en que navegas por nuestro sitio web hasta el momento en que
              recibes tus muebles en tu hogar, nos esforzamos por brindarte un servicio
              personalizado y amable. Nuestro equipo de atención al cliente está disponible para
              responder tus preguntas, brindarte asesoramiento y garantizar que estés completamente
              satisfecho con tu compra.
            </p>
          </div>
          <div className="w-full">
            <figure>
              <Image src={AprentonManos} alt="Apreton de manos" />
            </figure>
            <h3 className="text-2xl sm:text-xl font-semibold my-4">Calidad y garantía</h3>
            <p>
              Estamos comprometidos con la calidad en cada aspecto de nuestro negocio. Utilizamos
              materiales de la más alta calidad y aplicamos rigurosos estándares de fabricación para
              garantizar que nuestros muebles sean duraderos y perduren a lo largo del tiempo.
              Estamos tan seguros de la calidad de nuestros productos que ofrecemos una garantía que
              respalda cada compra. Tu satisfacción es nuestra prioridad número uno.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
