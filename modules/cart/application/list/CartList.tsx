import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { IOrderCartitem } from "../../domain/cart";
import { CartEmpty } from "../detail/CartEmpty";
import { CartItem } from "../item/CartItem";

interface Props {
    listOrdersItems: IOrderCartitem[];
    editable: boolean;
}

export const CartList: FC<Props> = ({ editable, listOrdersItems }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            {listOrdersItems ? (
                listOrdersItems.length > 0 ? (
                    listOrdersItems.map((item, pos) => (
                        <CartItem item={item} editable={editable} key={pos} />
                    ))
                ) : (
                    <CartEmpty />
                )
            ) : (
                ""
            )}
        </>
    );
};
