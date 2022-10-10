import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../redux/store"
import { isOpenMenuSet } from "../../redux/slices"
import { useRouter } from "next/router"
import { postLogout } from "../../api/userApi"
import { resetStateUser } from "../../redux/slices/user"

export const SideMenu = () => {

    const state = useSelector((state: RootState) => state.theme)
    const stateUser = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const router = useRouter()

    const navigateTo = ( url : string ) => {

        dispatch(isOpenMenuSet(!state.isOpenMenu))
        router.push(url)

    }

    const onLogout = async () => {
       
         try {
            let result = await postLogout()
            console.log(result);
            dispatch(resetStateUser())
            navigateTo(`/auth/login?p=${ router.asPath }`)
            

            
        } catch (error) {
            console.log(error);
            
            
        } 


    }



    return (
        <Drawer
            open={state.isOpenMenu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={() => { dispatch(isOpenMenuSet(!state.isOpenMenu)) }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>


                    {

                        stateUser.isLoggedIn ?
                            <>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AccountCircleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Perfil'} onClick={() => navigateTo('/')}/>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Mis Ordenes'} />
                                </ListItem>

                            </> : ""
                    }

                    {/* 

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <MaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Hombres'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <FemaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mujeres'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <EscalatorWarningOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Niños'} />
                    </ListItem> */}

                    {
                        stateUser.isLoggedIn ?
                            <ListItem button>
                                <ListItemIcon>
                                    <LoginOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Salir'}  onClick={() => onLogout()}/>
                            </ListItem> :
                            <ListItem button>
                                <ListItemIcon>
                                    <VpnKeyOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Ingresar'} onClick={() => navigateTo(`/auth/login?p=${ router.asPath }`)}/>
                            </ListItem>


                    }





                    {/* Admin */}

                    <Divider />


                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem button>
                        <ListItemIcon>
                            <CategoryOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Productos'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ordenes'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <AdminPanelSettings />
                        </ListItemIcon>
                        <ListItemText primary={'Usuarios'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}