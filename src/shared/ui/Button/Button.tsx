import { type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    type = 'button',
    children,
    isDisabled = false,
    className,
    ...rest
  } = props

  const classNames = [
    styles.button,
    styles[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classNames}
      disabled={isDisabled}
      {...rest}>
      {children}
    </button>
  )
}

export default Button