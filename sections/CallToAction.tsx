'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';

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
    <section className='py-24'>
      <div className='overflow-x-clip p-4 flex'>
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium cursor-pointer group'
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='flex items-center gap-16'>
              <span className='text-lime-400 text-7xl'>&#10038;</span>
              <span className='text-white group-hover:text-lime-400'>
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
