import React from 'react'


function OrderSuccess({ orderId }) {
  return (
    <div>
      <h2>¡Gracias por tu compra!</h2>
      <p>{`El identificador de tu pedido es ${orderId}`}</p>
    </div>
  )
}

export default OrderSuccess