import styles from './Navbar.module.scss'
import RouterLink from '../RouterLink';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  items: NavItem[];
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const {
    items, 
    variant = 'horizontal', 
    className
  } = props 

  const classNames = [
    styles.navbar,
    styles[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <nav className={classNames}>
      {items.map((item) => (
        <RouterLink key={item.href} linkType='navlink' to={item.href} >
          {item.icon}
          {item.label}
        </RouterLink>
      ))}
    </nav>
  )
}

export default Navbar