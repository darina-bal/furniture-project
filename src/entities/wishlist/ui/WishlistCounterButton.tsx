import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './WishlistCounterButton.module.scss'

interface WishlistCounterButtonProps {
  count: number;
}

export const WishlistCounterButton = (props: WishlistCounterButtonProps) => {
  const { count } = props

  return (
    <Button 
      variant='ghost'
      className={styles.wrapper}
    >
      <Svg 
        iconName='heart'
        variant='fill'
        spriteType='mono'
        className={styles.heart} />
      {count > 0 && <span className={styles.count}>{count}</span>}
    </Button>
  )
}

export default WishlistCounterButton