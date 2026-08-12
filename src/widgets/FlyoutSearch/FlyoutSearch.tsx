import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import Logo from '@/shared/ui/Logo'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import Field from '@/shared/ui/Field'
import Accordion from '@/shared/ui/Accordion'
import RouterLink from '@/shared/ui/RouterLink'
import WishlistCounterButton from '@/entities/wishlist'
import { useUser } from '@/entities/user'
import { ToggleCartButton } from '@/features/toggle-cart'
import { useCartStore, selectTotalQuantity } from '@/entities/cart'
import { useWishlistStore, selectWishlistCount } from "@/entities/wishlist"
import {
  mainNavigationLinks,
  counterNavigationLinks,
  navigationRoutes,
  type NavigationLink
} from '@/shared/config/navigation';
import SocialLinks from '@/shared/ui/SocialLinks'
import styles from './FlyoutSearch.module.scss'

const FlyoutSearch = () => {
  const { closeSearch } = useFlyout()
  const { user } = useUser()
  const isOpen = useFlyoutStore((s) => s.isOpen('search'))
  const totalQuantity = useCartStore(selectTotalQuantity)
  const wishlistCount = useWishlistStore(selectWishlistCount)

  const renderNavigationItem = (item: NavigationLink) => {
    if (item.children?.length) {
      return (
        <Accordion
          key={item.to}
          title={item.title}
          className={styles.accordion}
        >
          <ul className={styles.list}>
            {item.children.map((child) => (
              <li key={child.to}>
                <RouterLink
                  linkType="link"
                  to={child.to}
                  className={styles.link}
                  onClick={closeSearch}
                >
                  {child.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        </Accordion>
      );
    }

    return (
      <RouterLink
        key={item.to}
        linkType="navlink"
        to={item.to}
        className={
          item.layout === 'secondary'
            ? styles.secondaryLink
            : styles.mainLink
        }
        onClick={closeSearch}
      >
        {item.title}
      </RouterLink>
    );
  };

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
        {mainNavigationLinks.map(renderNavigationItem)}
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomWrapper}>
          {counterNavigationLinks.map((link) => (
            <RouterLink
              key={link.to}
              linkType="navlink"
              to={link.to}
              className={
                link.counter === 'cart'
                  ? styles.cartWrapper
                  : styles.wishlistWrapper
              }
              onClick={closeSearch}
            >
              {link.title}

              {link.counter === 'cart' && (
                <ToggleCartButton count={totalQuantity} />
              )}

              {link.counter === 'wishlist' && (
                <WishlistCounterButton count={wishlistCount} />
              )}
            </RouterLink>
          ))}
        </div>
        {user?.role === 'user' ? (
          null
        ) : (
          <RouterLink 
            to={navigationRoutes.auth} 
            variant='secondary'
          >
            <Button className={styles.buttonLogin}>Sign In</Button>
          </RouterLink>
        )}
        <SocialLinks />
      </div>
    </FlyoutPanel>
  )
}

export default FlyoutSearch