import Image from 'next/image';

type HomepageImageProps = {
  src: string;
  alt: string;
  sizes: string;
  fill?: boolean;
  priority?: boolean;
};

const responsiveWidths: Record<string, number[]> = {
  '/images/fieldwork/who-surveillance.jpg': [800, 1024, 1280],
  '/images/analytics/public-health-surveillance.jpg': [640, 960, 1207],
  '/images/analytics/hospital-admissions.jpg': [640, 960, 1280],
  '/images/analytics/breast-cancer-tableau.jpg': [640, 960, 1252],
  '/images/analytics/emerald-properties-conversion.jpg': [640, 960, 1280],
};

export function HomepageImage(props: HomepageImageProps) {
  // Pre-encoded assets bypass Vinext's redirect-only optimizer on Vercel.
  // Keep Image's existing fill geometry, eager priority and lazy defaults.
  if (props.src === '/images/profile/omobolanle-headshot.jpg') {
    return <Image {...props} alt={props.alt} src="/images/optimized/omobolanle-headshot-720.webp" unoptimized />;
  }

  const widths = responsiveWidths[props.src];
  // The community photograph is already compact; high-quality WebP was larger.
  if (!widths) return <Image {...props} alt={props.alt} unoptimized />;

  const name = props.src.split('/').pop()!.replace(/\.jpg$/, '');
  // Account for object-fit: cover: this landscape photo fills a tall frame.
  const sizes = props.src === '/images/fieldwork/who-surveillance.jpg'
    ? '(max-width: 760px) max(calc(100vw - 32px), 780px), max(39vw, 1080px)'
    : props.sizes;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={widths.map(width => `/images/optimized/${name}-${width}.webp ${width}w`).join(', ')}
        sizes={sizes}
      />
      <Image {...props} alt={props.alt} unoptimized />
    </picture>
  );
}
