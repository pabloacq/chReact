import React,{ useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import itemsData from '../../products.js'
import {getProductsByCategory, getAllProducts} from '../../services/DB'

// function getProductos(category){
//   return new Promise((resolve) => {
//     // setTimeout(() => resolve(itemsData), 2000)
//     setTimeout(() => resolve(
//       category ? itemsData.filter(item => item.category === category ) : itemsData
//     ), 2000)
//   });
// }


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