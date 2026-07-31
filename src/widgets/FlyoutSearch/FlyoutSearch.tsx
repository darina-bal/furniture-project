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

// Массивы данных для циклов
const shopLinks = [
  { title: 'All Rooms', to: 'shop' },
  { title: 'Living Room', to: 'shop/livingroom' },
  { title: 'Bedroom', to: 'shop/bedroom' },
  { title: 'Kitchen', to: 'shop/kitchen' },
  { title: 'Bathroom', to: 'shop/bathroom' },
  { title: 'Dining', to: 'shop/dining' },
  { title: 'Outdoor', to: 'shop/outdoor' },
]

const productLinks = [
  { title: 'Sofa', to: 'shop/sofa' },
  { title: 'Lamp', to: 'shop/lamp' },
  { title: 'Table', to: 'shop/table' },
]

const socialLinks = [
  { iconName: 'instagram', to: 'https://www.instagram.com/', className: styles.iconFooterInst },
  { iconName: 'facebook', to: 'https://www.facebook.com/', className: styles.iconFooterFace }, 
  { iconName: 'youtube', to: 'https://www.youtube.com/', className: styles.iconFooterYout },
]

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
            {shopLinks.map((link) => (
              <li key={link.to}>
                <RouterLink linkType='link' to={link.to} className={styles.link}>
                  {link.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Product" className={styles.accordion}>
          <ul className={styles.list}>
            {productLinks.map((link) => (
              <li key={link.to}>
                <RouterLink linkType='link' to={link.to} className={styles.link}>
                  {link.title}
                </RouterLink>
              </li>
            ))}
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
          {socialLinks.map((social) => (
            <RouterLink key={social.iconName} variant='secondary' to={social.to}>
              <Button variant='ghost'>
                <Svg
                  spriteType='mono'
                  iconName={social.iconName}
                  className={social.className}
                />
              </Button>
            </RouterLink>
          ))}
        </div>
      </div>
    </FlyoutPanel>
  )
}

export default FlyoutSearch