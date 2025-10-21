// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drexsho Kazuha | Profile',
  description: 'BSIT 2nd Year College Student',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/vecteezBG.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Main Content Centered */}
        <main className="relative z-10 flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
