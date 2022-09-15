import React from 'react'
import Banner from '../../components/Banner/Banner'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Index() {
  return (
    <div>
      <Banner></Banner>
      <ItemListContainer greeting="Ofertas" />
    </div>
  )
}

export default Index