'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

// Assets
import logoImage from '@/app/assets/images/logo.svg';

import { homeNavigation } from '@/constants';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='w-full py-0 md:py-4 px-0 md:px-8 fixed top-0 z-50 max-w-7xl'>
        <div className='border-b border-b-white/15 sm:border sm:border-white/15 md:rounded-[27px] bg-neutral-950/75 backdrop-blur py-4 md:py-0'>
          <div className='grid grid-cols-2 lg:grid-cols-3 py-2 pl-6 pr-4 items-center'>
            <Link href='/'>
              <Image
                src={logoImage}
                alt='HagenSuite'
                className='h-6 w-auto my-auto'
              />
            </Link>

            <div className='lg:flex justify-center items-center hidden'>
              <div className='flex gap-4 items-center'>
                {homeNavigation.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className='text-white/50 hover:text-white px-4'
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex justify-end items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
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
              <div className='hidden md:flex items-center gap-2'>
                <Link
                  href='/sign-in'
                  className='border border-white/20 hover:border-white rounded-full text-white py-2 px-4 text-sm'
                >
                  Sign In
                </Link>
                <Link
                  href='/sign-up'
                  className='rounded-full bg-lime-400 hover:bg-lime-500 text-black py-2 px-4 text-sm'
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className='overflow-hidden'
              >
                <div className='flex flex-col items-center gap-4 p-4'>
                  {homeNavigation.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className='text-white/50 hover:text-white'
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href='/sign-in'
                    className='w-full border border-white/20 hover:border-white rounded-full text-white py-2 px-4 text-sm text-center'
                  >
                    Sign In
                  </Link>
                  <Link
                    href='/sign-up'
                    className='w-full rounded-full bg-lime-400 hover:bg-lime-500 text-black py-2 px-4 text-sm text-center'
                  >
                    Sign Up
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
