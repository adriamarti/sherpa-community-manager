import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className='min-h-screen w-full bg-black flex flex-col flex-start items-center overflow-x-clip'>
      {children}
    </div>
  );
}
