import type { MetadataRoute } from 'next';
import { absoluteUrl } from './site-config';

const routes = [
  '/',
  '/case-studies/idsr-outbreak-preparedness-bayelsa',
  '/case-studies/measles-rubella-lagos',
  '/case-studies/avadar-afp-kwara',
  '/analytics/public-health-surveillance',
  '/analytics/hospital-admissions',
  '/analytics/breast-cancer-tableau',
  '/analytics/emerald-properties-conversion',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date('2026-08-25'),
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
