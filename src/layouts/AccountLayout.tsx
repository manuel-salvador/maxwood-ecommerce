import { ReactNode } from 'react';
import Link from 'next/link';

import AccountAside from '@/components/pages/cuenta/AccountAside';
import { LeftArrowIcon } from '@/components/shared/Icons';

import PageLayout from './PageLayout';

type Props = {
  title: string;
  children: ReactNode;
};

export default function AccountLayout({ title, children }: Props) {
  return (
    <PageLayout title={title} className="flex">
      <AccountAside />
      <div className="flex-1 h-full p-6 relative">
        <Link href="/cuenta" className="absolute top-8 block md:hidden">
          <LeftArrowIcon />
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        {children}
      </div>
    </PageLayout>
  );
}
