import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import itemsData from '../../products.js'
import {useParams} from 'react-router-dom'

function getProducto(id){
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData.find(item => item.id === id)), 2000)
  });
}

function ItemDetailContainer() {
  const [product,setProduct]=useState()
  const id = Number.parseInt((useParams().id))
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