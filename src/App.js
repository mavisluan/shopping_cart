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
    activeTab: 0
  }

  handleTab = (index) => this.setState({ activeTab: index})
  handleAddToCart = (id) => {
    this.setState({ cart: [...this.state.cart, id]})
  }

  handleRemoveFromCart = (id) => {
    const { cart } = this.state
    const index = cart.indexOf(id)
    this.setState({
      cart: [ ...cart.slice(0, index), ...cart.slice(index + 1)]
    })
  }

  // count ids in cart, return {id: count, id: count}
  countCartItems = (cart) => cart.reduce(( itemsCount, id) => {
    itemsCount[id] = itemsCount[id] || 0
    itemsCount[id] ++
    return itemsCount
    }, { })
  

  render() {

    const itemsCount= this.countCartItems(this.state.cart)
    // find the item by id 
    // add count property to item {id: num, name:'', count: num}
    // put the item object into the cartItems array
    const cartItems = Object.keys(itemsCount).map(id => {
      const cartItem = items.find(item => item.id === parseInt(id, 10))
      return { ...cartItem, count: itemsCount[id]}
    })

    //totalCount 
    const totalCount = cartItems.reduce((total, item) => (
      total += item.count
    ), 0)
    
    //totalCost
    const totalCost =  cartItems.reduce((total, item) => (
      total += item.price * item.count
    ), 0)

    return (
      <div className='app'>
        <div className='nav'>
          <Link to='/'><span className={`${this.state.activeTab === 0 && 'selected'}`}>Items</span></Link>
          <Link to='/cart'><span onClick={()=>this.handleTab(1)} className={`${this.state.activeTab === 1 && 'selected'}`}>Cart</span></Link>
          <span className='cart-status'>
            <Link to='/cart'>
              <i className="fas fa-shopping-cart"></i> {totalCount} items (${totalCost})
            </Link>
          </span>
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
             onRemoveFromCart={this.handleRemoveFromCart}
             totalCost={totalCost}
             />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
