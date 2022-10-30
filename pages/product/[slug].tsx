import { Box, Grid, Typography, Button, Snackbar, IconButton, Alert, Paper } from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import { getProductById } from "../../api/productsApi";
import { ShopLayout } from "../../components/layouts";
import { ItemCounter } from "../../components/ui";
import { GetServerSideProps } from "next";
import { AddShoppingCart, Close } from "@mui/icons-material";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, cartDataSet } from "../../redux/slices/cart";
import { IProductAsere } from "../../modules/products/domain/product";
import Image from "next/image";
import { postAddProductToCart } from "../../api/cartApi";
import { toast } from "react-toastify";

interface Props {
    product: IProductAsere;
    toggleTheme: () => void;
}

const ProductPage: FC<Props> = ({ product, toggleTheme }) => {
    const [cantP, setcantP] = useState(1);
    const [open, setOpen] = useState(false);

    const state = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleAddProductToStore = async () => {
        try {
            const result = await postAddProductToCart(
                { id: product.id, quantity: cantP },
                state.access_token
            );
            console.log(result);
            dispatch(cartDataSet(result.data));

            toast.success("Se agregó el producto al carrito de compras correctamente.");
        } catch (error) {
            toast.error("Ocurrió un error al agregar el producto al carrito de compras.");
        }
    };

    const action = (
        <>
            <IconButton size="small" aria-label="close" color="inherit">
                <Close fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <>
            <ShopLayout
                title={product.product_item.product.name}
                pageDescription={product.product_item.product.description}
                toggleTheme={toggleTheme}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        {/*  <ProductSlideShow images={product.images} /> */}
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "20px",
                            }}>
                            <Image
                                alt={product.product_item.product.name}
                                src={product.product_item.product.product_image}
                                width={400}
                                height={400}
                                objectFit={"contain"}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography variant="h1" component="h1" color={"primary"}>
                                {product.product_item.product.full_name}
                            </Typography>

                            <Typography variant="h2" sx={{ fontWeight: 900 }}>
                                {`$ ${product.current_price}`}
                            </Typography>

                            <Box sx={{ my: 2 }}>
                                <Typography variant="subtitle2">Cantidad</Typography>
                                <ItemCounter
                                    setCant={(value: SetStateAction<number>) => {
                                        setcantP(value);
                                    }}
                                    currentValue={cantP}
                                />
                            </Box>

                            <Box display={"flex"} justifyContent={"start"}>
                                <Button
                                    className="circular-btn"
                                    size="large"
                                    onClick={handleAddProductToStore}
                                    color={"primary"}>
                                    <AddShoppingCart />
                                    Agregar al carrito
                                </Button>
                            </Box>

                            {/* <Chip label='No hay disponibles' color='error' variant='outlined'/>*/}
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="body1" color={'primary'} sx={{mb:2, fontWeight:700}}>Descripción</Typography>
                                <Typography variant="body2">
                                    {product.product_item.product.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ShopLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await getProductById(Number(ctx.query.slug)); // your fetch function here

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: data,
        },
    };
};

export default ProductPage;
