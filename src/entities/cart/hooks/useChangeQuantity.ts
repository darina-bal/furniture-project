import { useCartStore } from "../model/cartStore"

export const useChangeQuantity = (itemId: string) => {
  const increment = useCartStore((s) => s.incrementQuantity)
  const decrement = useCartStore((s) => s.decrementQuantity)

  return {
    onIncrement: () => increment(itemId),
    onDecrement: () => decrement(itemId),
  }
}