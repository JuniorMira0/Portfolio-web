import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const SideColumnLeft = () => {
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center space-y-6 md:flex lg:left-8 xl:left-16">
      <span className="[writing-mode:vertical-lr] text-sm uppercase tracking-widest text-gray-500">
        Junior Mira
      </span>
      <div className="flex flex-col space-y-2">
        <span className="h-1 w-1 rounded-full bg-gray-700"></span>
        <span className="h-1 w-1 rounded-full bg-gray-700"></span>
        <span className="h-1 w-1 rounded-full bg-gray-700"></span>
        <span className="h-1 w-1 rounded-full bg-gray-700"></span>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          href="https://github.com/JuniorMira0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-100" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/junior-mira/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-100" />
        </Link>
      </div>
    </div>
  );
};

export default SideColumnLeft;
