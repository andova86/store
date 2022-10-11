import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllCartProducts } from "../../../../api/cartApi";
import { RootState } from "../../../../redux/store";
import { ICartProductAsere } from "../../domain/cart";

export const useGetCartListProduct = () => {
    const stateUser = useSelector((state: RootState) => state.user);

    const [list, setList] = useState<ICartProductAsere[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        async function getCartListProducts() {
            setLoading(true)

            try {
                let result = await getAllCartProducts(stateUser.access_token);


                setList(result.data);
                setLoading(false)
            } catch (error) {
                setList([]);
                setError(error)
                setLoading(false)
            }
        }


        getCartListProducts();
    }, []);

    return { list: list, loading: loading, error: error };
};
