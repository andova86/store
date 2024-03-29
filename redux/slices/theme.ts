import { createSlice } from '@reduxjs/toolkit'


export interface ITheme {
    isOpenMenu: boolean,
    isDark: boolean
}


const initialState : ITheme = {
    isOpenMenu: false,
    isDark: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        resetStateTheme: () => initialState,

        isOpenMenuSet: (state, action) => {
            state.isOpenMenu = action.payload
        },

        isDarkSet: (state, action) => {
            state.isDark = action.payload
        },

      
       
    },
})

// Action creators are generated for each case reducer function
export const { resetStateTheme, isOpenMenuSet, isDarkSet} = themeSlice.actions

export default themeSlice.reducer