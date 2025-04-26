const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="snap-start py-6 md:px-8 md:py-0 bg-gray-800">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Junior Mira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
