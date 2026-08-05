import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Badge.module.scss'

interface BadgeProps {
  variant?: 'new' | 'discount'
  className?: string
  children: ReactNode
}

const Badge = (props: BadgeProps) => {
  const {
    variant = 'new',
    className,
    children,
  } = props

  return (
    <span className={clsx(styles.badge, styles[variant], className)}>{children}</span>
  )
}

export default Badge