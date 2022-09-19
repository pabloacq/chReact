import React from 'react'
import Banner from '../../components/Banner/Banner'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Index() {
  return (
    <div className="mt-n5 w-100">
      <Banner></Banner>
      <div className="pt-5 mx-5">
        <ItemListContainer greeting="Productos destacados" />
      </div>
    </div>
  )
}

export default Index