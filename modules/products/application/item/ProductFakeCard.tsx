import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
    Chip,
    Link,
    Skeleton,
    Box,
    CardContent,
    CardActions,
    IconButton,
} from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import NextLink from "next/link";

import styles from "./ProductFake.module.css";
import { IProductAsere } from "../../domain/product";
import { ItemCounter } from "../../../../components/ui";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { postAddProductToCart } from "../../../../api/cartApi";
import { toast } from "react-toastify";
import { cartDataSet } from "../../../../redux/slices/cart";

interface Props {
    product: IProductAsere;
}
export const ProductFakeCard: FC<Props> = ({ product }) => {

    const [isImageLoaded, setisImageLoaded] = useState(false);

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

    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
                <Card className={styles.productFake} elevation={8}>
                    <CardActionArea>
                        
                                {/*  <Chip
                                    color='secondary'
                                    label={product.product_item.product.category.name}
                                    sx={{ position: 'absolute', zIndex: 99, top: '10px', right: '10px' }}
                                    variant={'outlined'}
                                />
 */}
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} display='flex' justifyContent={'end'} sx={{mb:2, mt:1}}>
                                        {
                                            getColorCategory(product.category.name)
                                        }
                                    </Grid> */}

                                    <Grid item xs={12}>
                                        <Box display={"flex"} justifyContent={"end"} sx={{ p: 1 }}>
                                            <Chip
                                                color="secondary"
                                                label={product.product_item.product.category.name}
                                                variant={"outlined"}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        {/*  <Card sx={{height:250, maxHeight:250}} elevation={0}>
                                            
                                        <CardMedia
                                                component="img"

                                                image={product.product_item.product.product_image}
                                                alt={product.product_item.product.name}
                                                 
                                                sx={{
                                                   
                                                   
                                                    
                                                    display: isImageLoaded ? "block" : "none",
                                                }}
                                                onLoad={() => setisImageLoaded(true)}
                                            />
                                        </Card>
                                        */}

                                        <Card sx={{ maxWidth: 345 }} elevation={6}>
                                        <NextLink
                            href={{
                                pathname: "/product/[slug]",
                            }}
                            as={`/product/${product.id}`}
                            passHref>
                            <Link>
                                            <CardMedia
                                                component="img"
                                                height="150"
                                                image={product.product_item.product.product_image}
                                                alt={product.product_item.product.name}
                                                sx={{
                                                    objectPosition: "top",
                                                    objectFit: "contain",
                                                    minHeight: "150",
                                                    maxWidth: "100%",
                                                    display: isImageLoaded ? "block" : "none",
                                                }}
                                                onLoad={() => setisImageLoaded(true)}
                                            />
                                            {isImageLoaded ? (
                                                ""
                                            ) : (
                                                <Box display={"flex"} justifyContent={"center"}>
                                                    <Skeleton
                                                        variant="rectangular"
                                                        width={150}
                                                        height={150}
                                                    />
                                                </Box>
                                            )}

</Link>
                        </NextLink>

                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div">
                                                    {product.product_item.product.full_name}
                                                </Typography>
                                                {/*  <Typography
                                                        variant="body2"
                                                        color="text.secondary">
                                                        {
                                                            product.product_item.product
                                                                .short_description
                                                        }
                                                    </Typography> */}

                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 700,
                                                        my: 2,
                                                    }}>
                                                    {`$${product.current_price}`}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Box>
                                                    {/*  <Box sx={{ my: 2 }}>
                                                            <Typography variant="body1">Cantidad</Typography>
                                                            
                                                        </Box> */}

                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}>
                                                        <ItemCounter
                                                            setCant={(
                                                                value: SetStateAction<number>
                                                            ) => {
                                                                setcantP(value);
                                                            }}
                                                            currentValue={cantP}
                                                        />

                                                        <IconButton
                                                            color="primary"
                                                            aria-label="upload picture"
                                                            component="label"
                                                            onClick={handleAddProductToStore}>
                                                            <AddShoppingCart />
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};
