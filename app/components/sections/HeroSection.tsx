'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useAccentColor } from './../../context/AccentColorContext';

const HeroSection = () => {
  const { accentColor } = useAccentColor();

  return (
    <div className="section-bg-pattern snap-start snap-always relative flex h-[calc(100vh-3.5rem)] w-full items-center justify-center overflow-hidden px-4">
      <div className="z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div
              className="profile-picture absolute inset-0 shadow-lg"
              style={{ backgroundColor: accentColor }}
            ></div>
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
            className="text-2xl font-bold tracking-tighter text-gray-300 sm:text-3xl md:text-4xl lg:text-5xl min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center"
          >
            <div className="w-full text-center md:text-left">
              <Typewriter
                options={{
                  strings: ['Front end Developer'],
                  autoStart: true,
                  delay: 60,
                  loop: true,
                  deleteSpeed: 30,
                  cursor: '|',
                }}
              />
            </div>
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
