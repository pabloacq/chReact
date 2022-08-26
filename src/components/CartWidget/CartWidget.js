import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { cartContext } from '../../store/CartContext'

function CartWidget() {
  const { quantity } = useContext(cartContext)
  return (
      <Link to='/cart' className="nav-link">
        <FontAwesomeIcon size="2x" icon={faCartShopping} />
        <div className={quantity > 0 ? "cartQuantity" : "d-none"}>{quantity}</div>
      </Link>
  )
}

export default CartWidget


