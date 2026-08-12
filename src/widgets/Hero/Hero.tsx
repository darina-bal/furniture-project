import Heading from '@/shared/ui/Heading'
import clsx from 'clsx'
import styles from './Hero.module.scss'

const Hero = ({ className } : { className?: string }) => {
  return (
    <div className={clsx(styles.hero, className)}>
      <Heading level='h1' className={styles.title}>
        Simply Unique<span>/</span> Simply Better<span>.</span> 
      </Heading>
      <p className={styles.description}>
        <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
      </p>
    </div>
  )
}

export default Hero