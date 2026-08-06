import clsx from 'clsx'
import { useWishlistStore } from '@/entities/wishlist'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './WishlistButton.module.scss'

interface AddtoWishlistButtonProps {
  productId: string;
  className?: string;
  variant?: 'heart' | 'button';
  isInWishlist?: boolean;
}

export const AddtoWishlistButton = (props: AddtoWishlistButtonProps) => {
  const {
  productId,
  className,
  variant = 'heart',
  isInWishlist = 'false',
  } = props

  const isActive = useWishlistStore((s) => s.ids.includes(productId))
  const toggleItem = useWishlistStore((s) => s.toggleItem)

  return (
    variant === 'heart' ? (
      <Button
        className={clsx(styles.heart, isActive && styles.active, className)} 
        variant='ghost'
        aria-label={isActive ? 'Remove from wishlist' : 'Add to wishlist'}
        onClick={() => toggleItem(productId)}
        >
          {isInWishlist ? (
            <Svg 
              spriteType='mono'
              iconName='heart-filled'
              variant='fill-middle'
              className={styles.iconHeart}/>
          ) : (
            <Svg 
              spriteType='mono'
              iconName='heart'
              variant='fill-fair'
              className={styles.iconHeart}/>
          )}
      </Button>
    ) : (
      <Button
        className={clsx(styles.button, isActive && styles.active, className)}
      >
        <Svg 
          spriteType='mono'
          iconName='heart'
          variant='fill'/>
        {isActive ? 'Added' : 'Wishlist'}
      </Button>
    )
  )
}