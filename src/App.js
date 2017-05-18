import React, { Component } from 'react';
import './css/App.css';
import Navigation from './Navigation'
import LogInModal from './LogInModal'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <LogInModal/>

      </div>
    );
  }
}

export default App;
