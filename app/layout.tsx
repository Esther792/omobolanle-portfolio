import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500','600','700'] });
const sans = Inter({ variable: '--font-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://omobolanleadelekun.com'),
  title: 'Omobolanle Esther Adelekun | Public Health & Field Epidemiology',
  description: 'Public health and field epidemiology specialist with experience across disease surveillance, immunization, outbreak response, health systems strengthening, and public health data in Nigeria.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Omobolanle Esther Adelekun | Public Health & Field Epidemiology', description: 'Field epidemiology, disease surveillance, immunization, outbreak response and public health data.', type: 'website', url: '/', images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Omobolanle Esther Adelekun — Public Health, Field Epidemiology and Global Health Security' }] },
  twitter: { card: 'summary_large_image', title: 'Omobolanle Esther Adelekun | Public Health & Field Epidemiology', description: 'Field epidemiology, disease surveillance, immunization, outbreak response and public health data.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
