import React from 'react'
import SuccessComponent from '../../components/OrderSuccess/OrderSuccess'
import { useParams, Link } from 'react-router-dom'

function Success() {
  const orderId = (useParams().id)
  return (
    <div className="container">
      <div className="align-items-center">
        <div className="bg-white p-3 border border-secondary d-flex flex-column align-items-center">
          <SuccessComponent orderId={orderId} />
          <Link to="/">Seguir comprando</Link>
        </div>
      </div>
    </div>
  )
}

export default Success