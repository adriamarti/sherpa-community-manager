import Link from 'next/link';

export default function AppBar() {
  return (
    <header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between'>
      <Link href='/sign-in'>Sign In</Link>
    </header>
  );
}
