'use client';

export default function Hero() {
  return (
    <section className='container py-24 px-8'>
      <div className='flex flex-col justify-center items-center'>
        <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>
          All In One
        </div>
        <h1 className='text-6xl md:text-7xl md:text-8xl font-medium text-center mt-6 text-white max-w-7xl mx-auto'>
          Manage All Your Business Reviews with AI-Powered Insights
        </h1>
        <p className='text-xl text-center text-white/50 mt-8 max-w-5xl mx-auto'>
          Streamline your review management across all platforms. Get AI-powered
          analysis, automated responses, and actionable insights to improve your
          business reputation.
        </p>
      </div>
    </section>
  );
}
