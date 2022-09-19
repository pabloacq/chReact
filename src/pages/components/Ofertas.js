import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

function Ofertas() {
  return (
    <div className="container">
        <div className=" bg-white p-3 border border-secondary">
          <ItemListContainer greeting="Ofertas" />
        </div>
    </div>
  )
}

export default Ofertas