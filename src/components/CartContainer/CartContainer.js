import React, { useContext } from 'react'
import { cartContext } from '../../store/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import { Link } from 'react-router-dom'
import UserForm from '../UserForm/UserForm'
import { useNavigate } from "react-router-dom";
import { createOrder } from '../../services/DB'


function CartContainer() {
  const { cart, clearCart } = useContext(cartContext)
  const navigate = useNavigate();

  async function handleSubmit(e, userData) {
    e.preventDefault();
    let totalPrice = 0
    const items = cart.map(cartItem => {
      totalPrice += cartItem.totalPrice
      return { id: cartItem.id, title: cartItem.name, price: cartItem.price, quantity: cartItem.quantity }
    })

    const order = { buyer: { ...userData }, items: items, date: new Date().toString(), total: totalPrice }
    const orderID = await createOrder(order)

    clearCart()

    navigate(`../sucess/${orderID}`)
  }

  return (
    <div>
      <h2>Mi Carrito</h2>
      {cart.length > 0
        ?
        <div>
          <CartItemList cart={cart} />
          <UserForm onSubmit={(e, userData) => handleSubmit(e, userData)} />
        </div>
        :
        <div>
          <Link to="/">Tu carrito esta vacio, empezar a comprar!</Link>
        </div>
      }

    </div>
  );
}

export default CartContainer