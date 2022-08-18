import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';



function ItemDetail({ product }) {
  const [count, setCount] = useState(0)

  function onAdd(count) {
    setCount(count)
  }


  const { img, name, description } = product || {}
  return (
    <Card style={{ width: '18%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="h-50">{name}</Card.Title>
      </Card.Body>
      <Card.Text>{description}</Card.Text>
      {count === 0 ?
        <ItemCount product={product} onAdd={onAdd} /> 
        :
        <Link to="/cart">Ir al carrito</Link>
      }

    </Card>
  );
}

export default ItemDetail