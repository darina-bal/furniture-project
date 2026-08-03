import clsx from 'clsx'
import styles from './List.module.scss'
import Paragraph from '../Paragraph';

interface ListItem {
  id: string;
  label: string;
}

interface ListProps {
  items: ListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  title?: string;
  className?: string;
}

const List = (props: ListProps) => {
  const {
    items, 
    selectedId, 
    onSelect, 
    title,
    className,
  } = props

  return (
    <div className={clsx(styles.wrapper, className)}>
      {title && <Paragraph className={styles.title}>{title}</Paragraph>}
      <ul className={styles.list}>
        {items.map((item) => (
          <li
            key={item.id}
            className={clsx(styles.item, {
              [styles.itemActive]: item.id === selectedId,
            })}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List