import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  msg: string;
  linkBtn?: {
    label: string;
    href: string;
    extraFunction?: () => void;
  };
  closeBtn?: ReactNode;
};

export default function CustomToast({ msg, linkBtn, closeBtn }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-white p-4 shadow-lg">
      <p>{msg}</p>
      <div className="flex justify-center gap-8">
        {linkBtn && (
          <Link
            className="button-primary bg-secondary text-white"
            href={linkBtn.href}
            onClick={linkBtn.extraFunction}
          >
            {linkBtn.label}
          </Link>
        )}
        {closeBtn}
      </div>
    </div>
  );
}
