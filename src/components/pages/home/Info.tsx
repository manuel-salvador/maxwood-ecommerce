import { CreditCardIcon, TruckIcon, WhatsAppIcon } from '@/components/shared/Icons';

const INFO_ITEMS = [
  {
    icon: <TruckIcon />,
    title: 'Entregas a todo CABA',
    description: 'Envio rápido y confiable',
  },
  {
    icon: <CreditCardIcon />,
    title: 'Pago en cuotas',
    description: 'con tarjeta de crédito, con Mercado Pago',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'Atención humana',
    description: 'Personal especializado para asesorarte',
  },
];

export default function Info() {
  return (
    <section className="my-8 bg-gray-200 p-4">
      <ul className="flex justify-evenly gap-5">
        {INFO_ITEMS.map((item) => (
          <li key={item.title} className="flex flex-col items-center">
            <div>{item.icon}</div>
            <div className="mt-2">
              <span className="block text-sm font-bold text-center">{item.title}</span>
              <span className="hidden">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
