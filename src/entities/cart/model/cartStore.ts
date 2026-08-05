import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/shared/lib/types'
import type { CartItem } from './types'
import { mockItems } from './mock'

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: mockItems,
      addItem: (product) =>
        set((s) => {
          const exists = s.items.some((i) => i.product.id === product.id)
          return exists
            ? { items: s.items.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) }
            : { items: [...s.items, { id: product.id, product, quantity: 1 }] }
        }),
      incrementQuantity: (id) =>
        set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)) })),
      decrementQuantity: (id) =>
        set((s) => ({ items: s.items.map((i) => (i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)) })),
      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
    }),
    { name: 'cart' }
  ),
)

export const selectCartItems = (s: CartState) => s.items