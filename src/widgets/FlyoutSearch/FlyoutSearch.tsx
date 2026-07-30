import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import Logo from '@/shared/ui/Logo'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import Field from '@/shared/ui/Field'
import Accordion from '@/shared/ui/Accordion'
import RouterLink from '@/shared/ui/RouterLink'
import { ToggleCartButton } from '@/features/toggle-cart'
import styles from './FlyoutSearch.module.scss'
import WishlistButton from '@/entities/wishlist'

const FlyoutSearch = () => {
  const { closeSearch } = useFlyout()
  const isOpen = useFlyoutStore((s) => s.isOpen('search'))

  return (
    <FlyoutPanel
      isOpen={isOpen}
      direction='left'
      onClose={closeSearch}
      className={styles.panel}
    >
      <div className={styles.top}>
        <div className={styles.header}>
          <Logo />
          <Button
            variant='ghost'
            className={styles.crossButton}
            onClick={closeSearch}
          >
            <Svg 
              iconName='cross'
              spriteType='mono'
              variant='fill-fair'
              className={styles.cross} />
          </Button>
        </div>
        <Field 
          label='Search'
          type='search'
          className={styles.field}/>
        <RouterLink 
          linkType='navlink' 
          to='/'
          className={styles.mainLink}
          onClick={closeSearch}
        >Home</RouterLink>
        <Accordion title="Shop" className={styles.accordion}>
          <ul className={styles.list}>
            <li>
              <RouterLink linkType='link' to='shop' className={styles.link}>All Rooms</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/livingroom' className={styles.link}>Living Room</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/bedroom' className={styles.link}>Bedroom</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/kitchen' className={styles.link}>Kitchen</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/bathroom' className={styles.link}>Bathroom</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/dining' className={styles.link}>Dining</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='shop/outdoor' className={styles.link}>Outdoor</RouterLink>
            </li>
          </ul>
        </Accordion>
        <Accordion title="Product" className={styles.accordion}>
          <ul className={styles.list}>
            <li>
              <RouterLink linkType='link' to='/shop/sofa' className={styles.link}>Sofa</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='/shop/lamp' className={styles.link}>Lamp</RouterLink>
            </li>
            <li>
              <RouterLink linkType='link' to='/shop/table' className={styles.link}>Table</RouterLink>
            </li>
          </ul>
        </Accordion>
        <RouterLink 
          linkType='navlink' 
          to='contact'
          className={styles.secondaryLink}
        >Contact Us</RouterLink>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomWrapper}>
          <RouterLink 
            linkType='navlink' 
            to='cart'
            className={styles.cartWrapper}
          >
            Cart
            <ToggleCartButton />
          </RouterLink>
          <RouterLink 
            linkType='navlink' 
            to='wishlist'
            className={styles.wishlistWrapper}
          >
            Wishlist
            <WishlistButton />
          </RouterLink>
        </div>
        <RouterLink 
          to='login' 
          variant='secondary'
        >
          <Button className={styles.buttonLogin}>Sign In</Button>
        </RouterLink>
        <div className={styles.footer}>
          <RouterLink
            variant='secondary'
            to='https://www.instagram.com/'
          >
            <Button variant='ghost'>
              <Svg 
                spriteType='mono'
                iconName='instagram'
                className={styles.iconFooterInst} />
            </Button>
          </RouterLink>
          <RouterLink
            variant='secondary'
            to='https://www.instagram.com/'
          >
            <Button variant='ghost'>
              <Svg 
                spriteType='mono'
                iconName='facebook'
                className={styles.iconFooterFace} />
            </Button>
          </RouterLink>
          <RouterLink
            variant='secondary'
            to='https://www.youtube.com/'
          >
            <Button variant='ghost'>
              <Svg 
                spriteType='mono'
                iconName='youtube'
                className={styles.iconFooterYout} />
            </Button>
          </RouterLink>
        </div>
      </div>
    </FlyoutPanel>
  )
}

export default FlyoutSearch