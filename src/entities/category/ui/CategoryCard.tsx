import clsx from 'clsx'
import Heading from '@/shared/ui/Heading'
import type { Category } from '../model/types'
import RouterLink from '@/shared/ui/RouterLink'
import styles from './CategoryCard.module.scss'
import SpanLink from '@/shared/ui/SpanLink'

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
    <RouterLink 
      className={clsx(styles.card, styles[variant], className)}
      to={category.href}
      variant='secondary'
    >
      <div className={styles.wrapper}>
        <Heading level='h2' className={styles.title}>
          {category.title}
        </Heading>
        <SpanLink className={styles.link}>Shop Now</SpanLink>
      </div>
      <picture className={styles.imgWrapper}>
        <source srcSet={category.imageWebp} type='image/webp' />
        <img src={category.imagePng}
          alt={category.title}
          loading="lazy"
          decoding="async"/>
      </picture>
    </RouterLink>
  )
}

export default CategoryCard