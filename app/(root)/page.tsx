// Components
import NavBar from '@/components/marketing/NavBar';
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import Introduction from '@/sections/Introduction';
import Features from '@/sections/Features';
import Integrations from '@/sections/Integrations';
import Faqs from '@/sections/Faqs';
import CallToAction from '@/sections/CallToAction';
import Footer from '@/sections/Footer';

export default function RootPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
