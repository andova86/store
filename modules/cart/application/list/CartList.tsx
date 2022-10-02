import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartEmpty } from "../detail/CartEmpty";
import { CartItem } from "../item/CartItem";

interface Props {
    editable: boolean;
}

export const CartList: FC<Props> = ({ editable }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            {stateCart.listProducts.length > 0 ? (
                stateCart.listProducts.map((item, pos) => (
                    <CartItem item={item} editable={editable} key={pos} />
                ))
            ) : (
                <CartEmpty />
            )}
        </>
    );
};
