import Container from '@/shared/ui/Container'
import Logo from '@/shared/ui/Logo'
import Navbar from '@/shared/ui/Navbar'
import Svg from '@/shared/ui/Svg';
import styles from './Header.module.scss'
import Button from '@/shared/ui/Button';
import CartButton from '@/entities/cart/ui/CartButton';

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
          <Button 
            variant='ghost'
            className={styles.buttonIconSearch}
          >
            <Svg 
              iconName='search'
              spriteType='mono' />
          </Button>
          <Button 
            variant='ghost'
            className={styles.buttonIconUserCircle}
          >
            <Svg 
              iconName='user-circle'
              spriteType='mono' />
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  )
}

export default Header