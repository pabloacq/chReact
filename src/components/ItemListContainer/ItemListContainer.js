import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ greeting }) {
  return (
    
    <div className="ItemListContainer" >
      <h2>{greeting}</h2>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer;