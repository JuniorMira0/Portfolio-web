import React from 'react';
import { useAccentColor } from '../../context/AccentColorContext';
import { SKILLS_DATA } from '../../constants/skills';
import {
  Code2,
  DatabaseZap,
  Palette,
  Users,
  TerminalSquare,
  ClipboardCheck,
} from 'lucide-react';

const iconMap = {
  Frontend: Code2,
  Backend: DatabaseZap,
  Design: Palette,
  Metodologias: Users,
  'Tools/DevOps': TerminalSquare,
  'Testes e Qualidade': ClipboardCheck,
};

const SkillsSection = () => {
  const { accentColor } = useAccentColor();
  const skillsData = SKILLS_DATA;

  return (
    <section
      id="skills"
      className="section-bg-pattern snap-start snap-always relative h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="w-full max-w-5xl text-center px-4 sm:px-0">
        <h2
          className="mb-6 text-3xl font-bold md:text-4xl"
          style={{ color: accentColor }}
        >
          Habilidades
        </h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => {
            const IconComponent =
              iconMap[skill.icon as keyof typeof iconMap] || Code2;
            return (
              <div
                key={skill.name}
                className="flex items-start gap-3 text-left group
                           sm:block sm:rounded-xl sm:border sm:border-gray-700/80 sm:bg-gray-800/50 sm:p-6 sm:shadow-lg sm:backdrop-blur-sm sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-[1.03] sm:hover:border-gray-500 sm:hover:bg-gray-700/70"
              >
                <div className="flex-shrink-0 pt-1 sm:mb-3 sm:pt-0">
                  <IconComponent
                    className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white sm:h-6"
                    style={{ color: accentColor }}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {skill.name}
                  </h3>
                  <p className="text-xs leading-snug text-gray-400 sm:text-sm sm:leading-relaxed sm:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
