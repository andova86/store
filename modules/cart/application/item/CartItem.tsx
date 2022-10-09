import { Box, Button, CardActionArea, CardMedia, Container, Divider, Grid, Link, Typography } from '@mui/material'
import { FC } from 'react'
import { IProductPlatzi } from '../../../products/domain/productPlatzi'
import NextLink from "next/link";
import { IProductCart } from '../../domain/productCart';
import { ItemCounter } from '../../../../components/ui';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductToCart, updateCantProductToCart } from '../../../../redux/slices/cart';
import { RootState } from '../../../../redux/store';


interface Props {
    item: IProductCart,
    editable: boolean;
}
export const CartItem: FC<Props> = ({ item, editable }) => {

    const stateCart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch()

    const handleRemoveProduct = (id: number) => {
        dispatch(removeProductToCart(id))
    }

    const handleUpdateCantProductToCart = (id: number, cant: number) => {
        dispatch(updateCantProductToCart({ id: id, quantity: cant }))

    }

    return (
        <Container fixed key={item.product.id}>
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
                                    image={item.product.product_item.product.product_image}
                                    alt={item.product.product_item.product.full_name}
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
                            {item.product.product_item.product.full_name}
                        </Typography>
                        {editable ? (
                            <ItemCounter
                                setCant={(value: number) => {
                                    console.log(value);

                                    handleUpdateCantProductToCart(item.product.id, value)
                                }}
                                currentValue={item.quantity}
                            />
                        ) : ""}
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
                    >{`${item.product.human_readable_current_price}`}</Typography>

                    { }
                    <Button variant="text" color="secondary" onClick={() => handleRemoveProduct(item.product.id)}>
                        Remover
                    </Button>
                </Grid>
            </Grid>

        </Container>
    )
}
