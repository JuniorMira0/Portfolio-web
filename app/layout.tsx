import type { Metadata } from 'next';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SideColumnLeft from './components/layout/SideColumnLeft';
import SideColumnRight from './components/layout/SideColumnRight';
import { AccentColorProvider } from './context/AccentColorContext';
import { cn } from './lib/utils';

export const metadata: Metadata = {
  title: 'Junior Mira - Desenvolvedor Web',
  description: 'Portfólio de Junior Mira, desenvolvedor web FullStack',
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
        <AccentColorProvider>
          <Header />
          <SideColumnLeft />
          <SideColumnRight />
          <main>{children}</main>
          <Footer />
        </AccentColorProvider>
      </body>
    </html>
  );
}
