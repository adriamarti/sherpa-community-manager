'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sections = [
  {
    title: 'Introducción',
    content:
      'En HagenSuite valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información que nos proporcionas al utilizar nuestra plataforma. Al registrarte o interactuar con HagenSuite, aceptas las prácticas descritas en esta Política de Privacidad. Si no estás de acuerdo con alguno de estos términos, te recomendamos no utilizar nuestros servicios.',
  },
  {
    title: 'Información que Recopilamos',
    content:
      'HagenSuite recopila datos personales y no personales necesarios para ofrecer nuestros servicios de gestión y análisis de reviews. Estos datos incluyen información de tu cuenta de Google My Business, como tu nombre, dirección de correo electrónico, ubicaciones asociadas y datos de reviews. También recopilamos datos generados por el uso de nuestra plataforma, tales como preferencias de usuario, métricas de uso y patrones de interacción. Adicionalmente, recopilamos información técnica, como direcciones IP, tipo de navegador y configuración de idioma, que se recolectan automáticamente para fines de mantenimiento y seguridad.',
  },
  {
    title: 'Cómo Usamos tu Información',
    content:
      'La información recopilada se utiliza exclusivamente para proporcionar, mejorar y personalizar los servicios de HagenSuite. Esto incluye analizar y clasificar reviews utilizando inteligencia artificial, generar respuestas automáticas o sugeridas basadas en las reviews, y proporcionar reportes y métricas relacionadas con el rendimiento de tus reviews. También utilizamos estos datos para enviarte notificaciones relacionadas con el servicio, como actualizaciones importantes, alertas de reviews negativas o cambios en los términos del servicio. HagenSuite no vende ni comparte tu información personal con terceros no autorizados. Sin embargo, podemos compartir datos con proveedores de servicios que nos ayuden a operar nuestra plataforma, siempre bajo estrictos acuerdos de confidencialidad.',
  },
  {
    title: 'Conservación de los Datos',
    content:
      'HagenSuite conservará tu información personal únicamente durante el tiempo necesario para cumplir con los fines establecidos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más prolongado. Una vez que los datos dejen de ser necesarios, los eliminaremos de forma segura.',
  },
  {
    title: 'Seguridad de los Datos',
    content:
      'Implementamos medidas técnicas y organizativas adecuadas para proteger tu información contra accesos no autorizados, pérdida, alteración o divulgación. Estas medidas incluyen cifrado de datos en tránsito, control de acceso restringido y monitoreo continuo de nuestras plataformas. Sin embargo, reconocemos que ninguna transmisión de datos a través de Internet puede garantizarse como completamente segura, y los usuarios asumen este riesgo al interactuar con HagenSuite.',
  },
  {
    title: 'Tus Derechos',
    content:
      'Como usuario de HagenSuite, tienes derecho a acceder a los datos personales que hemos recopilado sobre ti, solicitar la corrección de datos incorrectos o incompletos, solicitar la eliminación de tus datos personales sujeto a nuestras obligaciones legales o contractuales, y retirar tu consentimiento para el procesamiento de tus datos en los casos en que el consentimiento sea la base legal para dicho procesamiento. Para ejercer cualquiera de estos derechos, puedes ponerte en contacto con nuestro equipo a través del correo electrónico indicado en esta política.',
  },
  {
    title: 'Uso de Cookies y Tecnologías Similares',
    content:
      'HagenSuite utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar datos sobre el uso de la plataforma. Las cookies permiten funciones esenciales como recordar tus preferencias y personalizar tu experiencia. Puedes configurar tu navegador para rechazar cookies, pero algunas funcionalidades de la plataforma podrían verse limitadas como resultado.',
  },
  {
    title: 'Integración con Google My Business',
    content:
      'Para ofrecer nuestros servicios, HagenSuite requiere acceso a tu cuenta de Google My Business. Solo utilizamos este acceso para analizar y gestionar tus reviews, y en ningún caso alteraremos o manipularemos tu cuenta de forma no autorizada. Este acceso se gestiona mediante el protocolo OAuth 2.0, lo que significa que puedes revocar el permiso en cualquier momento desde la configuración de tu cuenta de Google.',
  },
  {
    title: 'Cambios a esta Política de Privacidad',
    content:
      'HagenSuite se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán efectivos a partir de su publicación en nuestra plataforma. Si realizamos cambios significativos, te notificaremos a través de tu correo electrónico registrado o mediante un aviso destacado en nuestra plataforma. Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo protegemos tu información.',
  },
  {
    title: 'Contacto',
    content:
      'Si tienes preguntas, inquietudes o comentarios sobre esta Política de Privacidad, no dudes en ponerte en contacto con nosotros a través del correo electrónico indicado en nuestra plataforma o mediante el formulario de soporte disponible en nuestra página web.',
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
            Políticas de privacidad
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
