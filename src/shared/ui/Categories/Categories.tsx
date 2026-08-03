import List from '../List'
import Select from '../Select'

export interface CategoriesProps {
  variant: 'select' | 'list';
  items: { id: string; label: string }[];
  onSelect: (value: string) => void;
  placeholder?: string;
  title?: string;
  selectedId: string;
  className?: string;
}

const Categories = (props: CategoriesProps) => {
  const {
    variant,
    ...rest
  } = props

  if (variant === 'select') {
    return (
      <Select {...rest} />
    )
  }

  return (
    <List {...rest} />
  ) 
}

export default Categories