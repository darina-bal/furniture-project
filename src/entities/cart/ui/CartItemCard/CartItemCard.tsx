import ProductThumb from '@/shared/ui/ProductThumb'
import type { CartItem } from '../../model/types'
import QuantityStepper from '@/shared/ui/QuantityStepper'
import Paragraph from '@/shared/ui/Paragraph'
import styles from './CartItemCard.module.scss'
import Svg from '@/shared/ui/Svg'
import Button from '@/shared/ui/Button'

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
    <article className={styles.card}>
      <div className={styles.wrapperFirst}>
        <ProductThumb 
          className={styles.photo}
          urlPng={item.product.imageUrlPng} 
          urlWebp={item.product.imageUrlWebp} />
        <div className={styles.wrapperInfo}>
          <Paragraph className={styles.title}>{item.product.title}</Paragraph>
          <Paragraph className={styles.color}>Color: {item.product.color}</Paragraph>
          <QuantityStepper 
            value={item.quantity} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} 
            variant='compact'/>
        </div>
      </div>
      <div className={styles.wrapperSecond}>
        <span className={styles.price}>${item.product.price.toFixed(2)}</span>
        <Button
          variant='ghost'
          onClick={onRemove}
        >
          <Svg 
            iconName='cross'
            spriteType='mono'
            variant='fill-fair'/>
        </Button>
      </div>
    </article>
  )
}

export default CartItemCard