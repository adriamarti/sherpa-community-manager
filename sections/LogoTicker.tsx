'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className='py-24 overflow-x-clip px-8'>
      <div className='container'>
        <h4 className='text-center text-white/50 text-xl'>
          Already chosen by this market leaders
        </h4>
        <div className='flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className='flex flex-none gap-24 pr-24'
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {logos.map(({ name, image }) => (
                  <Image key={name} src={image} alt={name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
