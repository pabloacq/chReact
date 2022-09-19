import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/CartContext'
import { useNavigate } from "react-router-dom";


function CartItem({ cartItem }) {
  const { removeItem } = useContext(cartContext)
  const navigate = useNavigate();

  return (
    <div className="my-1">
      <div className='row'>
        <div className="col-md-2 col-4"><img src={`${process.env.PUBLIC_URL}${cartItem.img}`} alt={cartItem.name} className="img-fluid mh-10vh"></img></div>
        <div className="col-md-10 col-8 d-flex flex-column">
            <div>
              <div className="d-flex flex-row align-items-start">
                <div className="h-100 d-inline-block">
                  <span className="me-2 lh-23">{cartItem.quantity}x</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-3 lh-1">{cartItem.name}</span>
                  <span className="text-muted">{cartItem.presentacion}</span>
                </div>
              </div>
              <div className="row d-flex flex-row">
                <button className="col-auto btn btn-link" variant="danger" onClick={() => removeItem(cartItem.id)}>Eliminar</button>
                <button className="col-auto btn btn-link d-none d-md-block" onClick={() => navigate(`../products/${cartItem.category}`)}>Ver mas productos similares</button>
                <div className="col d-flex justify-content-end"><p className="fs-4 mr-auto">$ {cartItem.totalPrice}</p></div>
              </div>
            </div>  
            
        </div>
        
      </div>
    </div>
  )
}

export default CartItem