import clsx from 'clsx';
import Button from '../Button';
import Svg from '../Svg';
import styles from './PaginationButton.module.scss'

interface PaginationButtonProps {
  onPrev: () => void;
  onNext: () => void;
  variant?: 'default' | 'secondary';
}

const ButtonPagination = (props: PaginationButtonProps) => {
  const {
    onPrev,
    onNext,
    variant = 'default',
  } = props
  
  return (
    <div className={clsx(styles.paginationWrapper, styles[variant])}>
      <Button
        variant='ghost'
        className={styles.buttonArrowLeft}
        onClick={onPrev}
        aria-label="Предыдущий слайд"
      >
        <Svg 
          iconName='arrow-right'
          spriteType='mono'
          className={styles.arrowLeft} />
      </Button>
      <Button
        variant='ghost'
        className={styles.buttonArrowRight}
        onClick={onNext}
        aria-label="Следующий слайд"
      >
        <Svg 
          iconName='arrow-right'
          spriteType='mono'
          className={styles.arrowRight} />
      </Button>
    </div>
  )
}

export default ButtonPagination