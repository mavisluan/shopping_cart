import React from 'react'

const TotalCost = ({ items }) => {
    let total = items.reduce((total, item) => ( total += item.price * item.count), 0)

    return (
        total === 0 ?
        <div className='empty-message'>
            Your cart is empty. 
            <br/>
            Why not add some producst to it?
        </div> :
        <div className='total-cost'>Total: ${total}</div>
    )
}

export default TotalCost