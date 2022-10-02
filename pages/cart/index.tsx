import { FC } from "react";
import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Divider, Button, Paper } from "@mui/material";
import { CartList } from "../../modules/cart/application/list/CartList";
import { OrderSummary } from "../../modules/cart/application/detail/OrderSummary";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartEmpty } from "../../modules/cart/application/detail/CartEmpty";
import { useRouter } from "next/router";

interface Props {
    toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const CartPage: FC<Props> = ({ toggleTheme }) => {
    const stateCart = useSelector((state: RootState) => state.cart);
    const router = useRouter()

    return (
        <ShopLayout
            title="Carrito - 3"
            pageDescription="Pagina del carrito de compra"
            toggleTheme={toggleTheme}>
            {stateCart.listProducts.length > 0 ? (
                <>
                    <Typography variant="h1" color="primary" sx={{ mb: 5 }}>
                        Carrito de Compra
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ py: 3 }}>
                                <CartList editable={true} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card className="summary-card">
                                <CardContent>
                                    <Typography variant="h2" color="primary">
                                        Orden
                                    </Typography>
                                    <Divider sx={{ my: 1, mb: 3 }} />
                                    <OrderSummary />
                                </CardContent>

                                <Box
                                    sx={{ my: 3 }}
                                    alignItems={"center"}
                                    display="flex"
                                    justifyContent={"center"}>
                                    <Button className="circular-btn" color="primary" size="large"
                                     onClick={()=> {router.push('/checkout/summary')}}>
                                        Checkout
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <CartEmpty />
            )}
        </ShopLayout>
    );
};

export default CartPage;
