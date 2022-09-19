import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Spinner from '../../components/Spinner/Spinner'

function Product() {
  const id = (useParams().id)
  const [product, setProduct] = useState()

  return (
    <div className="container">
        <div className=" bg-white p-3 border border-secondary">
          <ItemDetailContainer id={id} updateProduct={setProduct} />
          {
            product
              ?
              <div className="mt-3">
                <ItemListContainer greeting="Otros productos para tu mascota"
                  category={product ? product.category : ""}
                  max="5"
                  exclude={product ? product.id : ""}
                  justify="justify-content-start"
                />
              </div>
              :
              <Spinner />
          }
        </div>
      </div>
  )
}

export default Product