import React, { Component } from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'

class App extends Component {
  
  render() {
    let randomNum = Math.floor(Math.random() * 8) + 1;
    return (
      <div className="App">
        <HelloWorld />
        <Bomb />
        <RouletteGun bulletInChamber={randomNum} />
      </div>
    );
  }
}

export default App;
