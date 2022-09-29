import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from 'react-redux'
import { isOpenMenuSet } from "../../redux/slices";

export const Navbar = () => {
    const [categoryList, setcategoryList] = useState<string[]>([]);
    const router = useRouter();
    const state = useSelector((state:RootState) => state.theme)
    const dispatch = useDispatch()


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
                        <Typography variant="h6">Teslo |</Typography>

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

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button onClick={(e)  => dispatch(isOpenMenuSet(!state.isOpenMenu))}>Menu</Button>
            </Toolbar>
        </AppBar>
    );
};
