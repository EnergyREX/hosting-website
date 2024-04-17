import React, {ReactNode} from 'react'

interface buttonProps {
  children: ReactNode;
  className: string;
}

const Button = ({children, className}: buttonProps) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button