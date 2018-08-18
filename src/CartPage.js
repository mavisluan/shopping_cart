import React from 'react'
import Item from './Item'

const CartPage = ({items, onAddToCart, onRemoveFromCart, totalCost}) => (
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
        <div className='cart-status'>
        {items.length === 0 ? 
            <div className='empty-message'>
                Your cart is empty. 
                <br/>
                Why not add some product to it?
            </div> 
            : 
            <div className='total-cost'>
            Total: ${totalCost}
            </div>
        }
        </div>    
    </div>
)

export default CartPage