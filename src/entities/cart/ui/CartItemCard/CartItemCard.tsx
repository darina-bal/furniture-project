import ProductThumb from '@/shared/ui/ProductThumb';
import type { CartItem } from '../../model/types'
import styles from './CartItemCard.module.scss'

interface CartItemCardProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartItemCard = (props: CartItemCardProps) => {
  const {
    item,
    onIncrement,
    onDecrement,
    onRemove,
  } = props

  return (
    <article className="cart-item-card">
      <ProductThumb urlPng={item.product.imageUrlPng} urlWebp={item.product.imageUrlWebp} />
      <div>
        <h3>{item.product.title}</h3>
        <p>Color: {item.product.color}</p>
        {/* <QuantityStepper value={item.quantity} onIncrement={onIncrement} onDecrement={onDecrement} /> */}
      </div>
      <div>
        {/* <Price value={item.product.price} /> */}
        {/* <IconButton icon="close" onClick={onRemove} /> */}
      </div>
    </article>
  )
}

export default CartItemCard