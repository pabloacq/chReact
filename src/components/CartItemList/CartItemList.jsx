import React from 'react'
import CartItem from '../CartItem/CartItem'

function CartItemList({ cart }) {
  let subTotal = 0
  return (

    <div className="d-flex flex-column align-content-start ">
      <div className="border-bottom border-secondary py-2"></div>

      {cart.map(cartItem => {
        subTotal += cartItem.totalPrice
        return <div className="border-bottom border-secondary py-2 row">
          <CartItem key={cartItem.id} cartItem={cartItem} />
        </div>
      })}

      <div className="border-bottom border-secondary py-2 row">
        <div className="col-md-9"></div>
        <div className="col-md-1 col d-flex align-items-end"><p>Total</p></div>
        <div className="col-md-2 col d-flex justify-content-end"><p className="fs-4">$ {subTotal}</p></div>
      </div>
    </div>
  )
}

export default CartItemList