import React from 'react'
import './ItemListContainer.css'
import ItemCard from '../ItemCard/ItemCard';
import products from './products';

function ItemListContainer({ greeting }) {
  return (
    
    <div className="ItemListContainer" >
      <h2>{greeting}</h2>
      <div className="d-flex justify-content-between">
        <ItemCard product={products()[0]}/>
        <ItemCard product={products()[1]}/>
        <ItemCard product={products()[2]}/>
        <ItemCard product={products()[3]}/>
        <ItemCard product={products()[4]}/>
      </div>
    </div>
  )
}

export default ItemListContainer;