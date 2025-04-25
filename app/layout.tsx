import type { Metadata } from 'next';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn('font-sans antialiased dark bg-gray-900 text-gray-100')}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
