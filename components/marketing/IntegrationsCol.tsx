import { HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

export interface Integration {
  name: string;
  description: string;
  icon: StaticImageData;
}

interface IntegrationsColProps extends HTMLAttributes<HTMLDivElement> {
  integrations: Integration[];
}

export default function IntegrationsCol(props: IntegrationsColProps) {
  const { className, integrations, ...otherProps } = props;

  return (
    <div
      className={twMerge('flex flex-col gap-4 pb-4', className)}
      {...otherProps}
    >
      {integrations.map(({ name, icon, description }) => (
        <div
          key={name}
          className='bg-neutral-900 border border-white/10 rounded-3xl p-6'
        >
          <div className='flex justify-center'>
            <Image src={icon} alt={name} className='size-24' />
          </div>
          <h4 className='text-3xl text-center mt-6 text-white'>{name}</h4>
          <p className='text-center mt-6 text-white/50 mt-2'>{description}</p>
        </div>
      ))}
    </div>
  );
}
