import type { Category } from './types'
import { navigationRoutes } from '@/shared/config/navigation'

export const mockCategory: Category[] = [
  {
    id: 'cat-living-room',
    title: 'Living Room',
    imagePng: '/img/sofa-forlink.png',
    imageWebp: '/img/sofa-forlink.webp',
    href: navigationRoutes.shopLivingRoom,
  },
  {
    id: 'cat-bedroom',
    title: 'Bedroom',
    imagePng: '/img/nightstand-forlink.png',
    imageWebp: '/img/nightstand-forlink.webp',
    href: navigationRoutes.shopBedroom,
  },
  {
    id: 'cat-kitchen',
    title: 'Kitchen',
    imagePng: '/img/toaster-forlink.png',
    imageWebp: '/img/toaster-forlink.webp',
    href: navigationRoutes.shopKitchen,
  },
]