import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {getProductById} from '../../services/DB'



function ItemDetailContainer() {
  const [product,setProduct]=useState()
  const id = (useParams().id)
  useEffect(() =>{
    getProductById(id).then((response) =>{
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