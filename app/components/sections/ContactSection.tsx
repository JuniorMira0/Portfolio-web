const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-start flex min-h-screen w-full flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-xl text-center">
        <h2 className="mb-8 text-4xl font-bold md:text-5xl">Contato</h2>
        <form
          action="https://formspree.io/f/[SEU_FORM_ID]"
          method="POST"
          className="space-y-4 text-left"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-gray-700 bg-gray-800 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-gray-700 bg-gray-800 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded border border-gray-700 bg-gray-800 p-2 focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-custom-purple px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
