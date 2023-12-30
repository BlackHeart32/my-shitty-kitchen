import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from './logo.png'


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Your Pizza Place Logo"
          height="40"
          className="d-inline-block align-top"
        />        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Button variant="danger">Order Online</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
