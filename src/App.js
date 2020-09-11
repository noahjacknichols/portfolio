import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import Skills from './Components/Skills';


function App() {
  return ( 
      <div>

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
