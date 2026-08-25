import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { siteDescription, siteTitle, siteUrl } from './site-config';

const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500','600','700'] });
const sans = Inter({ variable: '--font-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Omobolanle Adelekun' },
  description: siteDescription,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: siteTitle, description: siteDescription, type: 'website', url: '/', siteName: 'Omobolanle Esther Adelekun', locale: 'en_NG', images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Omobolanle Esther Adelekun, Public Health Specialist and Field Epidemiologist' }] },
  twitter: { card: 'summary_large_image', title: siteTitle, description: siteDescription, images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
