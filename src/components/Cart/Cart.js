import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../store/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import {Link} from 'react-router-dom'


function Cart() {
  const {cart} = useContext(cartContext)

  return (
    <div>
      <h2>Mi Carrito</h2>
      {cart.length > 0 
      ? <CartItemList cart={cart}/>
      : <Link to="/">Tu carrito esta vacio, empezar a comprar!</Link>
      }
      
    </div>
  );
}

export default Cart