import { type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'xs',
    type = 'button',
    children,
    isDisabled = false,
    className,
    ...rest
  } = props

  const classNames = [
    styles.button,
    styles[variant],
    styles[`button_${size}`],
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