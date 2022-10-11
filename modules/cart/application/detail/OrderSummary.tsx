import { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

interface Props {
    cantProducts: number;
    totalPrice: string;
}

export const OrderSummary: FC<Props> = ({ cantProducts, totalPrice }) => {
    const stateCart = useSelector((state: RootState) => state.cart);

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Typography variant="body1">Cantidad:</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>
                    {cantProducts} {cantProducts > 1 ? "artículos" : "artículo"}
                </Typography>
            </Grid>

            {/*  <Grid item xs={6}>
            <Typography>Subtotal:</Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography>{`$${ 155 }`}</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuestos (15%):</Typography>
        </Grid> 

        <Grid item xs={6}>
        <Typography>{`$${ 35 }`}</Typography>
        </Grid>*/}

            <Grid item xs={6}>
                <Typography variant="h6">Total:</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h4">{`${totalPrice}`}</Typography>
            </Grid>
        </Grid>
    );
};
