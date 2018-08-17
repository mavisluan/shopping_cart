import React from 'react'
import Item from './Item'

const CartPage = ({items, onAddToCart, onRemoveFromCart}) => (
    <div className='cart'>
        {items.map(item => (
            <div key={item.id}>
                <Item item={item}>
                    <div className='cart-button'>
                        <button onClick={()=> onRemoveFromCart(item.id)}><i className="fas fa-minus"></i></button>
                        <span>{item.count}</span>
                        <button onClick={()=> onAddToCart(item.id)}><i className="fas fa-plus"></i></button>
                    </div>
                </Item>
            </div>
        ))}
    </div>
)

export default CartPage