import React from 'react'

const Item = ({ item: { src, name, description, price}, children }) => (
    <div className='item'>
        <img className='item-image' src={src} width='60px' height='60px' alt={name}/>
        <div className='description'>
            <div>{name}</div>
            <div>{description}</div>
        </div>
        <div className='price'>
            <div>${price}</div>
            <div>{children}</div>
        </div>
    </div>
)

export default Item