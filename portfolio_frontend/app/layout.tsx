import type { Metadata } from 'next';
import './globals.css';
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

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
    <html lang="en">
      <body className={`${orbitron.className} bg-black text-gray-100`}>
        {children}
      </body>
    </html>
  );
}