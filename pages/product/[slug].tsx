import { Box, Grid, Typography, Button, Skeleton, Rating, CardMedia, Card, Snackbar, IconButton, Alert } from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import { getProductById } from "../../api/productsApi";
import { ShopLayout } from "../../components/layouts";
import { ItemCounter } from "../../components/ui";
import { IProductFake } from "../../modules/products/domain/productFake";
import { GetServerSideProps } from "next";
import { AddShoppingCart, Close } from "@mui/icons-material";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/slices/cart";

interface Props {
    product: IProductFake;
    toggleTheme: any;
}

const ProductPage: FC<Props> = ({ product, toggleTheme }) => {
    const [listImages, setlistImages] = useState<string[]>([]);
    const [isImageLoaded, setisImageLoaded] = useState(false);
    const [cantP, setcantP] = useState(1)
    const [open, setOpen] = useState(false);


    const state = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const handleAddProductToStore = () => {

        dispatch(addProductToCart({product: product, quantity: cantP}))
        setOpen(true)
        

    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
      const action = (
        <>
          
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            
          >
            <Close fontSize="small" />
          </IconButton>
        </>
      );

    return (
        <>
            <ShopLayout
                title={product.title}
                pageDescription={product.description}
                toggleTheme={toggleTheme}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="500px"
                                image={product.image}
                                alt="green iguana"
                                sx={{
                                    objectFit: "contain",
                                    display: isImageLoaded ? "block" : "none",
                                }}
                                onLoad={() => setisImageLoaded(true)}
                            />
                        </Card>

                        {isImageLoaded ? (
                            ""
                        ) : (
                            <Skeleton variant="rectangular" width={500} height={500} />
                        )}
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display={"flex"} flexDirection={"column"}>
                            <Rating
                                name="half-rating"
                                value={product.rating.rate}
                                size="large"
                                readOnly
                                sx={{ mb: 2 }}
                            />
                            <Typography variant="h1" component="h1">
                                {product.title}
                            </Typography>

                            <Typography variant="subtitle1" component="h2">
                                {`$${product.price}`}
                            </Typography>

                            <Box sx={{ my: 2 }}>
                                <Typography variant="subtitle2">Cantidad</Typography>
                                <ItemCounter setCant={(value: SetStateAction<number>) => { setcantP(value); } } currentValue={cantP} />
                            </Box>

                           <Box display={'flex'} justifyContent={'start'} >
                             <Button className="circular-btn"  size="large" onClick={handleAddProductToStore} color={'primary'}>
                                
                             <AddShoppingCart />
                                Agregar al carrito
                             </Button>
                           </Box>

                            {/* <Chip label='No hay disponibles' color='error' variant='outlined'/>*/}
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2">Descripción</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={ {vertical:'bottom', horizontal:'right'} }
        action={action}
        color="success"
      >
         <Alert severity="success">Se agregó al carrito</Alert>
      </Snackbar>
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
