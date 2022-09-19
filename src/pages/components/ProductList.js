import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

function ProductList() {
  const category = useParams().id
  return (
    <div className="container">
        <div className=" bg-white p-3 border border-secondary">
          <ItemListContainer category={category} />
        </div>
    </div>
  )
}

export default ProductList