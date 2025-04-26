'use client';
import React from 'react';
import Link from 'next/link';
import { Asterisk } from 'lucide-react';

const Header = () => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full border-b border-gray-700/40 bg-gray-950/85 backdrop-blur-sm supports-[backdrop-filter]:bg-gray-950/60"
    >
      <div className="container mx-auto flex h-14 max-w-screen-lg items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Asterisk
            className="h-6 w-6 text-white transition-transform group-hover:rotate-90"
            strokeWidth={1.5}
          />
          <span className="text-sm font-medium tracking-wide text-gray-100 transition-colors group-hover:text-white">
            Junior Mira
          </span>
        </Link>
        <nav>
          <ul className="flex items-center gap-5 sm:gap-6 md:gap-8">
            <li>
              <Link
                href="#about"
                className="text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
