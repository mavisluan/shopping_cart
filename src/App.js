import React, { Component } from 'react';
import { items } from './static-data'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <span>Items</span>  
          <span>Cart</span>
        </div>
        <div className='board'>
          ItemsPage
          CartPage
        </div>
      </div>
    );
  }
}

export default App;
