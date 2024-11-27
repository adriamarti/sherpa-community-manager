import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionTag(props: HTMLAttributes<HTMLHeadingElement>) {
  const { className, children, ...otherProps } = props;

  return (
    <h5
      className={twMerge(
        'inline-flex border border-lime-400 text-lime-400 px-3 py-1 rounded-full uppercase text-sm mx-auto',
        className
      )}
      {...otherProps}
    >
      {children}
    </h5>
  );
}
