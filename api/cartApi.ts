import { intanceAxiosApiKey } from './../config/index';
import { IProductUpdateCant } from './../modules/cart/domain/productCart';
import { intanceAxios } from "../config";
import { IPayInvoice } from '../modules/checkout/domain/checkout';

export async function postAddProductToCart(dataProductAddCart: IProductUpdateCant, token: string) {
    const res = await intanceAxiosApiKey(token).post(`ordering/cart-products/${dataProductAddCart.id}/add_to_cart/`, dataProductAddCart);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function deleteRemoveProductToCart(id: number, token: string) {
    const res = await intanceAxiosApiKey(token).delete(`ordering/cart-products/${id}/remove_from_cart/`);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}
 

export async function getAllCartProducts(access_token: string) {

    const res = await intanceAxiosApiKey(access_token).get(`ordering/cart-orders/`);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function postAddSkuItemToProductCart(dataProductAddCart: IProductUpdateCant, token: string) {
    const res = await intanceAxiosApiKey(token).post(`ordering/cart-products/${dataProductAddCart.id}/set_sku_item_in_cart/`, dataProductAddCart);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}


export async function postCheckout(id: number, token: string) {
    const res = await intanceAxiosApiKey(token).post(`ordering/cart-orders/${id}/checkout/`);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function postPayInvoice(dataPay : IPayInvoice,  token: string) {
    const res = await intanceAxiosApiKey(token).post(`ordering/cart-orders/${dataPay.id}/pay_invoice/`, dataPay);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}