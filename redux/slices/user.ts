import { IProductPlatzi } from './../../modules/products/domain/productPlatzi';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUserPlatzi, ILoginUser } from './../../modules/user/domain/user';
import { createSlice } from '@reduxjs/toolkit'

export interface IUserLogged {
    isLoggedIn: boolean,
    user?: ILoginUser,
    access_token: string,
    refresh_token: string
} 
const initialState : IUserLogged = {
    isLoggedIn: false,
    user: undefined,
    access_token: '',
    refresh_token:''
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        resetStateUser: () => initialState,

        isLoggedInSet: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },

        userAddSet: (state, action : PayloadAction<ILoginUser>) => {
            state.user = action.payload
        },

        userAddAccesToken: (state, action : PayloadAction<string>) => {
            state.access_token = action.payload
        },

        userAddRefreshToken: (state, action : PayloadAction<string>) => {
            state.refresh_token = action.payload
        },

      
       
    },
})

// Action creators are generated for each case reducer function
export const { resetStateUser, isLoggedInSet, userAddSet, userAddAccesToken, userAddRefreshToken} = userSlice.actions

export default userSlice.reducer