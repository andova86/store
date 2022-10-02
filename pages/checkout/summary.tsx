import React from "react";
import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Divider, Button, Link } from "@mui/material";
import { CartList } from "../../modules/cart/application/list/CartList";
import { OrderSummary } from "../../modules/cart/application/detail/OrderSummary";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SummaryPage = () => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const stateCheckout = useSelector((state: RootState) => state.checkout);

    return (
        <ShopLayout title="Resumen de la Orden" pageDescription="Resumen de la orden">
            <Typography variant="h1" color="primary" sx={{ mb: 5 }}>
                Resumen de la orden
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <CartList editable={false} />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2" color="primary">
                                Resumen ({stateCart.listProducts.length}
                                {stateCart.listProducts.length > 1 ? " productos" : " producto"} )
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{ mt: 2, mb: 1 }} display={"flex"} justifyContent={"end"}>
                                <NextLink href={"/checkout/address"} passHref>
                                    <Link underline="always" color={"primary"}>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant="subtitle1" color={"primary"}>
                                Dirección de Entrega
                            </Typography>
                            <Divider sx={{mb:1}}/>
                            <Typography>
                                Nombre:{"  "}
                                {stateCheckout.firstName} {stateCheckout.lastName}
                            </Typography>
                            <Typography>
                                Dirección:{"  "}{stateCheckout.address} {stateCheckout.address2}
                            </Typography>
                            <Typography>Ciudad:{"  "}{stateCheckout.city}</Typography>
                            <Typography>Teléfono:{"  "}{stateCheckout.phone}</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box sx={{ mt: 2, mb: 1 }} display={"flex"} justifyContent={"end"}>
                                <NextLink href={"/cart"} passHref>
                                    <Link underline="always" color={"primary"}>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />

                            <Box
                                sx={{ my: 3 }}
                                alignItems={"center"}
                                display="flex"
                                justifyContent={"center"}>
                                <Button className="circular-btn" color="primary">
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
