import { mockItems } from '@/entities/blog/model/mock'
import { BlogItemCard } from '@/entities/blog'
import clsx from 'clsx'
import styles from './ArticleShowcase.module.scss'

interface ArticleShowcaseProps {
  className?: string;
}

const ArticleShowcase = (props: ArticleShowcaseProps) => {
  const {
    className,
  } = props

  return (
    <section className={clsx(styles.blogList, className)}>
      {mockItems.map(item => (
        <BlogItemCard key={item.id} item={item} variant='withLink' />
      ))}
    </section>
  )
}

export default ArticleShowcase