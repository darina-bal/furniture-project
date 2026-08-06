import type { Product } from '@/shared/lib/types'
import styles from './AddToCartButton.module.scss'
import { useCartStore } from '@/entities/cart'
import clsx from 'clsx'
import Button from '@/shared/ui/Button'

interface AddToCartButtonProps {
  product: Product
  className?: string
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  const {
    product,
    className,
  } = props

  const addItem = useCartStore((s) => s.addItem)
  const isInCart = useCartStore((s) => s.items.some((i) => i.product.id === product.id))

  return (
    <Button
      className={clsx(styles.button, isInCart && styles.added, className)}
      onClick={() => addItem(product)}
    >
      {isInCart ? '✔ Added' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton