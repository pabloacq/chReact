import React,{ useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import itemsData from '../../products.js'

function getProductos(category){
  return new Promise((resolve) => {
    // setTimeout(() => resolve(itemsData), 2000)
    setTimeout(() => resolve(
      category ? itemsData.filter(item => item.category === category ) : itemsData
    ), 2000)
  });
}


function ItemList({category}) {

  console.log(category)

  const [products,setProducts]=useState([])

  useEffect(() =>{
    getProductos(category).then((response) =>{
      console.log(`Searching for category ${category}`)
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