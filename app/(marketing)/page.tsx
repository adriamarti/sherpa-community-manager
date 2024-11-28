// Components
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import Introduction from '@/sections/Introduction';
import Features from '@/sections/Features';
import Integrations from '@/sections/Integrations';
import Faqs from '@/sections/Faqs';
import CallToAction from '@/sections/CallToAction';

export default function MarketingPage() {
  return (
    <main className='w-full flex flex-col items-center bg-black'>
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
    </main>
  );
}
