import { type ButtonHTMLAttributes } from 'react'
import Svg from '../Svg';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isDisabled?: boolean;
  variantBg?: 'first' | 'second' | 'third' | 'remove' | 'close' | 'pagination' | 'search' | 'user' | 'cart';
  variantText?: 'button_xl' | 'button_l' | 'button_m' | 'button_s' | 'button_xs';
  count?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variantBg = 'first',
    variantText = 'button_xs',
    type = 'button',
    children,
    isDisabled = false,
    className,
    count = 0,
    ...rest
  } = props

  const classNames = [
    styles.button,
    styles[variantBg],
    styles[variantText],
    className
  ].filter(Boolean).join(' ')

  const isRemove = variantBg === 'remove'
  const isClose = variantBg === 'close'
  const isPagination = variantBg === 'pagination'
  const isSearch = variantBg === 'search'
  const isUser = variantBg === 'user'
  const isCart = variantBg === 'cart'

  return (
    <button 
      className={classNames}
      disabled={isDisabled}
      {...rest}>
      {(isRemove || isClose) && 
        <Svg 
          iconName='cross'
          spriteType='mono'
          variant='fill-fair'
          className={isRemove ? styles.crossInRemove : styles.crossInClose} />
      }
      {isPagination && 
        <Svg 
          iconName='arrow-right'
          spriteType='mono' />
      }
      {(isSearch || isUser) && 
        <Svg 
          iconName={
            isSearch ? 'search' : 'user-circle'
          }
          spriteType='mono' />
      }
      {isCart && 
        <div className={styles.cartWrapper}>
          <Svg 
            iconName='shopping-bag'
            spriteType='mono'
            className={styles.shoppingBag} />
          {(Number(count) > 0) && <span className={styles.count}>{count}</span>}
        </div>
      }
      {children}
    </button>
  )
}

export default Button