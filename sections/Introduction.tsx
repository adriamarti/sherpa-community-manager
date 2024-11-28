'use client';

import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// Components
import SectionTag from '@/components/marketing/SectionTag';

const animatedText =
  'Our AI-powered system analyzes sentiment, identifies key trends, and helps you craft personalized responses that resonate with your customers.';
const animatedWords = animatedText.split(' ');

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, animatedWords.length]
  );

  useEffect(() => {
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className='py-28 px-8'>
      <div className='container'>
        {/* This allows the page to get stucked and animate text-color (maybe you should change the "top-*" if the text is shorter or longer) */}
        <div className='sticky top-24: md:top-56'>
          <div className='flex flex-col justify-center max-w-2xl'>
            <SectionTag>Introducing HagenSuite</SectionTag>
            <p className='text-2xl md:text-4xl text-center font-medium mt-10'>
              <span className='text-white'>
                Elevate your online presence with HagenSuite, the all-in-one
                solution for managing reviews across all major platforms.{' '}
              </span>
              {animatedWords.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    'transition duration-500 text-white/15',
                    index < currentWord && 'text-white'
                  )}
                >{`${word} `}</span>
              ))}
              {/* <span className='text-white/15'>
                Our AI-powered system analyzes sentiment, identifies key trends,
                and helps you craft personalized responses that resonate with
                your customers.
              </span> */}
              <span className='text-lime-400'>
                Take control of your reputation management and turn customer
                feedback into actionable insights.
              </span>
            </p>
          </div>
        </div>
        {/* This allows the page to get stucked and animate text-color (maybe you should change the "h-[***vh]" if the text is shorter or longer) */}
        <div className='h-[150vh]' ref={scrollTarget} />
      </div>
    </section>
  );
}
