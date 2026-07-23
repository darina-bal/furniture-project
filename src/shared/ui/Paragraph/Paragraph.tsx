import type { ComponentPropsWithRef } from 'react'

interface ParagraphProps extends ComponentPropsWithRef<'p'> {}

const Paragraph = (props: ParagraphProps) => {
  const { 
    className,
    children,
    ...rest 
  } = props

  const classNames = [
    className
  ].filter(Boolean).join(' ')

  return (
    <p
      className={classNames}
      {...rest}
    >
      {children}
    </p>
  )
}

export default Paragraph