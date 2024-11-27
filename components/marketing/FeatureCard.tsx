import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  const { className, children, title, description, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        'bg-neutral-900 border border-white/10 p-6 rounded-3xl',
        className
      )}
      {...otherProps}
    >
      {children}
      <div>
        <h3 className='text-white text-3xl font-medium mt-6'>{title}</h3>
        <p className='text-white/50 mt-2'>{description}</p>
      </div>
    </div>
  );
}
