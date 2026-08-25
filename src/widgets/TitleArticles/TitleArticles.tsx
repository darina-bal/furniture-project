import Heading from '@/shared/ui/Heading'
import RouterLink from '@/shared/ui/RouterLink'
import { navigationRoutes } from '@/shared/config/navigation'
import styles from './TitleArticles.module.scss'

const TitleArticles = () => {
  return (
    <div className={styles.titleArticles}>
      <Heading level='h3' className={styles.title}>Articles</Heading>
      <RouterLink to={navigationRoutes.blog}>More Articles</RouterLink>
    </div>
  )
}

export default TitleArticles