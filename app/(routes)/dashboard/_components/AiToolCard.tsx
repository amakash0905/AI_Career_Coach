'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface TOOL {
  name: string;
  desc: string;
  icon: string;
  button: string;
  path: string;
}

type AIToolProps = {
  tool: TOOL;
};

function AiToolCard({ tool }: AIToolProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(tool.path);
  };

  return (
    <div
      className="p-4 border rounded-xl shadow-sm flex flex-col items-start bg-white hover:shadow-md transition cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={tool.icon}
        width={40}
        height={40}
        alt={tool.name}
        className="mb-2 rounded"
      />
      <h2 className="font-semibold text-md">{tool.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{tool.desc}</p>
      <button
        className="mt-auto px-4 py-2 bg-black text-white text-sm rounded w-full hover:bg-gray-800 transition"
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from firing again
          handleClick();
        }}
      >
        {tool.button}
      </button>
    </div>
  );
}

export default AiToolCard;