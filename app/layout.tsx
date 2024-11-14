import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auto Body Repair Specialists',
  description: 'Professional auto body repair services with guaranteed quality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-tr from-[#181818] via-white to-[#15afb7]">
            <Header />
            <Navigation />
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}