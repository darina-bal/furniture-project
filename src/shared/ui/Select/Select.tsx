import { useRef, useState } from 'react'
import clsx from 'clsx'
import { useOnClickOutside } from '../../lib/hooks/useOnClickOutside'
import Svg from '../Svg'
import styles from './Select.module.scss'

interface SelectItem {
  id: string;
  label: string;
}

interface SelectProps {
  items: SelectItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  placeholder?: string;
  className?: string;
  title?: string;
}

const Select = (props: SelectProps) => {
  const {
    items, 
    selectedId, 
    onSelect, 
    placeholder,
    className,
    title,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = items.find((item) => item.id === selectedId)

  // Проверка на клик снаружи
  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div className={clsx(styles.wrapper, className)} ref={ref}>
      {title && <p className={styles.title}>{title}</p>}
      <div
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.placeholder}>{selected?.label ?? placeholder}</span>
        <Svg 
          iconName='tick-select'
          spriteType='mono'
          variant='fill'
          className={clsx(styles.icon, isOpen && styles.iconOpen)} />
      </div>

      <ul className={clsx(styles.dropdown, isOpen && styles.dropdownActive)}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.option}
            onClick={() => {
              onSelect(item.id);
              setIsOpen(false);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select