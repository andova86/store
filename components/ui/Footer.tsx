import React from "react";
import Grid from "@mui/material/Grid";
import {
    Box,
    Container,
    Link,
    Stack,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Divider,
    IconButton
} from "@mui/material";
import NextLink from "next/link";
import { EmailRounded, Facebook, FacebookOutlined, Instagram, Phone, Twitter } from "@mui/icons-material";

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "info.main", py: 3, px: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Box display={'flex'} flexDirection='column' sx={{ px: 2 }}>
                        <Typography variant="h6" color="primary">Asere Market</Typography>

                        <Typography variant="caption" color="primary">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>

                        <Stack
                            direction="column"
                            sx={{mt:2}}
                            spacing={0}
                        >
                            <Box display={'flex'}>
                                <Phone color="primary"/>
                                <Typography variant="caption" color="primary">
                                    (+123) 2425456
                                </Typography>
                            </Box>
{/* 
                            <Box display={'flex'}>
                                <Phone />
                                <Typography variant="caption" color="text.main">
                                    (+123) 2425456
                                </Typography>
                            </Box>

                            <Box display={'flex'}>
                                <Phone />
                                <Typography variant="caption" color="text.main">
                                    (+123) 2425456
                                </Typography>
                            </Box> */}


                        </Stack>


                    </Box>

                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" color={"primary"} sx={{ mb: 3 }}>
                                Enlaces útiles
                            </Typography>
                            <Stack spacing={1}>
                                <NextLink href="/about" passHref>
                                    <Link underline="hover" variant="body2">
                                        Acerca de Nosotros
                                    </Link>
                                </NextLink>

                                <NextLink href="/about" passHref>
                                    <Link underline="hover" variant="body2">
                                        Contacto
                                    </Link>
                                </NextLink>

                                <NextLink href="/about" passHref>
                                    <Link underline="hover" variant="body2">
                                        Link 2
                                    </Link>
                                </NextLink>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" sx={{ mb: 3 }} color={"primary"}>
                                Centro de Ayuda
                            </Typography>
                            <Stack spacing={1}>
                                <NextLink href="/" passHref>
                                    <Link underline="hover" variant="body2">
                                        Pagos
                                    </Link>
                                </NextLink>

                                <NextLink href="/" passHref>
                                    <Link underline="hover" variant="body2">
                                        Transporte
                                    </Link>
                                </NextLink>

                                <NextLink href="/" passHref>
                                    <Link underline="hover" variant="body2">
                                        FAQ
                                    </Link>
                                </NextLink>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" color={"primary"} sx={{ mb: 3 }}>
                                Enlaces útiles
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body1" color="primary">
                                    Registrar ahora para conocer de las últimas actualizaciones
                                </Typography>

                                <Box display={"flex"}>
                                    <TextField
                                        label="Ingrese el Correo"
                                        id="outlined-start-adornment"
                                        size="small"
                                        variant="filled"
                                        sx={{ m: 0, width: "25ch" }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailRounded />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        sx={{ borderRadius: 0 }}>
                                        Subscribirse
                                    </Button>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <Container>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"

                        >
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography variant="caption" color="primary">
                                    © Asere Market {new Date().getFullYear()}. All right reserved
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>

                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}
                                >
                                    <IconButton>
                                        <Facebook color="primary" />

                                    </IconButton>

                                    <IconButton>
                                        <Instagram color="primary" />
                                    </IconButton>

                                    <IconButton>
                                        <Twitter color="primary" />
                                    </IconButton>



                                </Stack>

                            </Grid>

                        </Grid>

                    </Container>

                </Grid>
            </Grid>
        </Box>
    );
};
