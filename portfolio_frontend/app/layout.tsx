import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Alex Smith | Full Stack Developer",
  description: "Portfolio of Alex Smith, a full stack developer and creative problem solver.",
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