export const siteUrl = 'https://omobolanle-portfolio-jade.vercel.app';

export const siteName = 'Omobolanle Esther Adelekun';

export const sitePositioning =
  'Public Health Specialist & Epidemiologist | Immunisation & Data Intelligence';

export const siteTitle = `${siteName} | ${sitePositioning}`;

export const siteDescription =
  'Field epidemiologist and public health specialist with 8+ years of experience across disease surveillance, outbreak response, immunization and health systems in Nigeria.';

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}
