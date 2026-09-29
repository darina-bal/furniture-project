import clsx from 'clsx'
import styles from './ProductThumb.module.scss'

interface ProductThumbProps {
  urlPng: string;
  urlWebp: string;
  className?: string;
}

const ProductThumb = (props: ProductThumbProps) => {
  const {
    urlPng,
    urlWebp,
    className,
  } = props

  return (
    <div className={clsx(styles.wrapper, className)}>
      <picture>
        <source srcSet={urlWebp} type='image/webp' />
        <img src={urlPng}
          alt="product"
          loading="lazy"
          decoding="async"/>
      </picture>
    </div>
  )
}

export default ProductThumb