import Container from '@/shared/ui/Container'
import Logo from '@/shared/ui/Logo'
import Navbar from '@/shared/ui/Navbar'
import Svg from '@/shared/ui/Svg'
import Button from '@/shared/ui/Button'
import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleAccountButton } from '@/features/toggle-account'
import styles from './Header.module.scss'
import { ToggleSearchButton } from '@/features/toggle-search'

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
          <Button 
            variant='ghost'
            className={styles.buttonIconMenu}
          >
            <Svg 
              iconName='menu'
              spriteType='mono'
              className={styles.iconMenu} />
          </Button>
          <Logo />
        </div>
        <Navbar 
          items={headerNavItems}
          className={styles.navbar} />
        <div className={styles.iconWrapper}>
          <ToggleSearchButton />
          <ToggleAccountButton />
          <ToggleCartButton />
        </div>
      </Container>
    </header>
  )
}

export default Header