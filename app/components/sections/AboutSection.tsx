'use client';
import React from 'react';
import Image from 'next/image';
import { useAccentColor } from './../../context/AccentColorContext';
import { ABOUT_DATA } from '../../constants/about';

interface SkillBarProps {
  skill: string;
  percentage: number;
  accentColor: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  percentage,
  accentColor,
}) => (
  <div className="mb-4">
    <div className="mb-1 flex justify-between text-sm text-gray-300">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-1 w-full rounded-full bg-gray-700">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%`, backgroundColor: accentColor }}
      ></div>
    </div>
  </div>
);

const AboutSection = () => {
  const { accentColor } = useAccentColor();
  const { title, description, skills } = ABOUT_DATA;

  return (
    <section
      id="about"
      className="section-bg-pattern snap-start snap-always relative min-h-screen w-full overflow-hidden px-4 py-8 md:py-12"
    >
      <div
        className="container z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16 h-full"
        style={{ minHeight: 'calc(100vh - 8rem)' }}
      >
        <div className="mx-auto max-w-md md:mx-0 md:max-w-none">
          <h2
            className="mb-4 text-2xl font-semibold uppercase tracking-wider text-white md:text-3xl"
            style={{ color: accentColor }}
          >
            {title}
          </h2>
          <p className="mb-4 text-gray-400 md:text-sm whitespace-pre-line">
            {description}
          </p>
          <div>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                percentage={skill.level}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
        <div className="relative flex justify-center md:justify-start">
          <div className="relative h-40 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div
              className="profile-picture2 absolute inset-0 shadow-lg"
              style={{ backgroundColor: accentColor || '#808080' }}
            ></div>
            <div className="absolute bottom-[-1rem] left-1/2 w-[90%] -translate-x-1/2 md:bottom-[-3rem] md:left-[45%]">
              <Image
                src="/images/fotoDePerfil2.png"
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
