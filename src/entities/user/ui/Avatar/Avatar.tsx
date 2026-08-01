import type { ComponentPropsWithRef } from 'react';
import clsx from 'clsx'
import Svg from '@/shared/ui/Svg'
import Paragraph from '@/shared/ui/Paragraph';
import { useUser } from '../../hooks/useUser'
import styles from './Avatar.module.scss'

interface AvatarProps extends ComponentPropsWithRef<'div'>{}

const Avatar = (props: AvatarProps) => {
  const { className } = props

  const { user } = useUser()

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.wrapperAvatar}>
        <picture className={styles.avatar}>
          <source srcSet={user?.avatarUrlWebp} type='image/webp' />
          <img src={user?.avatarUrlJpg} alt="avatar"/>
        </picture>
        <div className={styles.iconWrapper}>
          <Svg 
            spriteType='mono'
            variant='fill'
            iconName='camera'
            className={styles.iconCamera}/>
        </div>
      </div>
      <Paragraph className={styles.userDisplayName}>
        {user?.displayname}
      </Paragraph>
    </div>
  )
}

export default Avatar