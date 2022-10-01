import { DarkMode, Menu, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Link, Toolbar, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from 'react-redux'
import { isOpenMenuSet } from "../../redux/slices";
import { useThemeShop } from "../hooks/useThemeShop";


type HomeProps = {
    toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  }
  

export const Navbar = (props: HomeProps) => {
    const [categoryList, setcategoryList] = useState<string[]>([]);
    const router = useRouter();
    const state = useSelector((state: RootState) => state.theme)
    const stateCart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    


   const { theme, colorMode} = useThemeShop()

    useEffect(() => {
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
    }, []);

    return (
        
                <AppBar>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link display="flex" alignItems="center">
                                <Typography variant="h6" >Andova |</Typography>
                                

                                <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                            </Link>
                        </NextLink>

                        <Box flex={1} />

                        {/*   <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <>
                        {categoryList.map((element, pos) => (
                            <NextLink
                                href={{
                                    pathname: "/categories/[slug]",
                                }}
                                as={`/categories/${element}`}
                                passHref
                                key={pos}>
                                <Link>
                                    <Button color={router.asPath === `/categories/${element}` ? 'primary':'info'}>{element}</Button>
                                </Link>
                            </NextLink>
                        ))}
                    </>
                </Box> */}

                      {/*   {theme.palette.mode} mode */}
                        {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton> */}

                        
                        <Tooltip title="Cambiar de Modo">
                        <IconButton onClick={props.toggleTheme}>
                            <DarkMode />
                        </IconButton>
                        </Tooltip>

                        <IconButton>
                            <SearchOutlined />
                        </IconButton>

                        <NextLink href="/cart" passHref>
                            <Link>
                                <IconButton>
                                    <Badge badgeContent={stateCart.listProducts.length} color="error">
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </NextLink>

                        <Tooltip title="Abrir menu lateral">
                        <IconButton onClick={(e) => dispatch(isOpenMenuSet(!state.isOpenMenu))} sx={{ml:2}}>
                            <Menu/>

                        </IconButton>
                        </Tooltip>

                       
                    </Toolbar>
                </AppBar>
          
    );
};
