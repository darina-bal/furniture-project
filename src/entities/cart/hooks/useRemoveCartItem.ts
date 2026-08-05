import { useCartStore } from "../model/cartStore"

export const useRemoveCartItem = (itemId: string) => {
  const remove = useCartStore((s) => s.removeItem)
  return { onRemove: () => remove(itemId) }
}