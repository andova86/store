import { FC, useEffect } from "react";
import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Divider, Button, Paper } from "@mui/material";
import { CartList } from "../../modules/cart/application/list/CartList";
import { OrderSummary } from "../../modules/cart/application/detail/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import { postRefreshToken, postVerifyToken } from "../../api/userApi";
import { postCheckout } from "../../api/cartApi";
import { checkout_dataSet } from "../../redux/slices/checkout";
import { toast } from "react-toastify";
import { getAllErrorsInObjectAsString } from "../../config/utils";

interface Props {
    toggleTheme: () => void;
}

const CartPage: FC<Props> = ({ toggleTheme }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const stateUser = useSelector((state: RootState) => state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleCheckout = async () => {
        try {
            if (stateCart.cartData) {
                let result = await postCheckout(stateCart.cartData.id, stateUser.access_token);
                console.log(result.data);

                dispatch(checkout_dataSet(result.data));

                router.push("/checkout/summary");
            }
        } catch (error: any) {

            toast.error(getAllErrorsInObjectAsString(error.response.data))


        }
    };


    useEffect(() => {
        async function refreshToken() {
            try {
                let result = await postRefreshToken({ token: stateUser.access_token });
                console.log(result);
            } catch (error) {
                console.log("error");
                console.log(error);
                router.push(`/auth/login?p=${router.asPath}`)
            }
        }

        async function verifyToken() {
            try {
                let result = await postVerifyToken({ token: stateUser.access_token });
                //console.log(result.data);
            } catch (error) {
                console.log("error");
                console.log(error);
                refreshToken()
            }
        }

        verifyToken();
    }, []);



    return (
        <ShopLayout
            title="Carrito - 3"
            pageDescription="Página del carrito de compra"
            toggleTheme={toggleTheme}>

            <>
                <Typography variant="h1" color="primary" sx={{ mb: 5 }}>
                    Carrito de Compra
                </Typography>

                {

                    stateCart.cartData ?
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Paper sx={{ py: 3 }}>
                                    <CartList editable={true} listOrdersItems={stateCart.cartData.orderitems} />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="summary-card">
                                    <CardContent>
                                        <Typography variant="h2" color="primary">
                                            Orden
                                        </Typography>
                                        <Divider sx={{ my: 1, mb: 3 }} />
                                        <OrderSummary cantProducts={stateCart.cartData.total_items} totalPrice={stateCart.cartData.human_readable_cart_amount} />
                                    </CardContent>

                                    <Box
                                        sx={{ my: 3 }}
                                        alignItems={"center"}
                                        display="flex"
                                        justifyContent={"center"}>
                                        <Button
                                            className="circular-btn"
                                            color="primary"
                                            size="large"
                                            onClick={() => {
                                                handleCheckout()

                                            }}>
                                            Checkout
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid> : ''
                }

            </>


            {/*  <LoadingStore showLoading={loading} /> */}
        </ShopLayout >
    );
};

export default CartPage;
