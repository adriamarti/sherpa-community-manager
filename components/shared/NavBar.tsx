'use client';

import Image from 'next/image';
import Link from 'next/link';

// Assets
import logoImage from '@/app/assets/images/logo.svg';

import { homeNavigation } from '@/constants';

export default function NavBar() {
  return (
    <header className='container py-4'>
      <div className='grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full py-2 pl-6 pr-4'>
        <Image
          src={logoImage}
          alt='HagenSuite'
          className='h-6 w-auto my-auto'
        />
        <div className='lg:flex justify-center items-center hidden'>
          <div className='flex gap-4 items-center'>
            {homeNavigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className='text-white/70 hover:text-white px-4'
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
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
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
    </header>
  );
}
