import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProducts: [],
 
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        resetStateCart: () => initialState,

        cart_listProductsSet: (state, action) => {
            state.listProducts = action.payload
        },

      
       
    },
})

// Action creators are generated for each case reducer function
export const { resetStateCart, cart_listProductsSet} = themeSlice.actions

export default themeSlice.reducer