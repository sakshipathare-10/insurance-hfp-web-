import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';

import Footer from '@/components/footer';
import { Inter } from 'next/font/google';


export const metadata: Metadata = {
  title: 'Insurance| Health First Priority',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white">
        {' '}
    
          {/* <main className="relative flex flex-col gap-5 h-screen w-screen max-w-[1440px] m-auto">
            <Navbar />
            <div className="w-full flex-1">{children}</div>
            <Toaster />
          </main> */}
          <main className="relative flex h-screen w-screen flex-col overflow-x-hidden">
            <Navbar />
            
            <div className="mx-auto w-full max-w-[1440px] flex-1 pb-5">
              {children}
            </div>
            {/* Footer */}
            <Footer />
          </main>
       
      </body>
    </html>
  );
}
