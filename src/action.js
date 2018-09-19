export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const TOGGLE_ACTIVETAB = 'TOGGLE_ACTIVETAB'

export const addToCart = ( id ) => ({
    type: ADD_TO_CART,
    id
})

export const removeFromCart = ( id ) => ({
    type: REMOVE_FROM_CART,
    id
})

export const toggleActiveTab = ( activeTab ) => ({
    type: TOGGLE_ACTIVETAB,
    activeTab
})