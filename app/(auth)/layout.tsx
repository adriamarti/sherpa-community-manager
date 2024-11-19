import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>{children}</main>
    </div>
  );
}
