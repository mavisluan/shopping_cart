import React from 'react'
import Item from './Item'
import TotalCost from './TotalCost'

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
        <div>
            <TotalCost items={items} />
        </div>
    </div>
)

export default CartPage