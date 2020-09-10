import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import {Container} from 'react-bootstrap';


function App() {
  return ( 
      <div>
        <div className="Yellow">
          <Navbar/>
        </div>

        <div className="Yellow">
            <br/>
            <Intro/>
            <div className="Blank Yellow"/>
        </div>
        
        <div className=" Brown">
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
      </div>

  );
}

export default App;
