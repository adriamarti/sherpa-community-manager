'use client';

// Assets
import avatar1 from '@/app/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/app/assets/images/avatar-florence-shaw.jpg';
import avatar3 from '@/app/assets/images/avatar-lula-meyers.jpg';

// Components
import SectionTag from '@/components/marketing/SectionTag';
import FeatureCard from '@/components/marketing/FeatureCard';
import Avatar from '@/components/marketing/Avatar';

const FEATURES = [
  'AI-Powered',
  'Real-Time',
  'Multi-Platform',
  'Sentiment Analysis',
  'Automated Responses',
  'Analytics',
  'Reputation Management',
  'Customer Insights',
  'Review Monitoring',
  'Performance Tracking',
];

export default function Features() {
  return (
    <section className='py-24 px-8'>
      <div className='container'>
        <div className='flex flex-col justify-center max-w-2xl'>
          <SectionTag>Features</SectionTag>
          <h2 className='text-6xl font-medium text-center mt-6 text-white'>
            Where power meets <span className='text-lime-400'>simplicity</span>
          </h2>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
            <FeatureCard
              title='Real-time data'
              description='Get instant access to reviews and ratings from all major
                  platforms like Google, Yelp, and TripAdvisor as they come in.'
              className='col-span-2'
            >
              <div className='aspect-video flex flex-row items-center justify-center'>
                <Avatar
                  imageSrc={avatar1}
                  imageAlt='Avatar 1'
                  className='border-blue-500 z-40 -ml-6'
                />
                <Avatar
                  imageSrc={avatar2}
                  imageAlt='Avatar 2'
                  className='border-indigo-500 z-30 -ml-6'
                />
                <Avatar
                  imageSrc={avatar3}
                  imageAlt='Avatar 3'
                  className='border-amber-500 z-20 -ml-6'
                />
                <div className='size-20 z-10 rounded-full overflow-hidden border-4 border-transparent p-1 bg-neutral-900 -ml-6'>
                  <div className='size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1'>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <span
                        key={index}
                        className='size-1.5 rounded-full bg-white inline-flex'
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </FeatureCard>
            <FeatureCard
              title='AI guidance'
              description='Let our AI-powered platform guide you in crafting personalized
                  responses, analyzing sentiment patterns, and identifying key
                  areas for improvement in your customer feedback.'
              className='col-span-2'
            >
              <div className='aspect-video flex items-center justify-center'>
                <p className='text-4xl font-extrabold text-white/20 text-center'>
                  Smart AI for{' '}
                  <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    better
                  </span>{' '}
                  business results
                </p>
              </div>
            </FeatureCard>
          </div>
          <div className='mt-8 flex flex-wrap gap-3 justify-center'>
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className='bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-1.5 items-center'
              >
                <span className='bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-sm'>
                  &#10038;
                </span>
                <span className='font-medium text-white'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
