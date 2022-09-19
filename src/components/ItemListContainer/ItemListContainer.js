import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting ="Productos", category="", max, exclude, justify}) {
  
  return (
    
    <div className="ItemListContainer" >
      <h2>{greeting}</h2>
      <ItemList category={category} max={max} exclude={exclude} justify={justify}/>
    </div>
  )
}

export default ItemListContainer;