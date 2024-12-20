'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const animation = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: '-50%' },
      { duration: 30, ease: 'linear', repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) animation.current.speed = isHovered ? 0.5 : 1;
  }, [isHovered]);

  return (
    <section className='pb-24'>
      <Link href='#access'>
        <div className='overflow-x-clip flex'>
          <motion.div
            ref={scope}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='flex flex-none gap-12 md:gap-16 pr-12 md:pr-16 text-7xl md:text-8xl cursor-pointer group'
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className='flex items-center gap-16 text-3xl md:text-6xl lg:text-7xl'
              >
                <span className='text-lime-500 '>&#10038;</span>
                <span className='text-black group-hover:text-lime-500'>
                  Accede antes que nadie
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Link>
    </section>
  );
}
