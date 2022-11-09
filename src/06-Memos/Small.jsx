import {memo} from 'react'

export const Small = memo(({value}) => {
    console.log("Me volvi a Generar")
  return (
    <small>{value}</small>
  )
}
)