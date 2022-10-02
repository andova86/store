import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slices/theme'
import cartReducer from '../slices/cart'
import checkoutReducer from '../slices/checkout'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import {combineReducers} from "redux";



const reducers = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
  checkout: checkoutReducer,

});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch