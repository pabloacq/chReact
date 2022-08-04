import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

function ItemCard({product}) {
  console.log(product)
  return (
    
    <Card style={{ width: '18%' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className="h-50">{product.name}</Card.Title>
        <ItemCount product={product} />
      </Card.Body>
    </Card>
  );
}

export default ItemCard;