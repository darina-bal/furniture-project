import { useFlyout } from '@/shared/lib/hooks/useFlyout'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './ToggleAccountButton.module.scss'

export const ToggleAccountButton = () => {
  const { openAccount } = useFlyout()

  return (
    <Button 
      variant='ghost'
      className={styles.buttonIconUserCircle}
      onClick={openAccount}
    >
      <Svg 
        iconName='user-circle'
        spriteType='mono' />
    </Button>
  )
}