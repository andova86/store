import { FC, useState } from "react";
import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Divider, Button, Link, FormControlLabel, Checkbox } from "@mui/material";
import { CartList } from "../../modules/cart/application/list/CartList";
import { OrderSummary } from "../../modules/cart/application/detail/OrderSummary";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { postCheckout, postPayInvoice } from "../../api/cartApi";
import { checkout_dataSet } from "../../redux/slices/checkout";
import { IOrderId } from "../../modules/checkout/domain/checkout";
import { toast } from "react-toastify";
import { getAllErrorsInObjectAsString } from "../../config/utils";

interface Props {
    toggleTheme: any;
}

const SummaryPage: FC<Props> = ({ toggleTheme }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const stateCheckout = useSelector((state: RootState) => state.checkout);
    const stateUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const [terms, setterms] = useState(false)

    const getListOrdersID = () => {
        let list: IOrderId[] = [];

        if (stateCheckout.checkoutData) {
            stateCheckout.checkoutData.orders.forEach((item) => {
                list.push({ id: item.id });
            });
        }

        return list;
    };

    const handlePayINvoice = async () => {
        try {
            if (stateCart.cartData) {
                let result = await postPayInvoice(
                    { id: stateCart.cartData.id, orders: getListOrdersID(), terms_accepted: terms },
                    stateUser.access_token
                );
                console.log(result.data);

                dispatch(checkout_dataSet(result.data));
            }
        } catch (error:any) {
            toast.error(getAllErrorsInObjectAsString(error.response.data))
            console.log(error);
            


        }
    };

    return (
        <ShopLayout
            title="Resumen de la Orden"
            pageDescription="Resumen de la orden"
            toggleTheme={toggleTheme}>
            <Typography variant="h1" color="primary" sx={{ mb: 5 }}>
                Resumen de la orden
            </Typography>

            {stateCart.cartData?.orderitems ? (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <CartList
                            editable={false}
                            listOrdersItems={stateCart.cartData?.orderitems}
                        />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <Card className="summary-card">
                            <CardContent>
                                <Typography variant="h2" color="primary">
                                    Resumen
                                    {`( ${stateCart.cartData?.orderitems.length} ${
                                        stateCart.cartData?.orderitems.length > 1
                                            ? " productos"
                                            : " producto"
                                    } )`}
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ mt: 2, mb: 1 }} display={"flex"} justifyContent={"end"}>
                                    <NextLink href={"/cart"} passHref>
                                        <Link underline="always" color={"primary"}>
                                            Editar
                                        </Link>
                                    </NextLink>
                                </Box>

                                {/*  <Typography variant="subtitle1" color={"primary"}>
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
                            </Box> */}

                                <OrderSummary
                                    cantProducts={stateCart.cartData.total_items}
                                    totalPrice={stateCart.cartData.human_readable_cart_amount}
                                />

                                <Box
                                    sx={{ my: 3 }}
                                    
                                    display="flex"
                                    flexDirection={'column'}
                                    justifyContent={"start"}>
                                        <FormControlLabel color="primary" control={<Checkbox checked={terms}
                                         onChange={(event: React.ChangeEvent<HTMLInputElement>)=> setterms(event.target.checked)} />} label="Acepto todos los términos y condiciones." />

                                    <Button
                                        className="circular-btn"
                                        color="primary"
                                        fullWidth
                                        disabled={!terms}
                                        size="large"
                                        sx={{borderRadius:'20px', mt:3}}
                                        onClick={() => {
                                            handlePayINvoice();
                                        }}>
                                        Confirmar Orden
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                ""
            )}

            {/*  <LoadingStore showLoading={loading} /> */}
        </ShopLayout>
    );
};

export default SummaryPage;
