'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import SectionTag from '@/components/marketing/SectionTag';

const faqs = [
  {
    question: '¿Cómo manejan la privacidad y seguridad de los datos?',
    answer:
      'Tu privacidad es nuestra prioridad. Nunca compartimos ni vendemos tus datos a terceros. Toda la información se almacena de forma segura y encriptada en nuestros servidores, cumpliendo con los más altos estándares de seguridad y las regulaciones de protección de datos.',
  },
  {
    question:
      '¿Necesito conocimientos técnicos especiales para usar la plataforma?',
    answer:
      'No, nuestra plataforma está diseñada para ser intuitiva y fácil de usar. Contamos con una interfaz amigable y guías paso a paso que te ayudarán a aprovechar todas las funcionalidades sin necesidad de conocimientos técnicos previos. Además, nuestro equipo de soporte está siempre disponible para ayudarte.',
  },
  {
    question: '¿Puedo integrar HagenSuite con otras plataformas o servicios?',
    answer:
      'Sí, HagenSuite está diseñado para ser altamente integrable. Ya contamos con integraciones nativas para las principales plataformas de reseñas como Google, TripAdvisor, Yelp y redes sociales. Si necesitas una integración personalizada, nuestro equipo técnico te ayudará a implementarla de manera rápida y eficiente. Contáctanos para discutir tus necesidades específicas.',
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id='preguntas-frequentes' className='py-24 px-8'>
      <div className='container'>
        <div className='flex flex-col justify-center max-w-2xl'>
          <SectionTag>Faqs</SectionTag>
          <h2 className='text-6xl font-medium text-center mt-6 font-display'>
            ¿Preguntas? Tenemos{' '}
            <span className='text-lime-400'>respuestas</span>
          </h2>
          <div className='mt-12 flex flex-col gap-6'>
            {faqs.map(({ question, answer }, index) => (
              <div
                key={question}
                className='bg-white border border-black/10 p-6 rounded-xl hover:border-black/30 cursor-pointer'
                onClick={() => setSelectedIndex(index)}
              >
                <div className='flex justify-between items-center gap-3'>
                  <h3 className='font-medium'>{question}</h3>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={twMerge(
                      'feather feather-plus text-lime-400 flex-shrink-0 transition duration-300',
                      selectedIndex === index && 'rotate-45'
                    )}
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </div>
                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ height: 0, marginTop: 0 }}
                      animate={{ height: 'auto', marginTop: 24 }}
                      exit={{ height: 0, marginTop: 0 }}
                      className='mt-6 overflow-hidden'
                    >
                      <p className='text-black/50'>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
