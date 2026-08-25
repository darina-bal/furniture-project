import { navigationRoutes } from '@/shared/config/navigation'
import type { BlogItem } from './types'

export const mockItems: BlogItem[] = [
  { 
    id: '7-ways-to-decor',
    imgJpg: '/img/blog-1.jpg',
    imgWebp: '/img/blog-1.webp',
    shortTitle: '7 ways to decor your home',
    title: '7 ways to decor your home like a professional',
    to: navigationRoutes.blogDecor,
    date: '2023-10-16',
  },
  { 
    id: 'kitchen-organization',
    imgJpg: '/img/blog-2.jpg',
    imgWebp: '/img/blog-2.webp',
    shortTitle: 'Kitchen organization',
    title: 'Inside a beautiful kitchen organization',
    to: navigationRoutes.blogKitchen,
    date: '2023-10-16',
  },
  { 
    id: 'decor-your-bedroom',
    imgJpg: '/img/blog-3.jpg',
    imgWebp: '/img/blog-3.webp',
    shortTitle: 'Decor your bedroom',
    title: 'Decor your bedroom for your children',
    to: navigationRoutes.blogBedroom,
    date: '2023-10-16',
  },
]