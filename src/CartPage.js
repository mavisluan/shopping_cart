import React from 'react'
import Item from './Item'

const CartPage = ({items}) => (
    <div className='items'>
        {items.map(item => (
            <div key={item.id}>
                <Item item={item}>
                    <button>-</button>
                    <span>{item.count}</span>
                    <button>+</button>
                </Item>
            </div>
        ))}
    </div>
)

export default CartPage