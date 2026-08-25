import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500','600','700'] });
const sans = Inter({ variable: '--font-sans', subsets: ['latin'] });

const productionUrl = 'https://omobolanle-portfolio-jade.vercel.app';
const socialTitle = 'Omobolanle Esther Adelekun | Public Health & Field Epidemiology';
const socialDescription = 'Field epidemiologist and public health specialist with 7+ years of experience across disease surveillance, outbreak response, immunization and health systems in Nigeria.';

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: socialTitle,
  description: socialDescription,
  alternates: { canonical: productionUrl },
  openGraph: { title: socialTitle, description: socialDescription, type: 'website', url: productionUrl, images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Omobolanle Esther Adelekun, Public Health Specialist and Field Epidemiologist' }] },
  twitter: { card: 'summary_large_image', title: socialTitle, description: socialDescription, images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
