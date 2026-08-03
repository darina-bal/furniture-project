import { useEffect, type ReactNode } from 'react'
import clsx from 'clsx'
import styles from './FlyoutPanel.module.scss'

type Direction = 'left' | 'right';

interface FlyoutPanelProps {
  isOpen: boolean;
  direction?: Direction;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const FlyoutPanel = (props: FlyoutPanelProps) => {
  const {
    isOpen,
    direction = 'right',
    onClose,
    children,
    className,
  } = props

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    }

    if (isOpen) document.addEventListener('keydown', handleEsc)

    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Блокировка скролла body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div
        className={clsx(styles.overlay, { [styles.overlayVisible]: isOpen })}
        onClick={onClose}
      />
      <div
        className={clsx(
          styles.panel,
          styles[direction],
          { [styles.panelVisible]: isOpen },
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

export default FlyoutPanel