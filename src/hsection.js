import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap-v5';

function HeroSection() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4">Feel the Pain: Shittiest Pizzas in Town</h1>
          <Button variant="danger">Order Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;