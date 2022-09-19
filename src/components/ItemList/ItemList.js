import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import { getProductsByCategory, getAllProducts } from '../../services/DB'
import { default as Spinner } from '../Spinner/Spinner'
import {Link} from 'react-router-dom'


function ItemList({ category, max, exclude, justify }) {

  const [products, setProducts] = useState()

  useEffect(() => {
    const queryFunction = category ? getProductsByCategory : getAllProducts
    queryFunction(category).then((response) => {
      exclude ? response.splice(response.indexOf(response.find((item) => item.id == exclude)), 1) : void(0)
      max ? response = response.slice(0, max) : void(0)
      setProducts(response)
    });
  }, [category, exclude]);


  return (
    products ?
      <div className={`d-flex flex-wrap ${justify || "justify-content-center"} `}>
        {products.map((producto, i) => {
         
          return <Link key={i} to={`/products/detail/${producto.id}`} className="d-flex-shrink-1 m-2">
                  <ItemCard product={producto} />
                 </Link>
        })}
      </div>
      :
      <Spinner />
  )
}

export default ItemList