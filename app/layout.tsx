import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import './globals.css';
import Image from 'next/image';
import cricle from '@/public/cricle.png';

export const metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff]">
      <body className="relative">
        <ModalProvider />
        <ToastProvider />
        <Image src={cricle} alt="circle" className="absolute -top-20 right-6 rotate-90 z-0" />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}