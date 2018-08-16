import React from 'react'

const Item = ({item: {src, name, description, price}, children}) => (
    <div className='item'>
        <img className='item-image' src={src} width='80px' height='80px' alt={name}/>
        <div className='item-info'>
            <span>{name}</span>
            <span>{description}</span>
        </div>
        <div className='item-price'>
            <span>${price}</span>
            <div>{children}</div>
        </div>
    </div>
)

export default Item 
