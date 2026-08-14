import Heading from '@/shared/ui/Heading'
import styles from './TitleArrivals.module.scss'
import RouterLink from '@/shared/ui/RouterLink'
import { navigationRoutes } from '@/shared/config/navigation'

const TitleArrivals = () => {
  return (
    <div className={styles.titleArrivals}>
      <Heading level='h3' className={styles.title}>New Arrivals</Heading>
      <RouterLink to={navigationRoutes.shop}>More Products</RouterLink>
    </div>
  )
}

export default TitleArrivals