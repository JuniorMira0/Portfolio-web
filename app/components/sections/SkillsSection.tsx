import React from 'react';
import { useAccentColor } from '../../context/AccentColorContext';
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

  const skillsData = [
      {
        name: 'Frontend',
        description:
          'JavaScript, TypeScript React (Hooks, Context API, Redux), HTML, CSS (incluindo Bootstrap, TailwindCSS) , Next.js...',
        icon: iconMap['Frontend'],
      },
      {
        name: 'Backend',
        description:
          'Node.js, Express, API REST / RESTful, SQL, NoSQL, Python...',
        icon: iconMap['Backend'],
      },
     {
       name: 'Testes e Qualidade',
       description:
         'Jest / RTL, Cypress, Mocha / Chai / Sinon, TDD (Test Driven Development)...',
       icon: iconMap['Testes e Qualidade'],
     },
     {
       name: 'Tools/DevOps',
       description: 'Git, Docker...',
       icon: iconMap['Tools/DevOps'],
      },
      {
        name: 'Metodologias',
        description: 'Agile, Scrum, Kanban...',
        icon: iconMap['Metodologias'],
      },
      {
       name: 'Design',
       description: 'Figma, UI/UX...',
       icon: iconMap['Design'],
      },
  ];

  return (
    <section
      id="skills"
      className="section-bg-pattern snap-start snap-always relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center overflow-hidden "
    >
      {/* Adicionado px-4 para padding mobile e sm:px-0 para remover em telas maiores */}
      <div className="w-full max-w-5xl text-center px-4 sm:px-0">
        <h2
          className="mb-12 text-4xl font-bold md:text-5xl"
          style={{ color: accentColor }}
        >
          Habilidades
        </h2>
        {/* Layout muda de lista (mobile) para grid (sm+) */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => {
            const IconComponent = skill.icon || Code2;
            return (
              // Aplicar estilos base (lista) e overrides (card) com prefixo sm:
              <div
                key={skill.name}
                className="flex items-start gap-3 text-left group
                           sm:block sm:rounded-xl sm:border sm:border-gray-700/80 sm:bg-gray-800/50 sm:p-6 sm:shadow-lg sm:backdrop-blur-sm sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-[1.03] sm:hover:border-gray-500 sm:hover:bg-gray-700/70"
              >
                {/* Ícone */}
                <div className="flex-shrink-0 pt-1 sm:mb-3 sm:pt-0"> {/* Padding top só no mobile pra alinhar com texto */}
                  <IconComponent
                    className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white sm:h-6" // Cor base e hover (via group no pai)
                    style={{ color: accentColor }} // Override da cor pelo accentColor
                    strokeWidth={1.5}
                  />
                </div>
                {/* Textos */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white sm:text-xl"> {/* Tamanho diferente mobile/desktop */}
                    {skill.name}
                  </h3>
                  <p className="text-xs leading-snug text-gray-400 sm:text-sm sm:leading-relaxed sm:text-gray-300"> {/* Tamanho/cor/leading diferentes */}
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