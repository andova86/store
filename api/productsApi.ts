//ENDPOINT PARA OBTENER EL LISTADO DE PRODUCTOS

import { intanceAxios } from "../config";

export async function getAllProducts() {
    const res = await intanceAxios.get("products");
    const data = await res.data;

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

export async function getProductById(id: number) {
    const res = await intanceAxios.get(`products/${id}`);

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

export async function getAllProductsByCategory(category: string) {
    const res = await intanceAxios.get(`products/category/${category}`);

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
