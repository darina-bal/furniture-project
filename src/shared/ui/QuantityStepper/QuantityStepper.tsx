import Button from '../Button'
import styles from './QuantityStepper.module.scss'

export interface QuantityStepperProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  variant?: 'default' | 'compact';
}

const QuantityStepper = (props: QuantityStepperProps) => {
  const {
    value,
    onIncrement,
    onDecrement,
    variant = 'default'
  } = props

  const isDecrementDisabled = value <= 1

  return (
    <div className={`${styles.stepper} ${styles[variant]}`}>
      <Button
        className={styles.button}
        variant='ghost'
        onClick={onDecrement}
        disabled={isDecrementDisabled}
        aria-label="Уменьшить количество"
      >
        -
      </Button>
      <span className={styles.value}>{value}</span>
      <Button
        className={styles.button}
        variant='ghost'
        onClick={onIncrement}
        aria-label="Увеличить количество"
      >
        +
      </Button>
    </div>
  )
}

export default QuantityStepper