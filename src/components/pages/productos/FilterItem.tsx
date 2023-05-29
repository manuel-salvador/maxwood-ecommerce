import React from 'react';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

export default function FilterItem({ title, children }: Props) {
  return (
    <div id={`filtro ${title}`}>
      <div className="mb-3">
        <span className="font-bold text-gray-600 text-xl">{title}</span>
        <div className="divider mt-2" />
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
