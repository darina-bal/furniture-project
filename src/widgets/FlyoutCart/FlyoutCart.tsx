import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import { useUser } from '@/entities/user'
import Heading from '@/shared/ui/Heading'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './FlyoutCart.module.scss'

const FlyoutCart = () => {
  const { closeCart } = useFlyout()
  const { user } = useUser()
  const isOpen = useFlyoutStore((s) => s.isOpen('cart'))
  
  return (
    <FlyoutPanel
      isOpen={isOpen}
      direction='right'
      onClose={closeCart}
      className={styles.panel}
    >
      <div className={styles.header}>
        <Heading level='h6' className={styles.title}>Cart</Heading>
        <Button
          variant='ghost'
          className={styles.crossButton}
          onClick={closeCart}
        >
          <Svg 
            iconName='cross'
            spriteType='mono'
            variant='fill-fair'
            className={styles.cross} />
        </Button>
      </div>
    </FlyoutPanel>
  )
}

export default FlyoutCart