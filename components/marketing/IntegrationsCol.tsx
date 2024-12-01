'use client';

import { Fragment, HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export interface Integration {
  name: string;
  description: string;
  icon: StaticImageData;
}

interface IntegrationsColProps extends HTMLAttributes<HTMLDivElement> {
  integrations: Integration[];
  reverse?: boolean;
}

export default function IntegrationsCol(props: IntegrationsColProps) {
  const { className, integrations, reverse } = props;

  return (
    <motion.div
      initial={{ y: reverse ? '-50%' : '0' }}
      animate={{ y: reverse ? '0%' : '-50%' }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className={twMerge('flex flex-col gap-4 pb-4', className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map(({ name, icon, description }) => (
            <div
              key={name}
              className='bg-white border border-black/10 p-6 rounded-xl'
            >
              <div className='flex justify-center'>
                <Image src={icon} alt={name} className='size-24' />
              </div>
              <h4 className='text-2xl text-center mt-4'>{name}</h4>
              <p className='text-center mt-6 text-black/50 mt-1 font-mono text-sm'>
                {description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
