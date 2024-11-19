import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

import { SidebarTrigger } from '@/components/ui/sidebar';

export default function AppBar() {
  return (
    <header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between'>
      <SignedIn>
        <SidebarTrigger />
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href='/sign-in'>Sign In</Link>
      </SignedOut>
    </header>
  );
}
