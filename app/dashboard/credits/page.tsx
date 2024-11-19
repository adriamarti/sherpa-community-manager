import { ReactNode } from 'react';

interface CreditsPageProps {
  children: ReactNode;
}

export default function CreditsPage({ children }: CreditsPageProps) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>{children}</main>
    </div>
  );
}
