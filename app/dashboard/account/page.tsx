import { ReactNode } from 'react';

interface ProfilePageProps {
  children: ReactNode;
}

export default function ProfilePage({ children }: ProfilePageProps) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>{children}</main>
    </div>
  );
}
