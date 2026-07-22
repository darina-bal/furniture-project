import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

const Logo = (props: LogoProps) => {
  const { className = '' } = props

  const classNames = [
    styles.logo,
    className
  ].filter(Boolean).join(' ')

  return (
    <span className={classNames}>
      3legant<span className={styles.dot}>.</span>
    </span>
  )
}

export default Logo