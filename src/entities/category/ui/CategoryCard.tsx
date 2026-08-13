import clsx from 'clsx'
import Heading from '@/shared/ui/Heading'
import type { Category } from '../model/types'
import RouterLink from '@/shared/ui/RouterLink'
import styles from './CategoryCard.module.scss'

export interface CategoryCardProps {
  category: Category;
  variant?: 'vertical' | 'horizontal';
  className?: string;
}

const CategoryCard = (props: CategoryCardProps) => {
  const {
    category,
    variant = 'vertical',
    className,
  } = props

  return (
    <article className={clsx(styles.card, styles[variant], className)}>
      <div className={styles.wrapper}>
        <Heading level='h2' className={styles.title}>
          {category.title}
        </Heading>
        <RouterLink to={category.href} className={styles.link}>Shop Now</RouterLink>
      </div>
      <picture className={styles.imgWrapper}>
        <source srcSet={category.imageWebp} type='image/webp' />
        <img src={category.imagePng} alt={category.title}/>
      </picture>
    </article>
  )
}

export default CategoryCard