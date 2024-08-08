import { React, memo } from 'react'

export const Small = memo(({ value}) => {
    console.log('generado')
  return (
    <small>{ value }</small>
  )
}
)