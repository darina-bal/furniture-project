import { 
  Link, 
  NavLink, 
  type LinkProps, 
  type NavLinkProps, 
  type NavLinkRenderProps
 } from 'react-router'
 import Svg from '../Svg'
 import styles from './RouterLink.module.scss'

type RouterLinkProps = 
  | ({ linkType?: 'link' } & LinkProps)
  | ({ linkType: 'navlink' } & NavLinkProps)

const RouterLink = (props: RouterLinkProps) => {
  if (props.linkType === 'navlink') {
    const {
      linkType = 'link',
      children,
      className,
      ...rest
    } = props 

    const resolvedClassName = (renderProps: NavLinkRenderProps) => {
      const classes: string[] = [styles.navLink]

      if (renderProps.isActive) {
        classes.push(styles.navLinkActive)
      }

      if (typeof className === 'function') {
        const customClass = className(renderProps)
        if (customClass) {
          classes.push(customClass)
        }
      } else if (className) {
        classes.push(className)
      }

      return classes.join(' ')
    }

    return (
      <NavLink className={resolvedClassName} {...rest}>
        {children}
      </NavLink>
    )
  }

  const {
    linkType = 'link',
    children,
    className,
    ...rest
  } = props 

  const resolvedClassName = [
    styles.link,
    className
  ].filter(Boolean).join(' ')

  return (
    <Link className={resolvedClassName} {...rest}>
      {children}
      <Svg 
        iconName='arrow-right'
        spriteType='mono'
        className={styles.arrowRight}/>
    </Link>
  )
}

export default RouterLink