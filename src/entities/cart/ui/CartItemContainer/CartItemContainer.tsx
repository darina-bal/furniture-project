import { type CartItem } from '../../model/types'
import CartItemCard from '../CartItemCard/CartItemCard'
import { useChangeQuantity } from '../../hooks/useChangeQuantity'
import { useRemoveCartItem } from '../../hooks/useRemoveCartItem'
import clsx from 'clsx'
import disappearingStyles from '@/shared/lib/styles/disappearingItem.module.scss'

interface CartListItemProps {
  item: CartItem
  disappearing: boolean
  startDisappearing: (id: string, onComplete: () => void) => void
}

const CartItemContainer = (props: CartListItemProps) => {
  const {
    item,
    disappearing,
    startDisappearing,
  } = props
  const { onIncrement, onDecrement } = useChangeQuantity(item.id)
  const { onRemove } = useRemoveCartItem(item.id)

  return (
    <CartItemCard 
      className={clsx(disappearingStyles.dismissible, disappearing && disappearingStyles.isDisappearing)}
      item={item}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onRemove={() => {
        startDisappearing(item.id, () => {
          onRemove()
        })
      }}
    />
  )
}

export default CartItemContainer