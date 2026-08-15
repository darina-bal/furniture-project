import type { ReactNode } from 'react'
import Svg from '../Svg'
import clsx from 'clsx';
import styles from './SpanLink.module.scss'

interface SpanLinkProps {
  children: ReactNode;
  className?: string;
}

const SpanLink = (props: SpanLinkProps) => {
  const { children, className } = props

  return (
    <span className={clsx(styles.link, className)}>
      {children}
      <Svg 
        iconName='arrow-right'
        spriteType='mono'
        className={styles.arrowRight}/>
    </span>
  )
}

export default SpanLink