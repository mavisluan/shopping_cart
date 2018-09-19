import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { addToCart } from './action'
import PropTypes from 'prop-types'

const ItemsBoard = ({addToCart, items}) => (
    <div className='items-board'>
        {items.map(item => (
            <Item key={item.id} item={item}>
                <button onClick={()=> addToCart(item.id)}>Add to Cart</button>
            </Item>
        ))}
    </div>
)

const mapStateToProps = ( state ) => ({ state })
const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id))
})

ItemsBoard.propTypes = {
    items: PropTypes.array,
    addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBoard)

