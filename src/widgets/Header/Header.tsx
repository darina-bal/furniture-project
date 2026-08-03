import Container from '@/shared/ui/Container'
import Logo from '@/shared/ui/Logo'
import Navbar from '@/shared/ui/Navbar'
import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleSearchButton } from '@/features/toggle-search'
import { ToggleMenuButtonMobile } from '@/features/toggle-menu-mobile'
import RouterLink from '@/shared/ui/RouterLink'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './Header.module.scss'

const headerNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: 'shop' },
  { label: 'Product', href: 'product' },
  { label: 'Contact Us', href: 'contact' },
];

const Header = () => {

  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <ToggleMenuButtonMobile />
          <Logo />
        </div>
        <Navbar 
          items={headerNavItems}
          className={styles.navbar} />
        <div className={styles.iconWrapper}>
          <ToggleSearchButton />
          <RouterLink to='user' variant='secondary'>
            <Button 
              variant='ghost'
              className={styles.wrapperIconUserCircle}
            >
              <Svg 
                iconName='user-circle'
                spriteType='mono' />
            </Button>
          </RouterLink>
          <ToggleCartButton />
        </div>
      </Container>
    </header>
  )
}

export default Header