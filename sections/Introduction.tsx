'use client';

// Components
import SectionTag from '@/components/marketing/SectionTag';

export default function Introduction() {
  return (
    <section className='py-28 px-8'>
      <div className='container'>
        <div className='flex flex-col justify-center max-w-2xl'>
          <SectionTag>Introducing HagenSuite</SectionTag>
          <p className='text-2xl md:text-4xl text-center font-medium mt-10'>
            <span className='text-white'>
              Elevate your online presence with HagenSuite, the all-in-one
              solution for managing reviews across all major platforms.{' '}
            </span>
            <span className='text-white/15'>
              Our AI-powered system analyzes sentiment, identifies key trends,
              and helps you craft personalized responses that resonate with your
              customers.{' '}
            </span>
            <span className='text-lime-400'>
              Take control of your reputation management and turn customer
              feedback into actionable insights.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
