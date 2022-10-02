import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {useState , useEffect} from 'react'

interface Props {}

export const OrderSummary = () => {

    const [totalPrice, settotalPrice] = useState(0)

    const stateCart = useSelector((state: RootState) => state.cart);
    
   

    useEffect(() => {

        const TotalPrice =()=> {
            let total = 0
    
            stateCart.listProducts.forEach(item => {
                total += Number(item.product.price) * item.quantity
    
            })
    
            return total
        }

        settotalPrice(TotalPrice())
     
    }, [stateCart.listProducts])
    


    return (
        
        <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6}>
            <Typography variant="body1">
                Cantidad:
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>{stateCart.listProducts.length} {stateCart.listProducts.length > 1 ? 'productos':'producto'}</Typography>
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
            <Typography variant="h6" >Total:</Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography variant="h6">{`$${ totalPrice }`}</Typography>
        </Grid>
    </Grid>
    );
};
