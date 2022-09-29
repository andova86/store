import { intanceAxios } from "../config";

export async function getAllCategories() {

    const res = await intanceAxios.get('products/categories')
    const data = await res.data;

     
if (!data) {
    return {
        notFound: true,
    }
} else {
    return {
        data: data
    }
}

}