import React, { useContext } from 'react'
import CartContainer from '../../components/CartContainer/CartContainer'
import { cartContext } from '../../store/CartContext';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function Cart() {
  const { cart, clearCart } = useContext(cartContext)

  return (
    <div className="container">
      <div className=" bg-white p-3 border border-secondary">
        <CartContainer />
        {cart.length > 0
          ?
          void (0)
          :
          <div className="mt-5">
            <ItemListContainer greeting="Algunos productos que podrian interesarte" max="5" justify="justify-items-start" />
          </div>
        }
      </div>
    </div>
  )
}

export default Cart