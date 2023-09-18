import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProdictIds: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartProductIds = [action.payload, ...state.cartProdictIds]
        },
        removeFromCart: (state, action) => {
            const indexOfId = state.cartProductIds.indexOf(action.payload)
            state.cartProdictIds.splice(indexOfId, 1)
        },
        clearAllItems: (state) => {
            state.cartProdictIds = []
        }
    }
})

export default cartSlice;