import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Popup from './Popup'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <Popup/>

      </div>
    );
  }
}

export default App;
