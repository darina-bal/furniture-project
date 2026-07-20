import type { ComponentPropsWithRef } from 'react';
import styles from './Paragraph.module.scss'

interface ParagraphProps extends ComponentPropsWithRef<'p'> {
  variantText: 'text_26_regular' 
    | 'text_22_regular'
    | 'body_1'
    | 'text_18_regular'
    | 'body_2'
    | 'caption_1'
    | 'caption_2'
    | 'text_26_semibold'
    | 'text_22_semibold'
    | 'body_1_semi'
    | 'text_18_semibold'
    | 'body_2_semi'
    | 'caption_1_semi'
    | 'caption_2_semi'
    | 'text_26_bold'
    | 'text_22_bold'
    | 'body_1_bold'
    | 'text_18_bold'
    | 'body_2_bold'
    | 'caption_1_bold'
    | 'caption_2_bold'
}

const Paragraph = (props: ParagraphProps) => {
  const { 
    variantText, 
    className,
    children,
    ...rest 
  } = props

  const classNames = [
    styles.paragraph,
    styles[variantText],
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