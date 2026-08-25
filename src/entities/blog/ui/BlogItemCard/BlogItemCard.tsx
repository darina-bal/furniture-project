import Heading from '@/shared/ui/Heading'
import { formatDate } from '@/shared/lib'
import type { BlogItem } from '../../model/types'
import RouterLink from '@/shared/ui/RouterLink'
import SpanLink from '@/shared/ui/SpanLink'
import styles from './BlogItemCard.module.scss'

interface BlogItemCardProps {
  item: BlogItem;
  variant?: 'withLink' | 'withDate';
  className?: string;
}

const BlogItemCard = (props: BlogItemCardProps) => {
  const {
    item,
    variant = 'withDate',
  } = props

  return (
    <RouterLink 
      className={styles.articleBlog}
      to={item.to} 
      variant='secondary'
    >
      <picture className={styles.img}>
        <source srcSet={item.imgWebp} type='image/webp' />
        <img src={item.imgJpg} alt={item.title} />
      </picture>
      { variant === 'withDate' ? (
        <div className={styles.infoWrapper}>
          <Heading level='h4' className={styles.title}>{item.title}</Heading>
          <span className={styles.date}>{formatDate(item.date)}</span>
        </div>
      ) : (
        <div className={styles.infoWrapper}>
          <Heading level='h4' className={styles.shortTitle}>{item.shortTitle}</Heading>
          <SpanLink className={styles.spanLink}>Read More</SpanLink>
        </div>
      )}
    </RouterLink>
  )
}

export default BlogItemCard