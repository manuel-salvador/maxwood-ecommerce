import PageLayout from '@/layouts/PageLayout';

export default function TermsPage() {
  return (
    <PageLayout
      title="Términos y condiciones"
      className="p-8 flex flex-col gap-4 [&>div>h2]:text-gray-700 [&>div>h2]:font-bold max-w-screen-md mx-auto"
    >
      <h1 className="text-center font-bold text-2xl mb-4">Términos y Condiciones</h1>

      <div>
        <h2>1. Uso del sitio web</h2>
        <p>
          Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y
          condiciones de uso.
        </p>
      </div>

      <div>
        <h2>2. Información personal</h2>
        <p>
          Toda la información personal proporcionada por los usuarios se manejará de acuerdo con
          nuestra política de privacidad.
        </p>
      </div>

      <div>
        <h2>3. Precios y pagos</h2>
        <p>
          Los precios de los productos están sujetos a cambios sin previo aviso. El pago se
          realizará a través de métodos seguros y en cumplimiento con las leyes aplicables.
        </p>
      </div>

      <div>
        <h2>4. Envío y entrega</h2>
        <p>
          Nos esforzamos por entregar los productos en el menor tiempo posible, sin embargo, no nos
          hacemos responsables por retrasos en la entrega debido a circunstancias ajenas a nuestro
          control.
        </p>
      </div>

      <div>
        <h2>5. Política de devoluciones</h2>
        <p>
          Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que los
          productos estén en su estado original y se cumplan las condiciones especificadas en
          nuestra política de devoluciones.
        </p>
      </div>

      <div>
        <h2>6. Propiedad intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual relacionados con el sitio web y su contenido
          son propiedad exclusiva de la empresa.
        </p>
      </div>

      <div>
        <h2>7. Limitación de responsabilidad</h2>
        <p>
          No nos hacemos responsables de ningún daño directo, indirecto, incidental o consecuente
          que surja del uso de este sitio web.
        </p>
      </div>

      <div>
        <h2>8. Ley aplicable</h2>
        <p>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país
          en el que se encuentra registrada nuestra empresa.
        </p>
      </div>

      <div>
        <h2>9. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento
          sin previo aviso.
        </p>
      </div>

      <div>
        <h2>10. Contacto</h2>
        <p>
          Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, no dude en
          contactarnos a través de la información de contacto proporcionada en el sitio web.
        </p>
      </div>
    </PageLayout>
  );
}
