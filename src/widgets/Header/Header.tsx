import Container from '@/shared/ui/Container'
import Logo from '@/shared/ui/Logo'
import Navbar from '@/shared/ui/Navbar'
import { useUser } from '@/entities/user'
import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleSearchButton } from '@/features/toggle-search'
import { ToggleMenuButtonMobile } from '@/features/toggle-menu-mobile'
import RouterLink from '@/shared/ui/RouterLink'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import { selectTotalQuantity, useCartStore } from '@/entities/cart'
import { headerNavItems, navigationRoutes } from '@/shared/config/navigation'
import styles from './Header.module.scss'

const Header = () => {
  const { user } = useUser()
  const totalQuantity = useCartStore(selectTotalQuantity)

  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <ToggleMenuButtonMobile />
          <Logo />
        </div>
        <Navbar 
          items={headerNavItems}
          className={styles.navbar} 
        />
        <div className={styles.iconWrapper}>
          <ToggleSearchButton />
          {user?.role !== 'guest' ? (
            <RouterLink to={navigationRoutes.user} variant='secondary'>
              <Button 
                variant='ghost'
                className={styles.wrapperIconUserCircle}
              >
                <Svg 
                  iconName='user-circle'
                  spriteType='mono' />
              </Button>
            </RouterLink>
          ) : (
            <RouterLink to={navigationRoutes.auth} variant='secondary'>
              <Button 
                variant='ghost'
                className={styles.wrapperIconUserCircle}
              >
                <Svg 
                  iconName='user-circle'
                  spriteType='mono' />
              </Button>
            </RouterLink>
          )}
          <ToggleCartButton count={totalQuantity} />
        </div>
      </Container>
    </header>
  )
}

export default Header