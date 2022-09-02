import React from 'react'
import {useParams} from 'react-router-dom'

function OrderSuccess() {
  const orderId = (useParams().id)
  return (
    <div>{`Gracias por tu compra! El identificador de tu pedido es ${orderId}`}</div>
  )
}

export default OrderSuccess