import { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NextLink from "next/link";
import { Box, Button, CardActionArea, CardMedia, Container, Divider, Link, Paper } from "@mui/material";
import { ItemCounter } from "../../../../components/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartEmpty } from "../detail/CartEmpty";
import { removeProductToCart } from "../../../../redux/slices/cart";

interface Props {
    editable: boolean;
}

export const CartList: FC<Props> = ({ editable }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch()

    const handleRemoveProduct = (id: number) => {
        dispatch(removeProductToCart(id))
    }

    return (
        <>
            {
                stateCart.listProducts.length > 0 ?

                    stateCart.listProducts.map((item, pos) => (
                       
                            <Container fixed  key={item.product.id}>
                            <Grid container spacing={2} sx={{ mb: 1 }} >
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={3}>
                                    <NextLink href={"/product/slug"} passHref>
                                        <Link>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={item.product.images[0]}
                                                    alt={item.product.title}
                                                    className="fadeIn"
                                                    sx={{ borderRadius: "5px" }}
                                                />
                                            </CardActionArea>
                                        </Link>
                                    </NextLink>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography variant="body1" >
                                            {item.product.title}
                                        </Typography>


                                        {editable ? (
                                            <ItemCounter
                                                setCant={() => {
                                                    /* TODO */
                                                }}
                                                currentValue={item.quantity}
                                            />
                                        ) : (
                                            <Typography>No se puede editar</Typography>
                                        )}
                                    </Box>
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                    display={"flex"}
                                    flexDirection={"column"}
                                    alignItems={"center"}>
                                    <Typography
                                        variant="h4"
                                    >{`$${item.product.price}`}</Typography>

                                    { }
                                    <Button variant="text" color="secondary" onClick={()=> handleRemoveProduct(item.product.id)}>
                                        Remover
                                    </Button>
                                </Grid>
                            </Grid>

                            </Container>
                           
                       
                    )) :
                    <CartEmpty />

            }
        </>
    );
};
