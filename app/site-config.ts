export const siteUrl = 'https://omobolanle-portfolio-jade.vercel.app';

export const siteName = 'Omobolanle Esther Adelekun';

export const siteTitle =
  'Omobolanle Esther Adelekun | Public Health & Field Epidemiology';

export const siteDescription =
  'Field epidemiologist and public health specialist with 7+ years of experience across disease surveillance, outbreak response, immunization and health systems in Nigeria.';

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}
