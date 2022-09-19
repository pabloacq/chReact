import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function ItemCount({ product, onAdd, className }) {
  const { stock = 0, min = 1, max = stock, step = 1 } = product
  const [count, setCount] = useState(min)

  const incrementCount = () => {
    let newCount = count + step
    if (isValidCount(newCount)) setCount(newCount)
  }

  const decrementCount = () => {
    let newCount = count - step
    if (isValidCount(newCount)) setCount(newCount)
  }

  const isValidCount = (testedCount) => {
    return (testedCount >= min) && (testedCount <= max) && (testedCount <= stock)
  }

  return (
    <Container className={className}>
        <Container className="w-100 d-flex border border-primary rounded px-0 overflow-hidden mx-0">
          <Button className="bg-main rounded-0 w-33 shadow-none" onClick={() => decrementCount()}>-</Button>
          <Container className="w-33 bg-light align-items-center justify-content-center d-flex p-0"><span className="align-middle px-3">{count}</span></Container>
          <Button className="rounded-0 w-33 shadow-none" onClick={() => incrementCount()}>+</Button>
        </Container>
      <Button className="my-2" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Container>
  )
}

export default ItemCount