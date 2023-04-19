import React from 'react'
import { Card } from "react-bootstrap"
import CardButton from './CardButton'

const ProductCard = ({ product }) => {
  return (
    <Card
      style={{ width: '18rem' }}
      className="m-1">
      <Card.Img
        variant="top"
        src={product.images}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <h4>${product.price}</h4>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <div className="btn-group ">
        <CardButton
          styleBtn={'btn btn-primary'}
          title={'buy now'}
        />
        <CardButton
          styleBtn={'btn btn-success'}
          title={'buy add to card'}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
