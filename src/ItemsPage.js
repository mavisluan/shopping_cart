import React from 'react'
import Item from './Item'

const ItemsPage = ({items, onAddToCart}) => (
    <div className='items'>
        {items.map(item => (
            <div key={item.id}>
                <Item item={item}>
                    <button onClick={() => onAddToCart(item.id)}>Add to Cart</button>
                </Item>
            </div>
         ))}
    </div>
)

export default ItemsPage