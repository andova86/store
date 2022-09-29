import { Box, Grid, Typography, Button, Skeleton, Rating, CardMedia, Card } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { getProductById } from "../../api/productsApi";
import { ShopLayout } from "../../components/layouts";
import { ItemCounter } from "../../components/ui";
import { IProductFake } from "../../modules/products/domain/productFake";

interface Props {
    product: IProductFake;
}

const ProductPage: FC<Props> = ({ product }) => {
    const [listImages, setlistImages] = useState<string[]>([]);
    const [isImageLoaded, setisImageLoaded] = useState(false);
    const router = useRouter();

    return (
        <>
            <ShopLayout title={product.title} pageDescription={product.description}>
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

                        {/*  <Image
                                    src={product.image}
                                    width={500}
                                    height={500}
                                    objectFit={"contain"}
                                /> */}
                        {isImageLoaded ? (
                            ""
                        ) : (
                            <Skeleton variant="rectangular" width={500} height={500} />
                        )}
                    </Grid>

                    <Grid item xs={12} sm={5}>
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
                                <ItemCounter />
                            </Box>

                            <Button color="secondary" className="circular-btn">
                                Agregar al carrito
                            </Button>

                            {/* <Chip label='No hay disponibles' color='error' variant='outlined'/>*/}
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" color="initial">
                                    Descripción
                                </Typography>
                                <Typography variant="body2" color="initial">
                                    {product.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ShopLayout>
        </>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await getProductById(Number(ctx.query.slug)); // your fetch function here

    return {
        props: {
            product: data
        },
    };
};

export default ProductPage;
