import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting ="Productos" }) {
  const category = useParams().id
  return (
    
    <div className="ItemListContainer" >
      <h2>{greeting}</h2>
      <ItemList category={category}/>
    </div>
  )
}

export default ItemListContainer;