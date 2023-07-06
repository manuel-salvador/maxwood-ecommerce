import { ReactNode, useState } from 'react';
import Link from 'next/link';

import AccountAside from '@/components/pages/cuenta/AccountAside';
import { DownArrowIcon } from '@/components/shared/Icons';

import PageLayout from './PageLayout';

type Props = {
  title: string;
  children: ReactNode;
};

export default function AccountLayout({ title, children }: Props) {
  const [subMenu, setSubMenu] = useState(false);

  const handleLinksOppened = () => {
    if (!subMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    setSubMenu(!subMenu);
  };

  return (
    <PageLayout title={title} className="flex">
      <div
        className={`bg-white absolute left-0 z-20 md:static w-full max-w-screen md:w-fit h-[calc(100vh-4rem)] md:h-auto transition-all duration-500 ${
          subMenu ? 'top-16 opacity-100' : '-top-full opacity-0 md:opacity-100'
        }`}
      >
        <p className="text-right pt-4 pr-4 block md:hidden" onClick={handleLinksOppened}>
          Cerrar
        </p>
        <AccountAside closeSubMenu={handleLinksOppened} />
      </div>
      <div className="flex-1 h-full p-6">
        <div className="flex justify-center items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="block md:hidden" onClick={handleLinksOppened}>
            <DownArrowIcon />
          </span>
        </div>

        {children}
      </div>
    </PageLayout>
  );
}
