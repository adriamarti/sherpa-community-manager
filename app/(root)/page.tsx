// Components
import NavBar from '@/components/shared/NavBar';
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import Introduction from '@/sections/Introduction';

export default function RootPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoTicker />
      <Introduction />
    </>
  );
}
