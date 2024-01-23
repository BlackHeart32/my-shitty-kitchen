import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap-v5';

function HeroSection() {
  return (
    <div className='hero'>
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4">My Shitty Kitchen: Shittiest Food in Town</h1>
          <Button variant="danger">Order Now</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default HeroSection;