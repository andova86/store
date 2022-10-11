import { ICheckoutProductAsere } from './../../modules/checkout/domain/checkout';
import { createSlice } from '@reduxjs/toolkit'

export interface ICheckoutAllData {
    firstName: string,
    lastName: string,
    address: string,
    address2: string,
    zip: string,
    city: string,
    country: string,
    phone: string,
    checkoutData: ICheckoutProductAsere  | null
} 

const initialState:ICheckoutAllData = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    zip: '',
    city: '',
    country: '',
    phone: '',
    checkoutData: null
}

export const themeSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {

        resetStateCheckout: () => initialState,

        checkout_firstNameSet: (state, action) => {
            state.firstName = action.payload
        },

        checkout_lastNameSet: (state, action) => {
            state.lastName = action.payload
        },

        checkout_addressSet: (state, action) => {
            state.address = action.payload
        },

        checkout_address2Set: (state, action) => {
            state.address2 = action.payload
        },

        checkout_zipSet: (state, action) => {
            state.zip = action.payload
        },

        checkout_citySet: (state, action) => {
            state.city = action.payload
        },

        checkout_countrySet: (state, action) => {
            state.country = action.payload
        },

        checkout_phoneSet: (state, action) => {
            state.phone = action.payload
        },

        checkout_dataSet: (state, action) => {
            state.checkoutData = action.payload
        },




    },
})

// Action creators are generated for each case reducer function
export const { resetStateCheckout, checkout_firstNameSet, checkout_lastNameSet ,checkout_addressSet,
    checkout_address2Set, checkout_zipSet, checkout_citySet, checkout_countrySet, checkout_phoneSet,checkout_dataSet
} = themeSlice.actions

export default themeSlice.reducer