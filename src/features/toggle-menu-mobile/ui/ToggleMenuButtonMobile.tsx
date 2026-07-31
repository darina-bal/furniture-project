import { useFlyout } from '@/shared/lib/hooks/useFlyout'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './ToggleMenuButtonMobile.module.scss'

export const ToggleMenuButtonMobile = () => {
  const { openSearch } = useFlyout()

  return (
    <Button 
      variant='ghost'
      className={styles.buttonIconMenu}
      onClick={openSearch}
    >
      <Svg 
        iconName='menu'
        spriteType='mono'
        className={styles.iconMenu} />
    </Button>
  )
}