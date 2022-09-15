import React, { useContext } from 'react'
import { cartContext } from '../../store/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import { Link } from 'react-router-dom'
import UserForm from '../UserForm/UserForm'
import { useNavigate } from "react-router-dom";
import {createOrder} from '../../services/DB'


async function handleSubmit(e, userData, cart, navigate) {
  e.preventDefault();
  let totalPrice = 0
  const items = cart.map(cartItem => {
    totalPrice += cartItem.totalPrice
    return { id: cartItem.id, title: cartItem.name, price: cartItem.price, quantity: cartItem.quantity }
  })

  const order = { buyer: { ...userData }, items: items, date: new Date().toString(), total:totalPrice }
  const orderID = await createOrder(order)
  
  cart.clear()

  navigate(`../sucess/${orderID}`)
}



function Cart() {
  const { cart } = useContext(cartContext)
  const navigate = useNavigate();
  return (
    <div>
      <h2>Mi Carrito</h2>
      {cart.length > 0
        ? <CartItemList cart={cart} />
        : <Link to="/">Tu carrito esta vacio, empezar a comprar!</Link>
      }
      <UserForm onSubmit={(e, userData) => handleSubmit(e, userData, cart, navigate)}/>
    </div>
  );
}

export default Cart