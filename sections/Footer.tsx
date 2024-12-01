import Image from 'next/image';
import Link from 'next/link';

// Assets
import logoImage from '@/app/assets/images/logo.svg';

const footerLinks = [
  //   { href: '/contacto', label: 'Contacto' },
  { href: '/politicas-privacidad', label: 'Políticas de privacidad' },
  { href: '/terminos-condiciones', label: 'Términos y condiciones' },
];

export default function Footer() {
  return (
    <footer className='w-full py-8 md:py-16 bg-white flex justify-center'>
      <div className='container max-w-7xl px-4 md:px-6'>
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
                  className='text-black/50 hover:text-black text-sm'
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
