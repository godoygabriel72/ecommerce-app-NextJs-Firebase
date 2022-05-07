import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload
            state.items.push(newProduct)
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            state.items = state.items.filter( item => item.id !== id)
        }
    }
})

const cartReducer = cartSlice.reducer
export default cartReducer