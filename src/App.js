import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';
import {Container, Row, Col} from 'react-bootstrap';
function App() {
  return ( 
      <div>
        <Navbar/>
        <Intro/>
      </div>

  );
}

export default App;
