import { useFlyout } from '@/shared/lib/hooks/useFlyout'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './ToggleSearchButton.module.scss'

export const ToggleSearchButton = () => {
  const { openSearch } = useFlyout();

  return (
    <Button 
      variant='ghost'
      className={styles.buttonIconSearch}
      onClick={openSearch}
    >
      <Svg 
        iconName='search'
        spriteType='mono' />
    </Button>
  )
}