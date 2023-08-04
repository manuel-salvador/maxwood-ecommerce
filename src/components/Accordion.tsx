import React from 'react';
import { useState } from 'react';

import { DownArrowIcon } from './shared/Icons';

type Props = {
  label: string;
  content: string;
};

export default function Accordion({ label, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        key="question"
        className=" flex justify-between items-center rounded-tr-md relative z-20 rounded-br-md shadow-sm px-2 py-2  cursor-pointer font-open border-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-bold ml-1">{label}</div>
        <span className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <DownArrowIcon />
        </span>
      </div>

      {isOpen && (
        <div key="answer" className="text-lg  border-l border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
}
