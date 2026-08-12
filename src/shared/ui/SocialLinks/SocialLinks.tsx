import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import { socialLinks, type SocialIconName } from '@/shared/config/navigation'
import clsx from 'clsx'
import styles from './SocialLinks.module.scss'

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = (props: SocialLinksProps) => {
  const { className } = props

  const socialIconClassNames: Record<SocialIconName, string> = {
    instagram: styles.iconFooterInst,
    facebook: styles.iconFooterFace,
    youtube: styles.iconFooterYout,
  };

  return (
    <div className={clsx(styles.wrapperIcon, className)}>
      {socialLinks.map((social) => (
        <a
          key={social.iconName}
          href={social.to}
        >
          <Button
            variant="ghost"
            aria-label={social.label}
          >
            <Svg
              spriteType="mono"
              iconName={social.iconName}
              className={socialIconClassNames?.[social.iconName]}
            />
          </Button>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks