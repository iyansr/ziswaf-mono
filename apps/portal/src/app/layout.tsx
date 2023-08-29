import { Toaster } from 'ui/src/components/toaster';
import { cn } from 'ui/src/lib/utils';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import BottomNavigation from '@/modules/shared/components/BottomNavigation';
import ReactQueryProvider from '@/modules/shared/providers/ReactQueryProvider';
import { SessionProvider } from '@/modules/shared/providers/SessionProvider';

import 'ui/src/css/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  applicationName: 'ZIS Indosat',
  themeColor: '#fcd34d',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-slate-200 text-slate-900')}>
        <ReactQueryProvider>
          <SessionProvider>
            <div className="max-w-md mx-auto min-h-screen bg-white relative">
              <nav className="p-4 flex items-center justify-center w-full bg-amber-300">
                <Image src="/zis.png" alt="Logo" width={32} height={32} />
              </nav>
              <div className="pb-16">{children}</div>
              <BottomNavigation />
            </div>
            <Toaster />
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
