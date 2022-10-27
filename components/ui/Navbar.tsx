import { DarkMode, Menu, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Input, InputAdornment, Link, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { isOpenMenuSet } from "../../redux/slices";
import { useGetCartListProduct } from "../../modules/cart/application/hooks/useGetCartListProduct";
import { SearchBanner } from "./SearchBanner";
import { UserBanner } from "./UserBanner";
import Image from "next/image";
import { LanguageBanner } from "./LanguageBanner";
import useScrollTrigger from '@mui/material/useScrollTrigger';


type HomeProps = {
    toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


export const Navbar = (props: HomeProps) => {
    const [categoryList, setcategoryList] = useState<string[]>([]);
    const router = useRouter();
    const state = useSelector((state: RootState) => state.theme);
    const stateCart = useSelector((state: RootState) => state.cart);
    const stateUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.style.setProperty("--swiper-theme-color", "#FFF")
    }, [])


    /*  useEffect(() => {
        async function getCategories() {
            try {
                let result = await getAllCategories();
                console.log(result.data);
                setcategoryList(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (router.isReady) {
            getCategories();
        }
    }, []); */

    //const { list } = useGetCartListProduct();

    return (
        <ElevationScroll >
            <AppBar>
                <Toolbar>
                    <Box display={'flex'} flexDirection='column' sx={{ width: '100%', mt: 2 }}>
                        <Box display={'flex'} alignItems="center">
                            <NextLink href="/" passHref>
                                <Link display="flex" alignItems="center">
                                    <Image alt='logo' src={'/logo.png'} width={150} height={50} priority quality={100} />
                                </Link>
                            </NextLink>

                            <Box flex={2} />

                            <SearchBanner />

                            <Box flex={1} />

                            {/*   {theme.palette.mode} mode */}
                            {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton> */}

                            <Tooltip title="Cambiar de Modo">
                                <IconButton onClick={props.toggleTheme}>
                                    <DarkMode />
                                </IconButton>
                            </Tooltip>

                            {/* <IconButton>
                    <SearchOutlined />
                </IconButton> */}


                            <UserBanner />
                            <LanguageBanner />

                            <NextLink href="/cart" passHref>
                                <Link>
                                    <IconButton>
                                        <Badge
                                            badgeContent={stateCart.cartData ? stateCart.cartData.orderitems.length : 0}
                                            color="error">
                                            <ShoppingCartOutlined />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </NextLink>

                            <Tooltip title="Abrir menu lateral">
                                <IconButton
                                    onClick={(e) => dispatch(isOpenMenuSet(!state.isOpenMenu))}
                                    sx={{ ml: 2 }}>
                                    <Menu />
                                </IconButton>
                            </Tooltip>


                        </Box>
                        {/* <Box sx={{width: '100%', backgroundColor:"", mt: 2}}>

                        <Stack direction="row" spacing={2} alignItems={'center'}>
                            <Typography variant="caption" color="primary">Servicio 1</Typography>

                            <Typography variant="caption" color="primary">Servicio 2</Typography>
                            <Typography variant="caption" color="primary">Servicio 3</Typography>
                            <Typography variant="caption" color="primary">Servicio 4</Typography>
                            <Typography variant="caption" color="primary">Servicio 5</Typography>

                        </Stack>
                    </Box> */}

                    </Box>

                </Toolbar>

            </AppBar>

        </ElevationScroll>
    );
};
