import React, { Component } from 'react';
import { items } from './static-data'
import ItemsPage from './ItemsPage'
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
          <ItemsPage items={items}/>
        </div>
      </div>
    );
  }
}

export default App;
