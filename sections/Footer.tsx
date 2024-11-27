import Image from 'next/image';
import Link from 'next/link';

// Assets
import logoImage from '@/app/assets/images/logo.svg';

const footerLinks = [
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <footer className='w-full py-16 bg-black flex justify-center'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
          <div>
            <Link href='/'>
              <Image
                src={logoImage}
                alt='HagenSuite'
                className='h-5 w-auto my-auto'
              />
            </Link>
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className='text-white/50 hover:text-white text-sm'
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
