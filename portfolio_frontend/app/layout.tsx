import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "PW",
  description: "Portfolio .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}