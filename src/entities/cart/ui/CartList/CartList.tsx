import { useDisappearingItem } from '@/shared/lib/hooks/useDisappearingItem'
import { type CartItem } from '../../model/types'
import CartItemContainer from '../CartItemContainer/CartItemContainer'
import styles from './CartList.module.scss'

const CartList = ({ items }: { items: CartItem[] }) => {
  const {
    isDisappearing,
    startDisappearing,
  } = useDisappearingItem()
  
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <CartItemContainer 
          key={item.id} 
          item={item}
          disappearing={isDisappearing(item.id)}
          startDisappearing={startDisappearing}
        />
      ))}
    </div>
  )
}

export default CartList