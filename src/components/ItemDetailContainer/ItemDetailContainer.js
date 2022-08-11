import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import itemsData from '../../products.js'


function getProducto(id){
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData.find(item => item.id === id)), 2000)
  });
}

function ItemDetailContainer({id}) {
  const [product,setProduct]=useState()

  useEffect(() =>{
    getProducto(id).then((response) =>{
      setProduct(response)
    });
  },[]);


  return !product ? "":  (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer