import { useFlyout } from '@/shared/lib/hooks/useFlyout'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './ToggleCartButton.module.scss'

interface CartButtonProps {
  count?: string;
}

export const ToggleCartButton = (props: CartButtonProps) => {
  const { count = 10 } = props

  const { openCart } = useFlyout()

  return (
    <Button 
      variant='ghost'
      className={styles.cartWrapper}
      onClick={openCart}
    >
      <Svg 
        iconName='shopping-bag'
        spriteType='mono'
        className={styles.shoppingBag} />
      {(Number(count) > 0) && <span className={styles.count}>{count}</span>}
    </Button>
  )
}