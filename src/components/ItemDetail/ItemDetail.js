import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { cartContext } from '../../store/CartContext';


function ItemDetail({ product }) {
  const {addToCart, cart} = useContext(cartContext)

  function handleAdd(quantity) {
    addToCart(product, quantity)
  }


  const { img, name, description } = product || {}
  return (
    <Card style={{ width: '18%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="h-50">{name}</Card.Title>
      </Card.Body>
      <Card.Text>{description}</Card.Text>
      <ItemCount product={product} onAdd={handleAdd} /> 
    </Card>
  );
}

export default ItemDetail