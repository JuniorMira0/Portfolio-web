import React from 'react';
import Link from 'next/link';

const SkipLink = () => {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Pular para o conteúdo principal
    </Link>
  );
};

export default SkipLink;
