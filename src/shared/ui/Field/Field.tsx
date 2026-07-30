import  { type ComponentPropsWithRef } from 'react';
import clsx from 'clsx'
import styles from './Field.module.scss'

interface FieldProps extends ComponentPropsWithRef<'input'> {
  label: string;
  error?: string;
}

const Field = (props: FieldProps) => {
  const {
    className,
    id,
    label,
    error = '',
    type = 'text',
    ...rest
  } = props

  return (
    <div className={clsx(styles.field, className)}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={clsx(styles.input, error && styles.isInvalid)}
        placeholder=" "
        autoComplete="off"
        id={id}
        type={type}
        {...rest}
      />
      {error && (
        <span className={styles.error} title={error}>{error}</span>
      )}
    </div>
  )
}

export default Field