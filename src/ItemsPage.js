import React from 'react'

const ItemsPage = ({items}) => (
    <div>
        {items.map(item => (
            <div>{item.name}</div>
        ))}
    </div>
)

export default ItemsPage