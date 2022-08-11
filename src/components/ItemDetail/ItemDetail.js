import React from 'react'
import Card from 'react-bootstrap/Card';


function ItemDetail({product}) {
  const{img,name, description} = product || {}
  return (
    
    <Card style={{ width: '18%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="h-50">{name}</Card.Title>
      </Card.Body>
      <Card.Text>{description}</Card.Text>
    </Card>
  );
}

export default ItemDetail