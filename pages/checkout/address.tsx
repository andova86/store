import {
    Typography,
    Grid,
    TextField,
    MenuItem,
    FormControl,
    Select,
    Button,
    Box,
} from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";
import { useForm, Controller } from "react-hook-form";
import { IOrder, IShippingAddress } from "../../modules/checkout/domain/order";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
    checkout_address2Set,
    checkout_addressSet,
    checkout_citySet,
    checkout_countrySet,
    checkout_firstNameSet,
    checkout_lastNameSet,
    checkout_phoneSet,
    checkout_zipSet,
} from "../../redux/slices/checkout";
import { useRouter } from "next/router";

const AddressPage = () => {
    const stateCart = useSelector((state: RootState) => state.checkout);
    const dispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<IShippingAddress>({
        defaultValues: {
            firstName: stateCart.firstName,
            lastName: stateCart.lastName,
            address: stateCart.address,
            address2: stateCart.address2,
            city: stateCart.city,
            country: stateCart.country,
            phone: stateCart.phone,
            zip: stateCart.zip,
        },
    });

    const onSubmit = (data: IShippingAddress) => {
        console.log(data);
        dispatch(checkout_firstNameSet(data.firstName));
        dispatch(checkout_lastNameSet(data.lastName));
        dispatch(checkout_address2Set(data.address2));
        dispatch(checkout_addressSet(data.address));
        dispatch(checkout_citySet(data.city));
        dispatch(checkout_countrySet(data.country));
        dispatch(checkout_phoneSet(data.phone));
        dispatch(checkout_zipSet(data.zip));

        router.push("/checkout/summary");
    };

    return (
        <ShopLayout title="Direccion" pageDescription="Confirmar direccion del destino">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={0} display="flex" justifyContent={"center"}>
                    <Grid item xs={12} md={10} lg={8}>
                        <Typography variant="h1" component={"h1"} color="primary">
                            Dirección
                        </Typography>
                        <Grid container spacing={2} sx={{ pt: 4 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nombre"
                                    variant="filled"
                                    fullWidth
                                    {...register("firstName", {
                                        required: true,
                                    })}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName ? "El nombre es requerido." : ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Apellido"
                                    variant="filled"
                                    fullWidth
                                    {...register("lastName", {
                                        required: true,
                                    })}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName ? "El apellido es requerido." : ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Dirección"
                                    variant="filled"
                                    fullWidth
                                    {...register("address", {
                                        required: true,
                                    })}
                                    error={!!errors.address}
                                    helperText={errors.address ? "La dirección es requerida." : ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Direccion 2 (Opcional)"
                                    variant="filled"
                                    fullWidth
                                    {...register("address2")}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Teléfono"
                                    variant="filled"
                                    fullWidth
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    error={!!errors.phone}
                                    helperText={errors.phone ? "El Teléfono es requerido." : ""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Código Postal"
                                    variant="filled"
                                    fullWidth
                                    {...register("zip", {
                                        required: true,
                                    })}
                                    error={!!errors.zip}
                                    helperText={errors.zip ? "El código es requerido." : ""}
                                />
                            </Grid>
                           

                           
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <Select
                                        variant="filled"
                                        label="País"
                                        {...register("country", {
                                            required: true,
                                        })}
                                        error={!!errors.city}
                                        defaultValue={stateCart.city}>
                                        <MenuItem value={1}>Cuba</MenuItem>
                                        <MenuItem value={2}>Honduras</MenuItem>
                                        <MenuItem value={3}>Costa Rica</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                             <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Ciudad"
                                    variant="filled"
                                    fullWidth
                                    {...register("city", {
                                        required: true,
                                    })}
                                    error={!!errors.city}
                                    helperText={errors.city ? "La ciudad es requerida." : ""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Button color="primary" size="large" type="submit" onClick={()=> router.push('/checkout/summary')}>
                                        Revisar Pedido
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </ShopLayout>
    );
};

export default AddressPage;
