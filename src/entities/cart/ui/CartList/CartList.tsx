import { type CartItem } from '../../model/types'
import CartItemContainer from '../CartItemContainer/CartItemContainer'
import styles from './CartList.module.scss'

const CartList = ({ items }: { items: CartItem[] }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <CartItemContainer key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartList