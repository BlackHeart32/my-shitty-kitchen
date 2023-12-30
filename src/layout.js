import React from 'react';
import { Container } from 'react-bootstrap-v5';
import Header from './header';
import HeroSection from './hsection';
import AboutUs from './about';
import Menu from './menu';
import Contact from './contact';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Defining the layout for the website
function Layout() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HeroSection />
        <AboutUs />
        <Menu />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
