import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-bg-pattern snap-start snap-always relative h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="w-full max-w-xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Contato</h2>
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
