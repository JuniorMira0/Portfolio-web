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
    <div className="mb-1 flex justify-between text-sm text-gray-300 md:text-xs">
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
    { name: 'CSS', level: 85 },
    { name: 'JAVASCRIPT', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
  ];

  return (
    <section
      id="about"
      className="section-bg-pattern snap-start snap-always relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden px-4 pt-6 md:pt-6"
    >
      <div className="container z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="mx-auto max-w-md md:mx-0 md:max-w-none">
          <h2
            className="mb-4 text-2xl font-semibold uppercase tracking-wider text-white md:text-3xl"
            style={{ color: accentColor }}
          >
            SOBRE MIM
          </h2>
          <p className="mb-4 text-gray-400 text-sm md:text-sm">
            Desenvolvedor Full Stack com experiência em React, Node.js e bancos
            de dados SQL/NoSQL. Estudante de Engenharia de Software e forte
            conhecimento em metodologias ágeis. Experiência na criação de APIs
            RESTful, testes unitários e conteinerização com Docker. Focado em
            aprimorar minhas habilidades em desenvolvimento, contribuindo para
            projetos de alto impacto.
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
