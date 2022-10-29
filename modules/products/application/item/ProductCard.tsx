import { FC, SetStateAction, useState } from 'react'
import { AddShoppingCart, Face2Outlined } from '@mui/icons-material';
import { Grid, Card, CardActionArea, Box,Badge, Chip, CardMedia, Skeleton, CardContent, Typography, CardActions, IconButton, Link, Button, Avatar } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { postAddProductToCart } from '../../../../api/cartApi';
import { ItemCounter } from '../../../../components/ui';
import { cartDataSet } from '../../../../redux/slices/cart';
import { RootState } from '../../../../redux/store';
import { IProductAsere, IProductItem } from '../../domain/product';
import NextLink from "next/link";
import styles from "./ProductFake.module.css";

interface Props {
    product: IProductItem;
}
export const ProductCard: FC<Props> = ({ product }) => {

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
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
           
            <Card sx={{ maxWidth: 345 }} elevation={8} className={styles.productFake}>

            <Box display={'flex'} justifyContent='end' sx={{m:1}}>
            <Chip /* icon={<Foo />} */ label={product.item_category} />
            </Box>


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
            image={product.item_image}
            alt={product.item_cart_name}
            sx={{
                objectPosition: "top",
                objectFit: "contain",
                minHeight: "150px",
                maxHeight: "150px",
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

<CardContent sx={{ pb: 0 }}>

<Typography
        gutterBottom
        sx={{ fontWeight: 600 }}
        variant="h6"
        component="div">
        {product.item_cart_name}
    </Typography>

    {

        product.features.map(item => (
            <Typography
                key={item.name}
                gutterBottom

                color='text.main'
                variant="subtitle2"
                component="div">
                {`( ${item.name} ${item.value} )`}
            </Typography>
        ))

    }

    <Typography
        variant="h5"
        color={'secondary'}
        sx={{
            fontWeight: 700,
            my: 2,
        }}>
        {`$${product.price}`}
    </Typography>
</CardContent>
<CardActions>
    <Box
        display={"flex"}
        sx={{ width: '100%', mt: 0 }}
        justifyContent={"space-between"}>
        <ItemCounter
            setCant={(
                value: SetStateAction<number>
            ) => {
                setcantP(value);
            }}
            currentValue={cantP}
        />

        <Button
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={handleAddProductToStore}>
            <AddShoppingCart />
            Agregar al Carrito
        </Button>
    </Box>
</CardActions>
</Card>


            
        </Grid>
    )
}
