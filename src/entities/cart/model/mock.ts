import { mockProducts } from '@/shared/api'
import type { CartItem } from './types'

export const mockItems: CartItem[] = [
  { 
    id: mockProducts[0].id,
    product: mockProducts[0],
    quantity: 2 
  },
  { 
    id: mockProducts[1].id,
    product: mockProducts[1],
    quantity: 2 
  },
  { 
    id: mockProducts[2].id,
    product: mockProducts[2],
    quantity: 1 
  },
]