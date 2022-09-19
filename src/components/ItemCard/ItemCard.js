import React from 'react'
import './ItemCard.css'

function ItemCard({ product }) {
  return (
    <div className="card">
      <div className="h-70 bg-card">
        <img className="card-img-top h-100" alt={product.name} src={product.img} />
      </div>
      <div className="card-body h-30 d-flex flex-column">
        <h5 className="row card-title">{product.name}</h5>
        <div className="row mh-lh">
          <span className="col text-muted p-0">{product.presentacion}</span>
        </div>
        <p className=" row card-text" >$ {product.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;