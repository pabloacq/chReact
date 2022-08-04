import React, { useState } from 'react'

function ItemCount({stock=0, min=0, max=stock, step=1}) {

  console.log({min: min, max: max, stock: stock, step: step})
  const [count, setCount] = useState(min)

  const incrementCount = () =>{
    let newCount = count + step
    if (isValidCount(newCount)) setCount(newCount)
  }

  const decrementCount = () =>{
    let newCount = count - step
    if (isValidCount(newCount)) setCount(newCount)
  }

  const isValidCount = (testedCount) =>{
    return (testedCount >= min) && (testedCount <= max) && (testedCount <= stock)
  }

  return (
    <div>
      <button onClick={() => decrementCount()}>-</button>
      <div><p>{count}</p></div>
      <button onClick={() => incrementCount()}>+</button>
    </div>
  )
}

export default ItemCount