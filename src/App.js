import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Intro from './Components/Intro';

function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>

  );
}

export default App;
