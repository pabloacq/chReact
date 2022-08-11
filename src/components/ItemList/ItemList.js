import React,{ useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import itemsData from '../../products.js'

function getProductos(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000)
  });
}


function ItemList() {

  const [products,setProducts]=useState([])

  useEffect(() =>{
    getProductos().then((response) =>{
      setProducts(response)
    });
  },[]);

  return (
  <div className="d-flex justify-content-between">
      {products.map((producto, i) =>{
        return <ItemCard key={i} product={producto}/>
      })}
  </div>
  )
}

export default ItemList