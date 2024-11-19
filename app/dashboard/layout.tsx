import { ReactNode } from 'react';

import { SidebarProvider } from '@/components/ui/sidebar';

import Sidebar from '../components/shared/Sidebar';
import AppBar from '../components/shared/AppBar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full'>
        <Sidebar />

        <div className='w-full flex-1 flex flex-col'>
          <AppBar />

          {/* Main Content */}
          <div className='flex-1 overflow-auto bg-gray-50 p-6'>{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
