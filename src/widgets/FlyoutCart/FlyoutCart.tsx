import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import { useUser } from '@/entities/user'
import Heading from '@/shared/ui/Heading'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import { CartList, useCartStore, selectCartItems, selectTotalPrice } from '@/entities/cart'

import styles from './FlyoutCart.module.scss'
import RouterLink from '@/shared/ui/RouterLink'

const FlyoutCart = () => {
  const { closeCart } = useFlyout()
  const { user } = useUser()
  const isOpen = useFlyoutStore((s) => s.isOpen('cart'))

  const items = useCartStore(selectCartItems)
  const totalPrice = useCartStore(selectTotalPrice)
  
  return (
    <FlyoutPanel
      isOpen={isOpen}
      direction='right'
      onClose={closeCart}
      className={styles.panel}
    >
      <div className={styles.firstWrapper}>
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
        <CartList items={items} /> 
      </div>
      <div className={styles.secondWrapper}>
        <div className={styles.totalWrapper}>
          <p>Total</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <RouterLink
          to='checkout'
          variant='secondary'
        >
          <Button className={styles.checkout}>
            Checkout
          </Button>
        </RouterLink>
        <RouterLink
          to='cart'
          variant='secondary'
        >
          <Button className={styles.cart} variant='tertiary'>
            View Cart
          </Button>
        </RouterLink>
      </div>
    </FlyoutPanel>
  )
}

export default FlyoutCart