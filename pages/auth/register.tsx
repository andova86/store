import { useState } from "react";
import { IRegisterUser } from "../../modules/user/domain/user";
import { useForm } from "react-hook-form";
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
import { postRegisterUser } from "../../api/userApi";
import { toast } from "react-toastify";
import NextLink from "next/link";
import { AuthLayout } from "../../components/layouts";
import { validations } from "../../utils";
import { useRouter } from "next/router";

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
            const dataL = { email: data.email, password: data.password, name: data.name, role:"customer", avatar: "https://api.lorem.space/image/face?w=640&h=480&r=4191" };

            let result = await postRegisterUser(dataL);
            console.log(result.data);

            setShowLoading(false);

            toast.success("Se registró el usuario correctamente");

            const destination = router.query.p?.toString() || '/'
            router.replace(destination)


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
                                Crear usuario nuevo
                            </Typography>
                            <Grid container spacing={2} sx={{ pt: 4 }}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Nombre Completo"
                                        variant="outlined"
                                        fullWidth
                                        {...register("name", {
                                            required: true,
                                        })}
                                        error={!!errors.name}
                                        helperText={errors.name ? "El nombre es requerido." : ""}
                                        type={'text'}
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
                                        helperText={errors.email ?  errors.email.message : ""}
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
                                            Crear
                                        </Button>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <NextLink href={router.query.p ? `/auth/login?p=${router.query.p}`: '/auth/login'} passHref>
                                        <Link>

                                            <Box display={'flex'} justifyContent={'end'} >
                                            Ya tienes cuenta ?
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
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
        </AuthLayout>
    );
};

export default RegisterPage;
