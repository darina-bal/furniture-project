import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './WishlistButton.module.scss'

interface WishlistButtonProps {
  count?: string;
}

export const WishlistButton = (props: WishlistButtonProps) => {
  const { count = 10 } = props

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
      {(Number(count) > 0) && <span className={styles.count}>{count}</span>}
    </Button>
  )
}

export default WishlistButton