import { type CartItem } from '../../model/types'
import CartItemContainer from '../CartItemContainer/CartItemContainer'

const CartList = ({ items }: { items: CartItem[] }) => {
  return (
    <div>
      {items.map((item) => (
        <CartItemContainer key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartList