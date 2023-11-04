import './globals.css';
import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';
import { Nunito_Sans } from 'next/font/google';
import Navbar from './components/Navbar';

const Nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-Nunito',
});

export const metadata = {
  title: 'Landing page',
  description: 'Coding assignment for Xerocodee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Nunito.variable} font-sans`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />

        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />

        <meta name="description" content="Nextjs 13 starter template" />
        <meta property="og:description" content="Nextjs 13 starter template" />
        <meta name="twitter:description" content="Nextjs 13 starter template" />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames({
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
