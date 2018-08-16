import React from 'react'
import Item from './Item'

const ItemsPage = ({items}) => (
    <div className='items'>
        {items.map(item => (
            <div key={item.id}>
                <Item item={item}>
                    <button>Add to Cart</button>
                </Item>
            </div>
         ))}
    </div>
)

export default ItemsPage