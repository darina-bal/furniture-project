import { CategoryCard, type Category } from '@/entities/category'
import clsx from 'clsx'
import styles from './CategoryShowcase.module.scss'

interface CategoryShowcaseProps {
  categories: Category[];
  className?: string;
}

const CategoryShowcase = ({categories, className} : CategoryShowcaseProps) => {
  if (categories.length === 0) return null;

  return (
    <section className={clsx(styles.showcase, className)}>
      {categories.map((category, index) => (
        <CategoryCard 
          key={category.id} 
          category={category} 
          variant={index === 0 ? 'vertical' : 'horizontal'} 
          className={clsx({ [styles.featured]: index === 0 })}
        />
      ))}
    </section>
  )
}

export default CategoryShowcase