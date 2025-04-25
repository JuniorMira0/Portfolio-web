'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [accentColor, setAccentColor] = useState('#ff0000');
  const colorOptions = [
    '#ffffff',
    '#f43f5e',
    '#f97316',
    '#facc15',
    '#84cc16',
    '#22d3ee',
    '#8b5cf6',
  ];

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center space-y-6 md:flex lg:left-8 xl:left-16">
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

      {/* Coluna Direita (Absoluta) */}
      <div className="absolute right-4 bottom-10 hidden flex-col items-center md:flex lg:right-8 xl:right-16">
        <div className="mb-4 flex flex-col items-center gap-2">
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`h-5 w-5 cursor-pointer rounded-full border-2 transition-all ${
                accentColor === color
                  ? 'scale-110 border-white ring-2 ring-white/50'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Mudar cor para ${color}`}
              title={color}
            />
          ))}
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="h-6 w-6 cursor-pointer appearance-none rounded-full border-none bg-transparent p-0"
            title="Escolher cor personalizada"
          />
        </div>
        <span className="[writing-mode:vertical-lr] text-xs uppercase tracking-widest text-gray-500">
          Scroll Down
        </span>
        <ArrowDown className="h-5 w-5 text-gray-500" />
      </div>

      <div className="z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Container da Imagem/Bolha */}
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div
              className="profile-picture absolute inset-0 shadow-lg"
              style={{ backgroundColor: accentColor }}
            ></div>
            {/* Imagem Interna */}
            <div className="absolute bottom-[-3rem] left-[45%] w-[90%] -translate-x-1/2">
              <Image
                src="/images/fotoDePerfil.png"
                alt="Foto de Perfil"
                width={384}
                height={384}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ color: accentColor }}
          >
            Junior Mira
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <Typewriter
              options={{
                strings: ['Desenvolvedor<br /> Full Stack'],
                autoStart: true,
                delay: 60,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="pt-2 text-lg text-gray-500 md:text-xl"
          ></motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
