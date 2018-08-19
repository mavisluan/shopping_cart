import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({handleTab, activeTab, totalCount, totalCost } ) => (
    <div>
        <Link to='/'>
            <span 
                onClick={()=> handleTab(0)} 
                className={`${activeTab === 0 && 'selected'}`}>
                Items
            </span>
        </Link>
        <Link to='/cart'>
            <span 
                onClick={()=>handleTab(1)} 
                className={`${activeTab === 1 && 'selected'}`}>
                Cart
            </span>
        </Link>
        <span className='cart-status'>
            <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i> {totalCount} items (${totalCost})
            </Link>
        </span>
    </div>
)

export default Navigation