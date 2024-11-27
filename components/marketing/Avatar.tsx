import { HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function Avatar(props: AvatarProps) {
  const { className, children, imageSrc, imageAlt, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        'size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900',
        className
      )}
      {...otherProps}
    >
      <Image className='rounded-full' src={imageSrc} alt={imageAlt} />
      {children}
    </div>
  );
}
