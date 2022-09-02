import React from 'react'
import CartItem from '../CartItem/CartItem'
import Table from 'react-bootstrap/Table';

function CartItemList({ cart }) {
  let subTotal = 0
  return (

    <Table striped hover>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
          <th>Precio total</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {cart.map(cartItem => {
          subTotal += cartItem.totalPrice
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })}
        <tr className="table-primary">
          <th scope="row">Subtotal</th>
          <td></td>
          <td></td>
          <td>{subTotal}</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CartItemList