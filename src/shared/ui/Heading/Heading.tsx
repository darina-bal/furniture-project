import { type ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const Heading = (props: HeadingProps) => {
  const {
    level,
    children,
    className = ''
  } = props 

  const Tag = level

  return (
    <Tag
      className={className}
    >
      {children}
    </Tag>
  )
}

export default Heading