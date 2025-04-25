const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Projeto Incrível 1',
      description: 'Descrição...',
      imageUrl: '',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Outro Projeto Legal',
      description: 'Descrição...',
      imageUrl: '',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'Portfólio V1',
      description: 'Descrição...',
      imageUrl: '',
      liveUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-800 p-4" // Fundo diferente
    >
      <div className="w-full max-w-5xl text-center">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Projetos</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-gray-700 bg-gray-900 p-4 text-left shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-400">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Ver Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:underline"
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
