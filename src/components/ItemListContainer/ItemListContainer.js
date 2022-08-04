import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer" >
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer;