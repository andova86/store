import {
    Logout,
    AccountBoxRounded,
    ContactPage,
    ContactPageOutlined,
    ContactMail,
} from "@mui/icons-material";
import {
    Box,
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLogout } from "../../api/userApi";
import { resetStateUser } from "../../redux/slices/user";
import { RootState } from "../../redux/store";

export const UserBanner = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    const router = useRouter();

    const navigateTo = (url: string) => {
        //dispatch(isOpenMenuSet(!state.isOpenMenu))
        router.push(url);
    };

    const stateUser = useSelector((state: RootState) => state.user);

    const onLogout = async () => {
        
        
        try {
            let result = await postLogout();
            console.log(result);
            dispatch(resetStateUser());
            navigateTo(`/auth/login?p=${router.asPath}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    textAlign: "center",
                }}>
                <Tooltip title="Configuración de Usuario">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}>
                        <Avatar sx={{ width: 32, height: 32 }}>
                            <AccountBoxRounded />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                {stateUser.isLoggedIn ? (
                    <MenuItem>
                        <ListItemIcon>
                            <ContactPageOutlined fontSize="small" /> 
                        </ListItemIcon>
                        Perfil
                    </MenuItem>
                ) : (
                    ""
                )}

                {stateUser.isLoggedIn ? (
                    <MenuItem>
                        <ListItemIcon onClick={() => {onLogout()}}>
                            <Logout fontSize="small" /> 
                        </ListItemIcon>
                        Salir
                    </MenuItem>
                ) : (
                    ""
                )}

                {!stateUser.isLoggedIn ? (
                    <MenuItem>
                        <ListItemIcon onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}>
                            <Logout fontSize="small" /> 
                        </ListItemIcon>
                        Entrar
                    </MenuItem>
                ) : (
                    ""
                )}
            </Menu>
        </>
    );
};
