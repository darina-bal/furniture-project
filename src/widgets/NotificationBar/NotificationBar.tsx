import { useRef, useState } from 'react'
import Container from '@/shared/ui/Container'
import Svg from '@/shared/ui/Svg'
import Paragraph from '@/shared/ui/Paragraph'
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
        <Svg 
          iconName='ticket-percent'
          spriteType='mono'
          variant='fill'
        />
        <Paragraph
          variantText='caption_1_semi'
        >
          30% off storewide — Limited time! 
        </Paragraph>
        <RouterLink
          to='shop'
          className={styles.link}
        >
          Shop Now
        </RouterLink>
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