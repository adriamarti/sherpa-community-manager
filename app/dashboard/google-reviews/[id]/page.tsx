import { ReactNode } from 'react';

interface TweetPageProps {
  children: ReactNode;
}

export default function TweetPage({ children }: TweetPageProps) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>{children}</main>
    </div>
  );
}
