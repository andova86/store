import { IProductCart } from "./../../modules/cart/domain/productCart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialCart {
    listProducts: IProductCart[];
}
const initialState: IInitialCart = {
    listProducts: [],
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        resetStateCart: () => initialState,

        cart_listProductsSet: (state, action) => {
            state.listProducts = action.payload;
        },

        addProductToCart: (state, action: PayloadAction<IProductCart>) => {
            const productInCart = state.listProducts.filter(
                (item) => item.product.id === action.payload.product.id
            );

            console.log("productInCart");
            console.log(productInCart);

            if (productInCart.length > 0) {
                console.log("entro");

                const updateListProduct = state.listProducts.map((item) => {
                    if (item.product.id !== action.payload.product.id) return item;

                    console.log("entro");

                    item.quantity += action.payload.quantity;
                    return item;
                });

                state.listProducts = updateListProduct;
            } else {
                let listNew = state.listProducts;
                listNew.push(action.payload);
                state.listProducts = listNew;
            }

            //console.log(action.payload);
        },

        updateProductToCart: (state, action: PayloadAction<IProductCart>) => {},

        removeProductToCart: (state, action: PayloadAction<number>) => {
            const newList  = state.listProducts.filter(item => item.product.id !== action.payload)
            state.listProducts = newList
        },
    },
});

// Action creators are generated for each case reducer function
export const { resetStateCart, cart_listProductsSet, addProductToCart, updateProductToCart,removeProductToCart } =
    themeSlice.actions;

export default themeSlice.reducer;
