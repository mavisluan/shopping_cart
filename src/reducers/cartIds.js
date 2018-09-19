import { ADD_TO_CART, REMOVE_FROM_CART } from '../action'

const cartIds = (state = [ ], action ) => {
    const { type, id } = action
    
    switch (type) {
        case ADD_TO_CART:
            return [...state, id]
        case REMOVE_FROM_CART: 
            const index = state.findIndex(item => item === id)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default: 
            return state 
    }
}

export default cartIds

