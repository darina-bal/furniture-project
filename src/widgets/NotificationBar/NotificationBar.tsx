import { useRef, useState } from 'react'
import Container from '@/shared/ui/Container'
import Svg from '@/shared/ui/Svg'
import RouterLink from '@/shared/ui/RouterLink'
import Button from '@/shared/ui/Button'
import { deleteComponent } from '@/features/delete-component'
import styles from './NotificationBar.module.scss'

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const barRef = useRef<HTMLDivElement>(null)

  const handleCloseClick = () => {
    if (barRef.current) {
      deleteComponent(barRef.current, () => {
        setIsVisible(false)
      })
    }
  }

  if (!isVisible) {
    return null
  }
  
  return (
    <div 
      className={styles.notificationBar}
      ref={barRef}
    >
      <Container
        className={styles.wrapper}
      >
        <div className={styles.textWrapper}>
          <Svg 
            iconName='ticket-percent'
            spriteType='mono'
            variant='fill'
            className={styles.iconTicketPercent}
          />
          <p
            className={styles.title}
          >
            30% off storewide — Limited time! 
          </p>
          <RouterLink
            to='shop'
            className={styles.link}
          >
            Shop Now
          </RouterLink>
        </div>
      </Container>
      <Button
        variant='ghost'
        className={styles.crossButton}
        onClick={handleCloseClick}
      >
        <Svg 
          iconName='cross'
          spriteType='mono'
          variant='fill-fair'
          className={styles.cross} />
      </Button>
    </div>
  )
}

export default NotificationBar