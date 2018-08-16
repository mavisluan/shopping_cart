import React, { Component } from 'react';
import { items } from './static-data'
import ItemsPage from './ItemsPage'
import CartPage from './CartPage'
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    // to collect ids of the items in the cart
    cart: [],
  }

  handleAddToCart = (id) => {
    this.setState({ cart: [...this.state.cart, id]})
  }

  // count ids in cart, return {id: count, id: count}
  CountCartItems = (cart) => cart.reduce(( itemsCount, id) => {
    itemsCount[id] = itemsCount[id] || 0
    itemsCount[id] ++
    return itemsCount
    }, { })
    

  render() {
    const itemsCount= this.CountCartItems(this.state.cart)
    // find the item by id 
    // add count property to item {id: num, name:'', count: num}
    // put the item object into the cartItems array
    const cartItems = Object.keys(itemsCount).map(id => {
      const cartItem = items.find(item => item.id === parseInt(id, 10))
      return { ...cartItem, count: itemsCount[id]}
    })
    
    return (
      <div className='app'>
        <div className='nav'>
          <span><Link to='/'>Items</Link></span>
          <span><Link to='/cart'>Cart</Link></span> 
        </div>
        <div className='board'>
          <Route exact path='/' render={()=> (
            <ItemsPage 
              items={items} 
              onAddToCart={this.handleAddToCart}/>
          )} />
          <Route path='/cart' render={() => (
             <CartPage 
             items={cartItems}
             onAddToCart={this.handleAddToCart} 
             />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
