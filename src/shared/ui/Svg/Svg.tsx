import type { SVGProps } from 'react'
import styles from './Svg.module.scss'

interface SvgProps extends SVGProps<SVGSVGElement> {
  iconName: string;
  spriteType: 'mono' | 'multi';
  variant?: 'stroke' | 'fillAndStroke' | 'fillAndStroke-fair' | 'stroke-fair' | 'fill-fair';
}

const Svg = (props: SvgProps) => {
  const { 
    className,
    iconName,
    spriteType,
    variant='stroke',
    ...rest
  } = props

  const classNames = [
    styles.icon,
    styles[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <svg 
      className={classNames}
      {...rest}
    >
      <use xlinkHref={`/icons/sprite-${spriteType}.svg#${iconName}`}></use>
    </svg>
  )
}

export default Svg