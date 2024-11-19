import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-md p-6'>
        <SignUp />
      </main>
    </div>
  );
}
