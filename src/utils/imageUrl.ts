/**
 * Utility for responsive, performance-optimized image delivery
 * Generates appropriate width and quality parameters for Unsplash CDN
 */

export function getOptimizedImageUrl(url: string, width: number = 1200, quality: number = 80): string {
  if (!url || !url.includes('images.unsplash.com')) return url;
  try {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`;
  } catch {
    return url;
  }
}

export function getImageSrcSet(url: string): string {
  if (!url || !url.includes('images.unsplash.com')) return '';
  try {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=480&q=75 480w, ${base}?auto=format&fit=crop&w=800&q=80 800w, ${base}?auto=format&fit=crop&w=1200&q=82 1200w, ${base}?auto=format&fit=crop&w=1800&q=85 1800w`;
  } catch {
    return '';
  }
}
