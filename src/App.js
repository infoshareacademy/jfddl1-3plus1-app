import React, { Component } from 'react';
import './App.css';

import Popup from './Popup'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>wyszukiwarka</h1>
          <h1>najpopularniejsze marki</h1>
          <h1>twoje ulubione marki</h1>
          <Popup/>
      </div>
    );
  }
}

export default App;
