import { MetadataRoute } from 'next';
import { ROUTE_RELEASE_CONFIG } from '@/config/page-release';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qiskitfallfest2026.srmap.edu.in';

  // Only include live routes in sitemap
  const liveRoutes = Object.values(ROUTE_RELEASE_CONFIG)
    .filter((route) => route.status === 'live')
    .map((route) => ({
      url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
      lastModified: new Date(),
      changeFrequency: (route.path === '/' || route.path === '/experience' ? 'daily' : 'weekly') as 'daily' | 'weekly',
      priority: route.path === '/' ? 1.0 : route.path === '/experience' ? 0.9 : 0.8,
    }));

  return liveRoutes;
}
