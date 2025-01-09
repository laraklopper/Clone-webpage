import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Buttons(props) {
  return (
      <Button variant="outline-secondary">{props.text}</Button>
  )
}
