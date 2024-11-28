import { ReactNode } from 'react';

// Components
import NavBar from '@/components/marketing/NavBar';
import Footer from '@/sections/Footer';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='min-h-screen flex flex-col flex-start items-center overflow-x-clip'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
