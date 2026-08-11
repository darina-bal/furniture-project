import ProductThumb from '@/shared/ui/ProductThumb'
import type { CartItem } from '../../model/types'
import QuantityStepper from '@/shared/ui/QuantityStepper'
import Svg from '@/shared/ui/Svg'
import Button from '@/shared/ui/Button'
import clsx from 'clsx'
import styles from './CartItemCard.module.scss'

interface CartItemCardProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  className?: string;
}

const CartItemCard = (props: CartItemCardProps) => {
  const {
    item,
    onIncrement,
    onDecrement,
    onRemove,
    className,
  } = props

  return (
    <article className={clsx(styles.card, className)}>
      <div className={styles.wrapperFirst}>
        <ProductThumb 
          className={styles.photo}
          urlPng={item.product.imageUrlPng} 
          urlWebp={item.product.imageUrlWebp} />
        <div className={styles.wrapperInfo}>
          <p className={styles.title}>{item.product.title}</p>
          <p className={styles.color}>Color: {item.product.color}</p>
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