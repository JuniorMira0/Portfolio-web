import type { Metadata } from 'next';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SideColumnLeft from './components/layout/SideColumnLeft';
import SideColumnRight from './components/layout/SideColumnRight';
import SkipLink from './components/ui/SkipLink';
import { AccentColorProvider } from './context/AccentColorContext';
import { cn } from './lib/utils';

export const metadata: Metadata = {
  title: 'Junior Mira - Desenvolvedor Full Stack',
  description:
    'Portfólio de Junior Mira, desenvolvedor Full Stack especializado em React, Node.js e tecnologias web modernas.',
  keywords:
    'desenvolvedor, full stack, react, node.js, javascript, typescript, web development',
  authors: [{ name: 'Junior Mira' }],
  creator: 'Junior Mira',
  openGraph: {
    title: 'Junior Mira - Desenvolvedor Full Stack',
    description:
      'Portfólio de Junior Mira, desenvolvedor Full Stack especializado em React, Node.js e tecnologias web modernas.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="snap-y snap-mandatory scroll-smooth scroll-pt-14"
    >
      <body
        className={cn('font-sans antialiased dark bg-gray-900 text-gray-100')}
      >
        <SkipLink />
        <AccentColorProvider>
          <Header />
          <SideColumnLeft />
          <SideColumnRight />
          <main id="main-content">{children}</main>
          <Footer />
        </AccentColorProvider>
      </body>
    </html>
  );
}
