import React, { Component } from 'react';
import './App.css';



import Popup from './Popup'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Popup/>
        <Navigation/>
      </div>
    );
  }
}

export default App;
