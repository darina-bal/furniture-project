import { type ButtonHTMLAttributes } from 'react'
import Svg from '../Svg';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isDisabled?: boolean;
  variantBg?: 'first' | 'second' | 'third' | 'fourth';
  variantText?: 'button_xl' | 'button_l' | 'button_m' | 'button_s' | 'button_xs';
}

const Button = (props: ButtonProps) => {
  const {
    variantBg = 'first',
    variantText = 'button_s',
    type = 'button',
    children,
    isDisabled = false,
    className,
    ...rest
  } = props

  const classNames = [
    styles.button,
    styles[variantBg],
    styles[variantText],
    className
  ].filter(Boolean).join(' ')

  const isFourth = variantBg === 'fourth'

  return (
    <button 
      className={classNames}
      disabled={isDisabled}
      {...rest}>
      {isFourth && 
        <Svg 
          iconName='cross'
          spriteType='mono'
          variant='fill-fair'
          className={styles.crossInButton}
        />
      }
      {children}
    </button>
  )
}

export default Button