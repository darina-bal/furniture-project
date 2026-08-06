import ProductThumb from '@/shared/ui/ProductThumb/ProductThumb'
import type { Product } from '@/shared/lib/types'
import clsx from 'clsx'
import Badge from '@/shared/ui/Badge'
import { useWishlistStore } from '@/entities/wishlist'
import { AddtoWishlistButton } from '@/features/add-to-wishlist'
import AddToCartButton from '@/features/add-to-cart'
import { useCartStore } from '@/entities/cart'
import styles from './ProductCard.module.scss'
import { Stars } from '@/entities/product'
import Paragraph from '@/shared/ui/Paragraph'
import RouterLink from '@/shared/ui/RouterLink'

interface ProductCardProps {
  product: Product;
  link: string;
  className?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const {
    product,
    link,
    className,
  } = props

  const isInWishlist = useWishlistStore((s) => s.ids.includes(product.id))
  const isInCart = useCartStore((s) => s.items.some((i) => i.product.id === product.id))

  return (
    <RouterLink 
      className={clsx(styles.card, className)}
      variant='secondary'
      to={link}
    >
      <article className={clsx(styles.card, className)}>
        <div className={styles.top}>
          {(product.isNew || product.discount) && (
            <div className={styles.badges}>
              {product.isNew && <Badge variant="new">NEW</Badge>}
              {product.discount && <Badge variant="discount">-{product.discount}%</Badge>}
            </div>
          )}
          <AddtoWishlistButton
            className={clsx(styles.heart, styles.hoverable, isInWishlist && styles.alwaysVisible)}
            productId={product.id}
            isInWishlist={isInWishlist}
          />
          <ProductThumb
            urlPng={product.imageUrlPng}
            urlWebp={product.imageUrlWebp}
            className={styles.thumb}
          />
          <div className={styles.cartWrapper}>
            <AddToCartButton
              product={product}
              className={clsx(styles.cart, styles.hoverable, isInCart && styles.alwaysVisible)}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <Stars count={product.countStar}/>
          <Paragraph className={styles.title}>{product.title}</Paragraph>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>${(product.price).toFixed(2)}</span>
            { product.oldPrice && <span className={styles.oldPrice}>${(product.oldPrice).toFixed(2)}</span> }
          </div>
        </div>
      </article>
    </RouterLink>
  )
}

export default ProductCard