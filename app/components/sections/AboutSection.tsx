'use client';
import React from 'react';
import Image from 'next/image';
import { useAccentColor } from './../../context/AccentColorContext';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="mb-1 flex justify-between text-sm text-gray-300">
      <span>{skill}</span>
    </div>
    <div className="h-1 w-full rounded-full bg-gray-700">
      <div
        className="h-full rounded-full bg-white"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const AboutSection = () => {
  const { accentColor } = useAccentColor();
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'SASS', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'JAVASCRIPT', level: 85 },
  ];

  return (
    <section
      id="about"
      className="snap-start relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-950 px-4 pt-20 pb-10 md:px-6 md:pb-12 md:pt-20 lg:pt-24 lg:pb-16"
    >
      <div className="container z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="text-center md:text-left">
          <h2
            className="mb-4 text-2xl font-semibold uppercase tracking-wider text-white md:text-3xl"
            style={{ color: accentColor }}
          >
            SOBRE MIM
          </h2>
          <p className="mb-8 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                percentage={skill.level}
              />
            ))}
          </div>
        </div>
        <div className="relative flex justify-center md:justify-start">
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div
              className="profile-picture absolute inset-0 shadow-lg"
              style={{ backgroundColor: accentColor || '#808080' }}
            ></div>
            <div className="absolute bottom-[-1rem] left-1/2 w-[90%] -translate-x-1/2 md:bottom-[-3rem] md:left-[45%]">
              <Image
                src="/images/fotoDePerfil.png"
                alt="Foto de Perfil Sobre"
                width={384}
                height={384}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
