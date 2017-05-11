import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList'



import Popup from './Popup'
import FavouriteBrands from './FavouriteBrands'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>wyszukiwarka</h1>
          <h1>najpopularniejsze marki</h1>
          <FavouriteBrands/>
          <Popup/>

        <ProductList/>

      </div>
    );
  }
}

export default App;
