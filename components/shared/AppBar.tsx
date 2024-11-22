/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarTrigger } from '@/components/ui/sidebar';

import { navigation } from '@/constants';

const allNavItems = navigation.reduce(
  (acc, curr) => [...acc, ...curr.items],
  [] as any
);

export default function AppBar() {
  const pathname = usePathname();

  const currentPage = allNavItems.find(({ url }: any) =>
    pathname.includes(url)
  );

  return (
    <header className='bg-white border-b border-gray-200 px-6 flex items-center justify-between'>
      <div className='flex flex-col w-full pt-4 gap-2'>
        <div className='flex items-center gap-4 justify-between'>
          <div className='flex items-center'>
            <SidebarTrigger />
            <div className='h-6 w-px bg-gray-200 mx-4' />
            <span className='text-lg font-bold text-gray-900 min-h-[1.75rem]'>
              {currentPage?.title || 'Dashboard'}
            </span>
          </div>
          <UserButton />
        </div>
        <nav className='flex items-center gap-4 mt-2'>
          {currentPage?.items?.map((item: any) => (
            <Link
              key={item.url}
              href={item.url}
              className={`text-sm pb-2 border-b-2 ${
                pathname === item.url
                  ? 'text-gray-900 font-medium border-gray-900'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
