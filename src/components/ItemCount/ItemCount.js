import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function ItemCount({product}) {
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
  
    <Container className="w-75 d-flex justify-content-center border border-primary px-0 rounded-pill overflow-hidden">
        <Button className="rounded-0 w-33 shadow-none" onClick={() => decrementCount()}>-</Button>
        <Container className="w-33 bg-light align-items-center justify-content-center d-flex p-0"><span className="align-middle px-3">{count}</span></Container>
        <Button className="rounded-0 w-33 shadow-none" onClick={() => incrementCount()}>+</Button>
    </Container>
  )
}

export default ItemCount