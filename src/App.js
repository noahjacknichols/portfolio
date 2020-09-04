import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import {Container} from 'react-bootstrap';
function App() {
  return ( 
      <Container className="Container" fluid>
        
        <Navbar/>
        <br/>
        <Intro/>
        <Portfolio/>
        <Contact/>

      </Container>

  );
}

export default App;
