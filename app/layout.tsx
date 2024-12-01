import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { ClerkProvider } from '@clerk/nextjs';

import 'remixicon/fonts/remixicon.css';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const yeseva = localFont({
  src: './fonts/YesevaOne.woff',
  variable: '--font-yeseva',
});

export const metadata: Metadata = {
  title: 'HagenSuite',
  description:
    'Plataforma integral impulsada por IA que ayuda a las empresas a gestionar su reputación online, moderando reseñas, redes sociales y menciones para mejorar su imagen y relación con clientes de manera eficiente',
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider afterSignOutUrl='/'>
//       <html lang='en'>
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} ${yeseva.variable} antialiased`}
//         >
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yeseva.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
