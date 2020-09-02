import React from 'react';
import logo from './logo.svg';

import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import {Container, Row, Col} from 'react-bootstrap';
function App() {
  return ( 
      <Container fluid>
        
        <Navbar/>
        <Intro/>
        <Portfolio/>
        <Contact/>

      </Container>

  );
}

export default App;
