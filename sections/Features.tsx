'use client';

import Image from 'next/image';

// Assets
import avatar1 from '@/app/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/app/assets/images/avatar-florence-shaw.jpg';
import avatar3 from '@/app/assets/images/avatar-lula-meyers.jpg';
import avatar4 from '@/app/assets/images/avatar-owen-garcia.jpg';
import giphy from '@/app/assets/images/giphy.webp';

// Components
import SectionTag from '@/components/marketing/SectionTag';
import FeatureCard from '@/components/marketing/FeatureCard';
import Avatar from '@/components/marketing/Avatar';

const FEATURES = [
  'Potenciado por IA',
  'Tiempo Real',
  'Multi-Plataforma',
  'Análisis de Sentimiento',
  'Respuestas Automatizadas',
  'Analítica',
  'Gestión de Reputación',
  'Insights del Cliente',
  'Monitoreo de Reseñas',
  'Seguimiento del Rendimiento',
];

export default function Features() {
  return (
    <section id='funcionalidades' className='py-18 md:py-24 px-4 md:px-6'>
      <div className='container'>
        <div className='flex flex-col justify-center max-w-4xl'>
          <SectionTag>Funcionalidades</SectionTag>
          <h2 className='text-4xl md:text-6xl font-medium text-center mt-6 font-display'>
            Funcionalidades que{' '}
            <span className='text-lime-500'>transforman</span> tu negocio
          </h2>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
            <FeatureCard
              title='Mejore tu reputación'
              description='Accede instantáneamente a todas las reseñas y menciones de tu negocio en las principales plataformas como Google, Yelp y TripAdvisor tan pronto como se publiquen.'
              className='col-span-2 group'
            >
              <div className='aspect-video flex flex-row items-center justify-center'>
                <Avatar className='border-blue-500 z-40'>
                  <Image
                    className='rounded-full'
                    src={avatar1}
                    alt='Avatar 1'
                  />
                </Avatar>
                <Avatar className='border-indigo-500 z-30 -ml-6'>
                  <Image
                    className='rounded-full'
                    src={avatar2}
                    alt='Avatar 2'
                  />
                </Avatar>
                <Avatar className='border-amber-500 z-20 -ml-6'>
                  <Image
                    className='rounded-full'
                    src={avatar3}
                    alt='Avatar 3'
                  />
                </Avatar>
                <Avatar className='border-transparent z-10 -ml-6 group-hover:border-green-500 transition'>
                  <div className='size-full bg-neutral-300 rounded-full inline-flex items-center justify-center gap-1 relative'>
                    <Image
                      className='absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition top-0 left-0'
                      src={avatar4}
                      alt='Avatar 4'
                    />
                    {Array.from({ length: 3 }).map((_, index) => (
                      <span
                        key={index}
                        className='size-1.5 rounded-full bg-white inline-flex'
                      ></span>
                    ))}
                  </div>
                </Avatar>
              </div>
            </FeatureCard>
            <FeatureCard
              title='Guía con IA'
              description='Deja que nuestra plataforma impulsada por IA te guíe en la creación de
                  respuestas personalizadas, analizando sentimientos e identificando áreas
                  clave de mejora en los comentarios de tus clientes.'
              className='col-span-2 group'
            >
              <div className='aspect-video flex items-center justify-center'>
                <p className='text-4xl group-hover:text-black/10 text-center transition duration-500'>
                  IA Inteligente para{' '}
                  <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative'>
                    <span>mejores</span>
                    <Image
                      className='absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500'
                      src={giphy}
                      alt='mejores'
                    />
                  </span>{' '}
                  resultados de negocio
                </p>
              </div>
            </FeatureCard>
          </div>
          <div className='mt-8 flex flex-wrap gap-3 justify-center'>
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className='bg-white inline-flex px-3 py-1.5 rounded-2xl gap-1.5 items-center'
              >
                <span className='bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-sm'>
                  &#10038;
                </span>
                <span className='font-medium text-black text-sm font-mono'>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
