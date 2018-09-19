import React, { Component } from 'react';
import './App.css';
import ItemsBoard from './ItemsBoard'
import CartBoard from './CartBoard';
import { items } from './static-data'
import { connect } from 'react-redux'
import { toggleActiveTab } from './action'

class App extends Component {
  renderBoard = (activeTab) => (
    (activeTab === 'items') ?
    <ItemsBoard items={items}/> :
    <CartBoard items={items}/> 
  )

  render() {
    const { toggleActiveTab, activeTab } = this.props
    return (
      <div className="App">
        <div className='nav'>
          <span 
            className={`${activeTab === 'items' && 'selected'}`}
            onClick={()=> toggleActiveTab('items')}>
            Items
          </span>
          <span 
            className={`${activeTab === 'cart' && 'selected'}`}
            onClick={()=> toggleActiveTab('cart')}>
            Cart
          </span>
        </div>
        <hr />
        <div className='board'>
          {this.renderBoard(activeTab)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ activeTab }) => ({ activeTab }) 
const mapDispatchToProps = (dispatch) => ({
  toggleActiveTab: (activeTab) => dispatch(toggleActiveTab(activeTab))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
