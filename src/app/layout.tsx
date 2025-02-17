import type { Metadata } from 'next';
import './globals.css';
import Nav from './nav/components/Nav';

export const metadata: Metadata = {
  title: 'Meal Browser',
  description: 'Find your next meal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
