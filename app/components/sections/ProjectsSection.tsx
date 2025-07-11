import React from 'react';
import { PROJECTS_DATA } from '../../constants/projects';

const ProjectsSection = () => {
  const projectsData = PROJECTS_DATA;

  return (
    <section
      id="projects"
      className="section-bg-pattern snap-start snap-always relative h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="w-full max-w-5xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Projetos</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-gray-700 bg-gray-900 p-3 text-left shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-3 text-sm text-gray-400">
                {project.description}
              </p>
              {project.technologies && (
                <div className="mb-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  aria-label={`Ver projeto ${project.title} ao vivo`}
                >
                  Ver Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                  aria-label={`Ver código do projeto ${project.title}`}
                >
                  Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
