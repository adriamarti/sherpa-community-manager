'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

// Assets
import logoImage from '@/app/assets/images/logo.svg';

// Constants
import { homeNavigation } from '@/constants';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='container max-w-7xl mx-auto fixed top-0 xl:top-2 z-50 xl:my-2 bg-white xl:rounded-xl z-90'>
      <div className='max-w-7xl px-4 md:px-6 py-4 mx-auto flex flex-row justify-between gap-4 items-center'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src={logoImage}
            alt='HagenSuite'
            className='h-6 w-auto my-auto'
          />
        </Link>
        {/* Navigations Links Desktop */}
        <div className='hidden md:flex justify-center items-center gap-4'>
          {homeNavigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-black/60 hover:text-black/100 px-1'
            >
              {label}
            </Link>
          ))}
        </div>
        {/* CTAs */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-menu md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <line
            x1='3'
            y1='6'
            x2='21'
            y2='6'
            className={twMerge(
              'origin-left transition',
              isOpen && 'rotate-45 -translate-y-1'
            )}
          ></line>
          <line
            x1='3'
            y1='12'
            x2='21'
            y2='12'
            className={twMerge('transition', isOpen && 'opacity-0')}
          ></line>
          <line
            x1='3'
            y1='18'
            x2='21'
            y2='18'
            className={twMerge(
              'origin-left transition',
              isOpen && '-rotate-45 translate-y-1'
            )}
          ></line>
        </svg>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'calc(100vh - 56px)' }}
            exit={{ height: 0 }}
            className='overflow-hidden flex flex-col justify-between bg-white border-t border-neutral-200 w-full pb-4'
          >
            <div className='flex flex-col items-center gap-4 p-4'>
              {homeNavigation.map(({ href, label }) => (
                <Link key={href} href={href} className='text-black/60'>
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
