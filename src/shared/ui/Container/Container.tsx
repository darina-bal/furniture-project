import type { ComponentPropsWithRef } from 'react';
import styles from './Container.module.scss'

type ContainerProps = ComponentPropsWithRef<'div'>;

const ContainerBase = (props: ContainerProps) => {
  const {
    children, 
    className, 
    ref,
    ...rest 
  } = props

  const classNames = [
    styles.container,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classNames} {...rest}>
      {children}
    </div>
  )
}

const Split = (props: ContainerProps) => {
  const {
    children, 
    className, 
    ref,
    ...rest 
  } = props

  const classNames = [
    styles.split,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classNames} {...rest}>
      {children}
    </div>
  )
}

const SplitLeft = (props: ContainerProps) => {
  const {
    children, 
    className, 
    ref,
    ...rest 
  } = props

  const classNames = [
    styles.splitLeft,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classNames} {...rest}>
      {children}
    </div>
  )
}

const SplitRight = (props: ContainerProps) => {
  const {
    children, 
    className, 
    ref,
    ...rest 
  } = props

  const classNames = [
    styles.splitRight,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classNames} {...rest}>
      {children}
    </div>
  )
}

const Container = Object.assign(ContainerBase, {
  Split,
  SplitLeft,
  SplitRight,
})

export default Container