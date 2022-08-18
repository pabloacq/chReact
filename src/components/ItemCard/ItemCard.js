import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './ItemCard.css'

function ItemCard({product}) {
  return (
    <Card style={{ width: '18%' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className="h-50">{product.name}</Card.Title>
        <Link to={`/detail/${product.id}`}> Ver mas</Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;