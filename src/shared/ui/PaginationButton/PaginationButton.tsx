import Button from '../Button';
import Svg from '../Svg';
import styles from './PaginationButton.module.scss'

const ButtonPagination = () => {
  return (
    <div className={styles.paginationWrapper}>
      <Button
        variant='ghost'
        className={styles.buttonArrowLeft}
      >
        <Svg 
          iconName='arrow-right'
          spriteType='mono'
          className={styles.arrowLeft} />
      </Button>
      <Button
        variant='ghost'
        className={styles.buttonArrowRight}
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