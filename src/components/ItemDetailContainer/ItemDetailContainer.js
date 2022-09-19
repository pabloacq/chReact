import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProductById} from '../../services/DB'



function ItemDetailContainer({id, updateProduct= (p) =>{}}) {
  const [product,setProduct]=useState()

  useEffect(() =>{
    getProductById(id).then((response) =>{
      setProduct(response)
      updateProduct(response)
    });
  },[id]);

  return !product ? "":  (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer