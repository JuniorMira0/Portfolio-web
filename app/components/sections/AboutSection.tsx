const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-800 p-4"
    >
      <div className="max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">Sobre Mim</h2>
        <p className="text-lg text-gray-300">
          Aqui você colocará o texto descrevendo sua paixão por desenvolvimento,
          suas principais áreas de interesse e como você aborda os projetos.
          Junior Mira, Desenvolvedor Full Stack...
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
