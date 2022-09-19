import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { cartContext } from '../../store/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'


function ItemDetail({ product }) {
  const { addToCart, cart } = useContext(cartContext)

  function handleAdd(quantity) {
    addToCart(product, quantity)
  }


  const { img, name, description, price, stock, presentacion } = product || {}
  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="d-flex flex-md-fill justify-content-center align-items-start w-md-33">
        <div><img src={`${process.env.PUBLIC_URL}${img}`} alt={name}></img></div>
      </div>
      <div className="d-flex flex-md-fill w-md-33 flex-column mt-3 mt-md-0">
        <h2>{name}</h2>
        <span className="text-muted">{presentacion}</span>
        <h3>$ {price}</h3>
        <span>{description}</span>
      </div>
      <div className="d-flex flex-md-fill w-md-33 flex-column p-3 ms-3 border-md-start border-warning">
        {stock > 0 ?
          <div className="d-flex flex-column">
            <span className="m-1 text-success"><FontAwesomeIcon icon={faTruckFast} /> Llega gratis mañana</span>
            <span className="m-1 fw-bold">Stock Disponible</span>
            <ItemCount className="d-flex flex-column px-0 mt-md-5" product={product} onAdd={handleAdd} />
          </div>
          :
          <div>
            <span> Producto sin stock </span>
          </div>
        }
      </div>
    </div>
  );
}

export default ItemDetail