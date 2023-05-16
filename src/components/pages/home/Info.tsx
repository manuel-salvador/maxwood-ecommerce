import { CreditCardIcon, TruckIcon, WhatsAppIcon } from '@/components/shared/Icons';

const INFO_ITEMS = [
  {
    icon: <TruckIcon />,
    iconDesktop: <TruckIcon size={25} />,
    title: 'Entregas a todo CABA',
    description: 'Envio rápido y confiable',
  },
  {
    icon: <CreditCardIcon />,
    iconDesktop: <CreditCardIcon size={25} />,
    title: 'Pago en cuotas',
    description: 'con tarjeta de crédito, con Mercado Pago',
  },
  {
    icon: <WhatsAppIcon />,
    iconDesktop: <WhatsAppIcon size={25} />,
    title: 'Atención humana',
    description: 'Personal especializado para asesorarte',
  },
];

export default function Info() {
  return (
    <section className="my-8 bg-gray-200 p-4 lg:py-8">
      <ul className="flex justify-evenly gap-5">
        {INFO_ITEMS.map((item) => (
          <li key={item.title} className="flex flex-col items-center lg:flex-row lg:gap-4 ">
            <div className="lg:hidden">{item.icon}</div>
            <div className="hidden lg:block">{item.iconDesktop}</div>
            <div className="mt-2">
              <span className="block text-sm font-bold text-center lg:text-left lg:text-base">
                {item.title}
              </span>
              <span className="hidden lg:block">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
