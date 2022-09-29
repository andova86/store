import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenMenu: false,
 
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        resetStateTheme: () => initialState,

        isOpenMenuSet: (state, action) => {
            state.isOpenMenu = action.payload
        },

      
       
    },
})

// Action creators are generated for each case reducer function
export const { resetStateTheme, isOpenMenuSet} = themeSlice.actions

export default themeSlice.reducer