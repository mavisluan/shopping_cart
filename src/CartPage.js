import React from 'react'
import Item from './Item'

const CartPage = ({items}) => (
    <div className='cart'>
        {items.map(item => (
            <div key={item.id}>
                <Item item={item}>
                    <div className='cart-button'>
                        <button><i class="fas fa-minus"></i></button>
                        <span>{item.count}</span>
                        <button><i className="fas fa-plus"></i></button>
                    </div>
                </Item>
            </div>
        ))}
    </div>
)

export default CartPage