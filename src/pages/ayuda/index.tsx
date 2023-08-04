import Accordion from '@/components/Accordion';
import PageLayout from '@/layouts/PageLayout';

export default function AyudaPage() {
  return (
    <PageLayout title="Ayuda" className="flex flex-col items-center">
      <h1 className="mt-8 font-bold text-xl">Preguntas frecuentes</h1>
      <div className="flex flex-col w-full gap-2 max-w-lg mt-4 mb-8 px-4">
        <Accordion
          label="¿Cuál es el tiempo de entrega?"
          content="El tiempo de entrega varía según la ubicación y el método de envío seleccionado. Generalmente, nuestros pedidos se entregan en un plazo de 3 a 7 días hábiles."
        />

        <Accordion
          label="¿Cuáles son los métodos de pago aceptados?"
          content="Aceptamos tarjetas de crédito/débito (Visa, Mastercard) y también pagos con mediante la plataforma de Mercado Pago"
        />

        <Accordion
          label="¿Puedo realizar cambios o devoluciones?"
          content="Sí, aceptamos cambios y devoluciones dentro de los 30 días posteriores a la entrega. Los gastos de envío de devolución corren por cuenta del cliente, a menos que el producto presente defectos de fabricación."
        />

        <Accordion
          label="¿Cuál es el costo de envío?"
          content="El costo de envío depende del destino y del tipo de envío seleccionado. Ofrecemos opciones de envío estándar y gratuito con retiro en sucursal a cargo del cliente."
        />

        <Accordion
          label="¿Tienen atención al cliente?"
          content="Sí, contamos con un equipo de atención al cliente disponible para ayudarte con cualquier pregunta o inquietud que puedas tener. Puedes contactarnos por teléfono, correo electrónico o mediante nuestro chat en línea en horarios específicos."
        />

        <Accordion label="¿Hacen envíos internacionales?" content="Por el momento no." />

        <Accordion
          label="¿Puedo cancelar mi pedido?"
          content="Si tu pedido aún no ha sido enviado, puedes contactarnos para solicitar la cancelación y reembolso. Sin embargo, si el pedido ya está en proceso de envío, de fabricación o ha sido entregado, deberás seguir nuestro proceso de devolución para obtener un reembolso."
        />
      </div>
    </PageLayout>
  );
}
