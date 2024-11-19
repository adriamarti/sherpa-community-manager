import { ReactNode } from 'react';

interface TwitterPageProps {
  children: ReactNode;
}

export default function TwitterPage({ children }: TwitterPageProps) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>{children}</main>
    </div>
  );
}
