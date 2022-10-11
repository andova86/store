import {
    Box,
    Button,
    CardActionArea,
    CardMedia,
    Container,
    Divider,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import { ItemCounter } from "../../../../components/ui";
import { useDispatch, useSelector } from "react-redux";
import { cartDataSet, updateCantProductToCart } from "../../../../redux/slices/cart";
import { RootState } from "../../../../redux/store";
import { IOrderCartitem } from "../../domain/cart";
import { deleteRemoveProductToCart, postAddSkuItemToProductCart } from "../../../../api/cartApi";
import { toast } from "react-toastify";

interface Props {
    item: IOrderCartitem;
    editable: boolean;
}
export const CartItem: FC<Props> = ({ item, editable }) => {
    const state = useSelector((state: RootState) => state.user);
    const stateCart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveProduct = async (id: number) => {
        try {
            const result = await deleteRemoveProductToCart(id, state.access_token);
            console.log('deleteRemoveProductToCart');
            console.log(result);
            dispatch(cartDataSet(result.data))


            toast.success("Se eliminó el producto del carrito de compras correctamente.");
        } catch (error) {
            toast.error("Ocurrió un error al eliminar el producto del carrito de compras.");
        }
    };

    const handleUpdateCantProductToCart = async(id: number, cant: number) => {
       
        try {
             
           let result = await postAddSkuItemToProductCart({id: id, quantity: cant},state.access_token)
           console.log('postAddSkuItemToProductCart');
           console.log(result.data);
           dispatch(cartDataSet(result.data))

        } catch (error) {
            toast.error("Ocurrió al agregar la cantidad del producto seleccionado.");
        }
    };

    return (
        <Container fixed key={item.id}>
            <Grid container spacing={2} sx={{ mb: 1 }}>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={3}>
                    <NextLink href={"/product/slug"} passHref>
                        <Link>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={item.item_image}
                                    alt={item.item_name}
                                    className="fadeIn"
                                    sx={{ borderRadius: "5px" }}
                                    onError={(error) => console.log(error)}
                                />
                            </CardActionArea>
                        </Link>
                    </NextLink>
                </Grid>

                <Grid item xs={6}>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Typography variant="body1">{item.item_name}</Typography>
                        {editable ? (
                            <ItemCounter
                                setCant={(value: number) => {
                                    console.log(value);

                                    handleUpdateCantProductToCart(item.sku, value);
                                }}
                                currentValue={item.quantity}
                            />
                        ) : (
                            ""
                        )}
                    </Box>
                </Grid>

                <Grid item xs={3} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Typography variant="h5">{item.human_readable_total_amount} </Typography>

                    {}
                    <Button
                        variant="text"
                        color="error"
                        onClick={() => handleRemoveProduct(item.sku)}>
                        Remover
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};
