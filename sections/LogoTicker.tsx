'use client';

import Image from 'next/image';

// Assets
import quantumLogo from '@/app/assets/images/quantum.svg';
import acmeLogo from '@/app/assets/images/acme-corp.svg';
import echoValleyLogo from '@/app/assets/images/echo-valley.svg';
import pulseLogo from '@/app/assets/images/pulse.svg';
import outsideLogo from '@/app/assets/images/outside.svg';
import apexLogo from '@/app/assets/images/apex.svg';
import celestialLogo from '@/app/assets/images/celestial.svg';
import twiceLogo from '@/app/assets/images/twice.svg';

const logos = [
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className='py-24 overflow-x-clip'>
      <div className='container'>
        <h3 className='text-center text-white/50 text-xl'>
          Already chosen by this market leaders
        </h3>
        <div className='overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex gap-24 pr-24'>
            {logos.map(({ name, image }) => (
              <Image key={name} src={image} alt={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
