import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap-v5';

function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>
      <CardGroup style={{margin: '2rem'}}>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://placekitten.com/200/150" alt="Card image" />
      <Card.Body>
        <Card.Title>Meowroni</Card.Title>
        <Card.Text>
          Cat pizza.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/200/150" alt="Card image" />
      <Card.Body>
        <Card.Title>Purrers</Card.Title>
        <Card.Text>
        More cat pizza.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/200/150" alt="Card image" />
      <Card.Body>
        <Card.Title>Cattew</Card.Title>
        <Card.Text>
          Even More cat pizza.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
      </Card>
      </CardGroup>
    </section>
  );
}

export default Menu;
