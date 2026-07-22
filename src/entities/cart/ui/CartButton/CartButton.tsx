import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './CartButton.module.scss'

interface CartButtonProps {
  count?: string;
}

const CartButton = (props: CartButtonProps) => {
  const { count = 10 } = props

  return (
    <Button 
      variant='ghost'
      className={styles.cartWrapper}
    >
      <Svg 
        iconName='shopping-bag'
        spriteType='mono'
        className={styles.shoppingBag} />
      {(Number(count) > 0) && <span className={styles.count}>{count}</span>}
    </Button>
  )
}

export default CartButton