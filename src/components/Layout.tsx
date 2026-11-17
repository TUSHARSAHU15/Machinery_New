import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFab } from './WhatsAppFab';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className="min-h-screen py-0 md:py-6 px-0 md:px-3 flex justify-center selection:bg-[#004669] selection:text-white">
      <div className="boxed-container flex flex-col min-h-[92vh] bg-white">
        <Header />
        <main className="flex-1 w-full bg-white">{children}</main>
        <Footer />
      </div>
      <WhatsAppFab />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};
