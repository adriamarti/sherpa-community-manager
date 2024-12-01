import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionTag(props: HTMLAttributes<HTMLHeadingElement>) {
  const { className, children, ...otherProps } = props;

  return (
    <h5
      className={twMerge(
        'inline-flex border border-lime-500 px-3 py-1 rounded-full uppercase text-sm mx-auto font-mono',
        className
      )}
      {...otherProps}
    >
      &#10038; {children}
    </h5>
  );
}
