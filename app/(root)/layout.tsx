import { ReactNode } from 'react';

import AppHeader from '../components/shared/AppHeader';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className='flex h-screen w-full'>
      <AppHeader />

      {/* Main Content */}
      <div className='flex-1 overflow-auto bg-gray-50 p-6'>{children}</div>
    </div>
  );
}
