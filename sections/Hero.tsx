'use client';

// Components
import RequestAccess from '@/components/marketing/RequestAccess';

export default function Hero() {
  return (
    <section
      id='access'
      className='container max-w-7xl mx-auto px-4 md:px-6 pt-48'
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white font-semibold font-mono'>
          Mejora tu negocio
        </div>
        <h1 className='text-4xl md:text-7xl font-medium text-center mt-6 max-w-7xl mx-auto font-display'>
          Mejora la reputación de tu negocio con{' '}
          <span className='font-mono bg-lime-500'>IA</span> y gestión de
          contenido eficiente
        </h1>
        <p className='text-xl text-center text-black/50 mt-8 max-w-5xl mx-auto'>
          Optimiza la gestión de tu presencia digital con una plataforma que te
          ayuda a interactuar con tus clientes de manera más eficiente. Obtén
          análisis impulsados por IA, respuestas automatizadas y gestiona tu
          reputación online desde un solo lugar.
        </p>
        <RequestAccess />
      </div>
    </section>
  );
}
