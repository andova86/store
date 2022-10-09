import { useState } from "react";
import { ILogin } from "../../modules/user/domain/user";
import { useForm } from "react-hook-form";
import NextLink from "next/link";
import {
    Backdrop,
    Button,
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
import { postLogin } from "../../api/userApi";
import { toast } from "react-toastify";
import { AuthLayout } from "../../components/layouts";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { isLoggedInSet, userAddAccesToken, userAddRefreshToken, userAddSet } from "../../redux/slices/user";
import { useRouter } from "next/router";

const LoginPage = () => {

    const [showPassword, setshowPassword] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const state = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ILogin>({});

    const onSubmit = async (data: ILogin) => {
        console.log(data);

        try {
            setShowLoading(true)
            const dataL = { email: data.email, password: data.password };

            let result = await postLogin(dataL);
            console.log(result.data);
           
            setShowLoading(false)
            dispatch(isLoggedInSet(true))

            dispatch(userAddSet(result.data.user))
            dispatch(userAddAccesToken(result.data.access_token))
            dispatch(userAddRefreshToken(result.data.refresh_token))

            toast.success("Se inicio sesión correctamente")
           
            const destination = router.query.p?.toString() || '/'
            router.replace(destination)

           // setshowMessage({message:'Se inicio sesión correctamente', type:"success"})
        } catch (error) {
            console.log(error);
            setShowLoading(false)
            toast.error("Error al iniciar la sesión. Intente nuevamente")
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
        <AuthLayout title="Iniciar sesión">
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
                    <Grid item xs={12} md={8} lg={5}>
                        <Paper sx={{ p: 2 }} elevation={8}>
                            <Typography variant="h1" component={"h1"} color="primary">
                                Inicio de Sesión
                            </Typography>
                            <Grid container spacing={2} sx={{ pt: 4 }}>
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
                                        {...register("password", {
                                            required: true,
                                            
                                        })}
                                        error={!!errors.password}
                                        type={showPassword ? "text" : "password"}
                                        helperText={
                                            errors.password ? "La Contraseña es requerida." : ""
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
                                            Entrar
                                        </Button>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <NextLink href={router.query.p ? `/auth/register?p=${router.query.p}`: '/auth/register'} passHref>
                                        <Link>

                                            <Box display={'flex'} justifyContent={'end'} >
                                            No tienes cuenta ?
                                            </Box>
                                        </Link>
                                    </NextLink>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </form>

            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            
            
        </Container>

        </AuthLayout>
        
    );
};

export default LoginPage;
