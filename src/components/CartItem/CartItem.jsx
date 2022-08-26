import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/CartContext'
import {Button} from 'react-bootstrap'


function CartItem({ cartItem }) {
  const {removeItem} = useContext(cartContext)

  return (
    <tr>
      <td>{cartItem.name}</td>
      <td>{cartItem.quantity}</td>
      <td>{cartItem.price}</td>
      <td>{cartItem.totalPrice}</td>
      <td><Button variant="danger" onClick={() => removeItem(cartItem.id)}>X</Button></td>
    </tr>
  )
}

export default CartItem