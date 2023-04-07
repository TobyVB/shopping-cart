import { Card, Button, Form, Row, Col } from "react-bootstrap";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}
