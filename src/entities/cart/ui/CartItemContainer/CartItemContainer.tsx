import { type CartItem } from '../../model/types'
import CartItemCard from '../CartItemCard/CartItemCard'
import { useChangeQuantity } from '../../hooks/useChangeQuantity'
import { useRemoveCartItem } from '../../hooks/useRemoveCartItem'

const CartItemContainer = ({ item }: { item: CartItem }) => {
  const { onIncrement, onDecrement } = useChangeQuantity(item.id)
  const { onRemove } = useRemoveCartItem(item.id)

  return (
    <CartItemCard 
      item={item}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onRemove={onRemove}
    />
  )
}

export default CartItemContainer