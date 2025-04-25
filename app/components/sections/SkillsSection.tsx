const SkillsSection = () => {
  const skillsData = [
    { name: 'Frontend', description: 'React, Next.js, TS...', colorClass: 'bg-custom-blue' },
    { name: 'Backend', description: 'Node.js, Python...', colorClass: 'bg-custom-teal' },
    { name: 'Design', description: 'Figma, UI/UX...', colorClass: 'bg-custom-pink' },
    { name: 'Mobile', description: 'React Native...', colorClass: 'bg-custom-orange' },
    { name: 'Tools/DevOps', description: 'Git, Docker...', colorClass: 'bg-custom-green' },
    { name: 'Outra Categoria', description: 'Agile...', colorClass: 'bg-custom-purple' },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-screen w-full flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-5xl text-center">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Habilidades</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className={`rounded-lg p-6 text-left text-white shadow-lg ${skill.colorClass}`}
            >
              <h3 className="mb-2 text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm opacity-90">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;