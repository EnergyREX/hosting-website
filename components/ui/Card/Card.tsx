import React, {ReactNode} from 'react'

interface CardProps {
  children: ReactNode;
  className: string;
}

export default function Card ({children, className}: CardProps) {
  return (
  <div className={className}>{children}</div>
  )
}

export function CardHeader ({children, className}: CardProps) {return (<div className={className}>{children}</div>)}

export function CardBody ({children, className}: CardProps) {return (<div className={className}>{children}</div>)}

export function CardFooter ({children, className}: CardProps) {return (<div className={className}>{children}</div>)}

