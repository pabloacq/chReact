import React,{ useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import {getProductsByCategory, getAllProducts} from '../../services/DB'


function ItemList({category}) {

  const [products,setProducts]=useState([])

  useEffect(() =>{
    const queryFunction = category ? getProductsByCategory : getAllProducts
    queryFunction(category).then((response) =>{
      setProducts(response)
    });
  },[category]);

  return (
  <div className="d-flex justify-content-between">
      {products.map((producto, i) =>{
        return <ItemCard key={i} product={producto}/>
      })}
  </div>
  )
}

export default ItemList