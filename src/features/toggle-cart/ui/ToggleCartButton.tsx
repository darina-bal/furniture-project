import { useFlyout } from '@/shared/lib/hooks/useFlyout'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './ToggleCartButton.module.scss'

interface CartButtonProps {
  count: number;
}

export const ToggleCartButton = (props: CartButtonProps) => {
  const { count } = props

  const { openCart } = useFlyout()

  return (
    <Button 
      variant='ghost'
      className={styles.wrapper}
      onClick={openCart}
    >
      <Svg 
        iconName='shopping-bag'
        spriteType='mono'
        className={styles.shoppingBag} />
      {(count > 0) && <span className={styles.count}>{count}</span>}
    </Button>
  )
}