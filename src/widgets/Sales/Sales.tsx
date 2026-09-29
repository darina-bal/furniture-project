import Container from '@/shared/ui/Container'
import RouterLink from '@/shared/ui/RouterLink'
import { navigationRoutes } from '@/shared/config/navigation'
import styles from './Sales.module.scss'
import Heading from '@/shared/ui/Heading';

interface SalesProps {
  className?: string;
}

const Sales = (props: SalesProps) => {
  const { className } = props

  return (
    <section className={className}>
      <Container.Split className={styles.split}>
        <Container.SplitLeft>
          <picture className={styles.image}>
            <source srcSet='/img/landing-2.webp' type='image/webp' />
            <img src='/img/landing-2.jpg'
              alt="landing-2"
              loading="lazy"
              decoding="async"/>
          </picture>
        </Container.SplitLeft>
        <Container.SplitRight className={styles.secondContainer}>
          <div className={styles.wrapperSecondContainer}>
            <div className={styles.wrapperText}>
              <p className={styles.saleText}>SALE UP TO 35% OFF</p>
              <Heading level='h4' className={styles.title}>
                HUNDREDS of <br/> New lower prices!
              </Heading>
              <p className={styles.description}>
                It's more affordable than ever to give every room in your home a stylish makeover
              </p>
            </div>
            <div>
              <RouterLink to={navigationRoutes.shop}>
                Shop Now
              </RouterLink>
            </div>
          </div>
        </Container.SplitRight>
      </Container.Split>
    </section>
  )
}

export default Sales