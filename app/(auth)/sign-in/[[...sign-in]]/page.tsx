import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>
        <SignIn />
      </main>
    </div>
  );
}
