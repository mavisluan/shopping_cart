import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from './action'

const CartBoard = ({itemsCount, items, addToCart, removeFromCart}) => {
    const cartItems = Object.keys(itemsCount).map( strNum => {
        let cartId = parseInt(strNum, 10)
        let cartItem = items.find(item => item.id === cartId)
        return { ...cartItem, count: itemsCount[cartId]} 
    })
    
    return (
        <div className='cart-board'>
            {cartItems.map(item => (
                <Item key={item.id} item={item}>
                    <div className='count-control'>
                        <button onClick={() => removeFromCart(item.id)}>-</button>
                        <div>{item.count}</div>
                        <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                </Item>
            ))}
        </div>
    )
} 

const mapStateToProps = ({cartIds}) => {
    const itemsCount = cartIds.reduce((itemsCount, id) => {
        itemsCount[id] = itemsCount[id] || 0
        itemsCount[id] ++
        return itemsCount
    }, {})
    return ({ itemsCount })
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartBoard)