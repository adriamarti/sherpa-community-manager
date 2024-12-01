'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sections = [
  {
    title: 'Introducción',
    content:
      'Bienvenido a HagenSuite. Estos Términos y Condiciones ("Términos") regulan el acceso y uso de nuestro servicio de gestión de reviews y análisis basado en inteligencia artificial. Al registrarte o usar nuestra plataforma, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguno de ellos, no utilices el servicio.',
  },
  {
    title: 'Definiciones',
    content:
      'En este documento, el término "Plataforma" se refiere al sitio web y las aplicaciones asociadas proporcionadas por HagenSuite. "Usuario" se define como cualquier persona que accede o utiliza la plataforma. "Servicio" abarca las funcionalidades de análisis de reviews, generación de respuestas automáticas y reportes proporcionados por HagenSuite.',
  },
  {
    title: 'Aceptación de Términos',
    content:
      'El uso de la plataforma implica la aceptación plena de estos términos. Al acceder o utilizar HagenSuite, confirmas que eres mayor de edad según las leyes de tu jurisdicción, que estás autorizado para vincular tu cuenta de Google My Business con nuestra plataforma y que cumplirás con todas las normativas legales aplicables en relación con el uso de nuestro servicio.',
  },
  {
    title: 'Descripción del Servicio',
    content:
      'HagenSuite ofrece un servicio basado en inteligencia artificial para analizar y gestionar reviews provenientes de Google My Business. A través de nuestra plataforma, los usuarios pueden acceder a análisis detallados de comentarios, generar respuestas sugeridas y obtener reportes sobre métricas clave relacionadas con el desempeño de sus reviews. Sin embargo, no garantizamos que los análisis sean completamente precisos, ya que los resultados generados por la inteligencia artificial están sujetos a limitaciones inherentes a la tecnología. Este servicio está diseñado como una herramienta de apoyo para la gestión manual y no debe considerarse como un reemplazo absoluto de la supervisión humana.',
  },
  {
    title: 'Uso Aceptable',
    content:
      'El uso de HagenSuite debe ser responsable y conforme a las leyes aplicables. Los usuarios se comprometen a no utilizar el servicio para fines ilícitos, fraudulentos o no autorizados. Asimismo, está prohibido cualquier intento de manipulación de reviews o la violación de las políticas establecidas por Google My Business. Los usuarios también deben abstenerse de interferir con el funcionamiento de la plataforma, incluyendo intentos de hackeo o sobrecarga deliberada del sistema.',
  },
  {
    title: 'Privacidad de Datos',
    content:
      'En HagenSuite valoramos la privacidad de nuestros usuarios. Los datos recopilados a través de sus cuentas de Google My Business serán utilizados exclusivamente para proporcionar los servicios descritos en esta plataforma. Nuestro manejo de datos cumple con las regulaciones aplicables y está detallado en nuestra Política de Privacidad, a la cual puedes acceder desde nuestra plataforma. Los usuarios tienen derecho a solicitar información sobre cómo se procesan sus datos en cualquier momento.',
  },
  {
    title: 'Propiedad Intelectual',
    content:
      'Todo el contenido relacionado con HagenSuite, incluyendo software, diseños, logotipos y materiales visuales, es propiedad exclusiva de HagenSuite. Los usuarios no están autorizados a copiar, distribuir, modificar o reproducir estos elementos sin un consentimiento explícito por escrito de nuestra parte.',
  },
  {
    title: 'Limitación de Responsabilidad',
    content:
      'HagenSuite no será responsable por errores, imprecisiones o fallos en los análisis generados por la inteligencia artificial. Asimismo, no asumimos responsabilidad por pérdidas económicas, daños indirectos o cualquier otro inconveniente derivado del uso incorrecto de la plataforma. Nuestra responsabilidad también está limitada en situaciones donde problemas técnicos, ajenos a nuestro control, afecten la disponibilidad o funcionalidad del servicio.',
  },
  {
    title: 'Cancelación y Terminación',
    content:
      'Los usuarios pueden cancelar sus cuentas en cualquier momento a través del panel de configuración de la plataforma. HagenSuite se reserva el derecho de suspender o cancelar el acceso de cualquier usuario que incumpla estos términos o que haga un uso indebido de la plataforma, especialmente si este uso afecta negativamente a otros usuarios o al servicio en general.',
  },
  {
    title: 'Modificaciones de los Términos',
    content:
      'HagenSuite se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos a partir de su publicación en nuestra plataforma. En caso de modificaciones significativas, notificaremos a los usuarios registrados mediante correo electrónico o un aviso destacado dentro de la plataforma. Se recomienda revisar estos términos periódicamente para mantenerse informado sobre posibles cambios.',
  },
  {
    title: 'Ley Aplicable',
    content:
      'Estos términos se rigen por las leyes aplicables en la jurisdicción correspondiente. Al utilizar HagenSuite, aceptas cumplir con las normativas locales e internacionales vigentes relacionadas con el uso de nuestro servicio.',
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Adjusts the detection area
      }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className='container max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-36'>
      <div className='flex flex-col md:flex-row gap-12'>
        {/* Sidebar */}
        <aside className='hidden md:block md:w-44 lg:w-64 flex-shrink-0'>
          <nav className='sticky top-36'>
            <ul className='space-y-2'>
              {sections.map((section, index) => {
                const sectionId = section.title
                  .toLowerCase()
                  .replace(/\s+/g, '-');
                return (
                  <li key={index}>
                    <Link
                      href={`#${sectionId}`}
                      className={`text-sm transition-colors ${
                        activeSection === sectionId
                          ? 'text-black font-medium'
                          : 'text-black/60 hover:text-black'
                      }`}
                    >
                      {section.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className='flex-1'>
          <h1 className='text-4xl md:text-6xl mb-12 font-display'>
            Términos y condiciones
          </h1>

          {sections.map((section, index) => (
            <section
              key={index}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className='mb-8'
            >
              <h2 className='text-xl font-bold mb-4'>{section.title}</h2>
              <p className='text-black/50'>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
