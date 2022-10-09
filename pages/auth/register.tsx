import { useState } from "react";
import { IRegisterUser } from "../../modules/user/domain/user";
import { useForm } from "react-hook-form";
import {
    Backdrop,
    Button,
    Card,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postRegisterUser } from "../../api/userApi";
import { toast } from "react-toastify";
import NextLink from "next/link";
import { AuthLayout } from "../../components/layouts";
import { validations } from "../../utils";
import { useRouter } from "next/router";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const RegisterPage = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<IRegisterUser>({});

    const onSubmit = async (data: IRegisterUser) => {
        console.log(data);

        try {
            setShowLoading(true);
            const dataL : IRegisterUser = {
                first_name: data.first_name,
                last_name: data.last_name,
                birthdate: data.birthdate,
                phone_number: data.phone_number,
                email: data.email,
                password1: data.password1,
                password2: data.password2,
            };

            /* let result = await postRegisterUser(dataL);
            console.log(result.data);

            setShowLoading(false);

            toast.success("Se registró el usuario correctamente");

            const destination = router.query.p?.toString() || '/'
            router.replace(destination) */


            // setshowMessage({message:'Se inicio sesión correctamente', type:"success"})
        } catch (error) {
            console.log(error);
            setShowLoading(false);
            toast.error("Ocurrió un error al registrar el usuario. Intente nuevamente");
            //setshowMessage({message:'Error al mostrar', type:"error"})
        }
    };

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
        event.preventDefault();
    };

    return (

        <AuthLayout title="Registrar nuevo usuario">
            <LocalizationProvider dateAdapter={AdapterMoment}>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                        sx={{ minHeight: "100vh" }}>
                        <Grid item xs={12} md={10}>
                        <Card sx={{display: { xs: 'block', sm: 'flex' }}} elevation={8}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 450, py:2, objectFit:"contain"}}
                                        image="/login.svg"
                                        alt="green iguana"
                                    />
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h1" component={"h1"} color="primary">
                                    Crear usuario nuevo
                                </Typography>
                                <Grid container spacing={2} sx={{ pt: 4 }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Nombre"
                                            variant="outlined"
                                            fullWidth
                                            {...register("first_name", {
                                                required: true,
                                            })}
                                            error={!!errors.first_name}
                                            helperText={errors.first_name ? "El nombre es requerido." : ""}
                                            type={'text'}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Apellido"
                                            variant="outlined"
                                            fullWidth
                                            {...register("last_name", {
                                                required: true,
                                            })}
                                            error={!!errors.last_name}
                                            helperText={errors.last_name ? "El apellido es requerido." : ""}
                                            type={'text'}
                                        />
                                    </Grid>


                                    <Grid item xs={12} md={6}>
                                        <DesktopDatePicker
                                            label="Date desktop"
                                            inputFormat="MM/DD/YYYY"
                                            value={new Date()}
                                            onChange={() => { }}


                                            renderInput={(params) => <TextField {...params}

                                                {...register("birthdate", {
                                                    required: true,
                                                })}
                                                fullWidth
                                                error={!!errors.last_name}
                                                helperText={errors.last_name ? "La fecha de nacimiento es requerida." : ""}
                                            />}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Teléfono"
                                            variant="outlined"
                                            fullWidth
                                            {...register("phone_number", {
                                                required: true,
                                            })}
                                            error={!!errors.last_name}
                                            helperText={errors.last_name ? "El Teléfono es requerido." : ""}
                                            type={'number'}
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                            label="Correo"
                                            variant="outlined"
                                            fullWidth
                                            {...register("email", {
                                                required: "El correo es requerido.",
                                                validate: validations.isEmail
                                            })}
                                            error={!!errors.email}
                                            helperText={errors.email ? errors.email.message : ""}
                                            type={'email'}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Contraseña"
                                            variant="outlined"
                                            fullWidth
                                            {...register("password1", {
                                                required: true,
                                            })}
                                            error={!!errors.password1}
                                            type={showPassword ? "text" : "password"}
                                            helperText={
                                                errors.password1 ? "La Contraseña es requerida." : ""
                                            }
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end">
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Contraseña"
                                            variant="outlined"
                                            fullWidth
                                            {...register("password1", {
                                                required: true,
                                            })}
                                            error={!!errors.password1}
                                            type={showPassword ? "text" : "password"}
                                            helperText={
                                                errors.password1 ? "La Contraseña es requerida." : ""
                                            }
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end">
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Button
                                                color="primary"
                                                size="large"
                                                type="submit"
                                                sx={{ borderRadius: 20 }}>
                                                Crear
                                            </Button>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <NextLink href={router.query.p ? `/auth/login?p=${router.query.p}` : '/auth/login'} passHref>
                                            <Link>

                                                <Box display={'flex'} justifyContent={'end'} >
                                                    Ya tienes cuenta ?
                                                </Box>
                                            </Link>
                                        </NextLink>
                                    </Grid>
                                </Grid>
                            </Box>

                            </Card>
                        </Grid>


                    </Grid>
                </form>

                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={showLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>

            </LocalizationProvider>
           
        </AuthLayout>
    );
};

export default RegisterPage;
