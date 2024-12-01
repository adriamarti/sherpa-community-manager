// Assets
import GoogleLogo from '@/app/assets/images/integration-logo-google.svg';
import FacebookLogo from '@/app/assets/images/integration-logo-facebook.svg';
import InstagramLogo from '@/app/assets/images/integration-logo-instagram.svg';
import TripAdvisorLogo from '@/app/assets/images/integration-logo-tripadvisor.svg';
import XLogo from '@/app/assets/images/integration-logo-x.svg';
import YelpLogo from '@/app/assets/images/integration-logo-yelp.svg';

// Components
import SectionTag from '@/components/marketing/SectionTag';
import IntegrationsCol from '@/components/marketing/IntegrationsCol';

const integrations = [
  {
    name: 'Google',
    icon: GoogleLogo,
    description:
      'Google Reviews es una plataforma para reseñas y calificaciones de negocios.',
  },
  {
    name: 'TripAdvisor',
    icon: TripAdvisorLogo,
    description:
      'TripAdvisor es una plataforma de reseñas de viajes y restaurantes.',
  },
  {
    name: 'Yelp',
    icon: YelpLogo,
    description:
      'Yelp es una plataforma de reseñas y recomendaciones de negocios locales.',
  },
  {
    name: 'X-Twitter',
    icon: XLogo,
    description:
      'X (Twitter) es una red social para compartir opiniones sobre marcas.',
  },
  {
    name: 'Instagram',
    icon: InstagramLogo,
    description:
      'Instagram es una red social visual para compartir fotos y opiniones.',
  },
  {
    name: 'Facebook',
    icon: FacebookLogo,
    description:
      'Facebook es una red social para compartir reseñas y experiencias sobre negocios.',
  },
];

export default function Integrations() {
  return (
    <section id='integraciones' className='py-24 overflow-hidden px-4 md:px-6'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 items-center lg:gap-16 max-w-6xl'>
          <div>
            <SectionTag>Integraciones</SectionTag>
            <h2 className='text-4xl md:text-6xl font-medium mt-6 font-display'>
              Donde el poder se une a la{' '}
              <span className='text-lime-400'>simplicidad</span>
            </h2>
            <p className='text-lg text-black/50 mt-4'>
              Conéctate sin problemas con tus herramientas y plataformas
              favoritas. Nuestras integraciones facilitan la incorporación de
              HagenSuite a tu flujo de trabajo existente.
            </p>
          </div>
          <div>
            <div className='grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
              <IntegrationsCol integrations={integrations} />
              <IntegrationsCol
                integrations={integrations.slice().reverse()}
                className='hidden md:flex'
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
