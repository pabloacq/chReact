import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <a href='#cart' className="nav-link">
      <FontAwesomeIcon icon={faCartShopping} /> 
    </a>
    
  )
}

export default CartWidget