import { useState, useRef, type ReactNode, type ComponentPropsWithRef } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Svg from '../Svg'
import styles from './Accordion.module.scss'

interface AccordionProps extends ComponentPropsWithRef<'div'> {
  title: string;
  children: ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const {
    title,
    children,
    className,
    ...rest
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
  }

  return (
    <div 
      className={clsx(styles.accordion, className)} 
      {...rest}
    >
      <Button
        variant='ghost'
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <Svg 
          iconName='tick-select'
          spriteType='mono'
          variant='fill'
          className={clsx(styles.icon, isOpen && styles.iconOpen)} />
      </Button>
      <div
        ref={contentRef}
        className={clsx(styles.content, isOpen && styles.contentOpen)}
      >
        <div className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion